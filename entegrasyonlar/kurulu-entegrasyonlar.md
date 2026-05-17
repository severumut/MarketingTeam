# Kurulu Entegrasyonlar — Durum Tablosu

Bu dosya hangi platforma / hangi servise API ya da MCP üzerinden bağlı olduğunu özetler. Her satır bir entegrasyon.

> Güncelleme tarihi: 2026-05-17 (Phase 0)

## Genel tablo

| Entegrasyon | Tip | Durum | Kullanan ajan(lar) | Notu |
|---|---|---|---|---|
| **RevenueCat MCP** | MCP | ✅ Kurulu | `mt-kampanya-analisti` + Skill `/mt-revenuecat-ozet` | Subscription, paywall, customer, LTV verisi |
| **Gemini MCP** | MCP | ✅ Kurulu | `mt-creative-yonetmeni` + Skill `/mt-creative-uretim` | Görsel + video üretimi |
| **Scheduled Tasks MCP** | MCP | ✅ Kurulu (aktive değil) | (Phase 4'te kullanılır) | Haftalık rapor / aylık strateji otomasyonu |
| **n8n MCP** | MCP | ✅ Kurulu | (opsiyonel, workflow için) | İleri otomasyon |
| **mcp-registry** | MCP | ✅ Kurulu | `mt-entegrasyon-kurucu` | Yeni MCP arama |
| **WebSearch / WebFetch** | Built-in | ✅ Hazır | Çoğu ajan | Rakip analizi, benchmark araştırma |
| **Meta Marketing API** | REST API | ⏳ Phase 4 | `mt-meta-ads-uzmani`, `mt-kampanya-analisti` | Hesap açılınca + token alınınca aktif |
| **TikTok Business API** | REST API | ⏳ Phase 4 | `mt-tiktok-ads-uzmani` | Hesap açılınca + token alınınca aktif |
| **Apple Search Ads Campaign Management API** | REST API | ⏳ Phase 4 | `mt-apple-search-ads-uzmani` | Apple Developer kimliği gerekli |
| **Google Ads API** | REST API | ⏳ Phase 4 | `mt-google-ads-uzmani` | Google Cloud project + developer token |
| **AppsFlyer / Adjust API** | REST API | ❌ Karar verilmedi | `mt-kampanya-analisti` | MMP kullanılıyorsa açılır |

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
