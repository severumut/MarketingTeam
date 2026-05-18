# Creative Üretim — Maliyet Kontrol Protokolleri

> Boşa para harcamamak ve bütçeyi takip etmek için kurallar.

---

## Felsefe

Kullanıcı (Umut) **esnek yönetiyor** — sabit limit istemiyor, brief-bazlı karar vermek istiyor. Bu yüzden sistem:
- **Otomatik durdurma yok** — sadece uyarı
- **Her brief öncesi onay** — şeffaflık
- **Aylık tracking** — büyük resim görünür kalsın

---

## Onay Protokolü (Her Brief İçin)

Her üretim öncesi şu formatta sun:

```
═══════════════════════════════════════
ÜRETİM PLANI

Amaç: <Hook video for habit tracker Reels>
Model(ler): <fal-ai/kling-video/v2.5-turbo>
Adet: <3 varyant>
Süre: <15 saniye × 3 = 45 saniye total>

Maliyet hesabı:
  - Kling 2.5 Turbo Pro: $0.07/s × 45s = $3.15
  - Post-prod (Shotstack): ~5 render credit (stage = ücretsiz)

Tahmini toplam: $3.15

Çıktı yeri: projects/<app>/creative/2026-05-18-reels-hook/
═══════════════════════════════════════

Onaylar mısın? (E / H / değiştir)
```

Kullanıcı yanıtları:
- **E / Evet / Devam et** → üretim başlar
- **H / Hayır / İptal** → durdur, brief revize
- **Değiştir** → "Model'i değiştirelim mi?", "Adet azalsın mı?"

---

## Two-Stage Strategy (Default)

### Aşama 1 — Draft (ucuz, çok)
- Amaç: yön/mood/kompozisyon keşfi
- Model: FLUX Schnell ($0.003/img)
- Adet: 10 varyant
- Toplam: $0.03
- Süre: ~30 saniye

→ Kullanıcı 3 favori yön seçer.

### Aşama 2 — Final (premium, az)
- Amaç: production-ready kalite
- Model: FLUX Pro veya Nano Banana Pro ($0.05-0.07/img)
- Adet: 3 (seçilen yönler) + opsiyonel her birinden 1-2 minor variant
- Toplam: $0.15-0.42
- Süre: ~1-2 dakika

**Toplam brief maliyeti**: $0.18-0.45

### Karşılaştırma
| Yaklaşım | Maliyet | Kalite | Keşif |
|---|---|---|---|
| Direkt 5 premium | $0.25-0.35 | Yüksek | Sınırlı (5 yön zorlama) |
| Two-stage | $0.18-0.45 | Yüksek | Geniş (10 yön → 3 final) |

Two-stage = daha iyi sonuç + ortalama daha ucuz.

### Override durumu
Kullanıcı "direkt premium istiyorum" derse two-stage atla. Tipik: aciliyet veya çok net brief.

---

## Video Maliyet Yönetimi (Daha Hassas)

Video pahalı — image'dan 10-100x daha pahalı.

### Maliyet aralıkları (15 saniye video)
- Kling 2.5 Turbo Pro: $1.05
- Kling 3.0 Pro (audio): $1.68-2.94
- Veo 3.1: $3.00
- Sora 2 Pro: $7.50

### Video stratejisi
1. **Storyboard image first**: Önce 2-3 image varyantı üret ($0.03-0.15), yön onaylanırsa video'ya geç
2. **Single variant**: Video için 5 varyant yapma — 1 iyi seçim daha verimli
3. **Reuse via Shotstack**: 1 video çekildi, Shotstack ile outro/caption ekle (yeni render gerek yok)
4. **Asset library kontrolü**: Benzer video daha önce yapıldı mı?

---

## Aylık Bütçe Takibi (Phase 4'te aktive)

`butce/<yyyy-mm>.md` dosyasında **fal.ai ve Shotstack ayrı kalemler**:

```markdown
## 2026-05 Bütçe

### fal.ai
- Tahmini bütçe: $50
- Şu ana kadar harcanan: $X
- Kalan: $Y
- %X kullanıldı

### Shotstack
- Plan: <Stage / Production>
- Bu ay render credit: <kullanılan / toplam>
- Notu: Stage = ücretsiz test
```

### Otomatik uyarılar (Phase 4)

| Eşik | Aksiyon |
|---|---|
| %50 | Sessiz log |
| %80 | "Bu ay fal.ai bütçende %80'e geldin. Kalan briefleri planlayalım mı?" |
| %100 | "Limit doldu. Devam etmek için ek bütçe onayı veya sonraki ay bekleme." |
| %120+ | Büyük uyarı: "Bütçe %120'ye geçti, ek onayın gerekli." |

Otomatik durdurma yok — kullanıcı yönetir.

---

## Asset Reuse Disiplini

`projects/<app>/creative/library/` taraması:
- Her brief'in başında AI burayı tarar (etiket bazlı grep)
- Match varsa kullanıcıya: "Bu konu/tarz daha önce yaratıldı, bak: [link]. Hangisi?"
  - a) Aynısını kullan (ücretsiz)
  - b) Bu base'in varyantını yap (yeni üretim ama base referans)
  - c) Sıfırdan yarat

### Library etiketleri (yaratılırken otomatik)
- Platform: meta-reels / tiktok / google-asset / asa-screenshot
- Tip: hook / body / outro / banner / paywall-hero
- Tarz: minimal / lifestyle / 3d / illustrative
- Hedef kitle: 18-25 / 25-35 / 35+ / unisex / female / male
- Konu: morning-routine / fitness / finance / habit / ...

---

## Quality-vs-Cost Trade-off (model seçimi)

Bir karar matrisi:

```
Eğer:
  - Çok varyant gerekli (>5) → FLUX Schnell başla, en iyi 1-2 Pro'ya yükselt
  - Final production asset → Pro modeli direkt (Schnell skip)
  - Text içeriyor → Ideogram (model seçimi tartışılmaz)
  - Premium fotorealizm + 1 hero shot → Nano Banana Pro
  - Hızlı social ad varyantı → FLUX Schnell yeterli
  - Animatik / storyboard → FLUX Schnell, sonra video
```

---

## Sık Yapılan Hatalar (Maliyet)

| Hata | Sonuç | Önleme |
|---|---|---|
| Tek brief'te 10 premium varyant | $0.50-0.80 boşa | Two-stage zorunlu |
| Aynı brief'i 3 kez deneme | 3x maliyet | Önce brief revize, sonra üretim |
| Video direkt 4 varyant | $4-12 boşa | Storyboard image first |
| Library check atlama | Tekrar üretim | Brief başında library tarama otomatik |
| Sora 2 Pro her video için | $7.50/15s | Sadece "wow moment" için, default Kling Turbo |
| Premium modelle bulk varyant | 10x boşa | Bulk = Schnell, final = Pro |

---

## Aylık Optimization Review (Phase 4+)

`mt-creative-yonetmeni` ay sonu raporu:
- Bu ay üretilen toplam asset
- Toplam maliyet (fal + Shotstack)
- Modele göre dağılım
- En verimli model (kalite skor / maliyet oranı)
- Library reuse oranı
- Önerilen optimizasyonlar (örn. "Bu ay 30 video Kling Turbo'da yapıldı, hepsi başarılı — favorilere ekleyelim")

Bu rapor `raporlar/<yyyy-mm>-creative-rapor.md`.
