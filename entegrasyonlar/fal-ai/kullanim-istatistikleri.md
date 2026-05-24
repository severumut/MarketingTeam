# fal.ai — Kullanım İstatistikleri

> Aylık fal.ai çağrı ve maliyet özeti. Scheduled task ile otomatize edilebilir (Phase 4+).
> Manuel olarak da güncellenebilir — her brief üretimi sonrası AI ajan toplam maliyeti not eder.

---

## Aylık özet

| Ay | Toplam çağrı | Image üretim | Video üretim | Audio | Toplam maliyet | Notu |
|---|---|---|---|---|---|---|
| 2026-05 | 13 | 7 (FLUX Schnell) | 6 (Kling 2.5 Turbo Pro × 5, Veo 3.1 × 1) | 0 | ~$4.97 | BlurFilm App Store preview v1 + UGC TikTok v1 |

---

## Brief bazlı detay

> Her creative brief üretimi sonrası kayıt eklenir.

| Tarih | Brief | Model(ler) | Adet | Maliyet | Kalite skor ortalama |
|---|---|---|---|---|---|
| 2026-05-19 | BlurFilm App Store preview video (EN) | FLUX Schnell + Kling 2.5 Turbo Pro | 7 img + 5 video | ~$1.77 | 69/80 (final composite) — KULLANICI REDDETTI: logo yanlış, emojiler var, konsept saçma |
| 2026-05-19 | BlurFilm TikTok UGC ad v1 (EN, "boyfriend fight" angle) | Veo 3.1 (text-to-video, native audio) | 1 video 8s | $3.20 | Pending user review |

---

## Aylık bütçe kontrolü

`butce/<yyyy-mm>.md` dosyasında **fal.ai kalemi** ayrı bir satır olarak yer alır:
- Bu ay tahmini fal.ai harcaması: $X
- Şu ana kadar harcanan: $Y
- Kalan: $Z

Kullanıcı aylık limiti aşmaya yakınsa AI ajan **proaktif uyarı** verir:
- %80'e ulaştığında: "Bu ay fal.ai bütçende %80'e geldin, kalan briefleri planlayalım mı?"
- %100'e ulaştığında: "Limit doldu, ek brief için ek bütçe onayı gerekli"

> Limit aşımı **otomatik durdurma** değil — kullanıcı esnek yönetmek istiyor, sadece bildirim.
