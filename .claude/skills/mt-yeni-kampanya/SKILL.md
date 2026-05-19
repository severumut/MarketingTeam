---
name: mt-yeni-kampanya
description: |
  Yeni reklam kampanyası planlama + setup akışı. Hangi platform / hangi uygulama / hangi hedef / hangi bütçe sorar, ilgili platform uzmanını + creative ajanı + strateji ajanı sırayla çağırır. Çıktı: projects/<app>/kampanyalar/<platform>/<tarih>-<adi>.md.
  TRIGGER when: "/mt-yeni-kampanya" veya "Yeni kampanya açalım", "X platformunda kampanya başlatalım".
  SKIP when: mevcut kampanya optimizasyonu (ilgili platform ajan doğrudan).
  ÖRNEK KOMUTLAR: "/mt-yeni-kampanya", "Meta'da AAC kampanya açalım", "ASA brand campaign başlat".
user-invocable: true
---

# /mt-yeni-kampanya

## Akış
1. Hangi uygulama? (projects/ taraması)
2. Hangi platform? (Meta / TikTok / ASA / Google)
3. Hangi optimizasyon hedefi? (Install / Subscribe / Trial Start / Purchase)
4. Hedef coğrafya, dil
5. `mt-strateji-uzmani` çağır → bütçe + KPI hedef (varsa mevcut aylık plandan oku)
6. İlgili platform uzmanını çağır:
   - Meta → `mt-meta-ads-uzmani` → AAC + AEM + SKAN + CAPI plan
   - TikTok → `mt-tiktok-ads-uzmani` → SPC + AEO + Spark Ads plan
   - ASA → `mt-apple-search-ads-uzmani` → 3 kampanya yapısı (Brand + Category + Discovery)
   - Google → `mt-google-ads-uzmani` → AC for Installs + Firebase event handoff
7. Creative brief'i `mt-creative-yonetmeni`'ne yönlendir (görsel + video + copy)
8. Maliyet onayı al, üretimi başlat
9. Çıktı dosyası: `projects/<app>/kampanyalar/<platform>/<yyyy-mm-dd>-<kampanya-adi>.md`

## Çıktı
- Kampanya plan dosyası (platform uzmanı yazar)
- Creative klasörü (mt-creative-yonetmeni)
- (varsa) Firebase event handoff MD (Google ise)

## Bağımlılık
- Platform uzmanları, `mt-strateji-uzmani`, `mt-creative-yonetmeni`
