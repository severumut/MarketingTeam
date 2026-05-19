---
name: mt-revenuecat-ozet
description: |
  RevenueCat MCP üzerinden subscription özet raporu. Son N gün metriklerini çeker (MRR, ARR, active subs, churn, trial conversion, paywall conversion), mt-kampanya-analisti yorumu ekler.
  TRIGGER when: "/mt-revenuecat-ozet" veya "RevenueCat verisi", "Subscription rapor", "MRR durumu".
  SKIP when: kampanya performans (mt-haftalik-rapor), pricing kararı (mt-strateji-uzmani).
  ÖRNEK KOMUTLAR: "/mt-revenuecat-ozet", "Son 30 gün subscription özet", "MRR nasıl".
user-invocable: true
---

# /mt-revenuecat-ozet

## Akış
1. Hangi periyot? (default: son 30 gün)
2. Hangi uygulama? (RevenueCat'te birden fazla proje varsa seç)
3. RevenueCat MCP çağrıları:
   - `list-projects` → proje seç
   - `list-apps` → app seç
   - `get-overview-metrics` → MRR, ARR, active, new, churn
   - `get-revenue-metric` → revenue zaman serisi
   - `list-subscriptions` → detay
   - `get-customer-center-config` → paywall info
4. `mt-kampanya-analisti` yorumu (subscription cohort, trial→subscribe, paywall conversion)
5. Çıktı: `projects/<app>/raporlar/revenuecat/<yyyy-mm-dd>.md`

## Çıktı
- `projects/<app>/raporlar/revenuecat/<yyyy-mm-dd>.md`

## Bağımlılık
- RevenueCat MCP (kurulu ✅)
- `mt-kampanya-analisti` ajan (yorum için)
