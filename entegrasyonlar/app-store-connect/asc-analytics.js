#!/usr/bin/env node
/*
 * asc-analytics.js — App Store Connect "Analytics Reports" akışı
 * ===============================================================
 * App Analytics verisi (indirme, impression, ürün sayfası görüntülenme,
 * conversion rate, kaynak vb.) tek GET ile gelmez. Apple 3 aşamalı,
 * asenkron bir akış ister. Bu araç o akışı adım adım yönetir.
 *
 * AKIŞ:
 *   1) setup    → app için "rapor talebi" oluştur (POST). Bir kez yapılır.
 *   2) (BEKLE)  → Apple raporları arka planda hazırlar (saatler/1-2 gün).
 *   3) reports  → hazır rapor başlıklarını listele
 *   4) instances→ bir raporun gün/hafta/ay örneklerini listele
 *   5) download → örneğin CSV segmentlerini indir (gzip otomatik açılır)
 *
 * Bağımlılık YOK (Node dahili: fs, path, zlib, fetch). Node 18+.
 *
 * KULLANIM:
 *   node asc-analytics.js apps
 *   node asc-analytics.js setup <APP_ID> [ONE_TIME_SNAPSHOT|ONGOING]
 *   node asc-analytics.js setup-all [ONE_TIME_SNAPSHOT|ONGOING]
 *   node asc-analytics.js requests <APP_ID>
 *   node asc-analytics.js reports <REQUEST_ID> [CATEGORY]
 *   node asc-analytics.js instances <REPORT_ID> [DAILY|WEEKLY|MONTHLY]
 *   node asc-analytics.js download <INSTANCE_ID> [outDir]
 *
 * accessType:
 *   ONE_TIME_SNAPSHOT → geçmiş veriyi (≈365 güne kadar) tek seferlik üretir. (varsayılan)
 *   ONGOING           → bugünden itibaren günlük üretmeye devam eder.
 * CATEGORY: APP_USAGE | APP_STORE_ENGAGEMENT | COMMERCE | FRAMEWORK_USAGE | PERFORMANCE
 */

'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { ascFetch, getAuth } = require('./asc-auth');

async function getJSON(endpoint) {
  const res = await ascFetch(endpoint);
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    /* metin döndü */
  }
  if (!res.ok) {
    const detail = json ? JSON.stringify(json.errors || json, null, 2) : text;
    throw new Error(`HTTP ${res.status} — ${detail}`);
  }
  return json;
}

async function postJSON(endpoint, body) {
  const res = await ascFetch(endpoint, { method: 'POST', body });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    /* */
  }
  return { ok: res.ok, status: res.status, json, text };
}

// --- apps: uygulamaları listele -------------------------------------------
async function cmdApps() {
  const j = await getJSON('/v1/apps?fields[apps]=name,bundleId&limit=200');
  console.log(`Toplam ${j.data.length} uygulama:\n`);
  for (const a of j.data) {
    console.log(`${a.id}\t${a.attributes.name}  (${a.attributes.bundleId})`);
  }
}

// --- requests: bir app'in mevcut rapor taleplerini göster -----------------
async function cmdRequests(appId) {
  if (!appId) throw new Error('Kullanım: requests <APP_ID>');
  const j = await getJSON(`/v1/apps/${appId}/analyticsReportRequests?limit=200`);
  if (!j.data.length) {
    console.log('Bu app için rapor talebi yok. Önce: setup ' + appId);
    return;
  }
  for (const r of j.data) {
    console.log(
      `${r.id}\taccessType=${r.attributes.accessType}\tstoppedDueToInactivity=${r.attributes.stoppedDueToInactivity}`
    );
  }
}

// --- setup: rapor talebini bul ya da oluştur ------------------------------
async function ensureRequest(appId, accessType) {
  const existing = await getJSON(
    `/v1/apps/${appId}/analyticsReportRequests?limit=200`
  );
  const match = (existing.data || []).find(
    (r) => r.attributes.accessType === accessType
  );
  if (match) return { id: match.id, created: false };

  const { ok, status, json, text } = await postJSON(
    '/v1/analyticsReportRequests',
    {
      data: {
        type: 'analyticsReportRequests',
        attributes: { accessType },
        relationships: {
          app: { data: { type: 'apps', id: String(appId) } },
        },
      },
    }
  );
  if (!ok) throw new Error(`POST başarısız (HTTP ${status}): ${text}`);
  return { id: json.data.id, created: true };
}

async function cmdSetup(appId, accessType = 'ONE_TIME_SNAPSHOT') {
  if (!appId)
    throw new Error('Kullanım: setup <APP_ID> [ONE_TIME_SNAPSHOT|ONGOING]');
  const r = await ensureRequest(appId, accessType);
  console.log(
    `${r.created ? 'OLUŞTURULDU' : 'ZATEN VAR'}: app=${appId} accessType=${accessType} requestId=${r.id}`
  );
  if (r.created) {
    console.log(
      '→ Apple raporları hazırlayana kadar saatler/1-2 gün geçebilir. Sonra: reports ' +
        r.id
    );
  } else {
    console.log('→ Hazır mı bak: reports ' + r.id);
  }
  return r.id;
}

async function cmdSetupAll(accessType = 'ONE_TIME_SNAPSHOT') {
  const apps = (
    await getJSON('/v1/apps?fields[apps]=name&limit=200')
  ).data;
  console.log(`${apps.length} uygulama için "${accessType}" rapor talebi:\n`);
  for (const a of apps) {
    try {
      const r = await ensureRequest(a.id, accessType);
      console.log(
        `  ${r.created ? '＋ oluşturuldu' : '✓ zaten var '}  ${a.attributes.name} (req=${r.id})`
      );
    } catch (e) {
      console.log(`  ✗ HATA  ${a.attributes.name}: ${e.message}`);
    }
  }
  console.log('\nNot: yeni oluşturulanlar için Apple hazırlayana dek bekle, sonra: reports <REQUEST_ID>');
}

// --- reports: bir talebin hazır raporlarını listele -----------------------
async function cmdReports(requestId, category) {
  if (!requestId) throw new Error('Kullanım: reports <REQUEST_ID> [CATEGORY]');
  let ep = `/v1/analyticsReportRequests/${requestId}/reports?limit=200`;
  if (category) ep += `&filter[category]=${category}`;
  const j = await getJSON(ep);
  if (!j.data.length) {
    console.log(
      'Henüz rapor yok — Apple hâlâ hazırlıyor olabilir. Birkaç saat sonra tekrar dene.'
    );
    return;
  }
  for (const r of j.data) {
    console.log(`${r.id}\t[${r.attributes.category}]\t${r.attributes.name}`);
  }
}

// --- instances: bir raporun zaman örnekleri -------------------------------
async function cmdInstances(reportId, granularity = 'DAILY') {
  if (!reportId)
    throw new Error('Kullanım: instances <REPORT_ID> [DAILY|WEEKLY|MONTHLY]');
  const j = await getJSON(
    `/v1/analyticsReports/${reportId}/instances?filter[granularity]=${granularity}&limit=200`
  );
  if (!j.data.length) {
    console.log(`Bu granularity (${granularity}) için instance yok.`);
    return;
  }
  for (const i of j.data) {
    console.log(
      `${i.id}\t${i.attributes.granularity}\tprocessingDate=${i.attributes.processingDate}`
    );
  }
}

// --- download: instance segmentlerini indir (gzip aç) ---------------------
async function cmdDownload(instanceId, outDir) {
  if (!instanceId) throw new Error('Kullanım: download <INSTANCE_ID> [outDir]');
  const { root } = getAuth();
  outDir =
    outDir ||
    path.join(root, 'entegrasyonlar/app-store-connect/analytics-data');
  fs.mkdirSync(outDir, { recursive: true });

  const j = await getJSON(
    `/v1/analyticsReportInstances/${instanceId}/segments?limit=200`
  );
  if (!j.data.length) {
    console.log('Segment yok (instance henüz hazır olmayabilir).');
    return;
  }
  let n = 0;
  for (const seg of j.data) {
    const url = seg.attributes.url; // imzalı S3 URL — auth header gerekmez
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    let out = buf;
    try {
      out = zlib.gunzipSync(buf); // gzip ise aç
    } catch {
      /* zaten düz metin */
    }
    const file = path.join(outDir, `${instanceId}_${n}.csv`);
    fs.writeFileSync(file, out);
    console.log(`Kaydedildi: ${file}  (${out.length} bayt)`);
    n++;
  }
  console.log(`\n${n} segment indirildi → ${outDir}`);
}

function usage() {
  console.log(`App Store Connect — Analytics Reports akışı

  node asc-analytics.js apps                            Uygulamaları listele
  node asc-analytics.js setup <APP_ID> [accessType]     Rapor talebi oluştur/bul
  node asc-analytics.js setup-all [accessType]          Tüm uygulamalar için talep
  node asc-analytics.js requests <APP_ID>               App'in rapor taleplerini göster
  node asc-analytics.js reports <REQUEST_ID> [CATEGORY] Hazır raporları listele
  node asc-analytics.js instances <REPORT_ID> [GRAN]    Rapor örnekleri (DAILY/WEEKLY/MONTHLY)
  node asc-analytics.js download <INSTANCE_ID> [dir]    Segment CSV'lerini indir

accessType : ONE_TIME_SNAPSHOT (varsayılan, geçmiş) | ONGOING (günlük, ileri)
CATEGORY   : APP_USAGE | APP_STORE_ENGAGEMENT | COMMERCE | FRAMEWORK_USAGE | PERFORMANCE
Akış       : setup → (bekle) → reports → instances → download`);
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  switch (cmd) {
    case 'apps':
      return cmdApps();
    case 'setup':
      return cmdSetup(rest[0], rest[1]);
    case 'setup-all':
      return cmdSetupAll(rest[0]);
    case 'requests':
      return cmdRequests(rest[0]);
    case 'reports':
      return cmdReports(rest[0], rest[1]);
    case 'instances':
      return cmdInstances(rest[0], rest[1]);
    case 'download':
      return cmdDownload(rest[0], rest[1]);
    default:
      return usage();
  }
}

main().catch((err) => {
  console.error('HATA: ' + err.message);
  process.exit(1);
});
