# Apple Search Ads — Campaign Management API Entegrasyon (Setup Notları)

**Tarih**: 2026-06-05
**Durum**: ✅ Kurulu + test edildi (200 OK)
**Yöntem**: Kendi REST script'imiz (3. taraf MCP yok) — `asa-token.js`
**API sürümü**: v5 (⏳ 26 Ocak 2027'de kapanacak → yeni "Apple Ads Platform API"ye geçilecek)

---

## Hesap / Org
- **orgName**: Musa Umut Sever
- **orgId**: `8823130`
- **Hesap tipi**: Apple Ads Advanced
- **Rol**: API Campaign Manager (okuma + yazma)
- **Para birimi**: USD
- **Saat dilimi**: Europe/Istanbul

## Kimlik bilgileri (değerler `.env`'de — gitignore'da)
| .env anahtarı | Ne |
|---|---|
| `ASA_CLIENT_ID` | OAuth client (gizli değil) |
| `ASA_TEAM_ID` | = clientId (ASA'da aynı) |
| `ASA_KEY_ID` | Public key'in Apple'daki ID'si |
| `ASA_PRIVATE_KEY_PATH` | `~/.config/asa/asa-private-key.p8` (PKCS#8, izin 600) |
| `ASA_ORG_ID` | `8823130` |
| `ASA_SCOPE` | (ops.) varsayılan `searchadsorg` |

> 🔒 **Gizli olan tek şey private key** — repo dışında (`~/.config/asa/`), Git'e asla girmez.
> Public key Apple paneline yüklendi (Account Settings → API → Generate API Client).

## Anahtar dosyaları (repo dışı, `~/.config/asa/`)
- `asa-private-key.p8` — PKCS#8 EC P-256, izin 600 (**gizli**)
- `asa-private-key.pem` — orijinal SEC1 format (yedek)
- `asa-public-key.pem` — Apple'a yüklenen genel anahtar

## OAuth akışı (script otomatik yapar)
1. ES256 JWT "client secret" üret (header: `kid`=KEY_ID, `alg`=ES256; payload: `iss`=TEAM_ID, `sub`=CLIENT_ID, `aud`=`https://appleid.apple.com`), private key ile imzala.
2. `POST https://appleid.apple.com/auth/oauth2/token` → `grant_type=client_credentials`, `scope=searchadsorg` → **1 saatlik access token**.
3. Token `~/.config/asa/.token-cache.json`'a cache'lenir (izin 600), süresi dolmadan yeniden kullanılır.
4. API çağrısı: `Authorization: Bearer <token>` + `X-AP-Context: orgId=8823130`.

## Kullanım — `entegrasyonlar/apple-search-ads/asa-token.js`
Node 22 yerleşik `crypto` ile imzalar — **sıfır bağımlılık** (npm install yok).
```bash
cd entegrasyonlar/apple-search-ads
node asa-token.js token            # access token bas (1 saatlik)
node asa-token.js acls             # erişilen org'ları listele
node asa-token.js get /api/v5/campaigns          # auth'lu GET (orgId .env'den)
node asa-token.js get "/api/v5/campaigns?limit=5" --org 8823130
node asa-token.js test             # uçtan uca sağlık kontrolü

# Performans raporları (POST — metrik çekme)
node asa-token.js report campaigns 2026-05-29 2026-06-04 DAILY
node asa-token.js report keywords    <campaignId> <start> <end> DAILY
node asa-token.js report searchterms <campaignId> <start> <end> DAILY
node asa-token.js post /api/v5/reports/campaigns '<json>'   # ham POST (özel selector)
```

**Rapor metrikleri**: impressions, taps, TTR, totalInstalls, newDownloads, redownloads, localSpend, totalAvgCPT, totalAvgCPA, conversionRate.
**Tarih kuralı**: `DAILY` (max ~90 gün, en esnek) · `WEEKLY` (7'nin katı) · `MONTHLY` (tam takvim ayı; tek ay aralığı çalışmaz → DAILY çekip topla).

## Test sonucu (2026-06-05)
- `1) token` → ✅
- `2) /acls` → ✅ 1 org (Musa Umut Sever / 8823130)
- `3) /campaigns` → ✅ 200 OK (0 kampanya — henüz açılmadı)

## Yenileme / bakım
- **Access token**: otomatik (1 saat, script cache'ler + yeniler). Elle iş yok.
- **API client (clientId/keyId)**: süresiz — sen panelden iptal etmedikçe geçerli.
- **Private key kaybolursa**: yeni çift üret → public key'i panele yeniden yükle (Generate API Client) → yeni clientId/keyId'i `.env`'e yaz.
- **Anahtar rotasyonu önerisi**: yıllık. Eski client'ı panelden sil.

## Sorun giderme
- `invalid_scope` → `.env`'e `ASA_SCOPE=searchads` ekle.
- `invalid_client` → clientId/teamId/keyId ya da public key eşleşmiyor; paneldeki client'ı kontrol et.
- `401` çağrıda → cache bozulmuş olabilir: `rm ~/.config/asa/.token-cache.json`.
- `403 / X-AP-Context` hatası → orgId yanlış ya da rol yetersiz.

## Sonraki adım
- `mt-apple-search-ads-uzmani` → ilk kampanya (Brand / Discovery)
- `mt-kampanya-analisti` → ASA performans verisini bu script üzerinden çeker
