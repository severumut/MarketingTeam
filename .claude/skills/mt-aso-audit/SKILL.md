---
name: mt-aso-audit
description: |
  ASO denetimi (audit). Bir uygulamanın App Store listing'ini 10 boyutta tarar, 100 üzerinden skor verir, öncelikli iyileştirme listesi çıkarır. mt-aso-uzmani ajanını çağırır.
  TRIGGER when: "/mt-aso-audit" veya "ASO denetimi", "ASO skoru çıkar", "Store listing kontrol".
  SKIP when: rakip ASO analiz (mt-rakip-analizi), paid creative üretim (mt-creative-uretim).
  ÖRNEK KOMUTLAR: "/mt-aso-audit", "Habit App ASO denetle", "App Store listing skor".
user-invocable: true
---

# /mt-aso-audit

## Akış
1. Hangi uygulama? (projects/ taraması)
2. App Store URL (kullanıcıdan veya `00-app-overview.md`'den)
3. Hangi storefront(lar)? (default: TR + US)
4. `mt-aso-uzmani` ajanını çağır → Mod A (Audit)
5. Ajan:
   - App Store sayfasını WebFetch
   - 10 boyutta skor (title, subtitle, keywords, description, screenshots, ikon, preview, localization, rating, reviews)
   - Öncelikli iyileştirmeler (top 5)
   - Sonraki adımlar (screenshot brief → mt-creative-uretim, CPP yarat → ASA bağlama)
6. Çıktı: `projects/<app>/05-aso-stratejisi.md` (update)

## Çıktı
- `projects/<app>/05-aso-stratejisi.md`

## Bağımlılık
- `mt-aso-uzmani` ajanı
