# Shotstack — Template Rehberi

> Çekirdek template'ler **bir kez yaratılır, defalarca kullanılır**. Indie iOS dev için iş yükünü ciddi düşürür.

> Durum: Phase 4'te (ilk uygulama eklenirken) `mt-creative-yonetmeni` bu template'leri Shotstack hesabında yaratacak.

---

## Çekirdek Template'ler

### 1. outro-template
**Amaç**: Her reklam video'sunun sonundaki sabit kapanış (CTA + App Store badge + brand)
**Süre**: 3-5 saniye
**Merge fields**:
- `{{app_name}}` — Uygulama adı
- `{{cta_text}}` — "Try Free" / "Get Started" / "Download Now"
- `{{app_store_url}}` — Linke yönlendirme metni (opsiyonel)

**Tipik kompozisyon**:
- Background: Brand color veya beyaz
- Center: App icon + app name
- Below: CTA button styled text
- Bottom: "Available on App Store" badge
- Transition in: fade

### 2. caption-overlay
**Amaç**: TikTok/Reels için burn-in subtitle (sound-off izleme dostu)
**Merge fields**:
- `{{captions[]}}` — Timestamped subtitle array (start, end, text)
- `{{font_color}}` — Default white
- `{{font_outline}}` — Default black (kontrast için)
- `{{position}}` — bottom-center default

**Best practice**:
- Font: Bold sans-serif (Inter, Helvetica Neue, system default)
- Background: Semi-transparent black behind text (legibility)
- Max 2 satır, satır başına ~30 karakter
- TikTok: alt-orta; Reels: orta

### 3. hook-body-outro
**Amaç**: 3-segment video birleştirme
**Merge fields**:
- `{{hook_video}}` — fal.ai üretilen 5-10s hook
- `{{body_video}}` — fal.ai üretilen 10-20s gövde
- `{{outro_template_id}}` — outro-template referansı

**Transition mantığı**:
- Hook → Body: hard cut (TikTok native)
- Body → Outro: 0.3s fade

### 4. logo-persistent
**Amaç**: Tüm video boyunca sağ üst köşede küçük brand logo
**Merge fields**:
- `{{logo_url}}` — Brand logo (PNG transparent)
- `{{opacity}}` — Default 0.7 (rahatsız etmesin)
- `{{size}}` — Default %8 ekran genişliği

### 5. merge-bulk-variant
**Amaç**: Aynı base video + farklı text overlay → 10+ A/B varyantı tek render
**Merge fields**:
- `{{base_video}}` — Sabit video
- `{{hook_text}}` — Değişken text (CSV / array ile beslenir)
- `{{font_style}}` — Default brand font

**Kullanım**:
- Bir base video + 10 farklı hook text = 10 varyant
- A/B test havuzu olarak Meta/TikTok'a yüklenir

---

## Template'leri yaratma akışı (Phase 4)

```
1. mt-creative-yonetmeni ilk kez aktive olduğunda:
   "Shotstack'te 5 çekirdek template yaratılacak. Onaylar mısın? Stage credentials, ücretsiz."

2. Kullanıcı onay → MCP üzerinden 5 template POST edilir.

3. Template ID'leri entegrasyonlar/shotstack/template-id-listesi.md'ye kaydedilir.

4. Sonraki tüm video render'larında bu template ID'leri kullanılır.
```

---

## Template-ID-listesi (Phase 4'te dolacak)

| Template adı | Shotstack ID | Yaratılma tarihi | Son kullanım |
|---|---|---|---|
| outro-template | — | — | — |
| caption-overlay | — | — | — |
| hook-body-outro | — | — | — |
| logo-persistent | — | — | — |
| merge-bulk-variant | — | — | — |

---

## Brand-specific override

Her uygulama için ayrı bir **override layer** olabilir. Örnek:
- App "X" için outro: kendi renkleri + kendi logosu
- App "Y" için outro: farklı renk + farklı logo

`projects/<app>/creative/shotstack-overrides.md` dosyasında brand-specific merge field değerleri tanımlanır. Template aynı, değerler farklı.

---

## Best practice notları

- **Studio preview önce** — render credit harcamadan iterate
- **Stage'te test, production'a sonra** — her template önce stage'de doğrulanır
- **Caption font kontrolü**: Türkçe için Türkçe karakter destekli font seçilmeli (ş, ç, ğ, ü)
- **Aspect ratio**: TikTok/Reels 9:16, Stories 9:16, Feed 1:1 veya 4:5 — template her oranda render edebilir mi kontrol
