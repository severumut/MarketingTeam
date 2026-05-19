# 🧭 MarketingTeam — Sistem Rehberi

> Bu dosya, **sistemin tüm bileşenlerinin tek noktadan görünür haritası**. Hangi ajan ne yapar, hangi skill ne sağlar, neyi neye bağlar — hepsi burada.

**Hızlı erişim**: [Ajanlar (13)](#-ajanlar-13) · [Skill'ler (12)](#-skiller-12) · [Entegrasyonlar](#-entegrasyonlar) · [Akış Haritası](#-akış-haritası) · [Interaktif Dashboard](sistem-rehberi.html)

> 💡 **HTML versiyon**: Görsel filter + search için `sistem-rehberi.html` dosyasını browser'da aç.

---

## 🎯 Sistem Felsefesi

- **Türkçe konuşur, paid-only odaklı** indie iOS marketing AI takımı
- **Modüler**: Her ajan tek uzmanlık alanı
- **Otomatik tetikleme**: Doğal Türkçe = doğru ajan/skill (TETIKLEME-SOZLESMESI yönetir)
- **Mt-prefix**: Tüm ajan/skill `mt-` ile başlar
- **Kullanıcı onayı zorunlu**: Maliyet doğuran her aksiyon öncesi detaylı plan

---

## 🤖 Ajanlar (13)

### Routing Mantığı

```
Soru                                    → Ajan
─────────────────────────────────────────────────────────────────
"X kavramı nedir"                       → mt-marketing-tutor
"X platformunda hesap aç"               → mt-hesap-kurulum-rehberi
"Hangi kanaldan başla / kanal mix"      → mt-paid-ua-uzmani
"Meta'da kampanya kur / AAC / AEM"      → mt-meta-ads-uzmani
"TikTok / Spark Ads / SPC"              → mt-tiktok-ads-uzmani
"ASA / Search Match / keyword"          → mt-apple-search-ads-uzmani
"Google AC / Firebase event"            → mt-google-ads-uzmani
"Creative üret / video / hook / trend"  → mt-creative-yonetmeni
"Bütçe / KPI / aylık plan"              → mt-strateji-uzmani
"Performans / haftalık rapor / scale"   → mt-kampanya-analisti
"Rakip / ad library / kategori"         → mt-rakip-arastirmaci
"ASO / screenshot / keyword field"      → mt-aso-uzmani
"API / token / MCP / OAuth"             → mt-entegrasyon-kurucu
```

---

### 1. `mt-marketing-tutor`

| | |
|---|---|
| **Ne yapar** | App marketing kavramlarını sıfırdan örnekle açıklar, SOZLUK.md'ye ekler |
| **Ne zaman** | Bilmediğin terim çıktığında, "X nedir" tarzı sorular |
| **Manuel çağırma** | `@mt-marketing-tutor` |
| **İlgili skill** | `/mt-terim-ogren` |
| **Memory** | marketing_known_terms.md, marketing_learning_style.md |
| **Detay** | [agent-rehberi/mt-marketing-tutor.md](agent-rehberi/mt-marketing-tutor.md) |

### 2. `mt-hesap-kurulum-rehberi`

| | |
|---|---|
| **Ne yapar** | Reklam platformlarına sıfırdan hesap açma akışı (Meta, TikTok, ASA, Google) |
| **Ne zaman** | Bir platforma kayıt yapacaksan, yarıda kalmış kuruluma devam |
| **Manuel çağırma** | `@mt-hesap-kurulum-rehberi` |
| **İlgili skill** | `/mt-hesap-ac` |
| **Memory** | marketing_account_setup_state.md, marketing_user_profile_tr.md |
| **Detay** | [agent-rehberi/mt-hesap-kurulum-rehberi.md](agent-rehberi/mt-hesap-kurulum-rehberi.md) |

### 3. `mt-paid-ua-uzmani`

| | |
|---|---|
| **Ne yapar** | Paid UA stratejik beyni — kanal seçimi, mix mantığı, funnel, scale çerçevesi |
| **Ne zaman** | "Hangi kanaldan başla", "ASA mı Meta mı önce", "kanal mix" |
| **Manuel çağırma** | `@mt-paid-ua-uzmani` |
| **İlgili skill** | _(çağıran skill yok — yön kararı için doğrudan)_ |
| **Memory** | marketing_paid_ua_decisions.md |
| **Detay** | [agent-rehberi/mt-paid-ua-uzmani.md](agent-rehberi/mt-paid-ua-uzmani.md) |

### 4. `mt-meta-ads-uzmani`

| | |
|---|---|
| **Ne yapar** | Meta (FB+IG) operasyonel uzmanı — AAC, AEM, SKAN, CAPI, audience, creative spec |
| **Ne zaman** | Meta'da kampanya kur / optimize, AEM event prioritization, domain verification |
| **Manuel çağırma** | `@mt-meta-ads-uzmani` |
| **İlgili skill** | `/mt-yeni-kampanya` |
| **Memory** | marketing_meta_setup_state.md |
| **Detay** | [agent-rehberi/mt-meta-ads-uzmani.md](agent-rehberi/mt-meta-ads-uzmani.md) |

### 5. `mt-tiktok-ads-uzmani`

| | |
|---|---|
| **Ne yapar** | TikTok Ads Manager — SPC, Spark Ads, AEO, Events API, domain verification, creative |
| **Ne zaman** | TikTok'ta kampanya kur, Spark Code bağla, AEO setup |
| **Manuel çağırma** | `@mt-tiktok-ads-uzmani` |
| **İlgili skill** | `/mt-yeni-kampanya` |
| **Memory** | marketing_tiktok_setup_state.md |
| **Detay** | [agent-rehberi/mt-tiktok-ads-uzmani.md](agent-rehberi/mt-tiktok-ads-uzmani.md) |

### 6. `mt-apple-search-ads-uzmani`

| | |
|---|---|
| **Ne yapar** | ASA — keyword strateji, 4 campaign türü, CPP bağlama, Search Match, negative keywords |
| **Ne zaman** | ASA'da kampanya kur, keyword research, CPP bağla |
| **Manuel çağırma** | `@mt-apple-search-ads-uzmani` |
| **İlgili skill** | `/mt-yeni-kampanya` |
| **Memory** | marketing_asa_setup_state.md |
| **Detay** | [agent-rehberi/mt-apple-search-ads-uzmani.md](agent-rehberi/mt-apple-search-ads-uzmani.md) |

### 7. `mt-google-ads-uzmani`

| | |
|---|---|
| **Ne yapar** | Google AC — Firebase event mapping, Target CPI → tCPA → tROAS, asset library, developer handoff MD |
| **Ne zaman** | Google AC kur, Firebase event handoff, conversion action linkleme |
| **Manuel çağırma** | `@mt-google-ads-uzmani` |
| **İlgili skill** | `/mt-yeni-kampanya` |
| **Memory** | marketing_google_ads_setup_state.md |
| **Detay** | [agent-rehberi/mt-google-ads-uzmani.md](agent-rehberi/mt-google-ads-uzmani.md) |

### 8. `mt-creative-yonetmeni`

| | |
|---|---|
| **Ne yapar** | Brand-produced + AI-UGC paid creative üretim. fal.ai + Shotstack + Claude vision. 5 mod (Brief→Üretim / Copy / A/B Set / Revizyon / Trend Research) |
| **Ne zaman** | Reklam görseli/videosu üret, A/B varyantı, hook copy, trend araştır |
| **Manuel çağırma** | `@mt-creative-yonetmeni` |
| **İlgili skill** | `/mt-creative-uretim` |
| **Memory** | marketing_creative_state.md |
| **Entegrasyon** | fal.ai MCP, Shotstack MCP |
| **Detay** | [agent-rehberi/mt-creative-yonetmeni.md](agent-rehberi/mt-creative-yonetmeni.md) |

### 9. `mt-strateji-uzmani`

| | |
|---|---|
| **Ne yapar** | Aylık plan + bütçe allocation + KPI hedef belirleme. Haftalık checkpoint'ler tanımlar |
| **Ne zaman** | Ay başı bütçe planı, KPI hedef, bütçe rebalance |
| **Manuel çağırma** | `@mt-strateji-uzmani` |
| **İlgili skill** | `/mt-butce-planla`, `/mt-aylik-strateji` |
| **Memory** | marketing_strategy_state.md |
| **Detay** | [agent-rehberi/mt-strateji-uzmani.md](agent-rehberi/mt-strateji-uzmani.md) |

### 10. `mt-kampanya-analisti`

| | |
|---|---|
| **Ne yapar** | Performans analizi — KPI hesap, ikili öneri (yön + rakam), büyük sapmada otomatik strateji çağırma. 5 mod (Haftalık / Anomali / Karar / Cohort / Retro) |
| **Ne zaman** | Bu hafta nasıl, ROAS düştü, scale et mi, cohort, ay sonu retro |
| **Manuel çağırma** | `@mt-kampanya-analisti` |
| **İlgili skill** | `/mt-haftalik-rapor`, `/mt-revenuecat-ozet`, `/mt-aylik-strateji` |
| **Memory** | marketing_analytics_state.md |
| **Entegrasyon** | RevenueCat MCP |
| **Detay** | [agent-rehberi/mt-kampanya-analisti.md](agent-rehberi/mt-kampanya-analisti.md) |

### 11. `mt-rakip-arastirmaci`

| | |
|---|---|
| **Ne yapar** | Rakip analiz (App Store + Ad Library + Creative Center + Transparency + reviews). Basit hali — Phase 4+ ASO tool MCP ile güçlendirilecek |
| **Ne zaman** | Rakip incele, kategori benchmark, paywall analiz |
| **Manuel çağırma** | `@mt-rakip-arastirmaci` |
| **İlgili skill** | `/mt-rakip-analizi` |
| **Memory** | marketing_competitor_state.md |
| **Detay** | [agent-rehberi/mt-rakip-arastirmaci.md](agent-rehberi/mt-rakip-arastirmaci.md) |

### 12. `mt-aso-uzmani`

| | |
|---|---|
| **Ne yapar** | ASO — 10 boyutlu audit (aylık), keyword research, screenshot brief (örnek kütüphane), CPP, **GB-first localization**, **agresif rating** |
| **Ne zaman** | ASO denetle, keyword optimize, screenshot başlık, CPP yarat, lokalizasyon |
| **Manuel çağırma** | `@mt-aso-uzmani` |
| **İlgili skill** | `/mt-aso-audit` |
| **Memory** | marketing_aso_state.md |
| **Entegrasyon** | fal.ai MCP (Ideogram V3 screenshot) |
| **Detay** | [agent-rehberi/mt-aso-uzmani.md](agent-rehberi/mt-aso-uzmani.md) |

### 13. `mt-entegrasyon-kurucu`

| | |
|---|---|
| **Ne yapar** | API/MCP kurulum, token alma, OAuth/JWT, debug, **detaylı setup-notlari.md** (aylar sonra geri bakılabilir), token expiry takibi, developer handoff MD her platform için |
| **Ne zaman** | API token al, MCP kur, token yenile, 401 debug |
| **Manuel çağırma** | `@mt-entegrasyon-kurucu` |
| **İlgili skill** | `/mt-api-entegrasyon` |
| **Memory** | marketing_integration_state.md |
| **Entegrasyon** | mcp-registry MCP |
| **Detay** | [agent-rehberi/mt-entegrasyon-kurucu.md](agent-rehberi/mt-entegrasyon-kurucu.md) |

---

## ⚡ Skill'ler (12)

Her skill kullanıcı tarafından `/mt-<adi>` slash komut ile çağrılır veya doğal dilde tetiklenir.

| Skill | Ne sağlar | Hangi ajanı çağırır | Çıktı |
|---|---|---|---|
| `/mt-terim-ogren` | Bir terimi sıfırdan açıkla, SOZLUK.md'ye ekle | mt-marketing-tutor | SOZLUK.md güncelleme |
| `/mt-hesap-ac` | Platforma sıfırdan hesap aç (devam edilebilir) | mt-hesap-kurulum-rehberi | hesap-kurulumlari/<platform>/durum.md |
| `/mt-yeni-uygulama` | Yeni app onboarding (4 ajan sırayla) | mt-paid-ua + mt-strateji + mt-rakip + mt-aso | projects/<app>/ dolu |
| `/mt-yeni-kampanya` | Yeni kampanya planla + setup | Platform ajan + mt-strateji + mt-creative-yonetmeni | projects/<app>/kampanyalar/<platform>/.md |
| `/mt-creative-uretim` | Görsel/video/copy üret (fal.ai + Shotstack) | mt-creative-yonetmeni | projects/<app>/creative/<tarih-brief>/ |
| `/mt-rakip-analizi` | Rakip derinlemesine veya kategori benchmark | mt-rakip-arastirmaci | projects/<app>/rakip-analizleri/.md |
| `/mt-butce-planla` | Aylık plan + bütçe allocation + KPI | mt-strateji-uzmani | butce/<yyyy-mm>.md |
| `/mt-haftalik-rapor` | Haftalık performans review + aksiyon | mt-kampanya-analisti | raporlar/<tarih>-haftalik.md |
| `/mt-aylik-strateji` | Ay sonu retro + sonraki ay planı | mt-kampanya-analisti + mt-strateji-uzmani | raporlar/<ay>-retro.md + butce/<sonraki>.md |
| `/mt-revenuecat-ozet` | Subscription özet (MRR, churn, cohort) | mt-kampanya-analisti + RevenueCat MCP | projects/<app>/raporlar/revenuecat/.md |
| `/mt-api-entegrasyon` | Yeni API/MCP entegre et | mt-entegrasyon-kurucu | entegrasyonlar/<platform>/setup-notlari.md |
| `/mt-aso-audit` | 10 boyutlu ASO denetimi (aylık) | mt-aso-uzmani | projects/<app>/05-aso-stratejisi.md |

---

## 🔌 Entegrasyonlar

### ✅ Kurulu MCP

| MCP | Tip | Kullanan Ajan | Ne sağlar |
|---|---|---|---|
| RevenueCat | MCP | mt-kampanya-analisti | Subscription/LTV/paywall verisi |
| fal.ai | MCP | mt-creative-yonetmeni, mt-aso-uzmani | 1000+ generative model (FLUX, Kling, Veo, Sora, Ideogram, Nano Banana, Seedance) |
| Shotstack | MCP | mt-creative-yonetmeni | Video post-production (concat, captions, logo, music) |
| mcp-registry | MCP | mt-entegrasyon-kurucu | Yeni MCP arama |
| scheduled-tasks | MCP | (Phase 4) | Otomasyonlar |
| n8n | MCP | (opsiyonel) | İleri workflow |

### ⏳ Phase 4'te Eklenecek API'lar

| API | Tip | Kullanan Ajan | Önkoşul |
|---|---|---|---|
| Meta Marketing | REST | mt-meta-ads-uzmani, mt-kampanya-analisti | Meta hesabı + dev portal |
| TikTok Business | REST | mt-tiktok-ads-uzmani | TikTok hesabı + dev portal |
| ASA Campaign Mgmt | REST (JWT) | mt-apple-search-ads-uzmani | Apple Developer + private key |
| Google Ads | REST | mt-google-ads-uzmani | GCP project + dev token |
| (opsiyonel) ASO tool | REST | mt-rakip-arastirmaci | Subscription (AppTweak vb.) |

Tüm detay: [entegrasyonlar/kurulu-entegrasyonlar.md](entegrasyonlar/kurulu-entegrasyonlar.md)

---

## 🔄 Akış Haritası

### Yeni uygulama → ilk kampanya akışı

```
/mt-yeni-uygulama
   ↓
projects/<app>/ yaratıldı
   ↓
/mt-hesap-ac (her platform için)
   ↓
hesap-kurulumlari/<platform>/durum.md tamam
   ↓
/mt-api-entegrasyon (Phase 4)
   ↓
entegrasyonlar/<platform>/setup-notlari.md tamam
   ↓
/mt-butce-planla
   ↓
butce/<yyyy-mm>.md yazıldı
   ↓
/mt-creative-uretim
   ↓
projects/<app>/creative/.../ asset'ler hazır
   ↓
/mt-yeni-kampanya
   ↓
Kampanya CANLI
   ↓
(haftalık) /mt-haftalik-rapor
   ↓
(aylık) /mt-aylik-strateji
```

### Cross-ajan bağımlılıklar (özet)

```
mt-paid-ua-uzmani (yön)
   ↓
mt-strateji-uzmani (para + KPI)
   ↓
Platform ajanlar (Meta/TikTok/ASA/Google) — setup
   ↓
mt-creative-yonetmeni (asset üretimi)
   ↓                    
mt-kampanya-analisti (haftalık takip + büyük sapmada → otomatik mt-strateji-uzmani çağrısı)
```

---

## 🚀 Phase Durumu

| Phase | Durum | Açıklama |
|---|---|---|
| Phase 0 | ✅ | İskelet (kök dosyalar, klasör yapısı) |
| Phase 1 | ✅ | 13 ajan (yavaş mod, tek tek) |
| Phase 2 | ✅ | 12 skill |
| Phase 3 | ⏳ | Bilgi bankası derinleştirme (paralel) |
| Phase 4 | ⏳ | Operasyonel (ASA hesap aç → API → uygulama ekle → kampanya) |

---

## 📚 Önemli Dosyalar

- [CLAUDE.md](CLAUDE.md) — Orkestratör (Claude bu klasöre girdiğinde otomatik okur)
- [TETIKLEME-SOZLESMESI.md](TETIKLEME-SOZLESMESI.md) — Otomatik tetikleme kuralları (otorite)
- [HIZLI-BASVURU.md](HIZLI-BASVURU.md) — Manuel cheatsheet
- [SOZLUK.md](SOZLUK.md) — Marketing terim sözlüğü
- [ROADMAP.md](ROADMAP.md) — Yol haritası
- [BASLA-BURADAN.md](BASLA-BURADAN.md) — 30 dakikalık tur
- [entegrasyonlar/kurulu-entegrasyonlar.md](entegrasyonlar/kurulu-entegrasyonlar.md) — Entegrasyon durumu

---

## 🎨 İnteraktif Versiyon

**Browser'da daha rahat görmek için**: [sistem-rehberi.html](sistem-rehberi.html) — Filter + search + tıklanabilir kart görünümü

---

> Son güncelleme: 2026-05-19 — Sistem operasyonel, Phase 4 başlatılmaya hazır.
