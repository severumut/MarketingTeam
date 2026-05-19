# ROADMAP.md — Öğrenme ve Uygulama Yol Haritası

Bu klasör aşamalı (Phase by Phase) büyür. Her Phase bir önceki üstüne inşa eder.

---

## Phase 0 — İskelet ✅ (Tamamlandı)

**Hedef**: Sistemin iskeleti — klasörler, kök dosyalar, README'ler.

**Çıktılar**:
- ✅ Klasör yapısı (`.claude/`, `bilgi-bankasi/`, `projects/`, `entegrasyonlar/`, `hesap-kurulumlari/`, vb.)
- ✅ 9 kök seviye dosya: `README.md`, `BASLA-BURADAN.md`, `CLAUDE.md`, `TETIKLEME-SOZLESMESI.md`, `HIZLI-BASVURU.md`, `SOZLUK.md`, `ROADMAP.md`, `.env.ornek`, `.gitignore`
- ✅ Her klasör için `README.md`
- ✅ `entegrasyonlar/kurulu-entegrasyonlar.md`

**Bu Phase'de kullanıcı**: Sadece okur. Sistemi tanır.

---

## Phase 1 — Ajanlar ✅ (Tamamlandı 2026-05-18)

**Hedef**: 13 uzman ajan (içerik-uretici çıkarıldı, sistem paid-only). Her ajan **kendi turunda** — birlikte tasarlanıp, prompt'u yazılıp, test edilir.

**Akış (her ajan için)**:
1. `agent-rehberi/<ad>.md` birlikte konuşulur (ne / neden / ne zaman / nasıl).
2. `.claude/agents/<ad>.md` (ana prompt) yazılır.
3. Test cümleleriyle denenir.
4. `TETIKLEME-SOZLESMESI.md` ve `HIZLI-BASVURU.md` güncellenir.

**Sıra (PAID önceliğine göre)**:

| # | Ajan | Öncelik nedeni |
|---|---|---|
| 1 | `mt-marketing-tutor` | Her zaman ilk — kullanıcı her ajan turunda kavram sorabilir |
| 2 | `mt-hesap-kurulum-rehberi` | Paid'e başlamadan platform hesabı şart |
| 3 | `mt-paid-ua-uzmani` | Paid çerçeve — platform uzmanlarının üstündeki strateji |
| 4 | `mt-meta-ads-uzmani` | Indie iOS dev'lerin yaygın kullandığı platform |
| 5 | `mt-tiktok-ads-uzmani` | UGC odaklı viral fırsatlar |
| 6 | `mt-apple-search-ads-uzmani` | iOS için en yüksek ROAS potansiyeli |
| 7 | `mt-google-ads-uzmani` | Çeşitlendirme için |
| 8 | `mt-creative-yonetmeni` | Tüm platformların creative ihtiyacı + trend research (Mod E) |
| 9 | `mt-strateji-uzmani` | Çoklu kanal arası stratejik karar |
| 10 | `mt-kampanya-analisti` | Performans takibi |
| 11 | `mt-rakip-arastirmaci` | Market gözlem |
| 12 | `mt-aso-uzmani` | İkincil sütun (kullanıcı zaten yapıyor) |
| 13 | `mt-entegrasyon-kurucu` | Phase 4'te API kurulumları için |

> **Not (2026-05-18)**: `mt-content-uretici` ajanı kapsamdan çıkarıldı. Sebep: Sistem sadece paid odaklı (organik content + UGC creator outreach kullanıcının kapsamı dışı). Trend research → `mt-creative-yonetmeni` Mod E olarak entegre.

---

## Phase 2 — Skill'ler ✅ (Tamamlandı 2026-05-18)

**Hedef**: 12 user-invocable skill (mt-content-takvimi çıkarıldı) — her biri ajanları çağıran iş akışı.

**Akış**: Aynı yavaş mod (skill-rehberi → SKILL.md → test).

**Sıra (kullanım sıklığına göre)**:

| # | Skill | Notu |
|---|---|---|
| 1 | `/mt-terim-ogren` | En basit, tek ajan kullanır |
| 2 | `/mt-hesap-ac` | Paid'e başlamadan önce gerekli |
| 3 | `/mt-yeni-uygulama` | İlk uygulamayı eklemek için |
| 4 | `/mt-rakip-analizi` | Yeni app öncesi yapılır |
| 5 | `/mt-butce-planla` | Ay başı |
| 6 | `/mt-creative-uretim` | Kampanya öncesi |
| 7 | `/mt-yeni-kampanya` | Hesap + creative hazır olunca |
| 8 | `/mt-haftalik-rapor` | Operasyonel rutin |
| 9 | `/mt-aylik-strateji` | Ay sonu |
| 10 | `/mt-revenuecat-ozet` | Subscription app'leri için |
| 11 | `/mt-aso-audit` | Periyodik denetim |
| 12 | `/mt-api-entegrasyon` | Phase 4'te kullanılır |

---

## Phase 3 — Bilgi Bankası Derinleştirme ⏳

**Hedef**: `bilgi-bankasi/`'nın tüm MD'leri yazılır. Ajanlar bu klasörü hem referans hem de büyütülen kaynak olarak kullanır.

**Sıra**:
1. `01-temeller/` (tamamı) — paid/aso/content kavramları, attribution, metrikler.
2. `02-paid-ua/` (tamamı) — ana ağırlık, en hacimli klasör.
3. `03-content/` — content marketing rehberi.
4. `09-playbooklar/` — uçtan uca senaryolar.
5. Diğerleri (`04-aso/`, `05-attribution-ios/`, `06-monetization/`, `07-araclar/`, `08-entegrasyonlar/`) ihtiyaca göre.

---

## Phase 4 — Operasyonel ⏳ (Sırada)

**Hedef**: Sistemin gerçek hayatta çalıştırılması.

**Kullanıcı tarafından onaylanan sıra (2026-05-19)**:

### Adım 1 — İlk hesap açma (`/mt-hesap-ac`)
- Önerilen platform sırası: **ASA → Meta → TikTok → Google** (mt-paid-ua-uzmani'nin önerisi)
- ASA önce çünkü indie iOS için en yüksek ROAS potansiyeli + Apple Developer hesabı zaten var
- Her hesap için `hesap-kurulumlari/<platform>/durum.md` takip
- Yarıda kalırsa devam edilebilir

### Adım 2 — İlk API entegrasyonu (`/mt-api-entegrasyon`)
- Adım 1'de açılan platformların programatik erişimi
- `mt-entegrasyon-kurucu` adım adım yönlendirir
- **Detaylı setup-notlari.md** her platform için yazılır (aylar sonra geri bakılabilir)
- Token expiry takibi başlar
- Her platform için **developer handoff MD** üretilir (SDK init, event tracking) — geliştiriciye

### Adım 3 — İlk uygulama ekleme (`/mt-yeni-uygulama`)
- 4 canlı uygulamasından biri seçilir
- `projects/<app-slug>/` yapısı yaratılır
- İlk dökümantasyon (mt-paid-ua-uzmani + mt-strateji-uzmani + mt-rakip-arastirmaci + mt-aso-uzmani sırayla çağrılır)
- Bu noktadan sonra kampanya kurulabilir

### Adım 4 — İlk creative üretimi (`/mt-creative-uretim`)
- fal.ai + Shotstack pipeline test
- Two-stage strategy (Schnell draft → Pro final)
- Vision kalite gate
- favori-modeller.md ilk girişler

### Adım 5 — İlk kampanya (`/mt-yeni-kampanya`)
- Tek platform tek kampanya — minimum başlangıç
- mt-strateji-uzmani aylık plan ile birleşir
- İlk haftalık checkpoint'ler aktif olur

### Adım 6 — İlk haftalık rapor (`/mt-haftalik-rapor`)
- mt-kampanya-analisti gerçek veri okur
- Plan vs gerçek karşılaştırma

### Adım 7 — Scheduled Task otomasyonları
- `/mt-haftalik-rapor` → Pazartesi 09:00
- `/mt-revenuecat-ozet` → Günlük 18:00 (subscription app için)
- `/mt-aylik-strateji` → Ayın 1'i 09:00

**Bu sıra bittiğinde** sistem tam operasyonel — yeni uygulama ekleme + ay sonu retrospektif + sürekli iterasyon döngüsü.

---

## Phase 5+ — Sürekli Büyüme

Bu Phase bitmiyor. Bu noktadan sonra:
- Yeni uygulamalar eklenir
- Yeni platformlar eklenir (Reddit Ads, Snapchat, vb.)
- Bilgi bankası ajanlar tarafından büyütülür
- Sözlük büyür
- Yeni playbook'lar yazılır

---

## Mevcut Durum (2026-05-19)

✅ Phase 0 — İskelet
✅ Phase 1 — 13 ajan
✅ Phase 2 — 12 skill
⏳ Phase 3 — Bilgi bankası (paralel olarak)
⏳ Phase 4 — Operasyonel (Adım 1: ASA hesap açma)
