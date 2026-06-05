#!/usr/bin/env node
/**
 * ASA (Apple Search Ads) Campaign Management API v5 — token + REST yardımcısı
 * --------------------------------------------------------------------------
 * Sıfır bağımlılık. Node 22 yerleşik `crypto` ile ES256 JWT imzalar.
 *
 * Kimlik bilgileri repo'daki `.env` dosyasından okunur (gizli anahtar dosya yolu;
 * anahtarın kendisi ASLA repo'ya girmez). Gerekli .env anahtarları:
 *   ASA_CLIENT_ID, ASA_TEAM_ID, ASA_KEY_ID, ASA_PRIVATE_KEY_PATH
 *   ASA_ORG_ID   (opsiyonel — `acls` ile bulunur, sonra .env'e yazılır)
 *   ASA_SCOPE    (opsiyonel — varsayılan: searchadsorg)
 *
 * Kullanım:
 *   node asa-token.js token            # sadece access token bas (1 saatlik)
 *   node asa-token.js acls             # erişebildiğin org'ları listele -> orgId bul
 *   node asa-token.js get <path>       # auth'lu GET (X-AP-Context otomatik)
 *       örn: node asa-token.js get /api/v5/campaigns
 *   node asa-token.js test             # uçtan uca sağlık kontrolü (200 OK)
 *   ek bayrak: --org <id>  belirli bir orgId ile çağır
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

// ── Sabitler ───────────────────────────────────────────────────────────────
const APPLE_TOKEN_URL = 'https://appleid.apple.com/auth/oauth2/token';
const ASA_API_BASE = 'https://api.searchads.apple.com';
const REPO_ROOT = path.resolve(__dirname, '..', '..');
const ENV_PATH = path.join(REPO_ROOT, '.env');
const CACHE_PATH = path.join(os.homedir(), '.config', 'asa', '.token-cache.json');

// ── Küçük .env okuyucu (bağımlılık yok) ─────────────────────────────────────
function loadEnv(file) {
  const out = {};
  if (!fs.existsSync(file)) return out;
  for (const raw of fs.readFileSync(file, 'utf8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

function expandHome(p) {
  if (!p) return p;
  if (p === '~') return os.homedir();
  if (p.startsWith('~/')) return path.join(os.homedir(), p.slice(2));
  return p;
}

function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function die(msg) {
  console.error('❌ ' + msg);
  process.exit(1);
}

// ── Yapılandırma ────────────────────────────────────────────────────────────
const fileEnv = loadEnv(ENV_PATH);
const cfg = (k, dflt) => process.env[k] || fileEnv[k] || dflt;

const CLIENT_ID = cfg('ASA_CLIENT_ID');
const TEAM_ID = cfg('ASA_TEAM_ID');
const KEY_ID = cfg('ASA_KEY_ID');
const PRIVATE_KEY_PATH = expandHome(cfg('ASA_PRIVATE_KEY_PATH'));
const SCOPE = cfg('ASA_SCOPE', 'searchadsorg');

function requireCreds() {
  const missing = [];
  if (!CLIENT_ID || CLIENT_ID.startsWith('<')) missing.push('ASA_CLIENT_ID');
  if (!TEAM_ID || TEAM_ID.startsWith('<')) missing.push('ASA_TEAM_ID');
  if (!KEY_ID || KEY_ID.startsWith('<')) missing.push('ASA_KEY_ID');
  if (!PRIVATE_KEY_PATH || PRIVATE_KEY_PATH.startsWith('<')) missing.push('ASA_PRIVATE_KEY_PATH');
  if (missing.length) {
    die(`.env içinde eksik/placeholder değer(ler): ${missing.join(', ')}\n   ${ENV_PATH}`);
  }
  if (!fs.existsSync(PRIVATE_KEY_PATH)) {
    die(`Private key bulunamadı: ${PRIVATE_KEY_PATH}`);
  }
}

// ── JWT client secret (ES256) ───────────────────────────────────────────────
function makeClientSecret() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'ES256', kid: KEY_ID, typ: 'JWT' };
  const payload = {
    sub: CLIENT_ID,
    aud: 'https://appleid.apple.com',
    iss: TEAM_ID,
    iat: now - 5,            // küçük saat sapması payı
    exp: now + 60 * 5,       // 5 dk yeter; her token isteğinde yeniden üretilir
  };
  const signingInput = `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}`;
  const privateKey = crypto.createPrivateKey(fs.readFileSync(PRIVATE_KEY_PATH, 'utf8'));
  // ieee-p1363 => ham r||s (64 byte) = JOSE/ES256 formatı (DER değil)
  const sig = crypto.sign('sha256', Buffer.from(signingInput), { key: privateKey, dsaEncoding: 'ieee-p1363' });
  return `${signingInput}.${b64url(sig)}`;
}

// ── Token cache ─────────────────────────────────────────────────────────────
function readCache() {
  try {
    const c = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
    if (c.client_id === CLIENT_ID && c.expires_at > Date.now() + 60000) return c.access_token;
  } catch (_) {}
  return null;
}

function writeCache(token, expiresInSec) {
  try {
    fs.mkdirSync(path.dirname(CACHE_PATH), { recursive: true });
    fs.writeFileSync(CACHE_PATH, JSON.stringify({
      client_id: CLIENT_ID,
      access_token: token,
      expires_at: Date.now() + expiresInSec * 1000,
    }), { mode: 0o600 });
  } catch (_) {}
}

// ── Access token al ─────────────────────────────────────────────────────────
async function getAccessToken({ fresh = false } = {}) {
  requireCreds();
  if (!fresh) {
    const cached = readCache();
    if (cached) return cached;
  }
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: CLIENT_ID,
    client_secret: makeClientSecret(),
    scope: SCOPE,
  });
  const res = await fetch(APPLE_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Host': 'appleid.apple.com' },
    body,
  });
  const text = await res.text();
  if (!res.ok) {
    let hint = '';
    if (text.includes('invalid_scope')) hint = `\n   İpucu: .env'e ASA_SCOPE=searchads ekleyip dene.`;
    if (text.includes('invalid_client')) hint = `\n   İpucu: clientId/teamId/keyId ya da public key eşleşmiyor olabilir.`;
    die(`Token alınamadı (HTTP ${res.status}): ${text}${hint}`);
  }
  const json = JSON.parse(text);
  writeCache(json.access_token, json.expires_in || 3600);
  return json.access_token;
}

// ── Auth'lu API çağrısı ─────────────────────────────────────────────────────
async function apiGet(apiPath, orgId) {
  const token = await getAccessToken();
  const headers = { 'Authorization': `Bearer ${token}`, 'Accept': 'application/json' };
  if (orgId) headers['X-AP-Context'] = `orgId=${orgId}`;
  const url = apiPath.startsWith('http') ? apiPath : ASA_API_BASE + apiPath;
  const res = await fetch(url, { headers });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch (_) { json = text; }
  return { status: res.status, ok: res.ok, body: json };
}

async function apiPost(apiPath, bodyObj, orgId) {
  const token = await getAccessToken();
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
  if (orgId) headers['X-AP-Context'] = `orgId=${orgId}`;
  const url = apiPath.startsWith('http') ? apiPath : ASA_API_BASE + apiPath;
  const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(bodyObj) });
  const text = await res.text();
  let json; try { json = JSON.parse(text); } catch (_) { json = text; }
  return { status: res.status, ok: res.ok, body: json };
}

// Raporlama gövdesi (ASA reports endpoint'leri POST ister)
function buildReportBody(startDate, endDate, granularity, groupBy) {
  const body = {
    startTime: startDate,
    endTime: endDate,
    granularity: (granularity || 'DAILY').toUpperCase(), // DAILY | WEEKLY | MONTHLY
    timeZone: 'ORTZ',                                     // org saat dilimi
    selector: {
      orderBy: [{ field: 'localSpend', sortOrder: 'DESCENDING' }],
      pagination: { offset: 0, limit: 1000 },
    },
    returnRowTotals: true,
    returnGrandTotals: true,
    returnRecordsWithNoMetrics: false,
  };
  if (groupBy) body.groupBy = [groupBy];
  return body;
}

// ── CLI ─────────────────────────────────────────────────────────────────────
function argFlag(name) {
  const i = process.argv.indexOf(name);
  return i !== -1 ? process.argv[i + 1] : undefined;
}

async function main() {
  const cmd = process.argv[2] || 'token';
  const orgOverride = argFlag('--org') || cfg('ASA_ORG_ID');

  if (cmd === 'token') {
    process.stdout.write(await getAccessToken() + '\n');
    return;
  }

  if (cmd === 'acls') {
    const r = await apiGet('/api/v5/acls');
    if (!r.ok) die(`/acls başarısız (HTTP ${r.status}): ${JSON.stringify(r.body)}`);
    const orgs = (r.body && r.body.data) || [];
    console.log(`✅ ${orgs.length} org bulundu:\n`);
    for (const o of orgs) {
      console.log(`  orgId:    ${o.orgId}`);
      console.log(`  orgName:  ${o.orgName}`);
      console.log(`  currency: ${o.currency}`);
      console.log(`  roles:    ${(o.roleNames || []).join(', ')}`);
      console.log('');
    }
    if (orgs.length) console.log(`👉 .env'e ekle:  ASA_ORG_ID=${orgs[0].orgId}`);
    return;
  }

  if (cmd === 'get') {
    const p = process.argv[3];
    if (!p) die('Kullanım: node asa-token.js get /api/v5/campaigns [--org <id>]');
    const r = await apiGet(p, orgOverride);
    console.log(JSON.stringify(r.body, null, 2));
    if (!r.ok) process.exit(1);
    return;
  }

  if (cmd === 'post') {
    const p = process.argv[3];
    let raw = process.argv[4];
    if (!p) die('Kullanım: node asa-token.js post /api/v5/reports/campaigns \'<json>\'  (veya @dosya.json)');
    // ── GÜVENLİK KİLİDİ ──────────────────────────────────────────────────────
    // Sadece raporlama (read-only) serbest. Kampanya/keyword/bütçe OLUŞTURMA gibi
    // para harcayan mutasyon çağrıları ANCAK insan bilerek `--write` eklerse geçer.
    // Bu sayede agent'lar yanlışlıkla bile kampanya kuramaz.
    const isReadOnly = /^\/api\/v\d+\/reports\b/.test(p);
    if (!isReadOnly && !process.argv.includes('--write')) {
      die(`Bu mutasyon (yazma) bir çağrı: ${p}\n` +
          `   Güvenlik gereği agent'lar kampanya/keyword kuramaz — kurulum UI'da, insan eliyle yapılır.\n` +
          `   Bilerek yazmak istiyorsan komutun sonuna --write ekle.`);
    }
    if (raw && raw.startsWith('@')) raw = fs.readFileSync(raw.slice(1), 'utf8');
    let bodyObj; try { bodyObj = JSON.parse(raw || '{}'); } catch (e) { die('Geçersiz JSON gövdesi: ' + e.message); }
    const r = await apiPost(p, bodyObj, orgOverride);
    console.log(JSON.stringify(r.body, null, 2));
    if (!r.ok) process.exit(1);
    return;
  }

  // report <level> [campaignId] <start> <end> [granularity]
  //   level: campaigns | keywords | searchterms | adgroups
  //   campaigns: node asa-token.js report campaigns 2026-05-01 2026-05-31 DAILY
  //   keywords:  node asa-token.js report keywords <campaignId> 2026-05-01 2026-05-31
  if (cmd === 'report') {
    const level = process.argv[3];
    const valid = ['campaigns', 'keywords', 'searchterms', 'adgroups'];
    if (!valid.includes(level)) die(`Kullanım: node asa-token.js report <${valid.join('|')}> [campaignId] <start> <end> [granularity]`);

    let apiPath, start, end, gran;
    if (level === 'campaigns') {
      [start, end, gran] = [process.argv[4], process.argv[5], process.argv[6]];
      apiPath = '/api/v5/reports/campaigns';
    } else {
      const campaignId = process.argv[4];
      [start, end, gran] = [process.argv[5], process.argv[6], process.argv[7]];
      if (!campaignId) die(`'${level}' için campaignId gerekir: node asa-token.js report ${level} <campaignId> <start> <end>`);
      apiPath = `/api/v5/reports/campaigns/${campaignId}/${level}`;
    }
    if (!start || !end) die('Tarih gerekir: <start> <end>  (örn. 2026-05-01 2026-05-31)');

    const body = buildReportBody(start, end, gran);
    const r = await apiPost(apiPath, body, orgOverride);
    if (!r.ok) die(`Rapor başarısız (HTTP ${r.status}): ${JSON.stringify(r.body)}`);

    const rows = (r.body && r.body.data && r.body.data.reportingDataResponse && r.body.data.reportingDataResponse.row) || [];
    const grand = r.body && r.body.data && r.body.data.reportingDataResponse && r.body.data.reportingDataResponse.grandTotals;
    console.log(`✅ ${level} raporu — ${start} → ${end} (${(gran || 'DAILY').toUpperCase()}) — ${rows.length} satır\n`);
    for (const row of rows.slice(0, 25)) {
      const m = row.total || {};
      const name = (row.metadata && (row.metadata.campaignName || row.metadata.keyword || row.metadata.searchTermText || row.metadata.adGroupName)) || '(?)';
      console.log(`  • ${name}`);
      console.log(`      spend=${(m.localSpend && m.localSpend.amount) || 0} ${(m.localSpend && m.localSpend.currency) || ''} | imp=${m.impressions || 0} | tap=${m.taps || 0} | install=${m.totalInstalls || 0} | avgCPT=${(m.totalAvgCPT && m.totalAvgCPT.amount) || 0} | avgCPI=${(m.totalAvgCPA && m.totalAvgCPA.amount) || 0}`);
    }
    if (grand && grand.total) {
      const g = grand.total;
      console.log(`\n  Σ TOPLAM: spend=${(g.localSpend && g.localSpend.amount) || 0} | imp=${g.impressions || 0} | tap=${g.taps || 0} | install=${g.totalInstalls || 0}`);
    }
    console.log(`\n(Ham JSON için: node asa-token.js post ${apiPath} '${JSON.stringify(body)}')`);
    return;
  }

  if (cmd === 'test') {
    console.log('1) Token alınıyor...');
    await getAccessToken({ fresh: true });
    console.log('   ✅ access token alındı\n');

    console.log('2) /acls (org keşfi)...');
    const acl = await apiGet('/api/v5/acls');
    if (!acl.ok) die(`/acls başarısız (HTTP ${acl.status}): ${JSON.stringify(acl.body)}`);
    const orgs = (acl.body && acl.body.data) || [];
    console.log(`   ✅ ${orgs.length} org: ${orgs.map(o => `${o.orgName}(${o.orgId})`).join(', ')}\n`);

    const orgId = orgOverride || (orgs[0] && orgs[0].orgId);
    console.log(`3) /campaigns (orgId=${orgId})...`);
    const camp = await apiGet('/api/v5/campaigns?limit=5', orgId);
    if (!camp.ok) die(`/campaigns başarısız (HTTP ${camp.status}): ${JSON.stringify(camp.body)}`);
    const total = (camp.body && camp.body.pagination && camp.body.pagination.totalResults);
    console.log(`   ✅ 200 OK — toplam ${total ?? '?'} kampanya\n`);
    console.log('🎉 ASA API bağlantısı çalışıyor.');
    if (!orgOverride && orgId) console.log(`\n👉 .env'e ekle:  ASA_ORG_ID=${orgId}`);
    return;
  }

  die(`Bilinmeyen komut: ${cmd}\n   Komutlar: token | acls | get <path> | test`);
}

main().catch((e) => die(e && e.stack ? e.stack : String(e)));
