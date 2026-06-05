#!/usr/bin/env node
/*
 * asc-sales.js — App Store Connect "Sales & Finance Reports"
 * ===========================================================
 * Satış/indirme/abonelik raporları. Analytics'ten FARKLI bir API:
 * tek GET ile gelir ama cevap gzip'li TSV'dir (JSON değil). Bu araç
 * indirir, gzip'i açar, TSV olarak kaydeder ve önizleme basar.
 *
 * Bağımlılık YOK (Node dahili: fs, path, zlib, fetch). Node 18+.
 *
 * GEREKLİ: .env → ASC_VENDOR_NUMBER
 *   App Store Connect → Payments and Financial Reports sayfasında
 *   görünen 8+ haneli numara. (Apple Search Ads org id'sinden FARKLI olabilir.)
 *
 * KULLANIM:
 *   node asc-sales.js <reportDate> [reportType] [reportSubType] [frequency] [version] [outDir]
 *
 * ÖRNEKLER:
 *   node asc-sales.js 2026-06-04
 *       → SALES / SUMMARY / DAILY (varsayılan): o günün tüm app'leri için satış+indirme
 *   node asc-sales.js 2026-05 SALES SUMMARY MONTHLY
 *       → aylık satış özeti
 *   node asc-sales.js 2026-06-04 SUBSCRIPTION SUMMARY DAILY 1_4
 *       → abonelik durum raporu
 *
 * PARAMETRELER:
 *   reportDate    DAILY=YYYY-MM-DD · WEEKLY=YYYY-MM-DD(Pazar) · MONTHLY=YYYY-MM · YEARLY=YYYY
 *   reportType    SALES | SUBSCRIPTION | SUBSCRIPTION_EVENT | SUBSCRIBER | PRE_ORDER ...
 *   reportSubType SUMMARY | DETAILED
 *   frequency     DAILY | WEEKLY | MONTHLY | YEARLY
 *   version       rapor sürümü (SALES SUMMARY=1_1, SUBSCRIPTION durumu=1_4 ...)
 *
 * NOT: TSV satırında bir app'i bulmak için SKU sütununa bak (bundleId değil, SKU).
 */

'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { getAuth, BASE_URL } = require('./asc-auth');

function usage() {
  console.log(`App Store Connect — Satış & Finans raporları

Kullanım:
  node asc-sales.js <reportDate> [reportType] [reportSubType] [frequency] [version] [outDir]

Örnek:
  node asc-sales.js 2026-06-04                       SALES SUMMARY DAILY (varsayılan)
  node asc-sales.js 2026-05 SALES SUMMARY MONTHLY    aylık satış özeti
  node asc-sales.js 2026-06-04 SUBSCRIPTION SUMMARY DAILY 1_4   abonelik durumu

reportDate : DAILY=YYYY-MM-DD · WEEKLY=YYYY-MM-DD(Pazar) · MONTHLY=YYYY-MM · YEARLY=YYYY
Gerekli    : .env → ASC_VENDOR_NUMBER (App Store Connect → Payments and Financial Reports)
Çıktı      : gzip TSV açılır → entegrasyonlar/app-store-connect/sales-data/<...>.tsv`);
}

async function main() {
  const args = process.argv.slice(2);
  if (!args.length || args[0] === '--help' || args[0] === '-h') {
    usage();
    return;
  }

  let auth;
  try {
    auth = getAuth();
  } catch (e) {
    console.error('HATA: ' + e.message);
    process.exit(2);
  }

  const vendor = auth.env.ASC_VENDOR_NUMBER;
  if (!vendor) {
    console.error(`HATA: ASC_VENDOR_NUMBER boş.

Vendor number'ı şuradan al: App Store Connect → Payments and Financial Reports
(rapor başlığında / sol üstte görünen 8+ haneli numara), sonra .env'e yaz:

  ASC_VENDOR_NUMBER=XXXXXXXX`);
    process.exit(2);
  }

  const reportDate = args[0];
  const reportType = args[1] || 'SALES';
  const reportSubType = args[2] || 'SUMMARY';
  const frequency = args[3] || 'DAILY';
  const version = args[4] || '1_1';
  const outDir =
    args[5] || path.join(auth.root, 'entegrasyonlar/app-store-connect/sales-data');

  const qs = new URLSearchParams({
    'filter[frequency]': frequency,
    'filter[reportType]': reportType,
    'filter[reportSubType]': reportSubType,
    'filter[vendorNumber]': vendor,
    'filter[reportDate]': reportDate,
    'filter[version]': version,
  });
  const url = `${BASE_URL}/v1/salesReports?${qs.toString()}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${auth.token}`,
      Accept: 'application/a-gzip',
    },
  });

  if (!res.ok) {
    const text = await res.text();
    let detail = text;
    try {
      const j = JSON.parse(text);
      detail = JSON.stringify(j.errors || j, null, 2);
    } catch {
      /* metin */
    }
    console.error(`HTTP ${res.status} — ${detail}`);
    if (res.status === 404) {
      console.error(
        '(404 = bu tarih/parametre kombinasyonu için veri yok. reportDate, frequency veya version yanlış olabilir.)'
      );
    }
    process.exit(1);
  }

  const buf = Buffer.from(await res.arrayBuffer());
  let tsv;
  try {
    tsv = zlib.gunzipSync(buf); // gzip'i aç
  } catch {
    tsv = buf; // zaten düz
  }

  fs.mkdirSync(outDir, { recursive: true });
  const fname = `${reportType}_${reportSubType}_${frequency}_${reportDate}.tsv`;
  const file = path.join(outDir, fname);
  fs.writeFileSync(file, tsv);

  const lines = tsv.toString('utf8').split('\n').filter(Boolean);
  console.log(`✅ Kaydedildi: ${file}  (${tsv.length} bayt, ${lines.length} satır)\n`);
  console.log('--- İlk satırlar (önizleme) ---');
  console.log(lines.slice(0, 4).join('\n'));
}

main().catch((err) => {
  console.error('HATA: ' + err.message);
  process.exit(1);
});
