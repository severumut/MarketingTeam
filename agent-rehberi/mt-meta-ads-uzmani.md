# mt-meta-ads-uzmani

Meta (Facebook + Instagram) reklam platformunun **operasyonel uzmanı** — kampanya kurar, ayarları girer, audience yapısını oluşturur, iOS attribution setup'ını (AEM + SKAN + CAPI + domain verification) yönetir.

> Indie iOS dev için ASA'dan sonra en güçlü ikinci kanal (özellikle subscription consumer app için).

---

## Bu ajan ne yapar?

İki ana iş yapar:

### A — Setup / Yeni kampanya kurulumu
- Campaign objective seçimi (Default: **AAC** — Advantage+ App Campaign)
- Audience yapısı: Advantage+ Audience (default) vs Custom Audience + Lookalike
- **AEM (Aggregated Event Measurement)** event prioritization — 9 event slot'unu uygulamana göre sıralama
- **SKAN (SKAdNetwork)** conversion value setup — postback URL, MMP entegrasyonu
- **CAPI (Conversion API)** — server-side event gönderme
- **Domain verification** — Meta Business'ta domain doğrulama (iOS reklamı için zorunlu)
- Creative spec'leri: Reels (9:16), Stories (9:16), Feed (1:1 / 4:5)
- Bidding stratejisi: lowest cost (default), cost cap, bid cap
- Bütçe yapısı: CBO (campaign budget) vs ABO (ad set budget)

### B — Operasyonel optimizasyon
- Mevcut kampanyayı revize etme (audience daralt/genişlet, creative refresh, bidding değişimi)
- AEM event sıralamasını yeniden ayarlama
- Yeni creative varyantı ekleme
- Schedule / placement değişikliği

### Yapmadığı
- Veri analizi + "kes / devam et / scale et" kararı → `mt-kampanya-analisti`
- Strateji + bütçe dağıtımı → `mt-strateji-uzmani`
- Kanal seçimi + kanal mix → `mt-paid-ua-uzmani`
- Reklam görseli/video üretimi → `mt-creative-yonetmeni`

---

## Neden ayrı bir ajan?

`mt-paid-ua-uzmani` strateji verir ("Meta'ya $30/gün bütçeyle başla, AAC kullan, EN-konuşan ABD kitlesi hedefle"). Ama Meta UI'ında bu strateji **uygulamaya başlandığında** karşılaşılan onlarca alt karar var: AEM event'ları nasıl sıralayacak? SKAN postback windowsları nasıl konfigüre edilecek? Domain verification nasıl tamamlanacak? Modeled conversion gecikmesinde panic mi yoksa beklemek mi gerekiyor?

Bu detaylar Meta-spesifik. TikTok/ASA/Google'da farklı sistemler — bu yüzden her platform için ayrı bir operasyonel uzman var.

---

## iOS-first çalışır

Bu ajan **default olarak iOS-only** davranır:
- Android konusu açılırsa "Android farklı, şu an iOS'ta kalalım, gerekirse ayrıca konuşuruz" der
- Tüm öneriler iOS 14.5+ kurallarına göre (SKAN, AEM, ATT prompt, modeled conversion delay)
- Domain verification, CAPI ve sandbox testleri iOS uygulamalar için kritik — vurgular

---

## AAC default

Default olarak **Advantage+ App Campaign (AAC)** önerir. Manuel App Installs kampanya sadece şu durumlarda önerilir:
- Audience çok dar / spesifik (yerel pazar, niş B2B)
- Custom audience'a (LAL) bağımlı bir test

Indie consumer subscription app için **AAC = doğru başlangıç**. Çünkü:
- Audience auto-finding (Meta'nın en güçlü olduğu yer)
- Creative testing AI ile yapılır (sen 3-5 creative atarsın, Meta hangisi çalışıyor öğrenir)
- Manuel iş minimum

---

## Ne zaman çağırmalıyım?

- "Meta'da kampanya açacağım" / "AAC nasıl kurarım"
- "AEM nasıl yapılandırılır" / "9 event limit"
- "SKAN postback Meta'ya nasıl bağlanır"
- "Conversion API setup'ı"
- "Domain verification yapamıyorum"
- "Advantage+ Audience vs Custom Audience"
- "Meta'da cost cap mi bid cap mi"
- "Reels reklamı için spec ne"
- "Modeled conversion neden 48 saat gecikti"

## Ne zaman çağırılmamalı?

| Soru | Doğru ajan |
|---|---|
| "Meta'da hesap nasıl açılır" | `mt-hesap-kurulum-rehberi` |
| "Meta Marketing API'a programatik bağlanmak" | `mt-entegrasyon-kurucu` |
| "Meta'ya başlamalı mıyım, hangi kanaldan başlasam" | `mt-paid-ua-uzmani` |
| "Bu hafta Meta'da ROAS düşük, ne yapayım" (veri analizi) | `mt-kampanya-analisti` |
| "Bu ay Meta'ya kaç para ayırayım" | `mt-strateji-uzmani` |
| "Meta için reklam görseli üret" | `mt-creative-yonetmeni` |

---

## Nasıl çağırılır?

**Doğal dil** (otomatik tetikleme):
- "Meta'da AAC kampanyası kuracağım"
- "AEM event prioritization nasıl"
- "Meta'da SKAN setup'ı"

**Manuel**:
- `@mt-meta-ads-uzmani <sorum>`

---

## Örnek prompt'lar

1. *"Yeni uygulama için Meta AAC kampanyası kurmak istiyorum. Audience yapısı nasıl olsun?"*
2. *"AEM'de 9 event'ı nasıl önceliklendireceğimi bilmiyorum, uygulamada subscription + free trial var"*
3. *"Domain verification yapamadım, DNS TXT record ekledim ama Meta görmüyor"*
4. *"AAC kampanyada 2 günlük modeled conversion delay normal mi?"*
5. *"Mevcut kampanyada Subscribe event'ı 3. sırada, yukarı çıkarsam ne olur?"*

---

## Çıktı olarak ne beklemeli?

### Setup çıktısı
`projects/<app>/kampanyalar/meta/YYYY-MM-DD-<kampanya-adi>.md` dosyası şu yapıda:

- **Kampanya tipi**: AAC (veya manuel, hangisi seçildiyse)
- **Objective**: App promotion → optimize edilen event
- **Audience**: Advantage+ Audience (default) veya custom + LAL detayları
- **AEM event mapping**: 9 event'ın sıralaması + neden öyle sıralandığı
- **SKAN setup**: Conversion value definitions + postback windows
- **CAPI durumu**: ✅ kurulu / ⏳ planlı / ❌ kurulu değil
- **Domain verification**: ✅ / ⏳ / ❌
- **Creative seti**: Reels 9:16, Stories 9:16, Feed 1:1/4:5 — hangileri eklendi
- **Bidding**: Strateji + ilk teklif
- **Bütçe**: Günlük X, CBO veya ABO
- **KPI hedefleri**: İlk hafta için CPI/CPA target
- **Notlar**: iOS-spesifik dikkat noktaları

### Setup teknik notları
İlk Meta kurulumunda `entegrasyonlar/meta-marketing-api/setup-notlari.md` dosyasına teknik adımlar yazılır:
- Meta SDK kurulum durumu
- Pixel ID
- Domain verification adımları
- CAPI integration durumu
- AEM domain & event yapılandırması

---

## Sınırları

- **Veri okumaz, karar vermez**: "ROAS şu, ne yapayım" sorularında verisini önce `mt-kampanya-analisti`'ne yönlendirir.
- **API'a bağlanmaz**: Meta Marketing API entegrasyonu `mt-entegrasyon-kurucu`'nun işi.
- **Creative üretmez**: Görsel/video brief'ini hazırlar ama üretimi `mt-creative-yonetmeni` yapar.
- **Hesap açmaz**: Business Manager / ad account kurulumu `mt-hesap-kurulum-rehberi`'ne.
- **Android'e girmez**: Default olarak iOS-only.

---

## Bağlantılı ajanlar / skill'ler

- **Önceki adım**: `mt-paid-ua-uzmani` (strateji + kanal seçimi)
- **Önce gereken**: `mt-hesap-kurulum-rehberi` (Meta Business hesabı kurulu olmalı)
- **Sonraki adım**: `mt-creative-yonetmeni` (creative brief'i alır, üretir)
- **Veri tarafı**: `mt-kampanya-analisti` (performans okur, karar verir)
- **API tarafı**: `mt-entegrasyon-kurucu` (Marketing API ile programatik veri çekme)
- **Skill bağlantısı**: `/mt-yeni-kampanya` (bu skill içinden çağrılır)

---

## İlgili bilgi-bankası dosyaları

- `bilgi-bankasi/02-paid-ua/meta-ads-rehberi.md`
- `bilgi-bankasi/05-attribution-ios/aggregated-event-measurement-meta.md`
- `bilgi-bankasi/05-attribution-ios/skadnetwork.md`
- `bilgi-bankasi/08-entegrasyonlar/meta-marketing-api.md`

---

## Tetikleyici test cümleleri

Bu ajanın `description` alanının doğru tetiklendiğini doğrulamak için:

| Cümle | Beklenen |
|---|---|
| "Meta'da AAC kampanyası kurmak istiyorum" | ✅ tetiklenmeli |
| "AEM event prioritization nasıl yapılır" | ✅ tetiklenmeli |
| "Meta'da domain verification yapamıyorum" | ✅ tetiklenmeli |
| "Conversion API setup'ı nasıl" | ✅ tetiklenmeli |
| "Advantage+ Audience ile Custom Audience farkı" | ✅ tetiklenmeli |
| "Reels reklamı spec'leri ne" | ✅ tetiklenmeli |
| "Meta'da hesap nasıl açarım" | ❌ → `mt-hesap-kurulum-rehberi` |
| "Meta'ya başlamalı mıyım" | ❌ → `mt-paid-ua-uzmani` |
| "Bu ay Meta'ya kaç para" | ❌ → `mt-strateji-uzmani` |
| "Meta'da ROAS düşük, scale edebilir miyim" | ❌ → `mt-kampanya-analisti` |
| "Meta Marketing API token alıyorum" | ❌ → `mt-entegrasyon-kurucu` |
