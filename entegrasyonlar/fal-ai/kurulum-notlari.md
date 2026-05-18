# fal.ai MCP — Kurulum Notları

> Durum: ⏳ Kurulum bekliyor (kullanıcı FAL_KEY alıp `.env` dosyasına yazınca aktive olur)

---

## Ne işe yarar?

fal.ai MCP, **1000+ generative AI model**'e tek API üzerinden erişim sağlar. Sistemimizde **ana creative üretim motoru**dur.

- **Image**: FLUX (Schnell/Pro), Nano Banana (Imagen 4), Ideogram V3, Stable Diffusion, DALL-E 3
- **Video**: Kling (2.5 Turbo Pro / 3.0 Pro), Veo 3.1, Sora 2 Pro, Hailuo, Vidu, Pixverse
- **Audio**: TTS, music generation, voice clone
- **Diğer**: Upscaling, background removal, 3D

---

## Kurulum adımları

### 1. Token al
1. https://fal.ai/dashboard/keys aç
2. "Create API Key" → key kopyala
3. (İlk kayıtta $20 free credit business email ile)

### 2. .env'e yaz
```bash
# Local makinede (repo kökünde):
cp .env.ornek .env  # zaten varsa atla
# .env dosyasını aç, FAL_KEY satırına yapıştır:
# FAL_KEY=fal_xxxxxxxxxxxxx
```

### 3. MCP server'ı Claude Code'a ekle

**HTTP transport (önerilen)**:
```bash
export FAL_KEY=$(grep '^FAL_KEY=' .env | cut -d '=' -f2-)
claude mcp add --transport http fal-ai https://mcp.fal.ai/mcp --header "Authorization: Bearer $FAL_KEY"
```

### 4. Doğrulama
Yeni Claude Code oturumunda:
- `/mcp` ile fal-ai listede ✅ görünmeli
- Test: `mcp__fal-ai__search_models` ile arama yap ("FLUX" anahtar kelime)

---

## MCP tool'ları (8 capability)

| Tool | Ne yapar |
|---|---|
| `list_models` | Tüm modelleri listele (paginated) |
| `search_models` | Anahtar kelime / kategori ile arama |
| `get_model_schema` | Bir modelin input/output OpenAPI schema'sı |
| `run_model` | Sync çalıştır (hızlı modeller için, image) |
| `queue_model` | Async submit (video, 3D, training için) |
| `check_job_status` | Async job durumu |
| `get_job_result` | Tamamlanan job çıktısı |
| `cancel_job` | Job iptali |
| `get_pricing` | Çağrı öncesi fiyat sorgulama |

---

## Fiyatlandırma (referans — değişebilir)

### Image
- FLUX.1 [schnell]: $0.003/image
- FLUX.1 [pro]: $0.05/image
- Stable Diffusion 3.5: $0.04/image
- Imagen 4 / Nano Banana 2: $0.04/image
- Nano Banana Pro: ~$0.07/image
- DALL-E 3: $0.04/image
- Ideogram V3: $0.08/image

### Video
- Kling 2.5 Turbo Pro: $0.07/saniye
- Kling 3.0 Pro: $0.112-0.196/saniye
- Veo 3.1 (no audio, 1080p): $0.20/saniye
- Sora 2 Pro (1080p): $0.50/saniye

**Güncel fiyat**: Her çağrı öncesi `get_pricing` tool'u ile doğrulanır.

---

## Güvenlik

- `FAL_KEY` **asla repo'ya commit edilmez** (.gitignore'da `.env` korumalı)
- Token döndürmek için: fal.ai dashboard → key revoke → yeni key üret → .env güncelle → MCP add tekrar
- Compromise şüphesi varsa hemen revoke

---

## Sorun çıkarsa

- MCP listede görünmüyor → `claude mcp list` ile kontrol et
- Auth hatası → `.env`'de FAL_KEY doğru mu, kopyalama tam mı (boşluk yok mu)
- Rate limit → fal.ai dashboard'da quota check
- Model bulunamadı → `search_models` ile doğru model ID öğren
