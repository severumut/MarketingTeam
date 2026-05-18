# fal.ai — Model Katalog Referansı (Indie iOS Reklam Bağlamı)

> Bu dosya **referans tablo**. AI ajan model seçerken önce bu dosyaya bakar, sonra `fal-mcp recommend_model` ile cross-check eder. Hard-code model adı **yok** — AI her zaman güncel öneri alabilir.

> Güncelleme tarihi: 2026-05-18

---

## Task-to-Model Mapping (önerilen başlangıç)

| Task tipi | Önerilen model | Fiyat | Neden |
|---|---|---|---|
| **Bulk concept draft** (50+ varyant) | `fal-ai/flux/schnell` | $0.003/img | Ultra ucuz, hızlı, draft için yeterli |
| **Premium product shot** | `fal-ai/flux-pro/v1.1` | $0.05/img | Kompozisyon + sanatsal fidelity güçlü |
| **Premium fotorealistik insan/lifestyle** | `fal-ai/nano-banana-pro` | ~$0.07/img | Multi-element prompt, brand consistency |
| **Text-heavy banner / slogan** | `fal-ai/ideogram/v3` | $0.08/img | **Text rendering şampiyonu** — slogan, brand metni doğru yazar |
| **App Store screenshot başlık** | `fal-ai/ideogram/v3` | $0.08/img | Türkçe + İngilizce text spelling güvenli |
| **Paywall hero görseli** | `fal-ai/nano-banana-pro` | ~$0.07/img | Premium fotorealizm |
| **TikTok native feel video** | `bytedance/seedance-2.0/text-to-video` | (canlı sorgu) | **TikTok için #1 öneri** — ByteDance'in kendi modeli, native audio + multi-shot |
| **TikTok hızlı/düşük cost** | `bytedance/seedance-2.0/fast/text-to-video` | (canlı sorgu) | Seedance fast tier |
| **Lifestyle video (9:16, 9-15s) — genel** | `fal-ai/kling-video/v2.5-turbo` | $0.07/s | Meta Reels default — cinematic + hızlı |
| **Hero video premium** | `fal-ai/kling-video/v3/pro/text-to-video` | $0.112-0.196/s | Audio dahil, special occasions |
| **OpenAI Sora 2** | `fal-ai/sora-2/text-to-video` | $0.50/s | Premium tier, "wow moment" için |
| **Veo-grade physics motion** | `fal-ai/veo3.1` | $0.20/s | Google Veo — karmaşık hareket gerektiğinde |
| **Image edit / minor revision** | `fal-ai/flux-pro/kontext` veya `nano-banana edit` | ~$0.04/img | Mevcut görseli revize etmek |
| **Voiceover / TTS** | `fal-ai/elevenlabs/tts` (veya emsali) | per character | TikTok/Reels narration |
| **Background music** | `fal-ai/musicgen` veya `stable-audio` | per saniye | Royalty-free track |
| **Upscale (1K→4K)** | `fal-ai/aura-sr` veya `clarity-upscaler` | düşük | Final asset için |

---

## Favori Modeller (deneme-yanılma sonucu)

> Bu liste **yaşayan belge**. Kullanıcı bir modeli beğenip "bunu öncele" dediğinde buraya eklenir. Beğenilmediğinde "kaçınılacaklar" bölümüne eklenir.

### ⭐ Favoriler (deneyimle doğrulandı)

*(Henüz boş — ilk uygulamayı eklediğinde dolacak)*

| Model | Hangi task için | Neden tercih edildi | Tarih |
|---|---|---|---|
| — | — | — | — |

### ⚠️ Kaçınılacaklar (sonuç beklentinin altında)

*(Henüz boş)*

| Model | Hangi task için | Sorun | Tarih |
|---|---|---|---|
| — | — | — | — |

---

## Karar Akışı (AI ajan için)

Bir creative brief geldiğinde model seçimi şu sırayla yapılır:

1. **Brief'i task tipine ayrıştır** (yukarıdaki tablo kategorilerinden)
2. **Favoriler listesini kontrol et** — bu task için daha önce başarılı bir model var mı?
3. Varsa → onu kullan
4. Yoksa → yukarıdaki **Task-to-Model Mapping**'den varsayılan al
5. **Cross-check**: `fal-mcp recommend_model` çağır, doğal dil ile "subscription app reklamı için Reels video" gibi tarif et — fal'ın önerisi ile karşılaştır
6. Modeller çakışırsa → kullanıcıya iki seçenek sun, karar onun
7. **Maliyet hesabı**: `get_pricing` ile teyit, kullanıcı onayı al, sonra `run_model` veya `queue_model`

---

## Güncel kalma stratejisi

fal.ai sürekli yeni model ekliyor. AI ajan:
- Aylık check: `mt-creative-yonetmeni` ay sonu raporu sırasında `search_models` ile yeni eklenen modelleri tarar
- Yeni model çıktığında bu dosyaya "yeni eklendi, test edilebilir" notu düşer
- Test sonrası favorilere / kaçınılacaklara atanır

---

## Model schema referansı

Her modelin input/output şeması farklı. Kullanım öncesi:
```
get_model_schema(model_id="fal-ai/flux-pro/v1.1")
```

Bu schema'dan:
- Zorunlu input parametreleri (prompt, image_size, vb.)
- Opsiyonel parametreler (seed, guidance_scale, negative_prompt)
- Output format (URL, base64, vb.)

Schema-driven workflow = hard-code parametre yok.
