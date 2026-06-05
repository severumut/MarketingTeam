'use strict';
/*
 * asc-auth.js — App Store Connect ortak kimlik modülü
 * ----------------------------------------------------
 * .env okur, ES256 JWT üretir, yetkili fetch yapar.
 * Bağımlılık YOK (Node dahili: fs, path, crypto, fetch).
 *
 * Hem asc.js (basit GET) hem asc-analytics.js bunu kullanır.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_URL = 'https://api.appstoreconnect.apple.com';

// repo köküne göre rölatif .env'i oku (harici bağımlılık olmadan)
function loadEnv() {
  const root = path.resolve(__dirname, '..', '..');
  const envPath = path.join(root, '.env');
  const env = {};
  if (fs.existsSync(envPath)) {
    for (const raw of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const m = raw.match(/^\s*([A-Za-z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (!m) continue;
      let val = m[2];
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      env[m[1]] = val;
    }
  }
  return { env, root };
}

// ES256 imzalı JWT (App Store Connect formatı)
function generateToken({ issuerId, keyId, privateKey }) {
  const header = { alg: 'ES256', kid: keyId, typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: issuerId,
    iat: now,
    exp: now + 15 * 60, // 15 dk (Apple üst sınırı 20)
    aud: 'appstoreconnect-v1',
  };
  const b64url = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const signingInput = `${b64url(header)}.${b64url(payload)}`;
  const signer = crypto.createSign('SHA256');
  signer.update(signingInput);
  signer.end();
  // 'ieee-p1363' = JOSE/JWT'nin beklediği ham r||s imza formatı (DER değil)
  const signature = signer
    .sign({ key: privateKey, dsaEncoding: 'ieee-p1363' })
    .toString('base64url');
  return `${signingInput}.${signature}`;
}

// .env'den token + kök yolu hazırla
function getAuth() {
  const { env, root } = loadEnv();
  const issuerId = env.ASC_ISSUER_ID;
  const keyId = env.ASC_KEY_ID;
  let keyPath = env.ASC_PRIVATE_KEY_PATH;
  if (!issuerId || !keyId || !keyPath) {
    throw new Error(
      '.env eksik: ASC_ISSUER_ID / ASC_KEY_ID / ASC_PRIVATE_KEY_PATH'
    );
  }
  if (!path.isAbsolute(keyPath)) keyPath = path.join(root, keyPath);
  if (!fs.existsSync(keyPath)) {
    throw new Error('private key bulunamadı: ' + keyPath);
  }
  const privateKey = fs.readFileSync(keyPath, 'utf8');
  return { token: generateToken({ issuerId, keyId, privateKey }), env, root };
}

// Yetkili istek. endpoint '/v1/...' ya da tam URL olabilir.
async function ascFetch(endpoint, { method = 'GET', body, token } = {}) {
  const t = token || getAuth().token;
  const url = endpoint.startsWith('http')
    ? endpoint
    : BASE_URL + (endpoint.startsWith('/') ? endpoint : '/' + endpoint);
  const headers = { Authorization: `Bearer ${t}` };
  const opts = { method, headers };
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  return fetch(url, opts);
}

module.exports = { BASE_URL, loadEnv, generateToken, getAuth, ascFetch };
