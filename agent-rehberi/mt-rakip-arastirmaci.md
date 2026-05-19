# mt-rakip-arastirmaci

Rakip & market araştırma uzmanı. Belirtilen rakip uygulamaları derinlemesine analiz eder: **ASO (App Store listing) + pricing + paywall + ad library + review trendleri + creative tarzları**. WebSearch + WebFetch ile public kaynaklardan veri çeker, yapılandırılmış rapor üretir.

> Diğer ajanlar bu raporları **input** olarak kullanır (creative ilham, pricing kararı, kategori benchmark).

---

## ⚠️ Geliştirilecek (Phase 4+ notu)

**Bu ajan şu an basit haliyle**. Sadece public kaynaklar (App Store, Meta Ad Library, TikTok Creative Center, Google Ads Transparency, App Store reviews) + WebSearch ile çalışır.

**Gelecekte güçlendirilecek** — kullanıcının planı:
- Bir **ASO tool** (Sensor Tower / Data.ai / AppTweak / ASOmobile vb.) abone olunabilir
- Bu tool'un **MCP'si bağlanırsa** → `mt-rakip-arastirmaci`'ye yeni veri kaynağı verilir:
  - Tahmini download / revenue (gerçek, public değil)
  - Keyword ranking history
  - Competitor keyword overlap
  - Country-specific market share
  - Review sentiment analizi (otomatize)
  - Paywall A/B inference (tool sağlıyorsa)

**Eylem planı (ileride)**:
1. ASO tool seç (önerim: AppTweak — indie dostu, MCP ekosistemi var)
2. Subscription al
3. `mt-entegrasyon-kurucu` ile MCP bağla
4. Bu ajan rehberi + prompt güncellensin (yeni veri kaynağı + yeni mod)

**Şu an**: Basit haliyle dursun, paid odağı bozma. Bir uygulama launch'ından sonra organik trafik ölçüldüğünde tekrar değerlendirilir.

---

## Bu ajan ne yapar?

### Mod A — Tek Rakip Derinlemesine Analiz
- App Store listing tarama: title, subtitle, keywords (tahmini), description, screenshots, preview video, ikon
- Pricing: free/paid, IAP tier'ları, subscription fiyatları (TR + US fark)
- Paywall akışı: ekran ekran kullanıcı yolculuğu (screenshot inceleme)
- **Ad Library tarama**: Meta Ad Library, TikTok Creative Center, Google Ads Transparency
- Review trendleri: son 30 gün ortalama, sık şikayetler, sık övgüler
- Estimated downloads (Sensor Tower / Data.ai public datadan WebSearch ile tahmin)
- Çıktı: `projects/<app>/rakip-analizleri/<rakip-slug>.md`

### Mod B — Kategori Benchmark (çoklu rakip)
- 3-5 rakip karşılaştırma
- ASO skoru (subjektif 1-10)
- Pricing aralığı
- Ortak paywall stratejileri
- Ortak creative trendleri (Ad Library'dan)
- Çıktı: `projects/<app>/rakip-analizleri/_benchmark-<yyyy-mm-dd>.md`

### Mod C — Belirli Bir Yön Analizi
- Sadece "paywall karşılaştırması" veya "ad creative analizi" gibi spesifik yön
- Hızlı, dar kapsamlı çıktı

### Mod D — Yeni Hamle / Güncelleme Takibi
- "X uygulaması yeni özellik çıkarmış, ne yapıyor?"
- Son güncelleme tarihi, what's new, screenshot değişiklikleri
- Rakibin pivot/strategy değişikliği tespit

### Yapmadığı
- Senin uygulamanın ASO'su → `mt-aso-uzmani`
- Rakipten esinlenerek creative üretmek → `mt-creative-yonetmeni` (sen bu ajanın raporunu input olarak verirsin)
- Pricing kararı → `mt-strateji-uzmani` (rapor verisini kullanır)
- Kavram öğrenme → `mt-marketing-tutor`

---

## Neden ayrı bir ajan?

Rakip analizi **internetten veri toplama + yorumlama + raporlama** birleşimi. Diğer ajanlar bunu **input** olarak tüketir. Ayrı tutmak çünkü:
- Farklı veri kaynakları (ad library, app store, review siteleri)
- WebSearch/WebFetch yoğun
- Raporlama formatı standart
- Periyodik (ay/quarter başı), günlük değil

---

## Public veri kaynakları (kullanılır)

- **App Store** (apps.apple.com) — listing, screenshots, description, fiyat
- **Meta Ad Library** (facebook.com/ads/library) — aktif reklamlar
- **TikTok Creative Center** (ads.tiktok.com/business/creativecenter) — top ads, hashtags
- **Google Ads Transparency Center** (adstransparency.google.com) — Google reklamları
- **App Store Reviews** (web üzerinden) — kullanıcı geri bildirimi
- **Sensor Tower / Data.ai blog** — public charts, ranking
- **Reddit / IndieHackers** — community feedback
- **Twitter/X** — launch announcements, brand voice

---

## Ne zaman çağırılmalı?

- "X uygulamasını analiz et"
- "Habit tracker kategorisindeki rakipleri incele"
- "Y app'in paywall'una bak"
- "Bu kategoride hangi creative tarzı popüler?"
- "Rakip pricing analiz et"
- "Z uygulaması yeni güncelleme yaptı, ne değiştirdi?"
- "/mt-rakip-analizi"

## Ne zaman çağırılmamalı?

| Soru | Doğru ajan |
|---|---|
| "Kendi ASO'mu denetle" | `mt-aso-uzmani` |
| "Bu rakip creative'ini taklit et" | `mt-creative-yonetmeni` (raporu input olarak kullanır) |
| "Pricing değiştirelim" | `mt-strateji-uzmani` |
| "Subscription nedir?" | `mt-marketing-tutor` |
| "Hangi kanaldan başlamalı" | `mt-paid-ua-uzmani` |

---

## Nasıl çağırılır?

**Doğal dil**:
- "X uygulamasını incele"
- "Bu kategoride rakipler ne yapıyor?"
- "Ad library tara"

**Manuel**: `@mt-rakip-arastirmaci <sorum>`

**Skill üzerinden**: `/mt-rakip-analizi`

---

## Örnek prompt'lar

1. *"Habit tracker kategorisinde Streaks ve Productive uygulamalarını derinlemesine analiz et"*
2. *"Calm app paywall'unu incele, akış nasıl"*
3. *"Habitica son güncellemede ne değiştirmiş, screenshot'ları farklı mı?"*
4. *"TikTok'ta finance app reklamlarında hangi hook'lar popüler?"*
5. *"5 fitness app pricing karşılaştırması"*

---

## Çıktılar

### `projects/<app>/rakip-analizleri/<rakip-slug>.md`

```markdown
# Rakip Analizi: <Rakip Adı>

**Tarih**: YYYY-MM-DD
**App Store ID**: 1234567890
**Kategori**: Health & Fitness
**Geliştirici**: ...

## ASO Snapshot
- **Title**: "..." (28 karakter)
- **Subtitle**: "..." (29 karakter)
- **Tahmini keyword'ler**: habit, tracker, daily, goal, streak (inference)
- **Description ilk 3 satır**: "..."
- **İkon**: <renk + tarz tanımı>
- **Screenshots**: 5 adet — sıralama: hero, feature, social proof, paywall hint, CTA
- **Preview video**: var/yok, süre, tarz

## Pricing
- Free/Paid: Freemium (free download + IAP)
- IAP:
  - Monthly: $4.99 (TR: ₺149.99)
  - Yearly: $29.99 (TR: ₺899.99)
  - Lifetime: $79.99
- Free tier kısıtları: ...

## Paywall Akışı
1. Onboarding 3 ekran
2. Paywall trigger: ilk gün sonu / X feature kullanımı
3. Paywall tasarımı: hero görsel + 3 benefit + pricing toggle (yearly highlighted)
4. Try Free 7-day default seçim
5. Skip option: az görünür, alttaki "x" butonu

## Ad Library
### Meta
- Aktif reklam sayısı: X
- Format dağılımı: %60 video, %40 image
- En çok kullanılan hook: "Build habits in 30 days"
- Creative tarz: minimal, lifestyle photography

### TikTok
- Spark Ads: X creator
- Tarz: AI-UGC + selfie style

### Google
- Asset library: text-heavy, screenshot odaklı

## Review Trendleri (son 30 gün)
- Ortalama: 4.7 / 5
- Sık övgüler: "Easy to use", "Streak motivation"
- Sık şikayetler: "Subscription too expensive", "Sync issues"

## Tahmini Download / Revenue
- Sensor Tower public (varsa): Aylık 50K install, $200K revenue

## Pivot / Güncelleme Notları
- Son güncelleme: YYYY-MM-DD
- What's new: ...
- Trend: ...

## Bizim için öğretiler
1. Pricing tier yapısı bizden agresif — düşük yıllık öneri
2. Paywall'da social proof yok — bizim için ayrım fırsatı
3. Reels reklamında "30 günde sonuç" mesajı baskın — alternatif hook bulalım
```

### `projects/<app>/rakip-analizleri/_benchmark-<yyyy-mm-dd>.md`

Çoklu rakip karşılaştırma tablosu + ortak trendler + bizim için aksiyonlar.

---

## Sınırları

- Kendi ASO denetimi → `mt-aso-uzmani`
- Creative üretim → `mt-creative-yonetmeni` (rapor verisini input alır)
- Pricing kararı → `mt-strateji-uzmani`
- Kavram öğretim → `mt-marketing-tutor`

---

## Bağlantılı ajanlar / skill'ler

- **Veri tüketici**: `mt-creative-yonetmeni` (Mod E trend araştırma için ek input), `mt-aso-uzmani` (kategoride benchmark), `mt-strateji-uzmani` (pricing karşılaştırma)
- **Skill bağlantısı**: `/mt-rakip-analizi`, `/mt-yeni-uygulama` (ilk app onboarding sırasında ön analiz)

---

## İlgili bilgi-bankası dosyaları

- `bilgi-bankasi/07-araclar/aso-araclari.md`
- `bilgi-bankasi/02-paid-ua/creative-best-practices.md`
- `bilgi-bankasi/04-aso/keyword-research-rehberi.md`

---

## Tetikleyici test cümleleri

| Cümle | Beklenen |
|---|---|
| "X uygulamasını analiz et" | ✅ tetiklenmeli |
| "Habit tracker kategorisinde rakipler" | ✅ tetiklenmeli |
| "Calm paywall'una bak" | ✅ tetiklenmeli |
| "TikTok'ta finance app reklamları" | ✅ tetiklenmeli |
| "5 fitness app pricing karşılaştır" | ✅ tetiklenmeli |
| "Kendi ASO'mu denetle" | ❌ → `mt-aso-uzmani` |
| "Bu rakibin creative'ini taklit et üret" | ❌ → `mt-creative-yonetmeni` |
| "Pricing değişimi yapalım" | ❌ → `mt-strateji-uzmani` |
