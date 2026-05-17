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

## Phase 1 — Ajanlar ⏳ (Sırada)

**Hedef**: 14 uzman ajanı sırayla yaz. Her ajan **kendi turunda** — birlikte tasarlanıp, prompt'u yazılıp, test edilir.

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
| 8 | `mt-creative-yonetmeni` | Tüm platformların creative ihtiyacı |
| 9 | `mt-content-uretici` | Organik content sütunu |
| 10 | `mt-strateji-uzmani` | Çoklu kanal arası stratejik karar |
| 11 | `mt-kampanya-analisti` | Performans takibi |
| 12 | `mt-rakip-arastirmaci` | Market gözlem |
| 13 | `mt-aso-uzmani` | İkincil sütun (kullanıcı zaten yapıyor) |
| 14 | `mt-entegrasyon-kurucu` | Phase 4'te API kurulumları için |

---

## Phase 2 — Skill'ler ⏳

**Hedef**: 13 user-invocable skill — her biri ajanları çağıran iş akışı.

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
| 7 | `/mt-content-takvimi` | Haftalık |
| 8 | `/mt-yeni-kampanya` | Hesap + creative hazır olunca |
| 9 | `/mt-haftalik-rapor` | Operasyonel rutin |
| 10 | `/mt-aylik-strateji` | Ay sonu |
| 11 | `/mt-revenuecat-ozet` | Subscription app'leri için |
| 12 | `/mt-aso-audit` | Periyodik denetim |
| 13 | `/mt-api-entegrasyon` | Phase 4'te kullanılır |

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

## Phase 4 — Operasyonel ⏳

**Hedef**: Sistemin gerçek hayatta çalıştırılması.

**Adımlar**:
1. İlk uygulamanı `/mt-yeni-uygulama` ile ekle (projects/ altına).
2. İlk hesap açma akışı `/mt-hesap-ac` ile bir platform için.
3. İlk gerçek API entegrasyonu `/mt-api-entegrasyon` (Meta veya ASA).
4. İlk creative üretimi `/mt-creative-uretim`.
5. İlk kampanya `/mt-yeni-kampanya`.
6. İlk haftalık rapor `/mt-haftalik-rapor`.
7. Scheduled Tasks otomasyonlarından 1-2 tanesini aktive et.

---

## Phase 5+ — Sürekli Büyüme

Bu Phase bitmiyor. Bu noktadan sonra:
- Yeni uygulamalar eklenir
- Yeni platformlar eklenir (Reddit Ads, Snapchat, vb.)
- Bilgi bankası ajanlar tarafından büyütülür
- Sözlük büyür
- Yeni playbook'lar yazılır

---

## Mevcut Durum (2026-05-17)

✅ Phase 0 tamamlandı.
⏳ Phase 1 — başlamayı bekliyor (ilk: `mt-marketing-tutor`).
