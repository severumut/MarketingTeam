# Kurulu Entegrasyonlar — Durum Tablosu

Bu dosya hangi platforma / hangi servise API ya da MCP üzerinden bağlı olduğunu özetler. Her satır bir entegrasyon.

> Güncelleme tarihi: 2026-06-05

## Genel tablo

| Entegrasyon | Tip | Durum | Kullanan ajan(lar) | Notu |
|---|---|---|---|---|
| **RevenueCat MCP** | MCP | ✅ Kurulu | `mt-kampanya-analisti` + Skill `/mt-revenuecat-ozet` | Subscription, paywall, customer, LTV verisi |
| **fal.ai MCP** | MCP | ✅ Kurulu + test edildi | `mt-creative-yonetmeni`, `mt-aso-uzmani` | 1000+ model — image (FLUX, Nano Banana, Ideogram), video (Seedance, Kling, Veo, Sora). **Ana creative üretim motoru** |
| **Shotstack MCP** | MCP | ✅ Kurulu + OAuth tamamlandı | `mt-creative-yonetmeni` | Video editing API. Owner: `mnykuye0e9`, mevcut 11 template (TikTok AI içerik dahil) |
| **Scheduled Tasks MCP** | MCP | ✅ Kurulu (aktive değil) | (Phase 4'te kullanılır) | Haftalık rapor / aylık strateji otomasyonu |
| **n8n MCP** | MCP | ✅ Kurulu | (opsiyonel, workflow için) | İleri otomasyon |
| **mcp-registry** | MCP | ✅ Kurulu | `mt-entegrasyon-kurucu` | Yeni MCP arama |
| **WebSearch / WebFetch** | Built-in | ✅ Hazır | Çoğu ajan | Rakip analizi, benchmark araştırma |
| **App Store Connect API** | REST API (JWT) | ✅ Kurulu + test edildi | `mt-kampanya-analisti`, `mt-aso-uzmani` | Organik App Store verisi: analytics, metadata, review, satış. Helper: `entegrasyonlar/app-store-connect/asc.js`. ⚠️ ASA'dan farklı |
| **Meta Marketing API** | REST API | ⏳ Phase 4 | `mt-meta-ads-uzmani`, `mt-kampanya-analisti` | Hesap açılınca + token alınınca aktif |
| **TikTok Business API** | REST API | ⏳ Phase 4 | `mt-tiktok-ads-uzmani` | Hesap açılınca + token alınınca aktif |
| **Apple Search Ads Campaign Management API** | REST API (OAuth/ES256 JWT) | ✅ Kurulu + test edildi | `mt-apple-search-ads-uzmani`, `mt-kampanya-analisti` | v5. Kendi script'imiz `entegrasyonlar/apple-search-ads/asa-token.js` (sıfır bağımlılık). org: Musa Umut Sever (8823130). ⚠️ App Store Connect API'den farklı (reklam vs organik) |
| **Google Ads API** | REST API | ⏳ Phase 4 | `mt-google-ads-uzmani` | Google Cloud project + developer token |
| **AppsFlyer / Adjust API** | REST API | ❌ Karar verilmedi | `mt-kampanya-analisti` | MMP kullanılıyorsa açılır |

> **Not (2026-05-18)**: Gemini MCP creative pipeline'dan çıkarıldı. Sebep: Claude (orkestratör) Türkçe prompt mühendisliği + vision-based kalite analizini kendi yapıyor; Gemini'nin görsel/video modelleri (Nano Banana Pro, Imagen) zaten fal.ai üzerinden erişilebilir. Tek vendor ile çakışmadan daha verimli pipeline.

---

## Durum ifadeleri

- ✅ **Kurulu** — Hazır, kullanılabilir.
- ✅ **Kurulu (aktive değil)** — Bağlı ama henüz aktif görev yok.
- ⏳ **Phase X'te** — Planlı, sırası gelmedi.
- ❌ **Karar verilmedi** — Kullanıcı kararı bekliyor.
- ⚠️ **Sorunlu** — Bağlıydı, şu an çalışmıyor.

---

## Yeni entegrasyon eklemek için

```
/mt-api-entegrasyon
```

(Phase 2'de yazılacak skill.) `mt-entegrasyon-kurucu` ajanı sıralı şekilde:
1. Platforma developer hesabı al
2. App / project oluştur
3. Token / API key al
4. `.env`'e ekle
5. Bu tablonun ilgili satırını ✅ olarak güncelle
6. Test çağrısı yap

---

## Phase 4 sırası (planlı)

Hangi entegrasyonu ne zaman eklemeli:

1. **İlk hesap açılan platform** — Onun API'si önce (büyük olasılıkla Apple Search Ads veya Meta)
2. **Sonra ikinci platform** — Meta veya TikTok
3. **Sonra üçüncü-dördüncü** — Diğerleri
4. **Son** — AppsFlyer/Adjust (MMP kullanıyorsan)
