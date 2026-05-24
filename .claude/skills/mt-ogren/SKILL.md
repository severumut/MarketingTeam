---
name: mt-ogren
description: |
  8 modüllük marketing müfredatını sohbet halinde yürütür. mt-marketing-tutor'u Curriculum Mode'da başlatır. Memory'den kullanıcının ilerlemesini okur, kaldığı yerden devam eder veya istenen modüle geçer. Yan sorular curriculum'u bozmaz — cevaplanır, sonra müfredata geri dönülür.
  TRIGGER when: "/mt-ogren", "/mt-ogrenme", "Öğrenmeye başlayalım", "Öğrenmeye devam edelim", "Sırada hangi modül?", "Modül X'e geç", "Eğitime başla", "Ders başlat".
  SKIP when: tek-shot terim sorusu ("CPI nedir?") — bunlar mt-marketing-tutor Standard Mode'da otomatik açıklanır.
  ÖRNEK KOMUTLAR: "/mt-ogren", "/mt-ogren modul 3", "Öğrenmeye başlayalım", "Kaldığım yerden devam".
user-invocable: true
---

# /mt-ogren

## Amaç
8 modüllük marketing eğitim müfredatını **sohbet halinde** yürüt. Kullanıcı statik MD okumaz — `mt-marketing-tutor` ajanı Curriculum Mode'da etkileşimli olarak anlatır.

## Akış

1. `mt-marketing-tutor` ajanını **Curriculum Mode**'da çağır
2. Ajan `marketing_learning_progress.md` memory'sini oku
3. Kaldığı yerden devam veya istenen modüle geç:
   - Memory'de hiç ilerleme yoksa → Modül 1'den başla
   - Son okuduğun modül 2'yse → "Modül 2 bitti, Modül 3'e geçelim mi?"
   - Kullanıcı "Modül 5'e geç" derse → direkt 5'e geç (önceki modüller boş olabilir ama uyar: "Modül 4'ü atladın, sonradan dönmek ister misin?")
4. Modül içeriğini `bilgi-bankasi/00-ogrenme/modul-XX-...md`'den oku
5. **Sohbet halinde anlat** — statik MD kopyalama, kendi cümlelerinle
6. Senin app'lerinden örnekler (Fairora / What The Emoji / Blur Film)
7. Mini-test (1-2 soru) interaktif yap
8. Memory'yi güncelle (modül durumu, test sonucu)
9. Sonraki modülü öner

## Çıktı
- Sohbet (chat'te)
- `marketing_learning_progress.md` güncellemesi
- `SOZLUK.md` güncellemesi (yeni terimler)
- `marketing_known_terms.md` güncellemesi

## Bağımlılık
- `mt-marketing-tutor` ajanı
- `OGRENME-YOL-HARITASI.md` (müfredat haritası)
- `bilgi-bankasi/00-ogrenme/modul-XX-*.md` dosyaları (içerik kaynağı)

## Komutlar

| Komut | Davranış |
|---|---|
| `/mt-ogren` | Kaldığın yerden devam veya Modül 1'den başla |
| `/mt-ogren modul 3` | Modül 3'e direkt git |
| `/mt-ogren ozet` | Mevcut ilerleme özeti (hangi modüller tamam) |
| `/mt-ogren tekrar 2` | Modül 2'yi tekrar yap (eski test sonucu silinmez, yenisi eklenir) |

## Yan sorular

Curriculum sırasında kullanıcı modül dışı soru sorarsa:
- `mt-marketing-tutor` Standard Mode'a geçici geçer → soruyu tam format ile cevaplar
- Sonra **otomatik müfredata döner**: "Bu kadar açıkladım. Müfredata dönelim mi? Modül X'in Y kısmında kalmıştık."
