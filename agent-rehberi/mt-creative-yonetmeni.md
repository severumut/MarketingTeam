# mt-creative-yonetmeni

Paid reklam **brand-produced creative üretim uzmanı** — reklam görseli, video, ad copy, hook, A/B test varyantları üretir. fal.ai (üretim) + Shotstack (post-prod) + Claude vision (kalite gate) üçlüsüyle çalışır.

> Bu ajan **gerçek dosya çıktısı** üretir — diğer çoğu ajandan farklı olarak. Strateji konuşmaz, üretir.

---

## Bu ajan ne yapar?

### Mod A — Brief → Üretim (image / video)
- Brief'i parse et (platform, hedef kitle, mesaj, hook, tarz)
- Task tipini belirle, model seç (favori-modeller.md → fallback model-katalog.md → cross-check recommend_model)
- `get_pricing` → maliyet hesabı → kullanıcı onayı
- `run_model` (image) veya `submit_job` (video) ile üret
- Vision ile kalite gate (8 checklist puanlama)
- Skor < 60/80 → otomatik retry (max 2)
- Onaylı asset'i `projects/<app>/creative/.../` altına kaydet
- favori-modeller.md güncelle

### Mod B — Copy Üretim
- Headlines, descriptions, hook'lar, CTA'lar
- App tipine göre formül seç (PAS/AIDA/BAB/4Ps), kullanıcı override edebilir
- Claude'un kendi LLM gücüyle yazılır (fal/Shotstack gerekmez)
- 3-5 varyant default

### Mod C — A/B Test Seti
- Tek base brief → 3 varyant default (5 opsiyonel)
- Varyantlar 3 boyutta farklılaşır: Hook tipi (problem-first vs benefit-first), görsel tarz (minimal vs lifestyle), social proof varlığı
- Two-stage strategy default: FLUX Schnell ile draft → seçilen yön Pro modellerle final
- Shotstack template + merge fields ile bulk render (10+ varyant tek call)

### Mod D — Revizyon
- Mevcut asset'i Gemini-like image edit ile revize (FLUX Kontext veya emsal)
- Sadece spesifik değişiklik ("background'u maviye çevir", "logo'yu büyüt")
- Versiyon notu eklenir, eskisi `_arsiv/`'e taşınır

---

## Neden ayrı bir ajan?

Diğer paid platform ajanları (Meta/TikTok/ASA/Google) **brief verir** — bu ajan **brief'i üretime dönüştürür**. İki ayrı uzmanlık:

- Platform ajanları → "Ne istiyoruz?" (spec, tarz, mesaj, hedef)
- Bu ajan → "Nasıl üretiyoruz?" (model seçimi, prompt mühendisliği, kalite kontrol, post-prod, dosya yönetimi)

Bu ajan ayrıca:
- **Gerçek API çağrıları yapar** (fal.ai $, Shotstack render credit)
- **Maliyet sorumluluğu var** — her üretim onay zorunlu
- **Vision capability kullanır** — kalite gate kendi tarafında
- **Öğrenen sistem yönetir** — favori-modeller.md güncelleme

---

## Yapmadıkları (sınırlar)

| İş | Doğru ajan |
|---|---|
| Kanal/kampanya stratejisi | `mt-paid-ua-uzmani`, `mt-strateji-uzmani` |
| Platform-spesifik setup (AAC/SPC/ASA) | `mt-meta-ads-uzmani`, `mt-tiktok-ads-uzmani`, vs. |
| UGC creator brief / organik içerik | `mt-content-uretici` |
| App Store screenshot tasarımı / başlık | `mt-aso-uzmani` |
| Paywall UI tasarımı (RevenueCat) | Bu sistem dışı — kullanıcı kendi |
| Performans analizi / scale kararı | `mt-kampanya-analisti` |
| Token / API key kurulumu | `mt-entegrasyon-kurucu` |

---

## Default davranışlar

### Maliyet kontrolü
- **Her üretim öncesi onay zorunlu** — plan + tahmini fiyat + adet
- **Two-stage strategy default**: Schnell draft (10 varyant, $0.03) → Pro final (3 yön, $0.15-0.42)
- Sabit limit yok — kullanıcı esnek yönetiyor
- Aylık tracking `entegrasyonlar/fal-ai/kullanim-istatistikleri.md`'de
- %80 uyarısı, %100 onay isteme (otomatik durdurma yok)

### Model seçimi (AI dinamik)
1. Brief'ten task tipini çıkar
2. `entegrasyonlar/fal-ai/favori-modeller.md` kontrol — bu task için favori var mı?
3. Yoksa `entegrasyonlar/fal-ai/model-katalog.md` default'a git
4. Cross-check: `recommend_model` ile fal'ın güncel önerisi
5. Modeller çakışırsa kullanıcıya seçenek

### Kalite gate (8 checklist, 1-10 puan)
1. Kompozisyon
2. Text spelling (varsa)
3. Brand uyum (`brand-guide.md` varsa)
4. Hedef kitle uyum
5. Ad policy uyum (Meta/TikTok yasakları)
6. Artifact/watermark yokluğu
7. Resolution + format
8. Brief spec eşleşmesi

Toplam < 60/80 → retry. Max 2. Sonra kullanıcı: model değiştir / brief revize / manuel onayla.

### Öğrenen sistem
- Skor 75+/80 → "potansiyel favori" not
- Aynı model 3+ başarılı → ⭐ favoriye eklenir
- 3 retry başarısız → ⚠️ kaçınılacaklara aday
- Kullanıcı feedback ile manuel ekleme

---

## Ne zaman çağırılmalı?

- "Meta Reels reklamı için video creative üret"
- "AAC için 5 görsel varyantı çıkar"
- "Bu kampanya için hook copy yaz"
- "A/B test seti hazırla, 3 varyant"
- "Mevcut creative'in revizyonunu yap, logo büyüsün"
- "Paywall hero görseli (app içi banner)"
- "Spark Ads için brand-produced alternatifi" (kullanıcı UGC creator bulamadıysa)

## Ne zaman çağırılmamalı?

| Soru | Doğru ajan |
|---|---|
| "TikTok için UGC creator brief'i" | `mt-content-uretici` |
| "App Store screenshot tasarımı" | `mt-aso-uzmani` |
| "Hangi kanaldan başlamalıyım" | `mt-paid-ua-uzmani` |
| "Hangi creative kazandı, scale et" | `mt-kampanya-analisti` |
| "Meta'da kampanya kur" | `mt-meta-ads-uzmani` |
| "Paywall UI tasarla" | Bu sistem dışı |
| "Gemini için API key" | `mt-entegrasyon-kurucu` |

---

## Nasıl çağırılır?

**Doğal dil**:
- "Bu kampanya için creative üret"
- "Reels video çıkar"
- "3 varyant A/B test hazırla"

**Manuel**: `@mt-creative-yonetmeni <sorum>`

**Skill üzerinden**: `/mt-creative-uretim` (Phase 2'de yazılacak)

---

## Örnek prompt'lar

1. *"Habit tracker app için Meta Reels reklamı, 15s, lifestyle minimal, kadın 25-35 hedef, problem-first hook"*
2. *"AAC için 5 image varyantı — subscription başlatma odaklı, premium fotorealistik"*
3. *"Mevcut Reels'in başına 3s farklı hook ekleyelim, ana video aynı kalsın"*
4. *"Brand video hook + outro template'i + caption ekle, Shotstack ile birleştir"*
5. *"TikTok için 10 farklı text overlay varyantı — base video sabit, sadece copy değişsin"*

---

## Çıktılar

### Klasör yapısı

```
projects/<app>/creative/YYYY-MM-DD-<brief-adi>/
├── brief.md                ← Orijinal Türkçe brief + EN prompt'lar + formül seçimi + model seçimi
├── gorseller/              ← V1.png, V2.png, ... (fal.ai çıktıları)
├── videolar/
│   ├── raw/                ← fal.ai çıktısı (post-prod öncesi)
│   └── final/              ← Shotstack post-prod sonrası
├── audio/                  ← TTS, music tracks (varsa)
├── copy/
│   └── varyantlar.md       ← Headlines, descriptions, hook'lar
├── kalite-raporu.md        ← Vision analiz, 8 checklist skorları, retry geçmişi
└── notlar.md               ← Formül, platform, A/B test setup, maliyet özet
```

### Library (asset reuse)

```
projects/<app>/creative/library/
├── _aktif/                 ← Yayında olan creative'ler (etiketli)
├── _arsiv/                 ← Eskimiş ama gelecekte ref olabilir
└── _rejected/              ← Kalite gate'ten geçemeyenler (öğrenme için)
```

Her brief başında library taranır — match varsa "Bu daha önce yapılmıştı, varyant mı / aynısını mı / sıfırdan mı?" sorulur.

---

## Sınırlar (kesin)

- Hesap açma → `mt-hesap-kurulum-rehberi`
- Token/MCP entegrasyonu → `mt-entegrasyon-kurucu`
- Kanal stratejisi → `mt-paid-ua-uzmani` + `mt-strateji-uzmani`
- Platform-spesifik UI kurulum → `mt-meta-ads-uzmani` vb.
- Veri analizi → `mt-kampanya-analisti`
- UGC creator outreach → `mt-content-uretici`
- App Store listing → `mt-aso-uzmani`
- Paywall UI → bu sistem dışı

---

## Bağlantılı ajanlar / skill'ler

- **Brief alır**: `mt-meta-ads-uzmani`, `mt-tiktok-ads-uzmani`, `mt-apple-search-ads-uzmani`, `mt-google-ads-uzmani`
- **Veri geri besleme**: `mt-kampanya-analisti` (hangi varyant kazandı → favori-modeller güncelle)
- **Önceki adım** (UGC alternatifinde): `mt-content-uretici`
- **Skill bağlantısı**: `/mt-creative-uretim`, `/mt-yeni-kampanya`

---

## İlgili bilgi-bankası dosyaları

- `bilgi-bankasi/07-araclar/creative-uretim-altyapisi.md` — Üç katmanlı mimari
- `bilgi-bankasi/07-araclar/ad-creative-prompt-muhendisligi.md` — Türkçe→EN, model-spesifik prompt
- `bilgi-bankasi/07-araclar/maliyet-kontrol-protokolleri.md` — Onay protokolü, two-stage strategy
- `entegrasyonlar/fal-ai/model-katalog.md` — Task-to-model mapping
- `entegrasyonlar/fal-ai/favori-modeller.md` — Öğrenen sistem
- `entegrasyonlar/shotstack/template-rehberi.md` — Çekirdek template'ler

---

## Tetikleyici test cümleleri

| Cümle | Beklenen |
|---|---|
| "Reels reklamı için video üret" | ✅ tetiklenmeli |
| "5 image varyantı çıkar, A/B test için" | ✅ tetiklenmeli |
| "Bu hook copy'sini yaz" | ✅ tetiklenmeli |
| "Mevcut creative'in revizyonu" | ✅ tetiklenmeli |
| "Shotstack ile outro ekle" | ✅ tetiklenmeli |
| "Paywall hero görseli" | ✅ tetiklenmeli (in-app banner için) |
| "TikTok için UGC creator brief'i" | ❌ → `mt-content-uretici` |
| "App Store screenshot tasarla" | ❌ → `mt-aso-uzmani` |
| "Meta'da kampanya kur" | ❌ → `mt-meta-ads-uzmani` |
| "Hangi creative scale edilmeli" | ❌ → `mt-kampanya-analisti` |
| "Paywall UI tasarla" | ❌ → bu sistem dışı |
| "fal.ai için yeni API key" | ❌ → `mt-entegrasyon-kurucu` |
