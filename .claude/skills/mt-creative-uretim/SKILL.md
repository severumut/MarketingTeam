---
name: mt-creative-uretim
description: |
  Görsel + video + copy üretimi. Brief alır, mt-creative-yonetmeni'ni 4 modundan birinde çalıştırır (Brief→Üretim / Copy / A/B Set / Revizyon). Maliyet onayı + vision kalite gate + öğrenen sistem.
  TRIGGER when: "/mt-creative-uretim", "Creative üret", "Reklam görseli/videosu üret", "A/B varyantı çıkar", "Hook copy yaz".
  SKIP when: rakip creative analiz (mt-rakip-arastirmaci), App Store screenshot (mt-aso-uzmani).
  ÖRNEK KOMUTLAR: "/mt-creative-uretim", "Reels için video üret", "5 image varyantı".
user-invocable: true
---

# /mt-creative-uretim

## Akış
1. Brief al (kullanıcıdan veya bir önceki skill'den — örn. `/mt-yeni-kampanya` çağırdı)
2. Hangi mod? (Brief→Üretim / Copy / A/B Set / Revizyon / Trend Research)
3. `mt-creative-yonetmeni` ajanını çağır
4. Ajan pipeline'ı yönetir:
   - Library tarama
   - Task tipi belirleme
   - Model seçimi (favori-modeller.md → katalog → recommend_model)
   - Maliyet hesabı + kullanıcı onayı
   - fal.ai üretim
   - Vision kalite gate (8 checklist)
   - Retry (gerekirse)
   - (Video ise) Shotstack post-prod
   - Çıktı kaydetme

## Çıktı
- `projects/<app>/creative/<yyyy-mm-dd>-<brief-adi>/` klasörü dolu

## Bağımlılık
- `mt-creative-yonetmeni` ajanı
- fal.ai MCP (kurulu ✅) + Shotstack MCP (kurulu ✅)
