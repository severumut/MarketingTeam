# HIZLI-BASVURU.md — Cheatsheet

Hangi soru → hangi ajan / skill? Manuel kullanmak isteyenler için hızlı referans.

Otomatik tetikleme zaten çoğu durumda çalışır — bu dosya manuel kontrolu hatırlamak istediğinde için.

---

## Bölüm A — Soru Türüne Göre Bakış Tablosu

| İhtiyacın | Doğrudan komut | Çağrılacak ajan |
|---|---|---|
| Bir terim öğrenmek | `/mt-terim-ogren <terim>` | `mt-marketing-tutor` |
| Yeni uygulama eklemek | `/mt-yeni-uygulama` | (akış başlatır) |
| Bir platforma hesap açmak | `/mt-hesap-ac` | `mt-hesap-kurulum-rehberi` |
| Hangi kanaldan başlamalı | (doğal soru) | `mt-paid-ua-uzmani` |
| Yeni reklam kampanyası | `/mt-yeni-kampanya` | (platform uzmanı + creative) |
| Meta'da kampanya kurmak | (doğal soru) | `mt-meta-ads-uzmani` |
| TikTok'ta kampanya | (doğal soru) | `mt-tiktok-ads-uzmani` |
| Apple Search Ads | (doğal soru) | `mt-apple-search-ads-uzmani` |
| Google App Campaigns | (doğal soru) | `mt-google-ads-uzmani` |
| Reklam görseli üretmek | `/mt-creative-uretim` | `mt-creative-yonetmeni` |
| TikTok/Reels içerik fikri | `/mt-content-takvimi` | `mt-content-uretici` |
| Rakip analizi | `/mt-rakip-analizi` | `mt-rakip-arastirmaci` |
| Bütçe planlamak | `/mt-butce-planla` | `mt-strateji-uzmani` |
| Haftalık performans | `/mt-haftalik-rapor` | `mt-kampanya-analisti` |
| Aylık strateji | `/mt-aylik-strateji` | `mt-strateji-uzmani` |
| RevenueCat özet | `/mt-revenuecat-ozet` | `mt-kampanya-analisti` + RevCat MCP |
| ASO denetimi | `/mt-aso-audit` | `mt-aso-uzmani` |
| API/MCP bağlantı | `/mt-api-entegrasyon` | `mt-entegrasyon-kurucu` |

---

## Bölüm B — Yaşam Döngüsüne Göre Akış

### 1. Yeni uygulama aşaması

```
/mt-yeni-uygulama
  ↓
/mt-rakip-analizi
  ↓
/mt-aso-audit (mevcut listing varsa)
  ↓
/mt-butce-planla
  ↓
/mt-hesap-ac (gerekli platformlar için)
```

### 2. İlk kampanya aşaması

```
/mt-hesap-ac (hesap açılır)
  ↓
/mt-creative-uretim (görseller hazırlanır)
  ↓
/mt-yeni-kampanya (kampanya canlıda)
```

### 3. Haftalık rutin

```
/mt-haftalik-rapor
  ↓
aksiyon listesi
  ↓
gerekirse /mt-creative-uretim ile yenileme
```

### 4. Aylık rutin

```
/mt-aylik-strateji
  ↓
/mt-butce-planla (sonraki ay)
  ↓
varsa yeni /mt-yeni-kampanya
```

### 5. Yeni bir platforma giriş

```
(doğal soru: "TikTok'a girmek istiyorum")
  ↓
mt-paid-ua-uzmani çerçeve verir
  ↓
/mt-hesap-ac
  ↓
/mt-api-entegrasyon (API erişimi için)
  ↓
/mt-creative-uretim
  ↓
/mt-yeni-kampanya
```

---

## Bölüm C — Tetikleyici Cümle Örnekleri

> Bu bölüm Phase 1 ilerledikçe her ajan için 3-5 örnek cümleyle dolar.

### `mt-marketing-tutor`
- "CPI nedir?"
- "ROAS ile LTV farkı?"
- "Cohort analizi ne demek?"
- "Payback period kavramını anlat"

### `mt-hesap-kurulum-rehberi`
- "Meta'da nasıl hesap açarım?"
- "TikTok business manager kurmak istiyorum"
- "Apple Search Ads'e nasıl kayıt olunur?"
- "Google Ads hesabı için neye ihtiyacım var?"

### `mt-paid-ua-uzmani`
- "İlk reklam kampanyamı hangi kanaldan başlatmalıyım?"
- "Bütçemi 3 kanal arasında nasıl dağıtmalıyım?"
- "Bu kanal benim için uygun mu?"

### `mt-meta-ads-uzmani`
- "Meta'da Advantage+ kampanya açmak istiyorum"
- "AEM nasıl yapılandırılır?"
- "Facebook reklam audience'ım dar mı?"

### `mt-tiktok-ads-uzmani`
- "TikTok'ta Smart Performance Campaign nasıl kurulur?"
- "Spark Ads için UGC creator nasıl bağlanır?"

### `mt-apple-search-ads-uzmani`
- "ASA Basic mi Advanced mı kullanmalıyım?"
- "Search match açık mı kapalı mı?"
- "Discovery kampanyası için keyword'leri nasıl seçmeli?"

### `mt-google-ads-uzmani`
- "Google App Campaigns için Firebase eventleri nasıl ayarlanır?"
- "AC for installs vs AC for engagement farkı?"

### `mt-creative-yonetmeni`
- "Bu app için 5 reklam görseli üret"
- "Paywall için A/B test varyantları çıkar"
- "Reels ad copy varyantları yaz"

### `mt-content-uretici`
- "Bu hafta için TikTok video fikirleri lazım"
- "UGC creator brief'i yaz"
- "Reels için 5 hook fikri"

### `mt-strateji-uzmani`
- "Mayıs ayı bütçemi nasıl dağıtmalıyım?"
- "Hedef ROAS 1.5 için strateji"
- "Hangi uygulamaya daha fazla yatırım yapmalıyım?"

### `mt-kampanya-analisti`
- "Geçen hafta kampanyalar nasıldı?"
- "Bu kampanyayı kessem mi devam etsem mi?"
- "D7 retention çok düşük, ne yapmalıyım?"

### `mt-rakip-arastirmaci`
- "X uygulamasını analiz et"
- "Bu kategorinin rakip pricing'ini incele"
- "Meta Ad Library'de rakiplerin creative'lerine bak"

### `mt-aso-uzmani`
- "Bu app için keyword research yap"
- "Screenshot'larımı optimize etmek istiyorum"
- "App Store listing'imi denetle"

### `mt-entegrasyon-kurucu`
- "Meta Marketing API'sini bağlamak istiyorum"
- "TikTok için programatik erişim nasıl alınır?"
- "Yeni bir MCP eklemek istiyorum"

---

## Bölüm D — Manuel Çağırma Notasyonları

| Notasyon | Anlamı | Örnek |
|---|---|---|
| `/mt-<skill-adi>` | Skill'i çağır | `/mt-aso-audit` |
| `@mt-<ajan-adi>` | Özel bir ajanı zorla çağır | `@mt-meta-ads-uzmani audience'ım dar mı?` |
| Doğal dil | Otomatik seçim | "Meta'da nasıl başlarım?" |

---

## Bölüm E — Acil Durumlar

| Sorun | Hangi ajanı çağır |
|---|---|
| "Meta hesabım askıya alındı" | `mt-hesap-kurulum-rehberi` (recovery adımları) |
| "Kampanya çakıldı bütçe yandı" | `mt-kampanya-analisti` (post-mortem) |
| "Token expired oldu" | `mt-entegrasyon-kurucu` |
| "App Store reddetti listing'i" | `mt-aso-uzmani` |
| "Tracking eventleri gelmiyor" | `mt-entegrasyon-kurucu` + ilgili platform uzmanı |
| "iOS 17 ile attribution bozuldu" | `mt-paid-ua-uzmani` (genel çerçeve) + `mt-meta-ads-uzmani` veya ilgili |

---

> Bu cheatsheet, ajan/skill yazıldıkça (Phase 1/2 boyunca) örnek cümlelerle büyür. `TETIKLEME-SOZLESMESI.md`'nin Bölüm H — Checklist'i, yeni eklemelerin nereye yazılacağını belirler.
