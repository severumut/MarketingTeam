# Shotstack MCP — Kurulum Notları

> Durum: ✅ Kurulu + OAuth tamamlandı (2026-05-18)
> Owner ID: `mnykuye0e9`
> Hesabında mevcut template sayısı: 11 (Car Dealership Slideshow, AI Historical/Scary/Science Facts TikTok Video, vb.)

---

## Ne işe yarar?

Shotstack = **bulut tabanlı video editing API**. fal.ai üretir (raw asset), Shotstack birleştirir (final video).

### Kullanım senaryoları
- **Video concatenation**: Hook (10s) + Body (15s) + Outro (5s) → tek 30s video
- **Caption overlay**: TikTok için sound-off subtitle (en kritik özellik)
- **Logo / watermark**: Her video'da brand mark persistent overlay
- **Music sync**: Background music + voiceover karışım
- **Templates + merge fields**: 1 template + 10 farklı text = 10 video tek render
- **Transitions**: Cut, fade, custom
- **Studio preview**: Browser'da preview (render credit harcamadan)

---

## Kurulum adımları

### 1. Hesap + Token
1. https://app.shotstack.io aç (zaten hesabın var — kontrol et)
2. Settings → API Keys → Stage key kopyala (test için ücretsiz)
3. Production key gerektiğinde ayrıca alınır

### 2. .env'e yaz
```bash
# .env dosyasında:
SHOTSTACK_API_KEY=<stage_key_buraya>
SHOTSTACK_OWNER_ID=<owner_id>
```

### 3. MCP server'ı Claude Code'a ekle

**HTTP transport (önerilen)**:
```bash
claude mcp add --transport http shotstack https://mcp.shotstack.io
```

Auth: OAuth flow (HTTP transport hosted endpoint için) veya `SHOTSTACK_API_KEY` env var.

### 4. CLI yedek (script + power user için)
```bash
npm install -g @shotstack/cli
export SHOTSTACK_API_KEY=$(grep '^SHOTSTACK_API_KEY=' .env | cut -d '=' -f2-)
shotstack --help
```

### 5. Doğrulama
- `/mcp` ile shotstack listede ✅
- Test: `mcp__shotstack__get_shotstack_guide` çağrısı (composition rehberi döner)

---

## MCP tool'ları (6 capability)

| Tool | Ne yapar |
|---|---|
| `studio` | Inline canvas — preview/render UI (render credit harcamaz) |
| `render_video` | Direct API submission (otomatik akış) |
| `get_render_status` | Job status polling |
| `create_studio_link` | Paylaşılabilir kısa URL üret |
| `get_shotstack_guide` | Composition convention referansı (modelin öğrenmesi için) |
| Template management | Create / list / retrieve / render / delete templates |

---

## Çekirdek template'ler (Phase 4'te yaratılacak)

İlk uygulamayı eklerken `mt-creative-yonetmeni` Shotstack hesabında şu template'leri yaratır (bir kez yaratılır, sonsuza kadar reuse edilir):

1. **outro-template** — Her video sonu (CTA + App Store badge + brand logo + 3s)
2. **caption-overlay** — Burn-in subtitle yapısı (TikTok/Reels için)
3. **hook-body-outro** — 3-segment video birleştirme (hook + ana içerik + outro)
4. **logo-persistent** — Sağ üst köşe küçük brand mark
5. **merge-bulk-variant** — Bir base + 10 text varyantı (A/B testing)

Bunlar `.env`'deki `SHOTSTACK_OWNER_ID` altında yaşar.

---

## Fiyatlandırma

- **Stage credentials**: Test için **ücretsiz** (watermark + sınırlı feature)
- **Production**: Subscription-based, render credit'i ile çalışır
- **Studio preview**: Her zaman ücretsiz (render credit harcamaz)

Mevcut bakiye/plan durumu: Kullanıcı yönetimi yapıyor; AI ajan uyarı verir ama otomatik durdurma yok.

---

## Güvenlik

- `SHOTSTACK_API_KEY` repo'ya commit edilmez
- Stage key compromise olursa sorun küçük (test); Production key compromise hassas

---

## Sorun çıkarsa

- MCP listede yok → `claude mcp list` ile kontrol, gerekirse remove + add
- Auth hatası → key süresi dolmuş olabilir, dashboard'dan yenile
- Render fail → `get_render_status` ile error mesajı al, Edit JSON'da hata olabilir
- Studio preview render credit harcamaz, iterate ederken kullan
