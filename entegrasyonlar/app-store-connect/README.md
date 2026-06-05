# App Store Connect API Entegrasyonu

Uygulamanın **organik App Store verisine** (indirme, analytics, listing metadata, değerlendirme, satış) programatik erişim. JWT ile kimlik doğrular, sıfır bağımlılıklı bir Node aracıyla (`asc.js`) kullanılır.

**Durum:** ✅ Kurulu + test edildi (2026-06-05) · **Bağlı app:** Match Face (`6775153192`)

---

## ⚠️ Önce şu ayrımı oturt: ASC ≠ ASA

İsimleri benzediği için en sık karışan iki şey:

| | **App Store Connect API** (bu klasör) | **Apple Search Ads API** (`../apple-search-ads/`) |
|---|---|---|
| Ne verir? | **Organik** veri: indirme, analytics, metadata, review, satış | **Ücretli** arama reklamı kampanya yönetimi |
| Kim kullanır? | `mt-kampanya-analisti`, `mt-aso-uzmani` | `mt-apple-search-ads-uzmani` |
| Auth | JWT (ES256 / `.p8`) — `ASC_*` | JWT (farklı anahtar) — `ASA_*` |

> **Not:** İkisi ayrı Apple anahtarı, ayrı `.env` değişkeni, ayrı kurulum. Bu README sadece **App Store Connect** içindir.

---

## 30 saniyede dene

Repo kökünden çalıştır:

```bash
node entegrasyonlar/app-store-connect/asc.js
```

`HTTP 200 OK` ve uygulama listeni görmen lazım. Görüyorsan her şey çalışıyor. ✅

---

## `asc.js` nasıl kullanılır

Tek iş yapar: `.env`'deki bilgilerle JWT üretir, App Store Connect'e **yetkili GET isteği** atar, cevabı düzgün JSON olarak basar.

```bash
# Varsayılan: uygulama listesi (hızlı test)
node entegrasyonlar/app-store-connect/asc.js

# Herhangi bir GET endpoint (query param destekli — tırnak içine al)
node entegrasyonlar/app-store-connect/asc.js "/v1/apps?limit=200"

# Sadece JWT bas (kendi curl'ünde kullanmak için)
node entegrasyonlar/app-store-connect/asc.js --token
```

**Kendi curl'ünle kullanmak istersen:**
```bash
TOKEN=$(node entegrasyonlar/app-store-connect/asc.js --token)
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://api.appstoreconnect.apple.com/v1/apps" | python3 -m json.tool
```

> **Not:** JWT'nin ömrü 15 dakika. `asc.js` her çalıştığında **yeni** token üretir, yani süre dolma derdi yok. `--token` ile aldığın token'ı 15 dk içinde kullan.

---

## Kullanım amacına göre reçeteler

App ID = `6775153192` (Match Face). Kendi başka uygulaman olursa `/v1/apps` ile ID'sini bul.

### 1) Listing / ASO metadata — `mt-aso-uzmani`
```bash
# Mevcut versiyonlar ve App Store durumu
node entegrasyonlar/app-store-connect/asc.js \
  "/v1/apps/6775153192/appStoreVersions?fields[appStoreVersions]=versionString,appStoreState"

# Bir versiyonun dil bazlı metni (title, subtitle, açıklama, keywords)
node entegrasyonlar/app-store-connect/asc.js \
  "/v1/appStoreVersions/{VERSION_ID}/appStoreVersionLocalizations"
```

### 2) Değerlendirme & puanlar
```bash
node entegrasyonlar/app-store-connect/asc.js \
  "/v1/apps/6775153192/customerReviews?sort=-createdDate&limit=10&fields[customerReviews]=rating,title,body,territory,createdDate"
```
> **Not:** Match Face henüz incelemede olduğu için şu an review = 0. Uygulama yayınlanıp yorum gelince dolmaya başlar.

### 3) App Analytics — `mt-kampanya-analisti`  → ayrı araç: `asc-analytics.js`
İndirme / impression / conversion verisi tek GET ile gelmez; Apple 3 aşamalı asenkron akış ister. Bunu `asc-analytics.js` yönetir:

```bash
# Akışın adımları:
node entegrasyonlar/app-store-connect/asc-analytics.js apps                 # app id'leri
node entegrasyonlar/app-store-connect/asc-analytics.js setup <APP_ID>       # rapor talebi (1 kez)
#   ↑ sonra Apple hazırlayana dek BEKLE (~24-48 saat)
node entegrasyonlar/app-store-connect/asc-analytics.js reports <REQUEST_ID> COMMERCE
node entegrasyonlar/app-store-connect/asc-analytics.js instances <REPORT_ID> DAILY
node entegrasyonlar/app-store-connect/asc-analytics.js download <INSTANCE_ID>   # CSV indir (gzip açılır)
```

**Marketing'in baktığı raporlar:**
| Kategori | Rapor | Ne verir |
|---|---|---|
| `COMMERCE` | App Downloads Standard | indirme + kaynak (search/browse/referral) |
| `APP_STORE_ENGAGEMENT` | App Store Discovery and Engagement Standard | impression, ürün sayfası görüntülenme, conversion |
| `APP_USAGE` | App Sessions / Installation and Deletion | oturum, retention sinyali |

> **Not (önemli):** `setup` çalıştırınca rapor *kataloğu* hemen görünür ama veri *dosyaları* (`instances`) Apple üretene kadar boş gelir (~24-48 saat). "instance yok" demesi normaldir; ertesi gün `instances` → `download` ile çek.
> **accessType:** `ONE_TIME_SNAPSHOT` = geçmiş (≈365 gün, tek sefer) · `ONGOING` = bugünden ileri günlük.

### 4) Satış & gelir raporları  → ayrı araç: `asc-sales.js`
Satış/indirme/abonelik raporları. Gzip'li TSV gelir; araç indirir, açar, kaydeder, önizler.

```bash
# Önce .env'e ASC_VENDOR_NUMBER ekle (App Store Connect → Payments and Financial Reports)
node entegrasyonlar/app-store-connect/asc-sales.js 2026-06-04                  # günlük satış özeti
node entegrasyonlar/app-store-connect/asc-sales.js 2026-05 SALES SUMMARY MONTHLY  # aylık
node entegrasyonlar/app-store-connect/asc-sales.js 2026-06-04 SUBSCRIPTION SUMMARY DAILY 1_4  # abonelik
```
> **Not:** Tüm app'ler tek raporda gelir; bir app'i **SKU** sütunundan ayırt edersin (Match Face SKU = `com.umutsever.MatchFace`). Çıktı `sales-data/` altına TSV olarak iner (gitignore'da).
> **Vendor number ≠ ASA org id.** Payments and Financial Reports sayfasından al.

---

## JWT nasıl çalışıyor? (kısa öğretici)

App Store Connect parola/OAuth değil **JWT** (JSON Web Token) ister. JWT = üç parçalı, dijital imzalı bir giriş bileti:

1. **Header** — "ES256 algoritmasıyla, `5K64L3Y77S` anahtarıyla imzalandı"
2. **Payload** — "ben `68a877ca-...` issuer'ıyım, bu bilet 15 dk geçerli, hedef App Store Connect"
3. **İmza** — `.p8` private key ile üretilir; Apple senin public tarafınla doğrular

Her istekte `Authorization: Bearer <JWT>` header'ı gider. `asc.js` bu üçlüyü senin için her seferinde sıfırdan üretir.

---

## 🔒 Güvenlik notları

- **`.p8` = tek gerçek sır.** `*.p8`, `.env`, `*secret*` zaten `.gitignore`'da → repo'ya gitmez. Kontrol: `git check-ignore entegrasyonlar/app-store-connect/AuthKey_5K64L3Y77S.p8`
- **`.p8` tekrar indirilemez.** Kaybedersen App Store Connect'te anahtarı **Revoke** edip yenisini oluştur, `.env`'i güncelle.
- Issuer ID ve Key ID **sır değil** (sadece kimlik) — ama yine de repo'ya yazma; `.env`'de dururlar.
- Token'ı (`--token` çıktısı) log'a / paylaşıma koyma; 15 dk da olsa geçerli bir anahtardır.
- Anahtar çalınırsa: App Store Connect → Users and Access → Integrations → ilgili key → **Revoke**.

---

## 🛠 Sorun giderme

| Belirti | Sebep / Çözüm |
|---|---|
| `HTTP 401 Unauthorized` | JWT geçersiz. Saat kayması (`iat` ileri), yanlış Key ID/Issuer ID, ya da yanlış `.p8`. `.env`'i kontrol et. |
| `HTTP 403 Forbidden` | Anahtarın rolü yetersiz. Bu anahtar **Admin** — normalde olmaz; endpoint app'e özel izin istiyor olabilir. |
| `HATA: .env eksik` | `ASC_ISSUER_ID / ASC_KEY_ID / ASC_PRIVATE_KEY_PATH`'ten biri boş. |
| `HATA: private key bulunamadı` | `ASC_PRIVATE_KEY_PATH` yanlış. Repo köküne göre rölatif olmalı. |
| `NODE: fetch is not defined` | Node 18'den eski. `node --version` ile kontrol et (bizde v22 ✅). |
| Yeni anahtar hemen çalışmıyor | Bazen birkaç dakika yayılma gecikmesi olur; tekrar dene. |

---

## Neyin hazır olduğu

- ✅ JSON dönen **GET** endpoint'leri (`asc.js`) → apps, metadata, reviews, vb.
- ✅ **App Analytics** (`asc-analytics.js`) → POST akışı + gzip CSV indirme. (Veri Apple tarafında hazır olunca çekilir.)
- ✅ **Sales & Finance reports** (`asc-sales.js`) → gzip TSV indirir + açar. **Tek eksik:** `.env`'de `ASC_VENDOR_NUMBER` (Payments and Financial Reports'tan). Numara girilince çalışır.

---

## 🤖 Hangi agent ne kullanır?

Bu entegrasyonu asıl kullanacak agent'lar ve neye erişebilecekleri:

| Agent | Erişebildiği | Hangi araç | Tipik kullanım |
|---|---|---|---|
| **mt-kampanya-analisti** | İndirme, impression, conversion, kaynak (organik/paid), oturum, satış, abonelik | `asc-analytics.js`, `asc-sales.js` | Haftalık rapor: paid install'ları organik tabanla kıyasla; gerçek satış/LTV doğrula |
| **mt-aso-uzmani** | Listing metadata (title/subtitle/keywords/description), versiyon durumu, review/rating, **conversion rate** | `asc.js`, `asc-analytics.js` (Discovery & Engagement) | ASO audit: mevcut metni canlı çek; impression→install conversion'ı ölç |
| **mt-apple-search-ads-uzmani** | (Bu API'yi DEĞİL — ASA'nın kendi aracını kullanır) | `../apple-search-ads/` | Sadece kavramsal kardeş: organik (ASC) vs ücretli (ASA) ayrımı |

> Her agent'ın rehberinde (`agent-rehberi/<ad>.md`) "Veri erişimi: App Store Connect API" bölümü var — komutlar orada da yazılı.

## Dosya haritası

```
entegrasyonlar/app-store-connect/
├── README.md                      ← bu dosya (nasıl kullanılır)
├── setup-notlari.md               ← kurulum kaydı, endpoint listesi, durum
├── asc-auth.js                    ← ortak kimlik modülü (JWT üretir) — sıfır bağımlılık
├── asc.js                         ← basit GET aracı (apps, metadata, reviews)
├── asc-analytics.js               ← App Analytics akışı (setup→reports→instances→download)
├── asc-sales.js                   ← Satış/Finans raporları (gzip TSV indir+aç)
├── analytics-data/                ← indirilen analytics CSV'leri (gitignore'da)
├── sales-data/                    ← indirilen satış TSV'leri (gitignore'da)
└── AuthKey_5K64L3Y77S.p8          ← private key (gitignore'da, repo'ya GİTMEZ)
```

İlgili: `.env` (`ASC_*` değişkenleri) · `entegrasyonlar/kurulu-entegrasyonlar.md` (durum tablosu)

---

## Resmî dokümantasyon

- API genel: https://developer.apple.com/documentation/appstoreconnectapi
- Analytics Reports: https://developer.apple.com/documentation/appstoreconnectapi/download_analytics_reports
- Sales & Finance: https://developer.apple.com/documentation/appstoreconnectapi/download_sales_and_trends_reports
