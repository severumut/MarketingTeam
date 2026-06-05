#!/usr/bin/env node
/*
 * asc.js — App Store Connect API basit GET aracı
 * ---------------------------------------------------------------
 * .env'deki kimlikle JWT üretir, yetkili GET isteği atar, JSON'u basar.
 * Kimlik/JWT mantığı asc-auth.js'te (ortak modül).
 *
 * Kullanım:
 *   node entegrasyonlar/app-store-connect/asc.js
 *       → GET /v1/apps  (varsayılan: uygulama listesi — hızlı test)
 *   node entegrasyonlar/app-store-connect/asc.js "/v1/apps?limit=200"
 *       → herhangi bir GET endpoint (query param desteklenir, tırnak içine al)
 *   node entegrasyonlar/app-store-connect/asc.js --token
 *       → sadece JWT'yi yazdır (kendi curl'ünde kullan)
 *
 * Analytics (indirme/impression/conversion) için → asc-analytics.js
 * Çıkış kodu: başarı 0, HTTP hatası 1, config eksik 2.
 */

'use strict';

const { BASE_URL, getAuth } = require('./asc-auth');

async function main() {
  let auth;
  try {
    auth = getAuth();
  } catch (e) {
    console.error('HATA: ' + e.message);
    process.exit(2);
  }

  const args = process.argv.slice(2);
  if (args[0] === '--token') {
    console.log(auth.token);
    return;
  }

  const endpoint = args[0] || '/v1/apps';
  const url = BASE_URL + (endpoint.startsWith('/') ? endpoint : '/' + endpoint);

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${auth.token}` },
  });
  const text = await res.text();
  console.log(`HTTP ${res.status} ${res.statusText}  →  ${url}\n`);
  try {
    console.log(JSON.stringify(JSON.parse(text), null, 2));
  } catch {
    console.log(text);
  }
  if (!res.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
