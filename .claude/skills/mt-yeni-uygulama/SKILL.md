---
name: mt-yeni-uygulama
description: |
  Yeni uygulama onboarding akışı. App bilgilerini sorar, projects/<app>/ klasörünü _sablon'dan klonlar, mt-paid-ua-uzmani + mt-strateji-uzmani + mt-rakip-arastirmaci + mt-aso-uzmani ajanlarını sırayla çağırarak ilk dökümantasyonu üretir.
  TRIGGER when: "/mt-yeni-uygulama" veya "Yeni uygulama eklemek istiyorum", "Bir app daha çıkardım".
  SKIP when: mevcut uygulamayı güncelleme (sadece ilgili ajanı doğrudan çağır).
  ÖRNEK KOMUTLAR: "/mt-yeni-uygulama", "Habit App'i ekleyelim".
user-invocable: true
---

# /mt-yeni-uygulama

## Akış
1. App bilgisini sor:
   - App adı + slug (kısa, lowercase, projects klasör adı)
   - App Store URL veya bundle ID
   - Kategori
   - Hedef pazar (TR / US / global)
   - Monetization modeli (subscription / IAP / free+ads)
   - Mevcut ASO seviyesi (1-10 öz değerlendirme)
2. `projects/<app-slug>/` klasörünü `projects/_sablon/`'dan kopyala
3. `00-app-overview.md` doldur (app metadata)
4. `mt-paid-ua-uzmani` çağır → `02-paid-ua-stratejisi.md` ilk taslak (kanal yön kararı)
5. `mt-strateji-uzmani` çağır → KPI hedefleri + ilk ay bütçe taslağı
6. `mt-rakip-arastirmaci` çağır → 3-5 rakip benchmark → `04-rakip-analizleri/_benchmark-<tarih>.md`
7. `mt-aso-uzmani` çağır → ASO audit → `05-aso-stratejisi.md`
8. Özet: "İlk dökümantasyon hazır. Sonraki adım: hesap aç (`/mt-hesap-ac`) veya creative üretim (`/mt-creative-uretim`)"

## Çıktı
- `projects/<app-slug>/` klasörü dolu (sablon + ajan çıktıları)

## Bağımlılık
- `mt-paid-ua-uzmani`, `mt-strateji-uzmani`, `mt-rakip-arastirmaci`, `mt-aso-uzmani` ajanları
- `projects/_sablon/` şablon
