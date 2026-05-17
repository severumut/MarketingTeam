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
| `mt-meta-ads-uzmani` | "meta", "facebook reklam", "instagram reklam", "advantage+", "AAC", "AEM", "SKAN setup", "audience yapısı", "Meta kampanyası", "AAA campaign", "Reels reklamı" |
| `mt-tiktok-ads-uzmani` | "tiktok ads", "tiktok reklam", "spark ads", "UGC reklam", "TikTok creative center", "smart performance campaign", "TikTok Ads Manager" |
| `mt-apple-search-ads-uzmani` | "apple search ads", "ASA", "search match", "discovery campaign", "custom product page", "ASA keyword", "ASA basic", "ASA advanced" |
| `mt-google-ads-uzmani` | "google ads", "app campaign", "UAC", "AC for installs", "google asset library", "firebase events", "google reklam" |
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
| _(Phase 1'de doldurulacak)_ | |

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
