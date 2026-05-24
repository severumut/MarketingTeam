# fal.ai — Favori Model Listesi (Öğrenen Sistem)

> Bu dosya **yaşayan belge**. Deneme-yanılma ile elde edilen model tercihleri burada birikir.
> AI ajan creative üretimi öncesi önce buraya bakar; varsa favoriden başlar, yoksa `model-katalog.md` defaultlarını dener.

> Son güncelleme: 2026-05-19 (ilk BlurFilm preview üretimi)

---

## Nasıl çalışır?

1. **Üretim sonrası kullanıcı feedback**: 
   - "Bu çok iyi, bunu öncele" → ⭐ Favoriler'e ekle
   - "Bu kötü, bir daha kullanma" → ⚠️ Kaçınılacaklar'a ekle
   - Sessiz kalırsa → kayıt yok (notr)

2. **Otomatik kayıt**:
   - Kalite gate skoru 75+/80 → "potansiyel favori" not düşülür
   - Aynı modelle 3+ başarılı çıktı → ⭐ otomatik favori
   - Kalite gate 3 retry sonra başarısız → ⚠️ kaçınılacaklar adayı

---

## ⭐ Favoriler

| Model | Task tipi | Neden tercih edildi | İlk kayıt | Son kullanım | Başarılı çıktı sayısı |
|---|---|---|---|---|---|
| `fal-ai/flux/schnell` | Storyboard / draft image (9:16) | $0.003/MP ucuz, 0.34s inference, 9:16 custom dimension destekliyor; storyboard-quality concept frames için ideal | 2026-05-19 | 2026-05-19 | 7 (Stage 1 BlurFilm preview) — 5 başarılı + 2 retry (scene 3, scene 5 prompt revize) |
| `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` | Image-to-video 5s (premium tier) | Brief'te Kling 2.0 istendi ama fal'da 2.0 yok; 2.5 Turbo Pro premium successor — $0.07/s (ceiling'de), cinematic motion, prompt precision iyi | 2026-05-19 | 2026-05-19 | 5 (Stage 2 BlurFilm preview, ilk denemede hepsi temiz) |

---

## ⚠️ Kaçınılacaklar

| Model | Task tipi | Sorun | Tarih |
|---|---|---|---|
| *(henüz boş)* | | | |

---

## 📝 Notlar (modele bağlı ipuçları)

> Bir modelin özel davranışı / prompt mühendisliği ipucu varsa buraya not düşülür.

| Model | Not |
|---|---|
| `fal-ai/flux/schnell` | "no text, no logos" negative prompt'unu agresif kullan — AI tipik olarak gibberish text üretiyor, sonra Shotstack overlay daha temiz olur. Image dimension `{width: 1080, height: 1920}` ile 9:16 native dönüyor (output 1072×1920 — minor crop ihtiyacı yok). |
| `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` | `duration: "5"` veya `"10"` SABIT (custom değer enum dışı). 5s clipler kompozit içinde 4.4s'a trim edilebilir Shotstack `length`'iyle. Negative prompt'a "fast cuts, jittery, deformed hands" eklemek hareketi yumuşatıyor. |
| `mcp__1d4122d5-739d-47ae-abed-5805aa113d17__get_shotstack_guide` | 2026-05-19 itibarıyla **500 hatası veriyor** — schema description'ları detaylı yazıldığı için bypass mümkün. `rich-text` font.family ONLY built-in: Roboto, Montserrat, Open Sans, Work Sans, Permanent Marker, Lato değil. `lineHeight` ve `letterSpacing` `font` objesinde değil, `style` objesinde. `alignment` değil, `align`. Bu üçü validation fail sebebi. |

---

## Kullanım örneği (AI ajan iç işleyişi)

```
Brief: "Habit tracker app için Reels reklamı, lifestyle video, 9:16, 15 saniye"

Adım 1: Task tipini belirle → "Lifestyle video (9:16, 9-15s)"
Adım 2: Favoriler'i kontrol et → "Lifestyle video" için favori var mı?
   → Eğer varsa (örn. kling-video/v2.5-turbo 5 başarılı çıktı): onu kullan
   → Yoksa: model-katalog.md default'una git
Adım 3: model-katalog.md → kling-video/v2.5-turbo
Adım 4: get_pricing → 15s × $0.07 = $1.05
Adım 5: Kullanıcı onayı al → üret
Adım 6: Kalite gate (vision analiz)
Adım 7: Kullanıcı feedback → bu dosyaya güncelleme
```
