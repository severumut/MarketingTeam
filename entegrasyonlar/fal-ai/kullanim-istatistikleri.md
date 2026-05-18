# fal.ai — Kullanım İstatistikleri

> Aylık fal.ai çağrı ve maliyet özeti. Scheduled task ile otomatize edilebilir (Phase 4+).
> Manuel olarak da güncellenebilir — her brief üretimi sonrası AI ajan toplam maliyeti not eder.

---

## Aylık özet

| Ay | Toplam çağrı | Image üretim | Video üretim | Audio | Toplam maliyet | Notu |
|---|---|---|---|---|---|---|
| 2026-05 | 0 | 0 | 0 | 0 | $0 | Henüz aktif değil |

---

## Brief bazlı detay

> Her creative brief üretimi sonrası kayıt eklenir.

| Tarih | Brief | Model(ler) | Adet | Maliyet | Kalite skor ortalama |
|---|---|---|---|---|---|
| — | — | — | — | — | — |

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
