# App Store Connect API — Setup Notları

**Tarih**: 2026-06-05
**Durum**: ✅ Kurulu + test edildi
**Tip**: REST API (programatik) — MCP yok
**Auth**: JWT (ES256, `.p8` private key ile imzalanır)
**Helper'lar** (hepsi sıfır bağımlılıklı Node, bu klasörde):
- `asc-auth.js` — ortak kimlik/JWT modülü
- `asc.js` — basit GET (apps, metadata, reviews)
- `asc-analytics.js` — App Analytics akışı (setup→reports→instances→download)
- `asc-sales.js` — Satış/Finans raporu (gzip TSV) — `ASC_VENDOR_NUMBER` gerekir

> ⚠️ **App Store Connect API ≠ Apple Search Ads API.**
> Bu = organik App Store verisi (indirme, analytics, metadata, review).
> Apple Search Ads = ücretli reklam kampanya yönetimi (ayrı kurulum: `entegrasyonlar/apple-search-ads/`).

---

## Ne için kuruldu (kullanım amacı)
- **App Analytics** — indirme, impression, ürün sayfası görüntülenme, conversion rate, kaynak (organik/paid) → `mt-kampanya-analisti`
- **Listing / ASO metadata** — title, subtitle, keywords, açıklama → `mt-aso-uzmani`
- **Değerlendirme & puanlar** — review/rating izleme
- **Satış & gelir raporları** — units, proceeds (vendorNumber gerekli)

## Anahtar (API Key)
- Tip: **Team Key**
- Rol: **Admin** (dört kullanım amacını da kapsayan tek ortak rol)
- Issuer ID: `.env` → `ASC_ISSUER_ID` ✅ dolu
- Key ID: `.env` → `ASC_KEY_ID` ✅ dolu (`5K64L3Y77S`)
- Private key (`.p8`): `.env` → `ASC_PRIVATE_KEY_PATH` ✅ `entegrasyonlar/app-store-connect/AuthKey_5K64L3Y77S.p8` (`*.p8` gitignore'da)
- Vendor number (satış raporları): `.env` → `ASC_VENDOR_NUMBER` ⏳ boş (gerekince Payments & Financial Reports'tan)

## Bağlı uygulama(lar)
| App | Bundle ID | App ID | Durum |
|---|---|---|---|
| Match Face: Football Camera | `com.umutsever.MatchFace` | `6775153192` | v1.0.1 WAITING_FOR_REVIEW |

## Base URL
```
https://api.appstoreconnect.apple.com
```

## JWT detayları
- Algoritma: **ES256**
- Header: `{ "alg": "ES256", "kid": <KEY_ID>, "typ": "JWT" }`
- Payload: `{ "iss": <ISSUER_ID>, "iat": <now>, "exp": <now + max 1200 sn>, "aud": "appstoreconnect-v1" }`
- Token ömrü: **maks 20 dakika** — her çağrı öncesi yeniden üretilir.

## Test çağrısı
- Endpoint: `GET /v1/apps` → **200 OK** ✅ (Match Face listelendi)
- `GET /v1/apps/6775153192/appStoreVersions` → **200 OK** ✅ (metadata erişimi doğrulandı)
- `GET /v1/apps/6775153192/customerReviews` → **200 OK** ✅ (review erişimi doğrulandı; veri henüz 0)
- Tekrar test: `node entegrasyonlar/app-store-connect/asc.js`

## İlgili endpoint'ler (kullanım amacına göre)
| Amaç | Endpoint |
|---|---|
| Uygulama listesi | `GET /v1/apps` |
| App Analytics (rapor talebi) | `POST /v1/analyticsReportRequests` → `GET .../analyticsReports` |
| Listing metadata | `GET /v1/apps/{id}/appStoreVersions` → `appStoreVersionLocalizations` |
| Değerlendirmeler | `GET /v1/apps/{id}/customerReviews` |
| Satış/Finans raporları | `GET /v1/salesReports` (vendorNumber param) |

## Analytics rapor talepleri (ONE_TIME_SNAPSHOT)
2026-06-05'te 7 uygulamanın tümü için oluşturuldu. Apple veriyi hazırlayınca (`~24-48s`) `asc-analytics.js reports/instances/download` ile çekilir.

| App | App ID | requestId |
|---|---|---|
| Match Face | 6775153192 | ce0930e2-83b7-4e79-9b61-4ffa01b8d3ec |
| Pollio | 6772743905 | ed612c29-d266-4fc4-bcfd-91995a8ba63a |
| What The Emoji? | 6740541821 | e13e48f4-3bb1-47cc-bb79-a8128418b968 |
| Fairora | 6744872221 | ac9d8883-3f1b-44ff-8900-2f902dd28e02 |
| Blur Film | 1541127523 | 5155e8a5-32b5-4abf-82e5-ef7d0930580d |
| TestingPiri | 6743000540 | 7b86c1f5-aa24-4795-be17-a0c562056827 |
| Elegant Timers | 1555928636 | 19a2b5ac-b9f9-42b5-b113-28932ffbdc0a |

> Durum (2026-06-05): rapor kataloğu görünüyor ✅, veri dosyaları (`instances`) henüz boş (Apple işliyor). Ertesi gün tekrar dene.
> Marketing raporları: COMMERCE → "App Downloads Standard", APP_STORE_ENGAGEMENT → "App Store Discovery and Engagement Standard".

## Yenileme prosedürü
- JWT kısa ömürlü, otomatik üretilir — yenileme derdi yok.
- `.p8` private key kaybolursa: App Store Connect'te anahtarı **revoke** et, yenisini oluştur, `.env`'i güncelle. (`.p8` tekrar indirilemez.)

## Sorun notları
- (henüz yok)
