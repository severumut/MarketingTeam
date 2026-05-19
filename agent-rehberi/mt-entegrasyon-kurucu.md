# mt-entegrasyon-kurucu

API / MCP entegrasyon kurulum yardımcısı. Bir platforma **programatik erişim** kurarken adım adım yönlendirir. Developer hesabı, token alma, izin yapısı, callback URL, `.env` yönetimi, MCP ekleme — hepsi.

> `mt-hesap-kurulum-rehberi` "platforma kayıt ol" sürecini yönetir; **bu ajan "platforma API ile bağlan" sürecini yönetir**.

---

## Bu ajan ne yapar?

### Mod A — Yeni API Entegrasyonu (sıfırdan)
- Hangi platform? (Meta Marketing API, TikTok Business API, ASA Campaign Management API, Google Ads API, AppsFlyer, Adjust, vb.)
- Developer hesabı kontrol (yoksa nasıl açılır?)
- App / project oluşturma (her platformun developer panelinde)
- Token alma akışı (OAuth, JWT, API key)
- İzin / scope seçimi (minimum gerekli)
- Callback URL (varsa)
- `.env` güncelleme + `entegrasyonlar/<platform>/setup-notlari.md` yazma
- Test çağrısı (auth doğrulama)
- `entegrasyonlar/kurulu-entegrasyonlar.md` tablosunu update

### Mod B — Mevcut Entegrasyonu Yenileme
- Token expired olduğunda yenileme
- Refresh token akışı
- `.env` güncelleme

### Mod C — Yeni MCP Ekleme
- `mcp-registry` ile arama
- Aday MCP'leri kullanıcıya sun
- Seçilen MCP için kurulum komutu (`claude mcp add ...`)
- Auth (token / OAuth)
- `claude mcp list` ile doğrulama
- `entegrasyonlar/kurulu-entegrasyonlar.md` tablosunu update

### Mod D — Sorun Çözüm (debugging)
- "Token çalışmıyor", "401 alıyorum", "MCP failed to connect"
- Adım adım troubleshooting:
  - .env doğru mu?
  - Header format doğru mu (Bearer vs Key)?
  - Token expired mı?
  - Scope yeterli mi?
  - MCP server reachable mı?

### Mod E — Developer Handoff (kullanıcı = developer)
- "Geliştirici için API entegrasyon checklist çıkar" (örn. Firebase event mapping → Google Ads — mt-google-ads-uzmani ile birlikte üretilen handoff)
- Mevcut sistemde **kullanıcı kendi developer'ı** — bu ajan ona net direktif verir

### Yapmadığı
- Platforma kayıt olma → `mt-hesap-kurulum-rehberi`
- Kampanya kurma → ilgili platform ajan
- Performans analiz → `mt-kampanya-analisti`
- Creative üretim → `mt-creative-yonetmeni`

---

## Neden ayrı bir ajan?

`mt-hesap-kurulum-rehberi` insan-kayıt sürecini yönetir (e-posta, vergi, kart). Bu ajan **makine-erişim** sürecini yönetir (token, scope, OAuth, callback). İkisi farklı:

| `mt-hesap-kurulum-rehberi` | `mt-entegrasyon-kurucu` |
|---|---|
| Email + telefon + kart | Token + scope + callback |
| Business Manager UI | Developer Console UI |
| KYC, vergi, doğrulama | OAuth flow, refresh token |
| Bir kez kurulur | Token expired olunca yenilenir |
| Sıralı insan adımları | API + MCP + .env güncellemesi |

Ayrı tutmak çünkü farklı zihinsel mod + farklı tool set'i.

---

## Yönettiği entegrasyonlar (Phase 4 hedefi)

| Entegrasyon | Tip | Karmaşıklık | Token tipi |
|---|---|---|---|
| Meta Marketing API | REST | Orta | OAuth (long-lived) |
| TikTok Business API | REST | Orta | OAuth |
| ASA Campaign Management API | REST | Yüksek (JWT) | Private Key + JWT |
| Google Ads API | REST | Yüksek | OAuth + Developer Token |
| Firebase (Google Ads link) | Console UI | Düşük | Service Account |
| AppsFlyer API | REST | Düşük | API key |
| Adjust API | REST | Düşük | API token |
| MCP servers (genel) | MCP | Düşük-Orta | Bearer / OAuth |

Mevcut kurulu (Phase 0): RevenueCat MCP, fal.ai MCP, Shotstack MCP.

---

## Ne zaman çağırılmalı?

- "Meta Marketing API'a bağlanmak istiyorum"
- "Google Ads API token alalım"
- "ASA Attribution API kurulumu"
- "Yeni MCP ekleyelim"
- "Token expired, yenileyelim"
- "401 alıyorum, debug edelim"
- "Geliştiriciye Firebase event handoff MD"
- "/mt-api-entegrasyon"

## Ne zaman çağırılmamalı?

| Soru | Doğru ajan |
|---|---|
| "Meta'da hesap aç" | `mt-hesap-kurulum-rehberi` |
| "Meta'da kampanya kur" | `mt-meta-ads-uzmani` |
| "Performans analizi" | `mt-kampanya-analisti` |
| "Creative üret" | `mt-creative-yonetmeni` |
| "API nedir?" | `mt-marketing-tutor` |

---

## Nasıl çağırılır?

**Doğal dil**:
- "Meta API token alalım"
- "Yeni MCP kuralım"
- "Token expired"

**Manuel**: `@mt-entegrasyon-kurucu <sorum>`

**Skill üzerinden**: `/mt-api-entegrasyon`

---

## Örnek prompt'lar

1. *"Meta Marketing API kurulumu yapalım, sıfırdan"*
2. *"ASA Campaign Management API JWT auth nasıl"*
3. *"Google Ads API developer token aldım, OAuth flow"*
4. *"MCP registry'de TikTok için bir şey var mı?"*
5. *"Geliştirici için Firebase event handoff MD'yi sen yaz" (mt-google-ads-uzmani ile birlikte)*

---

## Çıktılar

### `entegrasyonlar/<platform>/setup-notlari.md`

```markdown
# <Platform> API Entegrasyon — Setup Notları

**Tarih**: YYYY-MM-DD
**Durum**: ✅ Kurulu / ⏳ Token expired / ❌ Yapılmadı

## Developer Hesap
- Hesap: ...
- App ID: ...
- App Secret: (.env'de — APP_SECRET)
- Doğrulanma: ✅

## OAuth Flow
1. Authorize URL: ...
2. Redirect: ...
3. Token exchange: ...
4. Long-lived token elde edildi: ✅

## Token Bilgileri
- Access token: .env'de `<PLATFORM>_ACCESS_TOKEN`
- Refresh token: .env'de `<PLATFORM>_REFRESH_TOKEN`
- Expires: YYYY-MM-DD
- Scope: ads_management, business_management

## Test Çağrısı
- Endpoint: GET /me/adaccounts
- Sonuç: ✅ 200 OK

## Yenileme Prosedürü
- Token expired olursa: ... (refresh akış adımları)

## Sorun Notları
- ...
```

### `.env` güncellemesi

İlgili token satırlarını doldurur (placeholder'lar zaten var).

### `entegrasyonlar/kurulu-entegrasyonlar.md`

İlgili satırı `⏳` → `✅ Kurulu` olarak günceller.

---

## Sınırları

- Kayıt sürecini yönetmez → `mt-hesap-kurulum-rehberi`
- Kampanya kurmaz → ilgili platform ajan
- Veri analiz etmez → `mt-kampanya-analisti`
- Creative üretmez → `mt-creative-yonetmeni`
- Kavram açıklamaz → `mt-marketing-tutor`
- **Hassas bilgi**: Token / secret / private key **asla** MD'ye yazılmaz, sadece `.env`'e

---

## Bağlantılı ajanlar / skill'ler

- **Önce gereken**: `mt-hesap-kurulum-rehberi` (developer hesabı + platforma kayıt önce)
- **Sonraki adım**: İlgili platform ajan (API artık aktif, kampanya UI'da kurulabilir veya programatik veri çekilebilir)
- **Veri tüketici**: `mt-kampanya-analisti` (Phase 4'te API'lardan veri çeker)
- **Skill bağlantısı**: `/mt-api-entegrasyon`

---

## İlgili bilgi-bankası dosyaları

- `bilgi-bankasi/08-entegrasyonlar/entegrasyon-genel-bakis.md`
- `bilgi-bankasi/08-entegrasyonlar/meta-marketing-api.md`
- `bilgi-bankasi/08-entegrasyonlar/tiktok-business-api.md`
- `bilgi-bankasi/08-entegrasyonlar/apple-search-ads-campaign-management-api.md`
- `bilgi-bankasi/08-entegrasyonlar/google-ads-api.md`
- `bilgi-bankasi/08-entegrasyonlar/token-yonetimi-ve-guvenlik.md`

---

## Tetikleyici test cümleleri

| Cümle | Beklenen |
|---|---|
| "Meta Marketing API kurulumu" | ✅ tetiklenmeli |
| "Google Ads API token al" | ✅ tetiklenmeli |
| "Yeni MCP ekleyelim" | ✅ tetiklenmeli |
| "Token expired" | ✅ tetiklenmeli |
| "401 alıyorum" | ✅ tetiklenmeli |
| "Meta'da hesap aç" | ❌ → `mt-hesap-kurulum-rehberi` |
| "Meta'da kampanya kur" | ❌ → `mt-meta-ads-uzmani` |
| "API nedir?" | ❌ → `mt-marketing-tutor` |
| "Performans analizi" | ❌ → `mt-kampanya-analisti` |
