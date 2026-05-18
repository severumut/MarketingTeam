# Creative Üretim Altyapısı

> Bu dosya, **mt-creative-yonetmeni** (ve creative üretim kullanan diğer ajanlar — mt-content-uretici, mt-aso-uzmani) için tek referans noktası.

---

## Üç Katmanlı Mimari

```
Kullanıcı Türkçe brief
      │
      ▼
┌─────────────────────────────────┐
│ 1. Orkestrasyon (Claude)        │
│ • Brief parse                   │
│ • Türkçe → EN prompt            │
│ • Copy formülü (PAS/AIDA/...)   │
│ • Task-to-model seçimi          │
│ • Maliyet hesabı + onay         │
│ • Vision-based kalite kontrol   │
└─────────────────────────────────┘
      │
      ▼
┌─────────────────────────────────┐
│ 2. Üretim (fal.ai MCP)          │
│ • Image: FLUX, Nano Banana,     │
│   Ideogram, Imagen              │
│ • Video: Kling, Veo, Sora       │
│ • Audio: TTS, music             │
│ • Upscale, edit                 │
└─────────────────────────────────┘
      │ Raw asset
      ▼
┌─────────────────────────────────┐
│ 3. Post-production (Shotstack)  │
│ • Concat (hook+body+outro)      │
│ • Caption overlay (TikTok)      │
│ • Logo/watermark                │
│ • Music + voiceover sync        │
│ • Template + merge → bulk var   │
│ • Format export                 │
└─────────────────────────────────┘
      │ Final asset
      ▼
projects/<app>/creative/...
```

---

## Hangi Ajan Hangi Katmanı Kullanır?

| Ajan | fal.ai | Shotstack | Claude vision |
|---|---|---|---|
| **mt-creative-yonetmeni** | ✅ ana motor | ✅ post-prod | ✅ kalite gate |
| **mt-content-uretici** | ✅ (nadiren — bulk concept) | ❌ | ✅ (UGC content tarama) |
| **mt-aso-uzmani** | ✅ (Ideogram screenshot) | ❌ | ✅ (text spelling check) |
| **mt-rakip-arastirmaci** | ❌ | ❌ | ✅ (rakip creative analizi) |

---

## Task-to-Model Mapping (referans)

Detaylı tablo: `entegrasyonlar/fal-ai/model-katalog.md`. Özet:

| Task | Önerilen model | Tip | Fiyat |
|---|---|---|---|
| Bulk draft (50+) | FLUX Schnell | image | $0.003/img |
| Premium product/lifestyle | FLUX Pro veya Nano Banana Pro | image | $0.05-0.07 |
| Text-heavy banner / App Store screenshot | Ideogram V3 | image | $0.08 |
| Lifestyle 9:16 video | Kling 2.5 Turbo Pro | video | $0.07/s |
| Premium video (audio dahil) | Kling 3.0 Pro | video | $0.112-0.196/s |
| TTS voiceover | ElevenLabs (fal hosted) | audio | per char |

**Karar akışı**:
1. Brief'ten task tipini ayrıştır
2. `entegrasyonlar/fal-ai/favori-modeller.md` kontrolü (daha önce başarılı?)
3. Varsa onu kullan; yoksa default'a git
4. Cross-check: `fal-mcp recommend_model` ile doğal dil önerisi al
5. `get_pricing` → maliyet
6. Kullanıcı onayı → `run_model` veya `queue_model`

---

## Copy Formülleri (otomatik seçim)

| App tipi | Önerilen formül | Sebep |
|---|---|---|
| Problem-driven (habit, sleep, finance) | **PAS** (Problem-Agitation-Solution) | Sorunu hatırlat, derinleştir, çöz |
| Aspirational (workout, learning) | **AIDA** veya **BAB** (Before-After-Bridge) | İstek uyandır, sonucu göster |
| Social/community | **4Ps** (Promise-Picture-Proof-Push) | Topluluk önemli, social proof kritik |
| Brand awareness (early-stage) | **AIDA** | Tanışma + ilgi öncelikli |

Kullanıcı override edebilir: "PAS değil BAB istiyorum"

---

## Two-Stage Strategy (default)

```
Aşama 1 — Draft
  Model: FLUX Schnell ($0.003/img)
  Adet: 10 varyant
  Toplam: $0.03
  Amaç: Yön/kompozisyon/mood test
  Kullanıcı: 3 yön seçer

Aşama 2 — Final
  Model: FLUX Pro veya Nano Banana Pro ($0.05-0.07/img)
  Adet: 3 (seçilen yönler)
  Toplam: $0.15-0.21
  Amaç: Production-ready kalite

TOPLAM: ~$0.18-0.24 per brief
```

Direkt premium 5 varyant alternatifi: $0.25-0.35. Two-stage hem daha ucuz hem daha iyi keşif.

**Override**: Kullanıcı "direkt premium istiyorum" derse two-stage atla.

---

## Kalite Gate (8 checklist)

Üretim sonrası Claude Read tool ile görseli okur, şu maddeleri 1-10 arası puanlar:

1. **Kompozisyon** — fokus noktası, eye-flow, denge
2. **Text spelling** (varsa) — Türkçe karakter, brand adı, slogan
3. **Brand uyum** — `brand-guide.md` referansı
4. **Hedef kitle uyum** — yaş, demografi, kültür
5. **Ad policy uyum** — Meta/TikTok yasakları (aşırı text, before/after, abartılı iddialar)
6. **Artifact/watermark yok** — AI imza, el deformasyonu, logo bozulması
7. **Resolution + format** — hedef spec match
8. **Brief spec eşleşmesi** — istenen tarz ("minimal", "lifestyle") elde edildi mi

**Toplam < 60/80** → otomatik retry. Max 2 retry. Sonra kullanıcıya seçenek:
- Model değiştir
- Brief revize
- Manuel onayla (bypass)

Retry stratejileri:
- Text spelling sorunu → Ideogram'a geç
- Artifact → aynı modelle yeni seed
- Brief spec uyumsuz → prompt'a spesifik düzeltme ekle ("daha minimal", "az detay")

---

## Maliyet Kontrol Protokolü

### Brief öncesi onay (her zaman)
```
Plan:
- Model(ler): <list>
- Adet: <X>
- Tahmini maliyet: $<Y>
- Süre: ~<Z> saniye
Onaylar mısın? (E/H)
```

### Limit yönetimi (esnek)
- Sabit per-brief limit yok
- Aylık fal.ai bütçesi `butce/<yyyy-mm>.md`'de ayrı kalem (Phase 4)
- Aylık %80'e gelindiğinde proaktif uyarı
- %100'de uyarı + manuel onay isteme (otomatik durdurmaz — kullanıcı yönetir)
- Shotstack credit'i: Kullanıcı kendi panelinden takip eder

### Asset reuse (boşa para önlemek)
- Yaratılan her asset `projects/<app>/creative/library/` altında etiketlenir
- Yeni brief geldiğinde önce library taranır
- Match varsa: "Bu daha önce yaratılmıştı, varyant mı / aynısını kullan mı?" sorulur

---

## Brand Consistency

Phase 4'te `projects/<app>/creative/brand-guide.md` opsiyonel dosya yaratılır. İçerik:
- Renk paleti (hex codes)
- Font tarzı + alternatif
- Ton (formal/casual/playful)
- "Kaçınılacak görsel öğeler" listesi (örn. "aşırı parlak renkler", "stock-foto görünümlü insan")

Her prompt mühendisliği sırasında brand-guide otomatik enjekte edilir.

---

## Çıktı Organizasyonu

```
projects/<app>/creative/YYYY-MM-DD-<brief-adi>/
├── brief.md                ← Orijinal brief + EN prompt'lar + formül seçimi
├── gorseller/              ← V1.png, V2.png, ... (fal.ai çıktıları)
├── videolar/               ← V1.mp4, V2.mp4, ... (post-prod sonrası)
│   └── raw/                ← Shotstack öncesi raw fal video'ları
├── audio/                  ← TTS, music tracks
├── copy/
│   └── varyantlar.md       ← Headlines, descriptions, hook'lar
├── kalite-raporu.md        ← Vision analiz skoru, retry geçmişi
└── notlar.md               ← Hangi formül, hangi platform, A/B test setup

projects/<app>/creative/library/
├── _aktif/                 ← Yayında olan creative'ler (etiketli)
├── _arsiv/                 ← Eskimiş ama gelecekte ref olabilir
└── _rejected/              ← Kalite gate'ten geçemeyenler (öğrenme için)
```

---

## Detaylı sub-rehberler

- `bilgi-bankasi/07-araclar/ad-creative-prompt-muhendisligi.md` — Türkçe brief → EN prompt teknikleri
- `bilgi-bankasi/07-araclar/maliyet-kontrol-protokolleri.md` — Bütçe yönetimi detayları
- `entegrasyonlar/fal-ai/model-katalog.md` — Model tablosu + güncel fiyatlar
- `entegrasyonlar/fal-ai/favori-modeller.md` — Öğrenen sistem
- `entegrasyonlar/shotstack/template-rehberi.md` — Çekirdek template'ler
