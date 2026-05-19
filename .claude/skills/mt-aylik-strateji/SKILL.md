---
name: mt-aylik-strateji
description: |
  Ay sonu strateji review + sonraki ay planı. mt-kampanya-analisti retrospektif yazar (geçen ay özet), mt-strateji-uzmani sonraki ay planı yazar. İki ajan birlikte çalışır.
  TRIGGER when: "/mt-aylik-strateji" veya "Ay sonu review", "Sonraki ay planı".
  SKIP when: haftalık rapor (mt-haftalik-rapor), tek seferlik bütçe sorusu (mt-butce-planla).
  ÖRNEK KOMUTLAR: "/mt-aylik-strateji", "Mayıs retrospektif + Haziran planı".
user-invocable: true
---

# /mt-aylik-strateji

## Akış
1. Hangi ay biten? (default: geçen ay)
2. **Retrospektif** (mt-kampanya-analisti — Mod E):
   - Geçen ayın tüm haftalık raporları topla
   - Plan vs gerçek karşılaştırma
   - Kazanan/kaybeden kampanyalar
   - Öğrenilenler
   - Çıktı: `raporlar/<yyyy-mm>-aylik-retro.md`
3. **Sonraki ay planı** (mt-strateji-uzmani — Mod A):
   - Retrospektif'i input al
   - Yeni KPI hedefleri
   - Allocation revize
   - Haftalık checkpoint'ler
   - Çıktı: `butce/<yyyy-mm-next>.md`
4. Özet sun

## Çıktı
- `raporlar/<yyyy-mm>-aylik-retro.md`
- `butce/<yyyy-mm-next>.md`

## Bağımlılık
- `mt-kampanya-analisti`, `mt-strateji-uzmani`
