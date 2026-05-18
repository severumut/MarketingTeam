# TETIKLEME-SOZLESMESI.md

Bu dosya, **ajan ve skill'lerin otomatik tetikleme kalitesini** garanti altına alır. Her ajan/skill yazılırken description alanı bu sözleşmeye göre yazılır.

Bu sözleşme yaşayan bir belgedir: Her Phase 1 ve Phase 2 turunda ilgili ajan/skill'in tetikleyici havuzu ve test cümleleri bu dosyaya **eklenir**.

---

## Bölüm A — Agent Description YAML Şablonu

Her `.claude/agents/<ad>.md` dosyası şu YAML başlığıyla başlar:

```yaml
---
name: mt-<ajan-adi>
description: |
  <Bir cümlede ne yaptığı + uzmanlık alanı>.
  TETİKLE: <tetikleyici ifadeler virgülle ayrılmış, 5-15 adet>.
  TETIKLEME: <bu ajan için YANLIŞ olan durumlar + hangi ajana yönlendir>.
  ÖRNEK SORULAR: "<örnek 1>", "<örnek 2>", "<örnek 3>".
model: inherit
allowed-tools: [<tool listesi>]
---
```

**Kurallar:**
- `description` alanı tek satır olabilir ama içerikte 3 kısım ayrı ayrı yer alır: TETİKLE / TETIKLEME / ÖRNEK SORULAR.
- TETİKLE listesi sinonim, Türkçe + İngilizce karışık olabilir (kullanıcı her ikisini de yazabilir).
- TETIKLEME listesi yanlış pozitif önler — bu ajanın **yapmaması** gereken durumlar + hangi ajana yönlendirileceği.
- ÖRNEK SORULAR Claude'un benzerlik için referans aldığı şablondur.

---

## Bölüm B — Skill Description YAML Şablonu

Her `.claude/skills/<ad>/SKILL.md` dosyası:

```yaml
---
name: mt-<skill-adi>
description: |
  <Bir cümlede ne yaptığı>.
  TRIGGER when: <tetikleyici durumlar>.
  SKIP when: <çalıştırılmaması gereken durumlar>.
  ÖRNEK KOMUTLAR: "/mt-<adi>", "<doğal dil örneği>".
user-invocable: true
---
```

---

## Bölüm C — Tetikleyici Kelime Havuzu

Her ajan/skill için 5-15 tetikleyici ifade aşağıda listelenir. Phase 1 ve Phase 2 ilerledikçe ajan/skill yazıldıkça **bu tabloya yeni satırlar eklenir**.

### Ajanlar

| Ajan | Tetikleyici İfadeler |
|---|---|
| `mt-marketing-tutor` | "X nedir", "Y ne demek", "kavram açıkla", "fark nedir", "terim", "anlamadım", "ne anlama geliyor", "kısaca anlat" |
| `mt-hesap-kurulum-rehberi` | "hesap aç", "kayıt ol", "business manager kur", "ad account aç", "Meta'ya kaydolmak", "TikTok for Business hesabı", "vergi numarası", "doğrulama belgesi", "ödeme yöntemi ekle", "ilk kurulum", "platforma giriş" |
| `mt-paid-ua-uzmani` | "hangi kanaldan", "kanal mix", "kanal seçimi", "paid başlamak", "UA stratejisi", "funnel", "user acquisition", "ücretli reklam stratejisi" |
| `mt-meta-ads-uzmani` | "meta reklam", "facebook reklam", "instagram reklam", "advantage+", "AAC", "Advantage+ App Campaign", "AEM", "Aggregated Event Measurement", "9 event limit", "SKAN setup", "SKAdNetwork postback", "Conversion API", "CAPI", "domain verification", "Meta pixel", "Meta SDK", "Advantage+ Audience", "Custom Audience", "Lookalike", "LAL", "Reels reklam spec", "Meta cost cap", "Meta bid cap", "CBO", "ABO", "modeled conversion" |
| `mt-tiktok-ads-uzmani` | "tiktok reklam", "tiktok ads", "tiktok kampanyası", "SPC", "Smart Performance Campaign", "spark ads", "spark code", "AEO", "App Event Optimization", "TikTok Events API", "TikTok pixel", "TikTok SDK", "TikTok domain verification", "hashtag targeting", "creator targeting", "TikTok Ads Manager", "TopView", "In-Feed Ad", "TikTok bidding", "TikTok cost cap" |
| `mt-apple-search-ads-uzmani` | "ASA", "Apple Search Ads", "App Store reklam", "search match", "discovery campaign", "search results campaign", "search tab campaign", "today tab campaign", "product pages campaign", "ASA basic", "ASA advanced", "negative keyword", "match type", "exact match", "broad match", "CPT bid", "ASA keyword", "brand campaign", "category campaign", "competitor campaign", "ASA storefront", "search terms report", "CPP bağla", "Custom Product Page bağla", "TTR", "tap-through rate" |
| `mt-google-ads-uzmani` | "Google Ads", "google reklam", "google kampanyası", "AC", "App Campaign", "Universal App Campaign", "UAC", "AC for Installs", "AC for Engagement", "Google Ads asset library", "Firebase event mapping", "Firebase Google Ads link", "conversion action", "Target CPI", "tCPA", "tROAS", "Google Ads bidding", "Google Ads SKAN", "Firebase event handoff", "Google headlines descriptions", "Google asset library spec" |
| `mt-creative-yonetmeni` | "reklam görseli", "ad creative", "screenshot başlık", "paywall görsel", "A/B test creative", "creative varyant", "ad copy yaz", "hook yaz" |
| `mt-content-uretici` | "tiktok video fikri", "reels", "shorts", "UGC creator", "content takvimi", "organik içerik", "viral video", "video script" |
| `mt-strateji-uzmani` | "bütçe nasıl", "bütçe dağılımı", "aylık plan", "üç aylık plan", "marketing stratejisi", "KPI", "hedef belirle", "allocation" |
| `mt-kampanya-analisti` | "performans nasıl", "kampanya analiz", "ROAS hesapla", "LTV hesapla", "kes mi devam mı", "scale et mi", "raporlama", "haftalık özet" |
| `mt-rakip-arastirmaci` | "rakip", "rakip ne yapıyor", "rakip analiz", "ad library", "creative center tarama", "rakip pricing", "rakip paywall", "competitor research" |
| `mt-aso-uzmani` | "ASO", "keyword research", "screenshot optimize", "title subtitle", "store listing", "lokalizasyon", "App Store optimization" |
| `mt-entegrasyon-kurucu` | "API bağla", "token al", "meta marketing API", "tiktok business API", "MCP kur", "programatik erişim", "developer account" |

### Skill'ler

| Skill | Tetikleyici İfadeler |
|---|---|
| `mt-terim-ogren` | (slash: `/mt-terim-ogren <terim>`) |
| `mt-yeni-uygulama` | "yeni uygulama ekledim", "uygulama eklemek istiyorum", "yeni app", "app launch" |
| `mt-hesap-ac` | "hesap aç" + platform adı, "platform kayıt", "ilk hesap kurulumu" |
| `mt-yeni-kampanya` | "yeni kampanya", "kampanya başlat", "kampanya kur" |
| `mt-creative-uretim` | "creative üret", "reklam görseli üret", "ad varyantı çıkar" |
| `mt-content-takvimi` | "content takvimi", "haftalık plan içerik", "TikTok takvimi" |
| `mt-rakip-analizi` | "rakip incele", "X uygulamasını analiz et" |
| `mt-butce-planla` | "bütçe planla", "ay başı bütçe", "bütçe dağılımı yap" |
| `mt-haftalik-rapor` | "haftalık rapor", "kampanya özet", "haftayı kapat" |
| `mt-aylik-strateji` | "aylık strateji", "ay sonu review", "sonraki ay planı" |
| `mt-revenuecat-ozet` | "revenuecat özet", "subscription rapor" |
| `mt-api-entegrasyon` | "API kur", "MCP ekle", "yeni entegrasyon" |
| `mt-aso-audit` | "ASO denetle", "ASO skoru çıkar", "store listing kontrol" |

---

## Bölüm D — Çakışma Kuralları

İki veya daha fazla ajanın tetikleyici kelimeleri aynı anda eşleştiğinde aşağıdaki tabloya göre karar verilir:

| Belirsiz İfade | Şu varsa → bu ajan | Diğer durum → bu ajan |
|---|---|---|
| "Meta'ya bağlanmak" | "hesap yok" / "ilk kurulum" / "kayıt" → `mt-hesap-kurulum-rehberi` | "API" / "token" / "programatik" → `mt-entegrasyon-kurucu` |
| "Kampanya açmak" | "ilk defa" / "sıfırdan" / "hangi" → `mt-paid-ua-uzmani` | Belirli platform varsa → ilgili platform uzmanı |
| "Reklam görseli" | Paid kampanya bağlamı → `mt-creative-yonetmeni` | Organik / TikTok native → `mt-content-uretici` |
| "Bütçe" | "Nasıl dağıtmalıyım" / "ay başı" → `mt-strateji-uzmani` | "Bu ay nereye gitti" / "ne kadar harcadım" → `mt-kampanya-analisti` |
| "Keyword" | App Store / organik bağlam → `mt-aso-uzmani` | ASA kampanyası → `mt-apple-search-ads-uzmani` |
| "Performans" | Veri okuma + karar → `mt-kampanya-analisti` | Strateji değiştirme → `mt-strateji-uzmani` |
| "Audience" | Meta / Facebook → `mt-meta-ads-uzmani` | Genel hedefleme stratejisi → `mt-paid-ua-uzmani` |
| "Hook" / "copy" | Paid reklam → `mt-creative-yonetmeni` | Organik video → `mt-content-uretici` |
| "Strateji" | "kanal mix / funnel / kanal seçimi" → `mt-paid-ua-uzmani` | "bütçe / KPI / aylık plan" → `mt-strateji-uzmani` |
| "Scale" | "scale mantığı" / "ne zaman scale" → `mt-paid-ua-uzmani` | "şu kampanyayı scale et" → `mt-kampanya-analisti` |
| "Hangi kanal" | Net platform yok / önerme → `mt-paid-ua-uzmani` | Net platform var → ilgili platform uzmanı |
| "Meta SDK / pixel" | Setup / kurulum → `mt-meta-ads-uzmani` | API / token / programatik → `mt-entegrasyon-kurucu` |
| "SKAN" | Meta tarafında setup → `mt-meta-ads-uzmani` | ASA tarafında setup → `mt-apple-search-ads-uzmani` (kavram → `mt-marketing-tutor`) |
| "AEM" / "domain verification" | Meta'ya özel — direkt → `mt-meta-ads-uzmani` | (çakışma yok) |
| "Modeled conversion" | "Ne demek / neden gecikiyor" → `mt-meta-ads-uzmani` (Meta'ya özel kavram) | Veri yorumlama → `mt-kampanya-analisti` |
| "Meta'da ROAS düşük" | "Ne yapmalıyım / scale" (veri analizi) → `mt-kampanya-analisti` | "Audience genişletmek istiyorum" (UI aksiyonu) → `mt-meta-ads-uzmani` |
| "TikTok video / creative" | Spark Code teknik bağlama → `mt-tiktok-ads-uzmani` | UGC creator post (bul/brief) → `mt-content-uretici`; brand-produced video → `mt-creative-yonetmeni` |
| "Creator" | Bulma / outreach / brief / anlaşma → `mt-content-uretici` | Spark Code geldi, bağlayalım → `mt-tiktok-ads-uzmani` |
| "TikTok Events API" / "TikTok SDK" | Ads Manager UI'da kurulum → `mt-tiktok-ads-uzmani` | Programatik token / Business API → `mt-entegrasyon-kurucu` |
| "AEO" / "Spark Ads" / "SPC" | TikTok'a özel — direkt → `mt-tiktok-ads-uzmani` | (çakışma yok) |
| "CPP" / "Custom Product Page" | App Store Connect'te yaratma (screenshot/video varyantı) → `mt-aso-uzmani` | ASA kampanyaya bağlama → `mt-apple-search-ads-uzmani` |
| "ASA Attribution" / "AdServices" | Ads Manager UI setup → `mt-apple-search-ads-uzmani` | API token / programatik erişim → `mt-entegrasyon-kurucu` |
| "App Store reklam" | ASA / Search Ads → `mt-apple-search-ads-uzmani` | App Store **listing** (title/subtitle/screenshot) → `mt-aso-uzmani` |
| "Search Terms Report" / "Brand Campaign" / "Discovery Campaign" | ASA'ya özel — direkt → `mt-apple-search-ads-uzmani` | (çakışma yok) |
| "Firebase event" | Hangi event maple / Google Ads'e link (strateji + UI) → `mt-google-ads-uzmani` | Firebase SDK kurulumu / event kodda trigger etme (kod yazma) → `mt-entegrasyon-kurucu` veya developer |
| "Conversion action" / "tCPA" / "tROAS" / "Target CPI" | Google Ads'e özel — direkt → `mt-google-ads-uzmani` | (çakışma yok) |
| "Asset library" | Google AC asset pool yaklaşımı → `mt-google-ads-uzmani` | Asset üretimi (görsel/video) → `mt-creative-yonetmeni` |
| "AC" / "App Campaign" / "UAC" | Google Ads'e özel — direkt → `mt-google-ads-uzmani` | (çakışma yok) |

Yeni çakışmalar bulundukça bu tabloya eklenir.

---

## Bölüm E — Otomatik vs Manuel Tetikleme Politikası

1. **Default davranış**: Claude tüm description'ları okur, en yüksek skoru veren ajan/skill'i otomatik çağırır. Kullanıcı doğal Türkçe konuşur.
2. **Birden fazla aday varsa**: Çakışma kurallarına bakar. Hâlâ belirsizse "İki seçenek var, hangisini istiyorsun?" diye sorar.
3. **Hiç eşleşme yoksa**: Doğrudan ana Claude cevap verir + hangi ajanın yararlı olabileceğini önerir.
4. **Manuel zorlama**:
   - `@mt-<ajan-adi>` notasyonu özel bir ajanı zorla çağırır.
   - `/mt-<skill-adi>` slash komut özel bir skill'i çalıştırır.
   - Bu notasyonlar otomatik seçimi bypass eder.

---

## Bölüm F — Test Protokolü

Phase 1/2'nin her turunda, sözleşme uyarınca 3-5 test cümlesi denenir. Bu test cümleleri ayrıca her `agent-rehberi/<ad>.md` ve `skill-rehberi/<ad>.md` içine "Tetikleyici test cümleleri" alt bölümü olarak yazılır.

### Test cümlesi formatı

```markdown
**<ajan-adi> için test cümleleri:**
1. "<doğal cümle>" → ✅ tetiklenmeli (bu ajana gitmeli)
2. "<doğal cümle>" → ✅ tetiklenmeli
3. "<doğal cümle>" → ❌ tetiklenmemeli (`<doğru ajan>` tetiklenmeli)
4. "<doğal cümle>" → ❌ tetiklenmemeli (`<doğru ajan>` tetiklenmeli)
```

### Phase 1/2 ilerledikçe doldurulan tablo

| Ajan / Skill | Test cümleleri |
|---|---|
| `mt-marketing-tutor` | 1. "CPI nedir?" → ✅ tetiklenmeli<br>2. "ROAS ile LTV farkı nedir?" → ✅ tetiklenmeli<br>3. "Cohort analizi ne demek?" → ✅ tetiklenmeli<br>4. "AEM açılımı nedir?" → ✅ tetiklenmeli<br>5. "Şu az önce öğrendiğim ROAS'ı biraz daha açar mısın?" → ✅ tetiklenmeli (organik diyalog)<br>6. "CPI'ım çok yüksek, ne yapmalıyım?" → ❌ tetiklenmemeli (`mt-kampanya-analisti`)<br>7. "Hangi ROAS hedefim olmalı?" → ❌ tetiklenmemeli (`mt-strateji-uzmani`)<br>8. "Meta'da nasıl kampanya açarım?" → ❌ tetiklenmemeli (`mt-meta-ads-uzmani`) |
| `mt-hesap-kurulum-rehberi` | 1. "Meta'da hesap açmak istiyorum" → ✅ tetiklenmeli<br>2. "TikTok for Business kurmak istiyorum" → ✅ tetiklenmeli<br>3. "Apple Search Ads'e nasıl kayıt olunur?" → ✅ tetiklenmeli<br>4. "Google Ads hesabı için neye ihtiyacım var?" → ✅ tetiklenmeli<br>5. "Meta hesap kurulumunda kalmıştık, devam edelim" → ✅ tetiklenmeli (durum.md okur)<br>6. "Meta hesabım askıya alındı, ne yapayım?" → ✅ tetiklenmeli (recovery akışı)<br>7. "Meta API token nasıl alırım?" → ❌ tetiklenmemeli (`mt-entegrasyon-kurucu`)<br>8. "Meta'da Advantage+ kampanya açmak istiyorum" → ❌ tetiklenmemeli (`mt-meta-ads-uzmani`)<br>9. "Şahıs şirketi açayım mı?" → ❌ Reddet — mali müşavire yönlendir |
| `mt-paid-ua-uzmani` | 1. "Hangi reklam platformundan başlamalıyım?" → ✅ tetiklenmeli<br>2. "Subscription app için kanal önerin ne?" → ✅ tetiklenmeli<br>3. "ASA mı Meta mı önce yapmalıyım?" → ✅ tetiklenmeli<br>4. "iOS'ta retargeting funnel'ı mantıklı mı?" → ✅ tetiklenmeli<br>5. "Kanal mix nasıl olmalı, kaç kanal aynı anda?" → ✅ tetiklenmeli<br>6. "Bu ay $500'ümü nasıl bölmeli?" → ❌ tetiklenmemeli (`mt-strateji-uzmani`)<br>7. "Meta'da AAC kampanya açalım" → ❌ tetiklenmemeli (`mt-meta-ads-uzmani`)<br>8. "Kampanyam ROI üretmiyor ne yapmalı?" → ❌ tetiklenmemeli (`mt-kampanya-analisti`)<br>9. "CPI ne demek?" → ❌ tetiklenmemeli (`mt-marketing-tutor`) |
| `mt-meta-ads-uzmani` | 1. "Meta'da AAC kampanyası kurmak istiyorum" → ✅ tetiklenmeli<br>2. "AEM event prioritization nasıl yapılır?" → ✅ tetiklenmeli<br>3. "Meta'da domain verification yapamıyorum" → ✅ tetiklenmeli<br>4. "Conversion API setup'ı nasıl?" → ✅ tetiklenmeli<br>5. "Advantage+ Audience mi Custom Audience mi?" → ✅ tetiklenmeli<br>6. "Reels reklamı için spec ne?" → ✅ tetiklenmeli<br>7. "Modeled conversion neden 48 saat gecikti?" → ✅ tetiklenmeli (Meta-spesifik kavram)<br>8. "Meta'da hesap nasıl açarım?" → ❌ tetiklenmemeli (`mt-hesap-kurulum-rehberi`)<br>9. "Meta'ya başlamalı mıyım?" → ❌ tetiklenmemeli (`mt-paid-ua-uzmani`)<br>10. "Bu ay Meta'ya kaç para ayırayım?" → ❌ tetiklenmemeli (`mt-strateji-uzmani`)<br>11. "Meta'da ROAS düştü, scale edebilir miyim?" → ❌ tetiklenmemeli (`mt-kampanya-analisti`)<br>12. "Meta Marketing API token nasıl alırım?" → ❌ tetiklenmemeli (`mt-entegrasyon-kurucu`)<br>13. "Meta için Reels videosu üret" → ❌ tetiklenmemeli (`mt-creative-yonetmeni`) |
| `mt-tiktok-ads-uzmani` | 1. "TikTok'ta SPC kampanyası kurmak istiyorum" → ✅ tetiklenmeli<br>2. "Spark Ads nasıl bağlanır?" → ✅ tetiklenmeli<br>3. "Spark Code'u nereye giriyorum?" → ✅ tetiklenmeli<br>4. "AEO 3 priority event nasıl seçilir?" → ✅ tetiklenmeli<br>5. "TikTok Events API setup'ı nasıl?" → ✅ tetiklenmeli<br>6. "TikTok'ta hashtag targeting nasıl?" → ✅ tetiklenmeli<br>7. "TikTok'ta domain verification yapamadım" → ✅ tetiklenmeli<br>8. "TikTok'ta hesap nasıl açarım?" → ❌ tetiklenmemeli (`mt-hesap-kurulum-rehberi`)<br>9. "TikTok'a başlamalı mıyım?" → ❌ tetiklenmemeli (`mt-paid-ua-uzmani`)<br>10. "TikTok bütçesi ne kadar?" → ❌ tetiklenmemeli (`mt-strateji-uzmani`)<br>11. "TikTok'ta ROAS düşük, scale edebilir miyim?" → ❌ tetiklenmemeli (`mt-kampanya-analisti`)<br>12. "TikTok için video script yaz" → ❌ tetiklenmemeli (`mt-content-uretici`)<br>13. "TikTok UGC creator bul" → ❌ tetiklenmemeli (`mt-content-uretici`)<br>14. "TikTok Business API token nasıl alırım?" → ❌ tetiklenmemeli (`mt-entegrasyon-kurucu`)<br>15. "TikTok için brand video üret" → ❌ tetiklenmemeli (`mt-creative-yonetmeni`) |
| `mt-apple-search-ads-uzmani` | 1. "ASA'da Brand Campaign kurmak istiyorum" → ✅ tetiklenmeli<br>2. "Search Match açayım mı?" → ✅ tetiklenmeli<br>3. "Negative keyword nasıl eklenir?" → ✅ tetiklenmeli<br>4. "Discovery Campaign nedir, nasıl kurulur?" → ✅ tetiklenmeli<br>5. "Exact mi Broad mi match type?" → ✅ tetiklenmeli<br>6. "ASA'da CPP'i kampanyaya nasıl bağlarım?" → ✅ tetiklenmeli<br>7. "Search Terms Report nasıl okunur?" → ✅ tetiklenmeli<br>8. "Brand keyword'üm impression almıyor" → ✅ tetiklenmeli<br>9. "ASA'ya nasıl kayıt olunur?" → ❌ tetiklenmemeli (`mt-hesap-kurulum-rehberi`)<br>10. "ASA'ya başlamalı mıyım?" → ❌ tetiklenmemeli (`mt-paid-ua-uzmani`)<br>11. "ASA bütçesi ne kadar?" → ❌ tetiklenmemeli (`mt-strateji-uzmani`)<br>12. "ASA'da ROAS düşük scale edebilir miyim?" → ❌ tetiklenmemeli (`mt-kampanya-analisti`)<br>13. "Custom Product Page yaratmak istiyorum" → ❌ tetiklenmemeli (`mt-aso-uzmani`)<br>14. "App Store title optimize edeyim" → ❌ tetiklenmemeli (`mt-aso-uzmani`)<br>15. "ASA Attribution API token al" → ❌ tetiklenmemeli (`mt-entegrasyon-kurucu`) |
| `mt-google-ads-uzmani` | 1. "Google AC for Installs kuracağım" → ✅ tetiklenmeli<br>2. "Firebase event'larını Google Ads'e nasıl bağlarım?" → ✅ tetiklenmeli<br>3. "Target CPI'dan tCPA'ya geçmek istiyorum" → ✅ tetiklenmeli<br>4. "Asset library'ye kaç asset lazım?" → ✅ tetiklenmeli<br>5. "Geliştirici için Firebase event listesi çıkar" → ✅ tetiklenmeli (handoff MD)<br>6. "Google AC için SKAN postback URL?" → ✅ tetiklenmeli<br>7. "Conversion action nasıl linklenir?" → ✅ tetiklenmeli<br>8. "Google Ads hesabı nasıl açarım?" → ❌ tetiklenmemeli (`mt-hesap-kurulum-rehberi`)<br>9. "Google'a başlamalı mıyım?" → ❌ tetiklenmemeli (`mt-paid-ua-uzmani`)<br>10. "Google bütçesi ne kadar?" → ❌ tetiklenmemeli (`mt-strateji-uzmani`)<br>11. "Google'da ROAS düşük scale edebilir miyim?" → ❌ tetiklenmemeli (`mt-kampanya-analisti`)<br>12. "Google için video reklam üret" → ❌ tetiklenmemeli (`mt-creative-yonetmeni`)<br>13. "Firebase SDK kodu nasıl kurulur?" → ❌ tetiklenmemeli (`mt-entegrasyon-kurucu` veya developer)<br>14. "Google Ads API token nasıl alırım?" → ❌ tetiklenmemeli (`mt-entegrasyon-kurucu`) |

---

## Bölüm G — `CLAUDE.md` ile İlişki

`CLAUDE.md` içindeki routing tablosu bu sözleşmenin **özet kart**'ıdır.
Detaylı kurallar `TETIKLEME-SOZLESMESI.md`'de (bu dosyada) yaşar.
Çelişki olursa **`TETIKLEME-SOZLESMESI.md` otoritedir**.

---

## Bölüm H — Yeni Ajan / Skill Eklenirken Checklist

Phase 1/2 turunda yeni bir ajan veya skill yazılırken aşağıdakiler bu dosyaya eklenmelidir:

- [ ] **Bölüm C — Tetikleyici Kelime Havuzu** tablosuna yeni satır
- [ ] **Bölüm D — Çakışma Kuralları** (varsa yeni çakışma)
- [ ] **Bölüm F — Test Protokolü** tablosuna yeni test cümleleri seti
- [ ] `CLAUDE.md` routing tablosuna (gerekirse) yeni satır
- [ ] `HIZLI-BASVURU.md` cheatsheet'e yeni satır

Bu adımlar ajan/skill turunun **kapanış işlemleri**dir, atlanmamalıdır.
