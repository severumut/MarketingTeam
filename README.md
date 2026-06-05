# 🧭 MarketingTeam — Indie iOS App Marketing AI Takımı

Türkiye'de yaşayan, full-time iş yapıp aynı zamanda App Store'da uygulamaları olan **indie iOS developer'lar için** tasarlanmış, **kendi başına yaşayan bir AI marketing ekibi**.

13 uzman ajan + 13 user-invocable skill + 5 MCP entegrasyonu + 8 modüllük eğitim müfredatı. **Claude Code** üzerinde çalışır.

```
┌─────────────────────────────────────────────────────────────┐
│  PAID-ONLY MARKETING SYSTEM (organik content kapsam dışı)   │
│  Meta + TikTok + Apple Search Ads + Google App Campaigns    │
│  Indie bütçe → AI-driven creative → sürdürülebilir büyüme  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Felsefe

| Prensip | Açıklama |
|---|---|
| **Paid-only** | Organik content kapsam dışı — full-time iş + indie eşittir zaman yok |
| **AI-first** | UGC creator outreach yok — AI ile native-looking creative üretimi |
| **Türkçe öncelikli** | Sektör terimleri İngilizce, ilk kullanımda parantezde Türkçe |
| **Sıfırdan öğrenen** | Marketing bilmiyorsan bile — 8 modüllük tutor müfredatı |
| **Esnek bütçe** | Sabit limit yok, brief-bazlı maliyet onayı |
| **Otomatik tetikleme** | Doğal Türkçe → otomatik doğru ajan/skill seçimi |

---

# 🧠 Agent vs Skill Mantığı

Claude Code'da iki ayrı yapı var. Karıştırmamak için:

| Tip | Nasıl çağrılır? | Ne yapar? |
|---|---|---|
| **Agent** | Slash ile **çağrılmaz** — otomatik tetiklenir veya skill içinden çalışır | **Motor** — bir uzmanlık alanında derinlemesine iş yapar |
| **Skill** | `/mt-komut` slash komutu | **Düğme** — bir veya birden çok agent'ı belirli bir akışta çalıştırır |

> **Agent = Motor** · **Skill = O motoru çalıştıran düğme**

## Agent çağırmanın 3 Yolu

### Yol 1 — Otomatik tetikleme (en sık) ⭐

Sen doğal Türkçe konuşursun, Claude `TETIKLEME-SOZLESMESI.md`'deki kuralları okur, **otomatik doğru ajanı çağırır**.

```
Sen yazarsın:   "CPI nedir?"
                ↓
Claude eşleştirir:  description'da "X nedir" pattern → mt-marketing-tutor
                ↓
Ajan otomatik tetiklenir, cevap verir
```

Bu yüzden çoğu zaman **agent'ı manuel çağırmana gerek yok**. Sen "ne nedir", "Meta'da kampanya nasıl açarım", "ROAS düştü neden" gibi normal sorular sorarsın, sistem arkada doğru ajanı bulur.

### Yol 2 — Skill ile (paketlenmiş arayüz)

Skill'ler agent'ı **belirli bir modda + belirli bir akışta** çalıştırır:

```
Sen yazarsın:   /mt-terim-ogren CPI
                ↓
Skill başlar:   Akış adımları (sor, çağır, kaydet)
                ↓
Agent çağrılır: mt-marketing-tutor (Standard Mode)
                ↓
Çıktı:          Detaylı tanım + SOZLUK.md'ye kayıt
```

### Yol 3 — Manuel `@` notasyonu (advanced, nadiren gerekli)

```
Sen yazarsın:   @mt-creative-yonetmeni reels video üretelim
                ↓
Agent direkt zorla çağrılır (otomatik seçimi bypass eder)
```

Bu **çoğunlukla gerekmez**. Sadece sistem yanlış ajanı seçerse veya spesifik bir uzmana zorla yönlendirmek istersen.

## Skill Tipleri (2 ana tip)

| Tip | Örnek | Davranış |
|---|---|---|
| **Tek-shot skill** | `/mt-terim-ogren` | Bir akış başlatır → tek seferlik çıktı verir → biter |
| **Multi-step skill** | `/mt-ogren`, `/mt-yeni-uygulama`, `/mt-haftalik-rapor` | Memory'den state tutar → adım adım ilerler → kaldığın yerden devam edilebilir |

## Aynı Agent'ı Farklı Modlarda Çağıran Skill Örneği

`mt-marketing-tutor` ajanı **iki ayrı mod** ile çalışabilir:

| Skill | Agent + Mod | Davranış |
|---|---|---|
| `/mt-terim-ogren <terim>` | tutor → **Standard Mode** | Tek terim, tek-shot, format ile açıklar → SOZLUK.md'ye ekler |
| `/mt-ogren` | tutor → **Curriculum Mode** | 8 modüllük müfredat, sırayla, sohbet halinde, memory ile ilerleme |

Yani **2 farklı skill, aynı agent, farklı mod**. Aynı motor, farklı kullanım amaçları.

---

# 🤖 13 Uzman Ajan (Detaylı)

## 1. `mt-marketing-tutor`

> **Terim/kavram öğretici + 8 modüllük müfredat tutor'u**

**Uzmanlık alanı**: App marketing kavramları, sektör terimleri (CPI, ROAS, LTV, SKAN, AEM, vb.), sıfırdan öğrenenin sözlüğü.

**Modları**:
- **Standard Mode**: Tek terim için detaylı format açıklama. "CPI nedir?" → tam tanım, örnek, ilgili kavramlar, sıkça karıştırılır + SOZLUK.md'ye kayıt
- **Curriculum Mode**: 8 modüllük müfredatı sırayla sohbet halinde anlatır. Memory'den ilerleme okur, kaldığı modülden devam eder

**Ne yapar**:
- Bir terimi sıfırdan, indie iOS dev'in anlayacağı dilde açıklar
- Senin app'lerinden (Fairora / What The Emoji / Blur Film) somut örnekler verir
- SOZLUK.md'yi otomatik büyütür ve seviyene göre rafine eder
- Yan sorular curriculum'u bozmaz — cevaplar, sonra müfredata döner

**Ne yapmaz**:
- Operasyonel karar ("CPI'ım yüksek ne yapayım" → `mt-kampanya-analisti`)
- Strateji ("Hedef ROAS ne olmalı" → `mt-strateji-uzmani`)
- Platform kurulumu ("Meta'da kampanya kur" → `mt-meta-ads-uzmani`)

**Otomatik tetikleyici örnekler**:
- "CPI nedir?"
- "ROAS ile LTV farkı?"
- "Öğrenmeye başlayalım"
- "Sırada hangi modül?"
- "Şu kelimeyi anlamadım"

**Skill'leri**: `/mt-terim-ogren`, `/mt-ogren`

---

## 2. `mt-hesap-kurulum-rehberi`

> **Reklam platformlarına insan-kayıt yöneticisi**

**Uzmanlık alanı**: Meta Business / TikTok for Business / Apple Search Ads / Google Ads platformlarına sıfırdan hesap açma. Türkiye-bireysel SGK'lı developer profili.

**Modları**:
- **Mod A — Yeni Hesap**: Ön gereksinim kontrolü → kayıt → vergi → ödeme → business manager → ad account verification
- **Mod B — Yarıda kalmış kurulum**: `durum.md` okur, kalınan adımdan devam eder

**Ne yapar**:
- Adım adım yönlendirme (her platformun UI'ında nereye tıklanır)
- `hesap-kurulumlari/<platform>/durum.md`'ye ilerleme yazar
- Türkiye-spesifik nüansları bilir (TCKN ile vergi, bireysel hesap, şahıs şirketi yok varsayımı)

**Ne yapmaz**:
- API token alma → `mt-entegrasyon-kurucu`
- Kampanya kurma → ilgili platform ajan
- Hukuki/mali tavsiye ("Şahıs şirketi açayım mı?") → reddeder, muhasebeci öneri

**Hassas bilgi politikası**: TCKN, kart, parola **asla** MD'ye yazılmaz, kullanıcı parola yöneticisine yönlendirilir.

**Otomatik tetikleyici örnekler**:
- "Meta'da hesap açmak istiyorum"
- "TikTok for Business kayıt"
- "Meta hesap kurulumunda kalmıştık, devam edelim"
- "Apple Search Ads'e nasıl kayıt olunur?"

**Skill'i**: `/mt-hesap-ac`

---

## 3. `mt-paid-ua-uzmani`

> **Stratejik yön belirleyici — hangi kanal, hangi sıra**

**Uzmanlık alanı**: Paid User Acquisition stratejisi, kanal mix mantığı, funnel haritası, iOS attribution gerçekliği, kampanya yaşam döngüsü.

**Ne yapar**:
- "Hangi kanaldan başlamalıyım?" kararı verir (subscription → ASA, casual game → TikTok, vb.)
- Kanal mix önerisi (eş zamanlı kaç kanal, test → scale mantığı)
- Funnel haritası (Awareness → Install → Activation → Retention → Revenue)
- Default opinion'lara sahip: Subscription app için sıra **ASA → Meta → TikTok → Google**

**Ne yapmaz**:
- Bütçe miktarı belirleme → `mt-strateji-uzmani` ("kanal yönü" verir, "kaç para" değil)
- Platform UI kurulumu → ilgili platform ajan
- Performans veri okuma → `mt-kampanya-analisti`
- Creative üretim → `mt-creative-yonetmeni`

**Otomatik tetikleyici örnekler**:
- "Hangi reklam platformundan başlamalıyım?"
- "Subscription app için kanal önerin?"
- "ASA mı Meta mı önce?"
- "iOS'ta retargeting yapılabilir mi?"

**Skill bağlantısı**: `/mt-yeni-uygulama` içinde çağrılır

---

## 4. `mt-meta-ads-uzmani`

> **Meta (Facebook + Instagram) operasyonel uzmanı**

**Uzmanlık alanı**: Meta Ads Manager — AAC (Advantage+ App Campaign), AEM (Aggregated Event Measurement 9 event), SKAN setup, CAPI (Conversion API), domain verification, audience yapıları, creative spec'leri.

**Modları**:
- **Mod A — Setup**: Önkoşul kontrol (BM, SDK, pixel, domain, CAPI) → AAC kampanya → AEM event mapping → SKAN postback → creative brief
- **Mod B — Operasyonel optimizasyon**: Audience genişletme/daraltma, creative refresh, bidding değişimi

**Default önerileri**:
- Kampanya tipi: **AAC** (Advantage+ App Campaign)
- Audience: **Advantage+ Audience** (Meta otomatik bulsun)
- Bütçe: **CBO** (Campaign Budget Optimization)
- Bidding: **Lowest cost**
- Creative: 1 Reels 9:16 zorunlu + Stories + Feed 4:5
- **iOS-only** (Android konusu açılırsa kısa not, geri iOS)

**Ne yapmaz**:
- Veri okuma / scale kararı → `mt-kampanya-analisti`
- Bütçe miktarı → `mt-strateji-uzmani`
- Hesap açma → `mt-hesap-kurulum-rehberi`
- Creative üretim → `mt-creative-yonetmeni`

**Otomatik tetikleyici örnekler**:
- "Meta'da AAC kampanyası kuracağım"
- "AEM 9 event nasıl önceliklendirilir?"
- "Conversion API setup'ı nasıl?"
- "Domain verification yapamadım"
- "Modeled conversion neden 48 saat gecikti?"

**Skill bağlantısı**: `/mt-yeni-kampanya`

---

## 5. `mt-tiktok-ads-uzmani`

> **TikTok Ads operasyonel uzmanı**

**Uzmanlık alanı**: TikTok Ads Manager — SPC (Smart Performance Campaign), Spark Ads (creator post boost), AEO (App Event Optimization, 1-3 priority event), Events API, hashtag/creator targeting.

**Modları**:
- **Mod A — Setup**: SPC kampanya + Spark Ads veya Standard Ads → AEO priority event → SKAN postback → creative bağlama
- **Mod B — Operasyonel optimizasyon**: Yeni Spark Code ekle, AEO event değişimi, audience tweak

**Default önerileri**:
- Kampanya tipi: **SPC** (Smart Performance Campaign)
- Creative: **AI-UGC tarzı** (sen UGC creator outreach yapmıyorsun → `mt-creative-yonetmeni`'ye yönlendirir)
- Audience: SPC otomatik
- Creative kuralları: 9:16, sound-on, native feel, hand-held aesthetic

**Ne yapmaz**:
- UGC creator outreach (kapsam dışı — kullanıcı bu yola gitmiyor)
- Creative üretim → `mt-creative-yonetmeni`
- Veri analizi → `mt-kampanya-analisti`

**Otomatik tetikleyici örnekler**:
- "TikTok'ta SPC kampanyası kuracağım"
- "Spark Ads bağlamayı bilmiyorum"
- "AEO'da hangi event'ı priority yapayım?"
- "Spark Code'u nereye giriyorum?"

**Skill bağlantısı**: `/mt-yeni-kampanya`

---

## 6. `mt-apple-search-ads-uzmani`

> **Apple Search Ads operasyonel uzmanı — indie için en yüksek ROAS potansiyeli olan kanal**

**Uzmanlık alanı**: ASA — keyword strateji, 4 campaign türü (Search Results, Search Tab, Today Tab, Product Pages), Search Match, negative keywords, Match Type (Exact/Broad), CPT (Cost-Per-Tap) bidding, CPP (Custom Product Pages) bağlama.

**Default önerileri**:
- Versiyon: **ASA Advanced** (Basic değil)
- Kampanya yapısı: **3 kampanya minimal başlangıç** — Brand + Category + Discovery
- Audience: New users only
- Storefront: TR + US ayrı kampanyalar
- TR market özel notu: rekabet düşük, $0.20-0.50 CPI fırsatı

**Ne yapar**:
- Search Terms Report analizi → keyword promotion (Discovery → Category)
- Negative keyword ekleme
- CPP bağlama (yaratma değil — yaratma `mt-aso-uzmani`'nin işi)

**Ne yapmaz**:
- CPP yaratma (App Store Connect'te screenshot/video) → `mt-aso-uzmani`
- App Store listing → `mt-aso-uzmani`
- API entegrasyon → `mt-entegrasyon-kurucu`

**Otomatik tetikleyici örnekler**:
- "ASA'da Brand Campaign kurmak istiyorum"
- "Search Match açayım mı?"
- "Negative keyword nasıl eklenir?"
- "Discovery Campaign nedir?"
- "Exact mi Broad mi?"
- "CPP'i ASA kampanyasına nasıl bağlarım?"

**Skill bağlantısı**: `/mt-yeni-kampanya`

---

## 7. `mt-google-ads-uzmani`

> **Google App Campaigns operasyonel uzmanı + geliştirici handoff MD üretici**

**Uzmanlık alanı**: Google AC (App Campaigns) — multi-network (Search + Play + YouTube + Display) tek kampanya. AC for Installs, AC for Engagement, asset library yaklaşımı, Firebase event mapping, bidding evolution (Target CPI → tCPA → tROAS).

**Modları**:
- **Mod A — Setup**: Önkoşul (Firebase SDK, project link) → AC for Installs → Target CPI → asset library → SKAN → conversion action linkleme
- **Mod B — Operasyonel optimizasyon**: Asset rotation, bidding evrim, conversion action revize
- **Mod C — Developer Handoff MD**: Firebase event'ları kodda nasıl tanımlanmalı? Geliştirici (veya başka AI) okuyup direkt uygulayabilsin

**Default önerileri**:
- Kampanya tipi: **AC for Installs**
- Bidding sırası: **Target CPI → tCPA** (50+ conversion sonrası) → **tROAS** (100+ revenue data sonrası)
- Asset library minimum: 5 Headline + 5 Description + 5 Image + 5 Video
- iOS-only

**Özel yetenek**: Firebase event'larını **handoff MD** ile geliştirici için net direktif olarak yazar. Swift kod örnekleri + test prosedürü + validation kontrolleri içerir.

**Ne yapmaz**:
- Firebase SDK kurulumu / event kodu yazmak → handoff MD üretir, kod yazmaz
- Brand creative → `mt-creative-yonetmeni`
- Google Ads API → `mt-entegrasyon-kurucu`

**Otomatik tetikleyici örnekler**:
- "Google AC for Installs kuracağım"
- "Firebase event'larını Google Ads'e nasıl bağlarım?"
- "Target CPI'dan tCPA'ya geçiş"
- "Asset library kaç asset?"
- "Geliştirici için Firebase event listesi çıkar"

**Skill bağlantısı**: `/mt-yeni-kampanya`

---

## 8. `mt-creative-yonetmeni` ⭐

> **Sistemin TEK üretim ajanı — gerçek dosya çıktısı verir**

**Uzmanlık alanı**: Brand-produced + AI-UGC paid creative üretimi. fal.ai (üretim) + Shotstack (post-prod) + Claude vision (kalite gate) pipeline'ı orkestre eder.

**Modları**:
- **Mod A — Brief → Üretim (image/video)**: 13 adımlı pipeline — brief parse → library tarama → task tipi → model seçimi → prompt mühendisliği → maliyet onayı → üretim → vision kalite gate → post-prod → kayıt
- **Mod B — Copy Üretim**: Hook, headline, description, CTA. App tipine göre formül (PAS / AIDA / BAB / 4Ps). 3-5 varyant
- **Mod C — A/B Test Seti**: 3 varyant default (5 opsiyonel). Hook + görsel tarz + social proof boyutlarında farklılaşır
- **Mod D — Revizyon**: Mevcut asset'i image edit modeliyle revize (eskisi `_arsiv/`'e taşınır)
- **Mod E — Trend Research**: TikTok Creative Center + Meta Ad Library + Google Trends taraması (üretim değil, brief'lere girdi)

**Default davranışlar**:
- **Two-stage strategy**: FLUX Schnell ile 10 draft varyant ($0.03) → seçilen yön Pro modellerle final ($0.15-0.42)
- **Vision kalite gate**: 8 checklist (kompozisyon, text spelling, brand uyum, hedef kitle, ad policy, artifact, resolution, brief spec). Skor < 60/80 → otomatik retry (max 2)
- **Öğrenen sistem**: `entegrasyonlar/fal-ai/favori-modeller.md`'ye kullanıcının beğendiği modeller eklenir
- **Maliyet onayı zorunlu**: Her üretim öncesi plan + tahmini fiyat + adet → kullanıcı onayı
- **Esnek bütçe**: Sabit limit yok

**Ne yapmaz**:
- Strateji → `mt-paid-ua-uzmani` / `mt-strateji-uzmani`
- Performans yorumlama → `mt-kampanya-analisti`
- App Store screenshot → `mt-aso-uzmani`
- Paywall UI tasarım → bu sistem dışı (kullanıcı kendi)
- UGC creator outreach → bu sistem dışı

**Otomatik tetikleyici örnekler**:
- "Reels reklamı için video üret"
- "5 image varyantı, A/B test için"
- "Hook copy yaz, problem-first"
- "Mevcut creative revizyon"
- "Shotstack ile outro ekle"
- "Bu hafta TikTok'ta hangi trend var?"

**Skill'i**: `/mt-creative-uretim`

---

## 9. `mt-strateji-uzmani`

> **Aylık plan + bütçe allocation + KPI hedef belirleme**

**Uzmanlık alanı**: **Para + KPI boyutu** — `mt-paid-ua-uzmani` "hangi kanal" der, bu ajan "hangi kanala kaç para, hangi KPI = başarı" der.

**Modları**:
- **Mod A — Plan Üretimi**: Aylık default (üç aylık opsiyonel). Hedef → uygulama × kanal allocation → 4 haftalık checkpoint + eşikler → erken revize tetikleyicileri
- **Mod B — Bütçe Allocation (rebalance)**: Performansa göre kazanan kanallara bütçe kaydır
- **Mod C — KPI Hedef Belirleme**: Yüksek seviye hedef ("D30 ROAS > 1.2") → alt-KPI'lara (Target CPI, payback, retention) çevir

**Default davranışlar**:
- **Aylık periyot** (3 aylık opsiyonel)
- **Bütçe 3 katmanlı hibrit**: Memory + butce/<önceki ay>.md + kullanıcıya sorma
- **Default KPI önerileri** (subscription): D7 ROAS 0.5, D30 ROAS 1.2, payback 120 gün
- **Target CPI formülü**: LTV / 5-10 (rule of thumb)
- **Haftalık checkpoint'ler** (kritik): Her hafta için yeşil/sarı/kırmızı eşik

**Ne yapmaz**:
- Kanal seçimi (yön) → `mt-paid-ua-uzmani`
- Veri okuma / scale → `mt-kampanya-analisti`
- Platform setup → ilgili ajan

**Otomatik tetikleyici örnekler**:
- "Bu ay $500'ümü nasıl bölmeli?"
- "Haziran ayı planı yazalım, hedef D30 ROAS 1.2"
- "Target CPI ne olmalı, LTV $30"
- "Üç aylık plan hazırla"
- "Bütçe rebalance, TikTok'tan ASA'ya kaydır"

**Skill'leri**: `/mt-butce-planla`, `/mt-aylik-strateji`

---

## 10. `mt-kampanya-analisti`

> **Performans analisti — sayı odaklı, ikili öneri (yön + rakam)**

**Uzmanlık alanı**: Aktif kampanyaların verisini okur, KPI hesaplar, **kes/devam/scale** kararı önerir. mt-strateji-uzmani'nin haftalık checkpoint'lerine bakar.

**Modları**:
- **Mod A — Haftalık Rapor**: Veri toplama → KPI hesap → plan vs gerçek → aksiyon listesi
- **Mod B — Spike/Drop Anomali**: "ROAS düştü neden?" — sebep adayları (creative fatigue, audience tükenme, attribution gecikme)
- **Mod C — Kes/Devam/Scale Kararı**: Karar matrisi (learning phase, ROAS hedef vs gerçek, frequency, cohort)
- **Mod D — Cohort Analizi**: D1, D7, D30, D90 retention + LTV
- **Mod E — Aylık Retrospektif**: Plan vs gerçek, kazanan/kaybeden kampanyalar → `mt-strateji-uzmani`'ne devir

**Default davranışlar**:
- **İkili öneri zorunlu**: Hem yön (kes / devam / scale / refresh) **hem spesifik rakam** ("bütçe +%30 = $X", "audience 18-34 → 18-45")
- **Büyük sapma (%30+) → otomatik mt-strateji-uzmani çağırma + neden bildirme**
- **Veri kaynağı öncelik**: RevenueCat MCP → `raporlar/` → kullanıcı manuel
- **Yeşil/sarı/kırmızı ışık** çerçevesi

**Ne yapmaz**:
- Strateji yazma → `mt-strateji-uzmani`
- Kampanya kurma → ilgili platform ajan
- Creative üretim → `mt-creative-yonetmeni`
- UI'da değişiklik (önerir, kendi uygulamaz)

**Otomatik tetikleyici örnekler**:
- "Bu hafta kampanyalar nasıl?"
- "ROAS düştü neden?"
- "Şu kampanyayı kessem mi?"
- "Scale edebilir miyim?"
- "Mayıs cohort analizi"

**Skill'leri**: `/mt-haftalik-rapor`, `/mt-revenuecat-ozet`, `/mt-aylik-strateji`

---

## 11. `mt-rakip-arastirmaci`

> **Rakip + market araştırma — public veri kaynakları**

**Uzmanlık alanı**: Rakip uygulamaları derinlemesine analiz. App Store listing, pricing, paywall, ad library (Meta + TikTok + Google), review trendleri, kategori benchmark.

**Modları**:
- **Mod A — Tek Rakip Derinlemesine**: 6 boyutta tam analiz + "bizim için öğretiler" bölümü
- **Mod B — Kategori Benchmark**: 3-5 rakip karşılaştırma + ortak trendler
- **Mod C — Yön Bazlı Analiz**: Sadece paywall / pricing / ad / review (hızlı, dar)
- **Mod D — Güncelleme Takibi**: "X yeni güncelleme yapmış" — pivot tespit

**Veri kaynakları**:
- **App Store** (apps.apple.com — listing, screenshots, fiyat)
- **Meta Ad Library** (facebook.com/ads/library)
- **TikTok Creative Center** (ads.tiktok.com/business/creativecenter)
- **Google Ads Transparency** (adstransparency.google.com)
- **App Store reviews** + Reddit + IndieHackers + Twitter/X

**Şu anki durum**: ⚠️ **Basit hali** — Phase 4+'te güçlendirilecek. Kullanıcı ASO tool (AppTweak / Sensor Tower / Data.ai) abone olunca, MCP entegrasyonu ile bu ajan **tahmini download/revenue + keyword ranking history + competitor overlap** gibi verilere de erişecek.

**Ne yapmaz**:
- Kendi ASO denetimi → `mt-aso-uzmani`
- Creative üretim → `mt-creative-yonetmeni` (raporu input alır)
- Pricing kararı → `mt-strateji-uzmani`

**Otomatik tetikleyici örnekler**:
- "Streaks app'i analiz et"
- "Habit tracker kategorisinde rakipler"
- "Calm paywall'una bak"
- "TikTok'ta finance app reklamları"
- "5 fitness app pricing karşılaştır"

**Skill'i**: `/mt-rakip-analizi`

---

## 12. `mt-aso-uzmani`

> **App Store Optimization — 10 boyutlu audit + agresif rating + GB-first localization**

**Uzmanlık alanı**: App Store listing optimization, keyword research, screenshot CRO, CPP (Custom Product Pages), localization, rating/review stratejisi.

**Modları**:
- **Mod A — ASO Audit**: 10 boyutta /100 skor (title, subtitle, keywords field, description, screenshots, ikon, preview video, localization, rating, review velocity) + top 5 iyileştirme
- **Mod B — Keyword Research**: Brand + generic + long-tail. 100 char keywords field optimize (Türkçe karakter dikkati)
- **Mod C — Screenshot + Preview Video**: Akış: hero → feature → social proof → paywall hint → CTA. Brief `mt-creative-yonetmeni`'ne (Ideogram V3 zorunlu — text rendering)
- **Mod D — CPP Yaratma Rehberi**: 1-5 CPP App Store Connect'te yaratma. Bağlama `mt-apple-search-ads-uzmani`'ne devir
- **Mod E — Localization**: **GB → US → TR → diğer** öncelik. Mümkün olduğunca fazla dil
- **Mod F — Rating & Review (AGRESİF)**: Yılda 3 prompt limitini kullanma stratejisi (multi-trigger, pre-filter UX, negative review reply template)

**Apple yasaklarına dikkat**:
- ❌ Yanlış sağlık iddiası, garantili sonuç, rakip karşılaştırma direkt isim ile
- ✅ İzinli: "#1 in [kategori]" (gerçekten ise), "4.8★", "100K+ Reviews", "Featured by Apple", "As seen on TechCrunch"

**Ne yapmaz**:
- ASA kampanya kurma → `mt-apple-search-ads-uzmani`
- Paid reklam görseli → `mt-creative-yonetmeni`
- Rakip ASO → `mt-rakip-arastirmaci`
- App build/submit → developer

**Otomatik tetikleyici örnekler**:
- "ASO denetimi yap"
- "Keyword optimize"
- "Screenshot başlıkları öner"
- "CPP yaratalım"
- "Negatif review reply"

**Skill'i**: `/mt-aso-audit`

---

## 13. `mt-entegrasyon-kurucu`

> **API/MCP kurulum + token yönetimi + developer handoff MD**

**Uzmanlık alanı**: Platforma **programatik bağlama**. `mt-hesap-kurulum-rehberi` insan-kayıt yönetir, bu ajan makine-erişim yönetir.

**Modları**:
- **Mod A — Yeni API Entegrasyonu**: Developer hesap → app/project oluştur → token (OAuth / JWT / API key) → scope → callback URL → .env → MCP add → test çağrısı
- **Mod B — Token Yenileme**: Refresh token akışı veya OAuth flow baştan
- **Mod C — Yeni MCP Ekleme**: `mcp-registry` ile arama → kurulum komutu → auth → `claude mcp list` doğrulama
- **Mod D — Debug**: 401 / MCP failed / token reddi — adım adım checklist
- **Mod E — Developer Handoff MD**: Geliştirici için Firebase event, Meta SDK init, TikTok SDK init, ASA AdServices direktif MD'leri

**Default davranışlar**:
- **Detaylı kayıt zorunlu**: Her adımı `entegrasyonlar/<platform>/setup-notlari.md`'ye **adım adım yaz** — aylar sonra kullanıcı geri baktığında tekrar yapabilmeli
- **Token expiry takibi**: `marketing_integration_state.md`'de her tokenın expiry tarihini tut. **Proaktif uyarı**: 7 gün kala "Şu token expire — yenileyelim mi?"
- **Test çağrısı zorunlu**: Kurulum sonrası doğrula auth çalışıyor
- **Platform handoff zorunlu**: Reklam çıkacağı her platform için handoff MD üret (Meta SDK init, Firebase event, vb.)

**Hassas bilgi güvenliği**:
- Token sadece `.env` ve `entegrasyonlar/token-vault.md` (gitignore'da)
- MD'ye **asla** token yazılmaz
- Test çağrısı log'larında token görünürse uyar

**Ne yapmaz**:
- Hesap açma → `mt-hesap-kurulum-rehberi`
- Kampanya kurma → ilgili platform ajan
- Performans analiz → `mt-kampanya-analisti`
- Kavram açıklama → `mt-marketing-tutor`

**Otomatik tetikleyici örnekler**:
- "Meta Marketing API kurulumu"
- "Google Ads API token al"
- "Yeni MCP ekleyelim"
- "Token expired"
- "401 alıyorum debug"
- "Firebase event handoff MD"

**Skill'i**: `/mt-api-entegrasyon`

---

# ⚡ 13 Skill (Detaylı)

## 1. `/mt-terim-ogren`

> **Hızlı kavram öğrenme — tek terim, tek-shot**

**Hangi agent'ı çağırır**: `mt-marketing-tutor` (Standard Mode)

**Akış**:
1. Kullanıcıdan terim al
2. mt-marketing-tutor agent'ı çağır (Standard Mode)
3. Format ile açıkla: KISALTMA — Full Name — Türkçe karşılık — Detay — Örnek — İlgili kavramlar — Sıkça karıştırılır
4. SOZLUK.md'ye alfabetik ekle
5. Memory güncelle (marketing_known_terms.md)

**Çıktı dosyaları**:
- `SOZLUK.md` (güncelleme)
- `marketing_known_terms.md` (memory)

**Bağımlılıklar**: mt-marketing-tutor

**Maliyet**: Sıfır (sadece Claude konuşması)

**Örnek komutlar**:
- `/mt-terim-ogren CPI`
- `/mt-terim-ogren ROAS vs LTV`
- `/mt-terim-ogren AEM`

---

## 2. `/mt-ogren`

> **8 modüllük müfredat — sohbet halinde, devam edilebilir** ⭐

**Hangi agent'ı çağırır**: `mt-marketing-tutor` (Curriculum Mode)

**Akış**:
1. `marketing_learning_progress.md` memory oku — hangi modülde olduğunu öğren
2. Kaldığı yerden devam veya istenen modüle geç
3. İlgili modül dosyasını oku (`bilgi-bankasi/00-ogrenme/modul-XX-...md`)
4. **Sohbet halinde anlat** — statik MD kopyalama, kendi cümlelerinle
5. Senin app'lerinden örnekler (Fairora / What The Emoji / Blur Film)
6. Mini-test (1-2 soru) interaktif
7. Memory güncelle
8. Sonraki modülü öner

**Komutlar**:
| Komut | Davranış |
|---|---|
| `/mt-ogren` | Kaldığın yerden devam veya Modül 1'den başla |
| `/mt-ogren modul 3` | Modül 3'e direkt git |
| `/mt-ogren ozet` | Mevcut ilerleme özeti |
| `/mt-ogren tekrar 2` | Modül 2'yi tekrar yap |

**Çıktı dosyaları**:
- Sohbet (chat'te)
- `marketing_learning_progress.md` (memory)
- `SOZLUK.md` (yeni terimler)

**Bağımlılıklar**: mt-marketing-tutor, OGRENME-YOL-HARITASI.md, modül dosyaları

**Maliyet**: Sıfır

**Yan sorular**: Curriculum sırasında modül dışı soru sorabilirsin — tutor Standard Mode'a geçer, soruyu cevaplar, sonra "müfredata dönelim mi?" der.

---

## 3. `/mt-hesap-ac`

> **Reklam platformuna sıfırdan hesap aç — yarıda kalırsa devam edilebilir**

**Hangi agent'ı çağırır**: `mt-hesap-kurulum-rehberi`

**Akış**:
1. Hangi platform? (Meta / TikTok / ASA / Google / diğer)
2. `hesap-kurulumlari/<platform>/durum.md` kontrol — yarıda kalmış mı?
3. Varsa kaldığı yerden, yoksa sıfırdan
4. mt-hesap-kurulum-rehberi adım adım yönlendirir
5. Ön gereksinimler kontrol (e-posta, telefon, kart, TCKN, Apple Developer)
6. Adım adım kayıt akışı
7. Her adım sonrası `durum.md` güncelle
8. Tamamlandığında `hesap-kurulumlari/README.md` tablo update

**Çıktı dosyaları**:
- `hesap-kurulumlari/<platform>/durum.md` (ilerleme)
- `hesap-kurulumlari/<platform>/on-gereksinimler.md`
- `hesap-kurulumlari/<platform>/adim-adim.md` (log)

**Bağımlılıklar**: mt-hesap-kurulum-rehberi

**Maliyet**: Doğrudan yok — platforma ödeme kartı eklenir

**Örnek komutlar**:
- `/mt-hesap-ac`
- "Meta'da hesap açalım"
- "TikTok for Business kayıt"

---

## 4. `/mt-yeni-uygulama`

> **Yeni app onboarding — 4 ajan sırayla çağrılır**

**Hangi agent'ı çağırır**: `mt-paid-ua-uzmani` + `mt-strateji-uzmani` + `mt-rakip-arastirmaci` + `mt-aso-uzmani` (sırayla)

**Akış**:
1. App bilgisini sor: ad, slug, App Store URL, kategori, hedef pazar, monetization, ASO seviyesi
2. `projects/<app-slug>/` klasörünü `_sablon`'dan kopyala
3. `00-app-overview.md` doldur
4. `mt-paid-ua-uzmani` çağır → `02-paid-ua-stratejisi.md` (kanal yön)
5. `mt-strateji-uzmani` çağır → KPI hedefler + ilk ay bütçe taslağı
6. `mt-rakip-arastirmaci` çağır → 3-5 rakip benchmark
7. `mt-aso-uzmani` çağır → ASO audit
8. Özet + sonraki adım önerisi

**Çıktı dosyaları**:
- `projects/<app-slug>/00-app-overview.md`
- `projects/<app-slug>/02-paid-ua-stratejisi.md`
- `projects/<app-slug>/04-rakip-analizleri/_benchmark-<tarih>.md`
- `projects/<app-slug>/05-aso-stratejisi.md`

**Bağımlılıklar**: 4 ajan + `projects/_sablon/`

**Maliyet**: Sıfır

**Örnek komutlar**:
- `/mt-yeni-uygulama`
- "Habit App'i ekleyelim"

---

## 5. `/mt-yeni-kampanya`

> **Yeni kampanya planla + setup — platform ajan + creative + strateji**

**Hangi agent'ı çağırır**: İlgili platform uzmanı + `mt-creative-yonetmeni` + `mt-strateji-uzmani`

**Akış**:
1. Hangi uygulama? (projects/ tarama)
2. Hangi platform? (Meta / TikTok / ASA / Google)
3. Hangi optimizasyon hedefi? (Install / Subscribe / Trial / Purchase)
4. Hedef coğrafya, dil
5. `mt-strateji-uzmani` çağır → bütçe + KPI
6. İlgili platform uzmanını çağır (AAC / SPC / ASA / AC plan)
7. `mt-creative-yonetmeni` çağır → creative brief + üretim
8. Maliyet onayı al, üretimi başlat
9. Çıktı dosyası kaydet

**Çıktı dosyaları**:
- `projects/<app>/kampanyalar/<platform>/<yyyy-mm-dd>-<adi>.md`
- `projects/<app>/creative/<tarih-brief>/`
- (varsa) Firebase event handoff MD

**Bağımlılıklar**: Platform ajan + mt-creative-yonetmeni + mt-strateji-uzmani

**Maliyet**: ⚠️ **Var** — creative üretim için fal.ai ($0.18-1+) + gerçek kampanya bütçesi

**Örnek komutlar**:
- `/mt-yeni-kampanya`
- "Meta'da AAC kampanya açalım"
- "ASA brand campaign başlat"

---

## 6. `/mt-creative-uretim`

> **Görsel + video + copy üretimi — fal.ai + Shotstack** ⭐

**Hangi agent'ı çağırır**: `mt-creative-yonetmeni`

**Akış**:
1. Brief al (kullanıcı veya bir önceki skill'den)
2. Hangi mod? (Brief→Üretim / Copy / A/B Set / Revizyon / Trend Research)
3. mt-creative-yonetmeni pipeline'ı yönet:
   - Library tarama
   - Task tipi belirleme
   - Model seçimi (favori → katalog → recommend)
   - **Maliyet hesabı + kullanıcı onayı zorunlu**
   - fal.ai üretim (run_model veya submit_job)
   - **Vision 8-checklist kalite gate**
   - (Video ise) Shotstack post-prod
   - Çıktı kaydet + favori-modeller güncelle

**Çıktı dosyaları**:
- `projects/<app>/creative/<yyyy-mm-dd>-<brief-adi>/` klasörü
  - `gorseller/`, `videolar/`, `copy/`, `kalite-raporu.md`, `brief.md`, `notlar.md`
- `entegrasyonlar/fal-ai/favori-modeller.md` (öğrenen sistem)

**Bağımlılıklar**: mt-creative-yonetmeni + fal.ai MCP + Shotstack MCP

**Maliyet**: ⚠️ **Var** — fal.ai per asset
- Tipik brief (Schnell draft + Pro final two-stage): $0.18-$1.50
- Video (Kling 15s): $1-3
- **Onay zorunlu** her üretim öncesi

**Örnek komutlar**:
- `/mt-creative-uretim`
- "Reels için video üret"
- "5 image varyantı"

---

## 7. `/mt-rakip-analizi`

> **Rakip derinlemesine veya kategori benchmark**

**Hangi agent'ı çağırır**: `mt-rakip-arastirmaci`

**Akış**:
1. Mod seçimi (tek rakip / benchmark / yön / güncelleme)
2. Rakip(ler) adı veya App Store URL al
3. Storefront(lar) seç
4. mt-rakip-arastirmaci ajan çağır
5. Public kaynak tarama (App Store, Meta Ad Library, TikTok Creative Center, Google Ads Transparency, reviews)
6. Yapılandırılmış rapor üretim
7. "Bizim için öğretiler" bölümü ekle

**Çıktı dosyaları**:
- `projects/<app>/rakip-analizleri/<rakip-slug>.md` (tek rakip)
- `projects/<app>/rakip-analizleri/_benchmark-<tarih>.md` (kategori mode)

**Bağımlılıklar**: mt-rakip-arastirmaci

**Maliyet**: Sıfır (WebSearch + WebFetch built-in)

**Örnek komutlar**:
- `/mt-rakip-analizi`
- "Streaks app'i analiz et"
- "Habit kategorisi rakipler"

---

## 8. `/mt-butce-planla`

> **Aylık bütçe planı + KPI hedef + haftalık checkpoint'ler**

**Hangi agent'ı çağırır**: `mt-strateji-uzmani` (Mod A)

**Akış**:
1. Periyot? (aylık default, üç aylık opsiyonel)
2. Toplam bütçe (memory + butce/ + kullanıcı)
3. mt-strateji-uzmani Mod A çağır
4. Geçen ay verisi okuma (raporlar/ + RevenueCat)
5. KPI hedefler belirle
6. Uygulama × kanal allocation
7. 4 haftalık checkpoint + eşikler (yeşil/sarı/kırmızı ışık)
8. Erken revize tetikleyicileri
9. Çıktı yaz

**Çıktı dosyaları**:
- `butce/<yyyy-mm>.md`
- `projects/<app>/02-paid-ua-stratejisi.md`'ye "Bütçe & KPI" bölümü append

**Bağımlılıklar**: mt-strateji-uzmani + (opsiyonel) mt-kampanya-analisti (geçen ay verisi)

**Maliyet**: Sıfır

**Örnek komutlar**:
- `/mt-butce-planla`
- "Haziran bütçesi"
- "$500 nasıl dağıtmalı?"

---

## 9. `/mt-haftalik-rapor`

> **Haftalık performans review + aksiyon listesi**

**Hangi agent'ı çağırır**: `mt-kampanya-analisti` (Mod A)

**Akış**:
1. Periyot? (default: son 7 gün)
2. Hangi uygulama(lar)?
3. mt-kampanya-analisti Mod A çağır
4. RevenueCat'ten son 7 gün veri
5. raporlar/ önceki rapor karşılaştırma
6. Manuel veri girişi (gerekirse)
7. Checkpoint okuma (`butce/<yyyy-mm>.md`)
8. KPI hesap + plan vs gerçek
9. Aksiyon listesi (**ikili öneri** — yön + spesifik rakam)
10. **Büyük sapma (%30+) → otomatik mt-strateji-uzmani çağır**
11. Çıktı

**Çıktı dosyaları**:
- `raporlar/<yyyy-mm-dd>-haftalik.md`

**Bağımlılıklar**: mt-kampanya-analisti + RevenueCat MCP + (varsa) `butce/<yyyy-mm>.md`

**Maliyet**: Sıfır

**Phase 4'te**: Scheduled task (Pazartesi 09:00) ile otomatize edilecek

**Örnek komutlar**:
- `/mt-haftalik-rapor`
- "Bu hafta kampanyalar nasıl?"
- "Haftayı kapat"

---

## 10. `/mt-aylik-strateji`

> **Ay sonu retro + sonraki ay planı — 2 ajan birlikte**

**Hangi agent'ı çağırır**: `mt-kampanya-analisti` (Mod E) + `mt-strateji-uzmani` (Mod A)

**Akış**:
1. Hangi ay biten? (default: geçen ay)
2. **mt-kampanya-analisti Mod E (Retrospektif)**:
   - Geçen ayın tüm haftalık raporları topla
   - Plan vs gerçek karşılaştırma
   - Kazanan/kaybeden kampanyalar + öğrenilenler
   - Retro çıktı dosyası
3. **mt-strateji-uzmani Mod A (Sonraki Ay Plan)**:
   - Retro'yu input al
   - Yeni KPI + allocation + checkpoint'ler
   - Plan çıktı dosyası

**Çıktı dosyaları**:
- `raporlar/<yyyy-mm>-aylik-retro.md`
- `butce/<yyyy-mm-next>.md`

**Bağımlılıklar**: mt-kampanya-analisti + mt-strateji-uzmani

**Maliyet**: Sıfır

**Phase 4'te**: Scheduled task (ayın 1'i 09:00) ile otomatize edilecek

**Örnek komutlar**:
- `/mt-aylik-strateji`
- "Mayıs retrospektif + Haziran planı"

---

## 11. `/mt-revenuecat-ozet`

> **Subscription özet (MRR, ARR, churn, cohort, paywall)**

**Hangi agent'ı çağırır**: `mt-kampanya-analisti` + RevenueCat MCP

**Akış**:
1. Periyot? (default: son 30 gün)
2. Hangi uygulama? (RevenueCat'te proje seç)
3. RevenueCat MCP çağrıları:
   - `list-projects`, `list-apps`
   - `get-overview-metrics` (MRR / ARR / churn)
   - `get-revenue-metric` (revenue zaman serisi)
   - `list-subscriptions`, `list-purchases`
   - `get-customer-center-config` (paywall info)
4. mt-kampanya-analisti yorumu (cohort, trial→sub)
5. Çıktı

**Çıktı dosyaları**:
- `projects/<app>/raporlar/revenuecat/<yyyy-mm-dd>.md`

**Bağımlılıklar**: RevenueCat MCP + mt-kampanya-analisti

**Maliyet**: Sıfır

**Phase 4'te**: Scheduled task (günlük 18:00) ile otomatize edilecek

**Örnek komutlar**:
- `/mt-revenuecat-ozet`
- "Son 30 gün subscription özet"
- "MRR nasıl"

---

## 12. `/mt-api-entegrasyon`

> **Yeni API/MCP entegre et — token, OAuth, MCP add**

**Hangi agent'ı çağırır**: `mt-entegrasyon-kurucu`

**Akış**:
1. Hangi platform / entegrasyon?
2. Mod? (yeni kurulum / yenileme / MCP ekleme / debug)
3. mt-entegrasyon-kurucu çağır
4. Developer hesabı kontrol
5. Token alma akışı (OAuth / JWT / API key)
6. Scope seçimi (minimum)
7. `.env` güncelleme
8. MCP ekleme (`claude mcp add ...`)
9. Test çağrısı (curl)
10. `setup-notlari.md`'ye **adım adım** yaz
11. `kurulu-entegrasyonlar.md` update

**Çıktı dosyaları**:
- `entegrasyonlar/<platform>/setup-notlari.md` (detaylı log)
- `.env` güncelleme
- `entegrasyonlar/kurulu-entegrasyonlar.md` update

**Bağımlılıklar**: mt-entegrasyon-kurucu + mcp-registry MCP

**Maliyet**: Doğrudan yok — API kullanımı maliyete neden olabilir

**Örnek komutlar**:
- `/mt-api-entegrasyon`
- "Meta Marketing API kuralım"
- "TikTok için MCP"

---

## 13. `/mt-aso-audit`

> **10 boyutlu ASO denetimi (aylık)**

**Hangi agent'ı çağırır**: `mt-aso-uzmani` (Mod A)

**Akış**:
1. Hangi uygulama?
2. App Store URL (kullanıcı veya `00-app-overview.md`)
3. Hangi storefront(lar)?
4. mt-aso-uzmani Mod A çağır
5. WebFetch App Store sayfa
6. 10 boyutta skor:
   - Title (30 char) — Subtitle (30 char) — Keywords field (100 char)
   - Description — Screenshots — İkon — Preview video
   - Localization — Rating ortalama — Review velocity
7. Top 5 iyileştirme
8. Sonraki adımlar (screenshot → mt-creative-yonetmeni, CPP → mt-apple-search-ads-uzmani)
9. Çıktı

**Çıktı dosyaları**:
- `projects/<app>/05-aso-stratejisi.md` (update)

**Bağımlılıklar**: mt-aso-uzmani

**Maliyet**: Sıfır

**Örnek komutlar**:
- `/mt-aso-audit`
- "Habit App ASO denetle"
- "App Store listing skor"

---

# 🎯 Otomatik Tetikleme Örnekleri

Sistem doğal Türkçe ile çalışır. Slash komuta gerek yok — Claude `TETIKLEME-SOZLESMESI.md`'deki kuralları okur, otomatik doğru ajanı/skill'i seçer.

## Tipik Sohbetler

### Eğitim & öğrenme

```
Sen:     "CPI nedir?"
Sistem:  mt-marketing-tutor (Standard Mode) tetiklenir
         → Tam format açıklama + SOZLUK.md'ye ekleme

Sen:     "Öğrenmeye başlayalım"
Sistem:  /mt-ogren skill tetiklenir → tutor Curriculum Mode
         → Modül 1'den başlar (veya kaldığı yerden devam)

Sen:     "Anlamadım, biraz daha açar mısın?"
Sistem:  mt-marketing-tutor tetiklenir
         → Önceki konuyu farklı açıdan tekrar
```

### Hesap & kurulum

```
Sen:     "Meta'da hesap açmak istiyorum"
Sistem:  mt-hesap-kurulum-rehberi tetiklenir (insan-kayıt)
         → /mt-hesap-ac skill akışı

Sen:     "Meta API token nasıl alırım?"
Sistem:  mt-entegrasyon-kurucu tetiklenir (makine-erişim)
         → /mt-api-entegrasyon skill akışı

Sen:     "Şahıs şirketi açmalı mıyım?"
Sistem:  mt-hesap-kurulum-rehberi REDDEDER
         → "Bu hukuki karar, mali müşavire yönlendir"
```

### Strateji & operasyon

```
Sen:     "Hangi kanaldan başlamalıyım?"
Sistem:  mt-paid-ua-uzmani tetiklenir (YÖN)
         → Kanal mix önerisi

Sen:     "Bu ay $500'ümü nasıl bölmeli?"
Sistem:  mt-strateji-uzmani tetiklenir (PARA + KPI)
         → /mt-butce-planla skill akışı

Sen:     "Bu hafta kampanyalar nasıl?"
Sistem:  mt-kampanya-analisti tetiklenir (DATA)
         → /mt-haftalik-rapor skill akışı

Sen:     "Meta'da AAC kampanyası kuracağım"
Sistem:  mt-meta-ads-uzmani tetiklenir (PLATFORM)
         → Setup adımları
```

### Creative üretim

```
Sen:     "Reels için video üret"
Sistem:  mt-creative-yonetmeni tetiklenir
         → /mt-creative-uretim skill akışı
         → MALIYET ONAYI sorulur → üretim başlar

Sen:     "Mevcut creative'i revize et, logoyu büyült"
Sistem:  mt-creative-yonetmeni Mod D (Revizyon)
         → Image edit + onay + üretim

Sen:     "Bu hafta TikTok'ta hangi trend var?"
Sistem:  mt-creative-yonetmeni Mod E (Trend Research)
         → WebSearch ile TikTok Creative Center taraması
```

### Rakip & ASO

```
Sen:     "Streaks app'ini analiz et"
Sistem:  mt-rakip-arastirmaci tetiklenir
         → /mt-rakip-analizi skill akışı

Sen:     "Kendi ASO'mu denetle"
Sistem:  mt-aso-uzmani tetiklenir
         → /mt-aso-audit skill akışı

Sen:     "Custom Product Page yaratmak istiyorum"
Sistem:  mt-aso-uzmani tetiklenir (CPP yaratma)
         → mt-apple-search-ads-uzmani'ne devir (CPP bağlama)
```

## Çakışma Çözüm Örnekleri

Bazı kelimeler birden fazla ajanla eşleşebilir. `TETIKLEME-SOZLESMESI.md` Bölüm D çözer:

| Belirsiz İfade | Şu varsa → bu ajan | Diğer durum → bu ajan |
|---|---|---|
| "Meta'ya bağlanmak" | "hesap yok" / "ilk kurulum" → mt-hesap-kurulum-rehberi | "API" / "token" → mt-entegrasyon-kurucu |
| "Bütçe" | "Nasıl dağıtmalıyım" → mt-strateji-uzmani | "Bu ay nereye gitti" → mt-kampanya-analisti |
| "Keyword" | App Store organik → mt-aso-uzmani | ASA kampanyası → mt-apple-search-ads-uzmani |
| "Performans" | Veri okuma + karar → mt-kampanya-analisti | Strateji değiştirme → mt-strateji-uzmani |
| "Strateji" | Kanal mix / funnel → mt-paid-ua-uzmani | Bütçe / KPI / aylık → mt-strateji-uzmani |

Tam çakışma tablosu: [`TETIKLEME-SOZLESMESI.md`](TETIKLEME-SOZLESMESI.md) — Bölüm D

---

# 🔌 5 Aktif MCP Entegrasyonu

| MCP | Durum | Kullanan |
|---|---|---|
| **RevenueCat** | ✅ Kurulu + test edildi | Subscription/LTV/paywall verisi |
| **fal.ai** | ✅ Kurulu + test edildi | 1000+ üretken model (FLUX, Kling, Veo, Ideogram, Seedance, Nano Banana) |
| **Shotstack** | ✅ Kurulu + OAuth | Video post-production (concat, captions, logo, music sync) |
| **mcp-registry** | ✅ Kurulu | Yeni MCP arama/keşif |
| **scheduled-tasks** | ✅ Kurulu | Cron otomasyonları (Phase 4'te aktive) |

---

# 📚 Eğitim Müfredatı (8 Modül)

`mt-marketing-tutor` **Curriculum Mode**'da sohbet halinde öğretir:

| # | Modül | Süre |
|---|---|---|
| 1 | Temeller (3 sütun + bütçe gerçekliği) | 15 dk |
| 2 | **Funnel ve Metrikler** (CPI, ROAS, LTV, retention) ⭐ kritik | 25 dk |
| 3 | **iOS Attribution Gerçekliği** (ATT, SKAN, AEM, modeled) ⭐ kritik | 25 dk |
| 4 | Kanal Mantığı (Meta/TikTok/ASA/Google ne için iyi) | 20 dk |
| 5 | Creative ve Mesaj (hook, PAS/AIDA/BAB/4Ps, native feel) | 25 dk |
| 6 | Strateji ve KPI (target CPI = LTV / N, payback) | 20 dk |
| 7 | Operasyonel Pratik (learning phase, scale matrix) | 20 dk |
| 8 | ASO İnce Ayar (keyword, screenshot CRO, CPP, localization) | 15 dk |

**Toplam**: ~3.5 saat sohbet halinde, etkileşimli, app-spesifik örneklerle.

---

# 🚀 Hızlı Başlangıç

### 1. Clone + setup

```bash
git clone https://github.com/severumut/MarketingTeam.git
cd MarketingTeam
cp .env.ornek .env
# .env içine token'ları yaz (FAL_KEY, SHOTSTACK_API_KEY, vb.)
```

### 2. Claude Code'da aç

```bash
claude
```

`CLAUDE.md` otomatik yüklenir — sistem hazır.

### 3. Öğrenmeye başla (önce öğren, sonra operasyona)

```
Öğrenmeye başlayalım
```

→ `mt-marketing-tutor` Curriculum Mode'da Modül 1'den başlar.

### 4. Operasyonel akış

```
/mt-yeni-uygulama          # Bir uygulamayı sisteme ekle
/mt-hesap-ac               # Reklam platformuna kayıt
/mt-api-entegrasyon        # API token'ları al
/mt-creative-uretim        # AI ile reklam görseli/videosu üret
/mt-yeni-kampanya          # Kampanya kur + canlıya al
/mt-haftalik-rapor         # Haftalık performans takibi
/mt-aylik-strateji         # Ay sonu retro + sonraki ay planı
```

---

# 🗂 Klasör Yapısı

```
MarketingTeam/
├── README.md                          ← Buradasın
├── BASLA-BURADAN.md                   ← Sıfırdan başlayanlar için 30 dk tur
├── CLAUDE.md                          ← Claude bu klasörde nasıl davranır
├── TETIKLEME-SOZLESMESI.md            ← Otomatik tetikleme kuralları
├── HIZLI-BASVURU.md                   ← Hangi soru → hangi ajan cheatsheet
├── SISTEM-REHBERI.md                  ← Markdown sistem dokümanı
├── sistem-rehberi.html                ← İnteraktif HTML dashboard
├── OGRENME-YOL-HARITASI.md            ← Eğitim müfredatı haritası
├── SOZLUK.md                          ← Marketing terim sözlüğü
├── ROADMAP.md                         ← Phase 0-4 yol haritası
│
├── .claude/
│   ├── agents/         ← 13 ajan (mt-* prefix'li)
│   └── skills/         ← 13 skill (mt-* prefix'li)
│
├── agent-rehberi/      ← Her ajan için kullanıcı rehberi
├── skill-rehberi/      ← Her skill için kullanıcı rehberi
│
├── bilgi-bankasi/
│   ├── 00-ogrenme/     ← 8 modüllük eğitim içeriği
│   ├── 01-temeller/    ← Marketing temelleri
│   ├── 02-paid-ua/     ← Ana ağırlık (Meta/TikTok/ASA/Google rehberleri)
│   ├── 03-content/     ← Trend research & viral hook library
│   ├── 04-aso/         ← App Store Optimization
│   ├── 05-attribution-ios/ ← SKAN, AEM, ATT detayları
│   ├── 06-monetization/ ← RevenueCat, paywall, pricing
│   ├── 07-araclar/     ← Creative pipeline (fal.ai + Shotstack)
│   ├── 08-entegrasyonlar/ ← API rehberleri
│   └── 09-playbooklar/ ← Hazır iş akışları
│
├── projects/           ← Kullanıcının uygulamaları (.gitignore'da)
├── entegrasyonlar/     ← API/MCP kurulum durumu
├── hesap-kurulumlari/  ← Platform kayıt süreçleri
├── butce/              ← Aylık bütçe planları
└── raporlar/           ← Haftalık/aylık performans raporları
```

---

# 📍 Sistem Durumu

### ✅ Tamamlanan Phase'ler

- **Phase 0 — İskelet** (2026-05-17): Klasör yapısı, kök dosyalar, sözleşmeler
- **Phase 1 — 13 Ajan** (2026-05-18): Tüm ajan prompt'ları + rehberleri, otomatik tetikleme test edildi
- **Phase 2 — 13 Skill** (2026-05-18): Tüm skill akışları, multi-agent zincirleme
- **Bonus**: Creative pipeline canlı (fal.ai + Shotstack test edildi), Curriculum Mode tutor, HTML dashboard

### ⏳ Bekleyen Phase'ler

- **Phase 3 — Bilgi Bankası Derinleştirme**: Konu konu detay MD'ler (ajanlar zamanla otomatik büyütür)
- **Phase 4 — Operasyonel**: İlk gerçek hesap açma, API entegrasyonu, kampanya, scheduled task otomasyonu

---

# 🎨 Creative Üretim Pipeline (Highlight)

Sistemin en güçlü parçası — **gerçek dosya üretimi**:

```
Kullanıcı Türkçe brief
       ↓
┌─────────────────────────────────┐
│ Claude (orkestrator)            │
│ • Brief parse                   │
│ • Türkçe → EN prompt mühendisliği│
│ • Copy formülü (PAS/AIDA/BAB)   │
│ • Task-to-model seçimi          │
│ • Maliyet onayı                 │
└─────────────────────────────────┘
       ↓
┌─────────────────────────────────┐
│ fal.ai MCP (ÜRETİM)             │
│ • Image: FLUX, Nano Banana,     │
│   Ideogram (text rendering)     │
│ • Video: Kling, Veo, Sora,      │
│   Seedance (ByteDance/TikTok)   │
│ • Audio: TTS, music             │
└─────────────────────────────────┘
       ↓
┌─────────────────────────────────┐
│ Claude vision — kalite gate     │
│ 8 checklist (kompozisyon, text  │
│ spelling, ad policy, artifact)  │
│ Skor < 60/80 → otomatik retry   │
└─────────────────────────────────┘
       ↓
┌─────────────────────────────────┐
│ Shotstack MCP (POST-PRODUCTION) │
│ • Concat (hook+body+outro)      │
│ • Captions (5 hazır preset)     │
│ • Logo/watermark overlay        │
│ • Bulk varyant (template+merge) │
└─────────────────────────────────┘
       ↓
projects/<app>/creative/...
```

**Maliyet kontrolü**: Her üretim öncesi kullanıcı onayı zorunlu. Two-stage strategy (Schnell draft → Pro final) ile tipik brief ~$0.18-1.50.

**Öğrenen sistem**: Beğenilen modeller `entegrasyonlar/fal-ai/favori-modeller.md`'ye eklenir, AI önce buraya bakar.

---

# 🧠 Tasarım Prensipleri

1. **`mt-` prefix kuralı** — Tüm ajan/skill `mt-` ile başlar, namespace güvenliği
2. **Otomatik tetikleme** — Doğal Türkçe → ajan/skill otomatik seçim (`TETIKLEME-SOZLESMESI.md`)
3. **Manuel zorlama** — `@mt-<ajan>` veya `/mt-<skill>` ile otomatik seçim bypass
4. **Memory disiplini** — Her ajan kendi memory dosyasında state tutar, oturumlar arası devam edilebilir
5. **Hassas bilgi güvenliği** — Token/key sadece `.env` ve `token-vault.md` (gitignore'da), MD'ye asla yazılmaz
6. **Sınır netliği** — Her ajanın "yapmadıkları" listesi açık, çakışma kuralları `TETIKLEME-SOZLESMESI.md` Bölüm D'de
7. **Yavaş mod tasarım** — Her ajan/skill kullanıcıyla beraber tartışılıp yazıldı, kararlar dokümante

---

# 📖 Dokümantasyon

| Dosya | İçerik |
|---|---|
| [BASLA-BURADAN.md](BASLA-BURADAN.md) | Sıfırdan başlayanlar için 30 dakikalık tur |
| [CLAUDE.md](CLAUDE.md) | Claude bu klasörde otomatik yüklenen orkestrasyon dosyası |
| [TETIKLEME-SOZLESMESI.md](TETIKLEME-SOZLESMESI.md) | Otomatik tetikleme kuralları + çakışma çözüm tablosu |
| [HIZLI-BASVURU.md](HIZLI-BASVURU.md) | Hangi soru → hangi ajan/skill cheatsheet |
| [SISTEM-REHBERI.md](SISTEM-REHBERI.md) | Tüm ajan + skill + MCP'lerin markdown referansı |
| [sistem-rehberi.html](sistem-rehberi.html) | **Interaktif HTML dashboard** (tıkla → modal ile detay) |
| [OGRENME-YOL-HARITASI.md](OGRENME-YOL-HARITASI.md) | 8 modüllük eğitim müfredatı haritası |
| [SOZLUK.md](SOZLUK.md) | Marketing terim sözlüğü (ajanlar otomatik büyütür) |
| [ROADMAP.md](ROADMAP.md) | Phase 0-4 yol haritası + ileriye dönük geliştirmeler |

---

# 🔐 Gizlilik & Güvenlik

- `.env`, `entegrasyonlar/token-vault.md`, `hesap-kurulumlari/**/private.md` → **gitignore'da**, asla commit edilmez
- `projects/*/private/` → kişisel/hassas notlar
- TCKN, kart bilgisi, parola → MD'ye **asla** yazılmaz, parola yöneticisi kullanılır
- Token expiry takibi → `mt-entegrasyon-kurucu` 7 gün kala uyarı verir

---

# 🛠 Bağımlılıklar

- **[Claude Code](https://claude.com/claude-code)** — Anthropic'in agentic CLI ortamı
- **MCP server'lar** (otomatik kurulur): RevenueCat, fal.ai, Shotstack, mcp-registry, scheduled-tasks
- **API hesapları** (kullanıcı kendi alır):
  - fal.ai — [fal.ai/dashboard/keys](https://fal.ai/dashboard/keys)
  - Shotstack — [app.shotstack.io](https://app.shotstack.io)
  - RevenueCat — [revenuecat.com](https://www.revenuecat.com)
  - Apple Developer (ASA için)
  - Meta Business / TikTok for Business / Google Ads (Phase 4)

---

# 📝 Lisans & Kullanım

Bu repo **kişisel kullanım** için tasarlanmış bir indie iOS developer marketing sistemidir. Public olarak paylaşılmıştır çünkü:

- Başka indie geliştiriciler benzer bir sistem kurmak isterse referans olur
- Claude Code üzerinde multi-agent + skill mimarisi örneği olarak inceleyebilirler
- Açık kaynak prensibi — bilgi paylaşılır

Kendi kullanımına adapte etmek istersen:
1. Fork et
2. `CLAUDE.md` ve `TETIKLEME-SOZLESMESI.md`'yi kendi profilline göre güncelle
3. `marketing_global_state.md` memory'sini kendi uygulamaların bilgisi ile doldur
4. Hesap kurulum + API entegrasyonlarını kendi hesaplarınla yap

---

# 🤝 Katkı

Bu kişisel bir sistem — direkt PR beklenmez, ama:
- Issue açabilirsiniz (öneri, fikir, sorulanlar)
- Discussions'ta multi-agent mimarisi tartışılabilir
- Fork edip kendi versiyonunuzu yapabilirsiniz

---

# 👤 Geliştirici

**Musa Umut Sever** — Türkiye'den indie iOS developer
- 📱 App Store: [Geliştirici sayfası](https://apps.apple.com/tr/developer/musa-umut-sever/id1541127525)
- 🎮 Mevcut uygulamalar: Fairora (AI masal), What The Emoji? (kelime bulmaca), Blur Film (sinema trivia)

Bu sistem **kendi indie marketing operasyonum için** tasarlandı. Belki sana da fayda eder. 🚀
