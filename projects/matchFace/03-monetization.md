# 03 — Monetization: Match Face

> Kaynak: `tech/MONETIZATION.md` (ürün tarafı, otoriter) + `launch/LAUNCH_INFO.md`.
> Onboarding: 2026-06-05. Bu **kesin/bilinen** mimaridir.

---

## Model özeti

**Free + tek-seferlik non-consumable IAP** (uygulama-içi satın alma). **Subscription (abonelik) YOK** — bilinçli: photo/video kategorisi abonelikte en düşük dönüşümü verir; tek-mevsim app'te abonelik anlamsız.

| Alan | Değer |
|------|-------|
| Ürün ID | `com.umutsever.MatchFace.premium` |
| Tip | Non-consumable (tek seferlik, kalıcı) |
| Fiyat | **$0.99** US base + 174 ülke Apple fiyat matrisi |
| Entitlement | `premium` (tek) |
| RevenueCat | Offering `default` · Package `$rc_lifetime` |
| Apple kesintisi | %15 (Small Business Program — kullanıcı <$1M) → net **~$0.84/satış** |

## Free vs Premium

| | Free | Premium ($0.99) |
|---|------|------|
| Tüm ülke bayrakları | ✅ | ✅ |
| Tüm modlar (paint + "Who Wins") | ✅ | ✅ |
| Çoklu yüz (3 kişi) | ✅ | ✅ |
| **Foto** (çek/kaydet/paylaş) | ✅ **sınırsız** (watermark'lı) | ✅ watermark'sız |
| **Video kaydı** | ❌ | ✅ |
| **Watermark** | export'larda var (MATCHFACE) | kalıcı yok |

> **Tek entitlement iki şeyi birden açar:** video kaydı + watermark kaldırma. Free kullanıcı viral döngüyü besler (sınırsız watermark'lı foto = gömülü reklam); video isteyen öder.

## Paywall tetikleri

| Tetik | Tip | Not |
|-------|-----|-----|
| **Video modunda kayıt başlat** | **HARD gate** | ★ Birincil dönüşüm sürücüsü. Free → paywall (kayıt başlamaz). Foto'da gate yok. |
| Review "Remove watermark" | Soft | Kullanıcı isteğiyle → Premium paywall |
| Foto sonrası watermark upsell | Soft | **Throttle'lı** (24h, RC key) — sadece watermark'lı foto sonrası |
| Settings "Premium" / "Restore" | Bilgilendirici | Manuel |

### Opsiyonel: Forced Paywall (Firebase Remote Config)

Kod redeploy gerekmeden açılabilen, uzaktan-kontrollü zorunlu paywall katmanı (`shouldForcePaywall` + `forcePaywall` enum 1-4):
- **1** Onboarding sonrası zorunlu (uygulama bloklu) · **2** Onboarding sonrası kapatılabilir · **3** İlk foto sonrası zorunlu · **4** İlk foto sonrası kapatılabilir.
- **Default: kapalı** (`false`). ⚠️ Tam-bloklayan hard paywall Apple reddine açık olabilir — bilinçli açılmalı.

> **Pazarlama notu:** Bu remote-config kaldıracı, app canlıyken **kod değişmeden dönüşüm A/B testine** izin verir. Pik haftalarda agresif (mode 3/4), düşük dönemde kapalı denenebilir. Dönüşüm/gelir optimizasyonunun ana levyesi.

## Birim ekonomisi (PAZARLAMA İÇİN KRİTİK)

```
Net gelir/satış   = $0.99 × 0.85 (Apple SBP)         ≈ $0.84
Dönüşüm           ≈ %2–5 (photo/camera tipik), baz %3
LTV / indirme     = $0.84 × 0.03                      ≈ $0.025
```

**Sonuç:** İndirme başına ömür-boyu değer **~$0.025**. iOS kurulum başına maliyet (CPI) futbol pazarlarında $1-4.

→ **Doğrudan "IAP için ödeme yap, kurulum al" matematiği AĞIR zarar eder** (ROAS ~0.01-0.03). Pazarlama değeri buradan gelemez. Değer şuradan gelir:
1. **Viral döngü** — her watermark'lı export = gömülü reklam → CAC≈0 organik indirme (asıl motor).
2. **Yüksek-niyet / düşük-CPI kanal** — Apple Search Ads (brand + "football filter" niyeti), iOS-native.

Bu nedenle bütçenin ağırlığı **creative üretim + minimal ASA + viral tohum**a gider; klasik direct-response satın-alma kampanyasına değil. Detay: [02-paid-ua-stratejisi.md](02-paid-ua-stratejisi.md) ve [02b-kpi-ve-butce.md](02b-kpi-ve-butce.md).

## Gelir ölçeği (gerçekçi)

| Senaryo | İndirme | Net gelir (~%3 × $0.84) |
|---------|--------:|------:|
| Downside | <20K | <$500 |
| Base | 50K–500K | $1.3K–13K |
| Upside (viral) | 1M+ | $25K+ |

Maliyet ~0 (solo, backend yok, CC0 asset) → düşük hacimde bile pozitif ROI. **Başarı = ucuz bahsin pozitif dönmesi + viral marka momenti**, dev gelir değil.

## Veri akışı (Phase 4 — RevenueCat MCP)

App canlı olunca RevenueCat MCP ile izlenecek: satın alma adedi, dönüşüm oranı (paywall_viewed → purchase_completed), `video_record_blocked` sinyali (gizli talep göstergesi), restore. → `/mt-revenuecat-ozet` ile haftalık çekilir.

> **Not:** V1'de Firebase Analytics no-op (kapalı); event'ler tanımlı ama RevenueCat dashboard'u satın alma verisini zaten sağlıyor.
