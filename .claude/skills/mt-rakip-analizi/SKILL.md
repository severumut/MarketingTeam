---
name: mt-rakip-analizi
description: |
  Rakip uygulama(lar) derinlemesine analiz. mt-rakip-arastirmaci ajanı çağırır. Tek rakip / kategori benchmark / yön bazlı (paywall, pricing, ad library, vb.) modları.
  TRIGGER when: "/mt-rakip-analizi" veya "X uygulamasını incele", "Bu kategoride rakipler nasıl?".
  SKIP when: kendi ASO denetimi (mt-aso-uzmani).
  ÖRNEK KOMUTLAR: "/mt-rakip-analizi", "Streaks app'i analiz et", "Habit kategorisi rakipler".
user-invocable: true
---

# /mt-rakip-analizi

## Akış
1. Mod? (Tek rakip / kategori benchmark / yön bazlı / güncelleme takibi)
2. Rakip(ler) adı veya App Store URL
3. Storefront(lar)
4. `mt-rakip-arastirmaci` ajanı çağır
5. Ajan public kaynakları tarar (App Store + Meta Ad Library + TikTok Creative Center + Google Ads Transparency + reviews)
6. Yapılandırılmış rapor üretir
7. Çıktı: `projects/<app>/rakip-analizleri/<rakip-slug>.md` veya `_benchmark-<tarih>.md`

## Çıktı
- Rakip analiz rapor dosyası

## Bağımlılık
- `mt-rakip-arastirmaci` ajanı
