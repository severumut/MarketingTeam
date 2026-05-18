# fal.ai — Favori Model Listesi (Öğrenen Sistem)

> Bu dosya **yaşayan belge**. Deneme-yanılma ile elde edilen model tercihleri burada birikir.
> AI ajan creative üretimi öncesi önce buraya bakar; varsa favoriden başlar, yoksa `model-katalog.md` defaultlarını dener.

> Son güncelleme: 2026-05-18 (boş başlangıç)

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
| *(henüz boş — ilk creative üretimi sonrası dolacak)* | | | | | |

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
| *(henüz boş)* | |

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
