# Ad Creative Prompt Mühendisliği (Türkçe → EN)

> Kullanıcı Türkçe brief verir, AI ajan EN prompt'a çevirip fal.ai modeline gönderir. Bu dosya çeviri + mühendislik kurallarını içerir.

---

## Genel Prensipler

### 1. Hedef-driven prompt
Prompt'u **çıktı odaklı** yaz. "Bir kahve resmi" değil, "warm morning light on espresso cup, ceramic textured background, professional product photography, 4K".

### 2. Model-specific dialect
Her model farklı prompt diline tepki verir:

- **FLUX**: Doğal cümle, detay zengin. Negative prompt destekler ama yumuşak
- **Ideogram**: Text rendering için "the text reads 'XYZ' in clean sans-serif" formatı
- **Nano Banana Pro**: Multi-element prompt çok güçlü, "a person sitting at desk with X on left, Y on right" gibi spatial reasoning
- **Stable Diffusion 3.5**: Token sırası önemli, ilk 75 token en ağırlıklı
- **Kling video**: Hareket tanımı ekle ("subject slowly turns", "camera dolly forward")
- **Veo**: Kompleks physics + motion ipucu ("water splashing in slow motion, 240fps")

### 3. Zorunlu komponentler (her prompt'ta)
- **Subject** — Ne çiziliyor
- **Style** — Görsel tarz (photorealistic / minimal / illustrative / 3D render)
- **Lighting** — Soft / hard / golden hour / studio / natural
- **Composition** — Centered / off-center / rule of thirds / close-up / wide
- **Color palette** — Brand uyumlu veya brief'e göre
- **Aspect ratio** — Hedef platforma göre (9:16, 1:1, 16:9, 4:5)

### 4. Negative prompt (her zaman ekle)
```
no watermark, no text artifacts, no extra fingers, no deformed limbs,
no overexposure, no AI signature, no blurry edges
```

---

## Türkçe Brief Anatomisi

Kullanıcı tipik brief örnekleri:

> "Habit tracker app için Reels reklamı, minimal görsel, mavi tonlar, lifestyle hissi, 30 yaş üstü kadın hedef"

Bu brief'i şu komponentlere ayır:
- App tipi: habit tracker
- Platform: Meta Reels (9:16, video)
- Stil: minimal
- Renk: mavi tonlar
- His: lifestyle
- Hedef kitle: 30+ kadın

EN prompt'a çevirme:

```
Minimalist lifestyle scene, woman in her 30s using a habit tracker app on iPhone,
soft natural morning light, blue color palette (cool tones, slate blue, light gray),
clean composition with negative space, 9:16 vertical, shallow depth of field,
photorealistic professional advertising photography, Instagram Reels aesthetic.

Negative: cluttered background, harsh shadows, oversaturated colors, stock photo look,
extra fingers, deformed hands, watermark, text artifacts.
```

---

## Copy Formülleri — Prompt'a Entegrasyon

### PAS (Problem-Agitation-Solution)
**Görsel sıralama** (video için 3 sahne):
1. Problem sahnesi (5s) — kullanıcı sorunla mücadele ederken
2. Agitation (5s) — sorun derinleşiyor (yorgun bakış, kaybedilen zaman)
3. Solution (5s) — app açılıyor, çözüm rahatlatıcı

### AIDA (Attention-Interest-Desire-Action)
1. Attention (2s) — beklenmedik / yüksek-tezat görsel
2. Interest (5s) — kullanım anı, "bu nasıl çalışıyor?"
3. Desire (5s) — sonuç gösterimi (transformasyon)
4. Action (3s) — CTA + App Store badge

### BAB (Before-After-Bridge)
1. Before (5s) — eski hal (kaotik, başarısız)
2. Bridge (3s) — app indirme anı
3. After (7s) — yeni hal (düzenli, başarılı)

### 4Ps (Promise-Picture-Proof-Push)
1. Promise (3s) — "30 günde X"
2. Picture (5s) — sonuç görselleştirme
3. Proof (4s) — "100K+ kullanıcı" / review screenshot
4. Push (3s) — CTA

---

## Brand Voice Enjeksiyonu

Eğer `projects/<app>/creative/brand-guide.md` varsa, her prompt'a otomatik enjekte et:

```
[brand-guide'tan]:
- Renk paleti: #2C3E50 (slate blue), #ECF0F1 (light gray), #3498DB (accent blue)
- Ton: minimal, sakin, profesyonel
- Kaçınılacak: glitch effects, neon colors, exaggerated emotions

[Final prompt'a eklenir]:
"...consistent with brand palette of slate blue and light gray with subtle accent blue,
minimal calm professional tone, no glitch effects, no neon colors..."
```

---

## Video-Specific Prompt İpuçları

### Kling 2.5 Turbo Pro
- 5-15 saniye optimal
- Hareket tanımı: "subject slowly...", "camera gently pans..."
- Frame rate: 24fps default (cinematic)
- "static shot" ekle eğer kamera hareketi istenmiyorsa

### Veo 3.1
- Karmaşık physics — "ball bouncing on grass, realistic gravity"
- Multiple subjects mümkün
- Daha pahalı, sadece özel anlar için

### Hareket Sınırları (önemli)
- Çok hareket = AI distortion artar
- 1-2 ana hareket noktası yeterli
- Camera + subject aynı anda hareket etmesin (klasik AI hatası)

---

## Türkçe Karakter Yönetimi (Text Rendering)

Reklamda Türkçe text varsa (slogan, başlık):
- **Sadece Ideogram V3 güvenli** — ş, ç, ğ, ü, ö, ı doğru render
- FLUX text rendering Türkçe karakterde patlar (genelde Latin diakritik sorunu)
- Nano Banana Pro orta seviye — basit kelimeler OK, karmaşık değil

Türkçe text önerisi:
```
Use Ideogram V3 with prompt format:
"The text reads 'Alışkanlık edin, hayatını değiştir' in clean bold Turkish sans-serif font,
centered on light background, professional advertising typography."
```

---

## Aspect Ratio + Resolution Cheatsheet

| Platform | Format | Çözünürlük | Notu |
|---|---|---|---|
| Meta Reels | 9:16 | 1080×1920 | Sound-on default |
| Meta Stories | 9:16 | 1080×1920 | 15s max |
| Meta Feed | 1:1 veya 4:5 | 1080×1080 / 1080×1350 | 4:5 daha çok yer kaplar |
| Instagram Reels | 9:16 | 1080×1920 | — |
| TikTok In-Feed | 9:16 | 1080×1920 | 9-15s optimal |
| TikTok Spark Ads | 9:16 | Creator'ın orijinal post | — |
| ASA (banner yok) | — | — | App Store screenshot mt-aso-uzmani işi |
| Google Ads asset | 1.91:1, 1:1, 4:5, 9:16 | Asset library çok-format | 5+ varyant |

---

## İletişim Tonu Kuralları (Indie iOS bağlamında)

- **Authentic > Polished**: TikTok özellikle "reklam gibi durmasın"
- **Avoid stock-photo look**: Lifestyle photography preferred over staged stock
- **Diverse representation**: Hedef pazara göre etnik / yaş / cinsiyet temsil
- **Real iPhone in shot**: App ekranı gösterilirken Apple device kullanılmalı (yasal)

---

## Yaygın Hatalar (kaçınılacak)

- Çok detaylı prompt → model overwhelmed olur, kaotik çıktı
- Negative prompt'sız üretim → garip artifact riski yüksek
- "More beautiful" gibi vague kelimeler → işe yaramaz
- Türkçe karakter Ideogram dışı modelde
- "App ad" demek → AI yanlış yorumluyor; bunun yerine sahne tarif et
