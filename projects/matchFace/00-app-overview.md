# 00 — App Overview: Match Face: Football Camera

> Onboarding tarihi: 2026-06-05 · Kaynak: `/Users/umut/Desktop/HopeCenter/Projects/ar-flag-face-camera` (ürün dosyaları) + App Store Connect launch verisi.
> Bu dosya **kesin/bilinen metadata**dır. Strateji dosyaları (02, 02b, 04, 05) ve `BASLA-BURADAN.md` bunun üstüne kurulur.

---

## Kimlik

| Alan | Değer |
|------|-------|
| App adı | **Match Face: Football Camera** |
| Slug (klasör) | `matchFace` |
| App Store ID | `6775153192` |
| App Store linki | https://apps.apple.com/us/app/match-face-football-camera/id6775153192 |
| Bundle ID | `com.umutsever.MatchFace` |
| Publisher | Kakun Co. (© 2026) |
| ASC dashboard | https://appstoreconnect.apple.com/apps/6775153192 |
| Versiyon / durum | v1.0 · `PREPARE_FOR_SUBMISSION` (**henüz canlı değil** — submit kullanıcı onayında) |
| Min iOS | 18.0 · iPhone X / A12+ (ARKit yüz takibi donanımı, ~%85 aktif iPhone tabanı) |

## Kategori & ticari

| Alan | Değer |
|------|-------|
| Primary kategori | Photo & Video |
| Secondary kategori | Entertainment |
| Yaş sınırı | 4+ |
| Fiyat | **Free** (USA base tier 0) |
| Erişilebilirlik | 175 ülke + yeni ülkelerde otomatik açık |
| Monetizasyon | Free + tek-seferlik IAP (detay: [03-monetization.md](03-monetization.md)) |
| IAP | `com.umutsever.MatchFace.premium` · non-consumable · **$0.99** US base |

## Locale & pazar

| Alan | Değer |
|------|-------|
| Primary locale | `en-GB` |
| Canlı locale'ler | en-GB · es-MX · pt-BR · tr |
| Hedef pazar (veri yönünde) | 🥇 ABD (iOS-yoğun, ev sahibi) · İngilizce · LatAm/Brezilya (organik) · Türkiye (ev) — gerekçe: [01-hedef-kitle.md](01-hedef-kitle.md) |

## Ne yapıyor (çekirdek özellikler)

- **AR bayrak yüz boyası** — ARKit (Apple'ın artırılmış gerçeklik framework'ü) yüz takibiyle yüze canlı milli bayrak; tüm yüz / yanak / alın, boyut ayarlı.
- **"Who Wins" tahmin modu** — iki yanakta 2 takım + skor tahmini + kafanın üstünde kameraya dönen "WHO WINS" banner'ı. *Ayırt edici özellik — en paylaşılabilir format.*
- **Çoklu yüz** — 3 kişiye kadar grup selfie (ARKit native limiti), herkes kendi bayrağı.
- **Foto (free, watermark'lı, sınırsız) + Video (Premium)** — her export'ta hazır caption (alt-yazı).
- **Native paylaşım** — iOS share sheet → TikTok / Instagram / WhatsApp / Snapchat + camera roll'a kaydet. (Platform SDK yok — bilinçli; tek kritik-yol Apple App Review.)

## Bilinçli kapsam & strateji kararları

- **Tek-mevsim "yak-at" app** — turnuva penceresine (11 Haz – 19 Tem 2026, ~6 hafta) kilitli. Uzun-dönem retention hedefi yok; 19 Temmuz sonrası talep ~0'a çöker. **Bu, tüm pazarlama stratejisinin #1 belirleyicisi.**
- **Trademark-temiz** — "FIFA" / "World Cup" markası / gerçek kit grafiği / oyuncu likeness'i / lisanslı chant **YOK**. Sadece jenerik milli renk + bayrak + nötr dil. Tahmin modu eğlence amaçlı (bahis tavsiyesi değil). → DMCA/marka-red riskini uzak tutar.
- **iOS-only** — Android/web yok. Bu, futbol-deli ama Android-ağırlıklı LatAm/global pazarlarda erişilebilir kitleyi kısar; ABD'yi (iOS-yoğun) orantısız avantajlı yapar.

## Kaynak ürün dökümantasyonu (referans)

Bu app HopeCenter pipeline'ında üretildi. Pazarlama için değerli kaynaklar:
- `IDEA.md`, `CAPABILITY_BRIEF.md` — konsept & kanıtlı yetenekler
- `research/` (7 adım) — market sizing, rakip, trend, user sentiment, verdict (CONDITIONAL 5.65/10)
- `tech/MONETIZATION.md` — IAP/paywall mimarisi
- `launch/` — ASC metadata, 4 locale listing, privacy labels

## Açık durum (kullanıcı tarafı — pazarlamadan önce)

1. **App henüz submit edilmedi** — App Privacy labels + Submit For Review bekliyor. **Pazarlama ancak app canlı olduğunda gerçek trafik çekebilir → submit = en acil iş.**
2. Privacy Policy + Support URL (kakun.co) canlı doğrulama.
