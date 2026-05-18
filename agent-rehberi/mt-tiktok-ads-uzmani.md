# mt-tiktok-ads-uzmani

TikTok Ads Manager'ın **operasyonel uzmanı** — kampanya kurar, ayarları girer, audience yapısını oluşturur, iOS attribution setup'ını (AEO + SKAN + Events API + domain verification) yönetir.

> Indie iOS dev için kritik kanal: **Spark Ads + UGC creator** kombinasyonu TikTok'un en güçlü silahı. Meta'da olmayan bir avantaj.

---

## Bu ajan ne yapar?

### A — Setup / Yeni kampanya kurulumu
- Campaign objective seçimi (Default: **SPC** — Smart Performance Campaign)
- Audience yapısı: Otomatik (SPC ile gelir) vs Custom (interest/behavior/hashtag/creator targeting)
- **AEO (App Event Optimization)** — 1-3 priority event seçimi
- **SKAN (SKAdNetwork)** conversion value setup — TikTok postback URL, MMP entegrasyonu
- **Events API** — server-side event gönderme (Meta CAPI karşılığı)
- **Domain verification** — TikTok Business'ta domain doğrulama (iOS için zorunlu)
- **Spark Ads bağlama**: Creator'ın organik post'unu reklam olarak boost etme — TikTok One marketplace authorization veya Spark Code akışı
- Creative spec'leri: 9:16 video (zorunlu), 9-15 saniye hook, sound-on, native feel
- Bidding stratejisi: Lowest cost (default), cost cap
- Bütçe yapısı: Campaign vs ad group seviyesinde

### B — Operasyonel optimizasyon
- Mevcut kampanyayı revize etme (audience genişletme, creative refresh, bidding değişimi)
- AEO event değişikliği
- Yeni Spark Code ekleme (yeni creator post'u)
- Schedule / placement değişikliği

### Yapmadığı
- Veri analizi + scale kararı → `mt-kampanya-analisti`
- Strateji + bütçe miktarı → `mt-strateji-uzmani` veya `mt-paid-ua-uzmani`
- **UGC creator outreach / brief verme / anlaşma** → **bu sistem dışı** (kullanıcı bu yola gitmiyor). Default AI-UGC tarzı üretim → `mt-creative-yonetmeni`
- Brand-produced creative üretimi → `mt-creative-yonetmeni`

---

## Neden ayrı bir ajan?

Meta ile TikTok'un yüzeydeki benzerliği aldatıcı. TikTok'un farkları:

1. **Creative kraldır** — Meta'da audience optimization öne çıkar; TikTok'ta creative %80 belirleyici. "Reklam gibi" görünen video çakılır
2. **Spark Ads** — Bir creator'ın organik post'unu reklam yapma silahı. Meta'da yok. Authorization, Spark Code, paylaşım kuralları farklı
3. **Targeting** — Interest, behavior, hashtag, creator-bazlı (Meta'da yok)
4. **AEO ≠ AEM** — 9 event yerine 1-3 priority event; modeled conversion farklı yapılır
5. **Format** — Image carousel çok zayıf; pratikte video-only
6. **Türkiye market özel**: TR creator marketplace zayıf — TR Spark Ads için creator bulmak Meta UGC'sinden zor

Bu detaylar TikTok-spesifik. Aynı setup notlarını Meta'ya aktarmazsın.

---

## iOS-first çalışır

Bu ajan **default olarak iOS-only**:
- Android konusu açılırsa kısa not, geri iOS'a dön
- iOS 14.5+ kuralları default: SKAN postback, AEO modeled conversion, ATT etkisi
- Events API + domain verification iOS için kritik

---

## SPC + Spark Ads default

**Default kombinasyon: SPC (Smart Performance Campaign) + Spark Ads**.

**Neden SPC?**
- TikTok'un AI-driven app install kampanyası — audience + creative otomatik optimize
- Indie için manuel iş minimum
- Bidding, placement, audience iterasyonu AI yapar

**Neden Spark Ads?**
- Creator'ın organik post'u → engagement (like, comment, follow) reklama gider
- "Reklam reklam gibi" durmaz, native görünür
- Creator'ın takipçi base'i de görür (organik amplification)
- Brand-produced ad'a göre tipik %30-50 daha düşük CPI

**İstisna durumlar (manuel Custom Campaign + Standard Ads)**:
- UGC creator bulamadığın pazar (örn. TR'de niche kategori)
- Yeni mesaj testi: önce brand creative ile çerçeve, sonra Spark Ads ile scale
- Çok dar/spesifik audience (lokal pazar, B2B)

---

## Ne zaman çağırmalıyım?

- "TikTok'ta SPC kampanyası kuracağım"
- "Spark Ads nasıl bağlanır"
- "TikTok Events API setup'ı"
- "Spark Code'u nereye yazıyorum"
- "AEO 3 priority event nasıl seçilir"
- "TikTok'ta hashtag targeting nasıl"
- "TikTok'ta cost cap mi lowest cost mu"
- "TikTok modeled conversion neden geç"
- "TikTok'ta creative spec ne"

## Ne zaman çağırılmamalı?

| Soru | Doğru ajan |
|---|---|
| "TikTok'ta hesap nasıl açılır" | `mt-hesap-kurulum-rehberi` |
| "TikTok Business API'a programatik bağlanmak" | `mt-entegrasyon-kurucu` |
| "TikTok'a başlamalı mıyım, hangi kanaldan başlasam" | `mt-paid-ua-uzmani` |
| "Bu hafta TikTok'ta ROAS düşük, ne yapayım" | `mt-kampanya-analisti` |
| "Bu ay TikTok'a kaç para ayırayım" | `mt-strateji-uzmani` |
| "TikTok için video fikri / AI-UGC video üret" | `mt-creative-yonetmeni` |
| "UGC creator bulmama yardım et" | **Bu sistem dışı** — default AI-UGC üretim önerilir |
| "Brand TikTok reklamı için video çek" | `mt-creative-yonetmeni` |

---

## Nasıl çağırılır?

**Doğal dil** (otomatik tetikleme):
- "TikTok'ta SPC kampanyası açacağım"
- "Spark Ads bağlamayı bilmiyorum"
- "TikTok Events API setup'ı"

**Manuel**:
- `@mt-tiktok-ads-uzmani <sorum>`

---

## Örnek prompt'lar

1. *"Yeni uygulama için TikTok SPC kampanyası kurmak istiyorum, Spark Ads ile çalışacağım"*
2. *"Bir TR creator'ın postunu Spark Ads ile boost etmek istiyorum, Spark Code'u verdi, nereye giriyorum"*
3. *"AEO'da Subscribe ve Trial Start'ı priority yapmak istiyorum ama subscription event'larım 24 saatte tetiklenmiyor"*
4. *"TikTok domain verification için DNS TXT girmem gerekiyor mu, yoksa file upload yapayım mı"*
5. *"SPC'de modeled conversion 5 günden geç geliyor normal mi"*

---

## Çıktı olarak ne beklemeli?

### Setup çıktısı
`projects/<app>/kampanyalar/tiktok/YYYY-MM-DD-<kampanya-adi>.md` dosyası:

- **Kampanya tipi**: SPC (veya Custom, hangisi seçildiyse)
- **Objective**: App Install → optimize edilen event
- **Audience**: Otomatik (SPC) veya custom (interest/behavior/hashtag/creator) detayları
- **AEO event mapping**: 1-3 priority event + neden öyle sıralandığı
- **SKAN setup**: Conversion value + postback URL
- **Events API durumu**: ✅ kurulu / ⏳ planlı / ❌ kurulu değil
- **Domain verification**: ✅ / ⏳ / ❌
- **Creative seti**: 
  - Spark Ads (varsa): Hangi creator, Spark Code, post URL
  - Standard Ads (varsa): Video brief'i `mt-creative-yonetmeni`'ne gönderildi
- **Bidding**: Strateji + ilk teklif
- **Bütçe**: Günlük X, kampanya seviyesinde
- **KPI hedefleri**: İlk hafta için CPI/CPA
- **Notlar**: iOS-spesifik dikkat noktaları, TikTok-spesifik kreatif kuralları

### Teknik setup notları
İlk TikTok kurulumunda `entegrasyonlar/tiktok-business-api/setup-notlari.md` dosyasına teknik adımlar:
- TikTok SDK kurulu mu (var/yok)
- Pixel / Events Manager durumu
- Domain verification adımları
- Events API integration durumu
- AEO domain & event yapılandırması

---

## Sınırları

- **Veri okumaz, karar vermez**: ROAS / CPI yorumu → `mt-kampanya-analisti`
- **API'a bağlanmaz**: TikTok Business API entegrasyonu → `mt-entegrasyon-kurucu`
- **Creator bulmaz**: UGC creator outreach kullanıcının kapsamı dışı. Default AI-UGC tarzı üretim → `mt-creative-yonetmeni`
- **Brand creative üretmez**: Brand-produced video brief'i hazırlar, üretim → `mt-creative-yonetmeni`
- **Hesap açmaz**: Business Center / ad account kurulumu → `mt-hesap-kurulum-rehberi`
- **Android'e girmez**: iOS-only.

---

## Bağlantılı ajanlar / skill'ler

- **Önceki adım**: `mt-paid-ua-uzmani` (strateji + kanal seçimi)
- **Önce gereken**: `mt-hesap-kurulum-rehberi` (TikTok Business Center hazır olmalı)
- **Spark Ads (opsiyonel)**: Kullanıcı bir TikTok creator post buldu ve Spark Code aldıysa, sana getirir → bağlarsın. Yoksa default Standard Ads + AI-UGC üretim → `mt-creative-yonetmeni`
- **Sonraki adım**: `mt-creative-yonetmeni` (Standard Ads varsa brand creative üretir)
- **Veri tarafı**: `mt-kampanya-analisti` (performans okur, karar verir)
- **API tarafı**: `mt-entegrasyon-kurucu` (Business API entegrasyonu)
- **Skill bağlantısı**: `/mt-yeni-kampanya`

---

## İlgili bilgi-bankası dosyaları

- `bilgi-bankasi/02-paid-ua/tiktok-ads-rehberi.md`
- `bilgi-bankasi/03-content/tiktok-icin-content.md`
- `bilgi-bankasi/05-attribution-ios/skadnetwork.md`
- `bilgi-bankasi/08-entegrasyonlar/tiktok-business-api.md`
- `bilgi-bankasi/09-playbooklar/tiktok-ile-ilk-30-gun.md`

---

## Tetikleyici test cümleleri

| Cümle | Beklenen |
|---|---|
| "TikTok'ta SPC kampanyası kurmak istiyorum" | ✅ tetiklenmeli |
| "Spark Ads nasıl bağlanır" | ✅ tetiklenmeli |
| "TikTok Events API setup'ı" | ✅ tetiklenmeli |
| "Spark Code'u nereye giriyorum" | ✅ tetiklenmeli |
| "AEO 3 priority event nasıl seçilir" | ✅ tetiklenmeli |
| "TikTok'ta hashtag targeting" | ✅ tetiklenmeli |
| "TikTok'ta hesap nasıl açarım" | ❌ → `mt-hesap-kurulum-rehberi` |
| "TikTok'a başlamalı mıyım" | ❌ → `mt-paid-ua-uzmani` |
| "TikTok bütçesi ne kadar" | ❌ → `mt-strateji-uzmani` |
| "TikTok'ta ROAS düşük scale" | ❌ → `mt-kampanya-analisti` |
| "TikTok video script yaz" | ❌ → `mt-creative-yonetmeni` (paid reklam metni) |
| "TikTok creator bul" | ❌ → bu sistem dışı (default AI-UGC üretim) |
| "TikTok Business API token al" | ❌ → `mt-entegrasyon-kurucu` |
