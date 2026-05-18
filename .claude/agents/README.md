# .claude/agents/ — Uzman Ajanlar

Bu klasör **13** adet uzman ajanı içerir. Her ajan `.md` dosyası YAML başlığıyla başlar ve Claude Code tarafından otomatik yüklenir.

## Yazılım sırası (PAID öncelikli)

1. `mt-marketing-tutor` ✅
2. `mt-hesap-kurulum-rehberi` ✅
3. `mt-paid-ua-uzmani` ✅
4. `mt-meta-ads-uzmani` ✅
5. `mt-tiktok-ads-uzmani` ✅
6. `mt-apple-search-ads-uzmani` ✅
7. `mt-google-ads-uzmani` ✅
8. `mt-creative-yonetmeni` ✅ (5 mod: Brief→Üretim, Copy, A/B set, Revizyon, Trend Research)
9. `mt-strateji-uzmani` ⏳
10. `mt-kampanya-analisti` ⏳
11. `mt-rakip-arastirmaci` ⏳
12. `mt-aso-uzmani` ⏳
13. `mt-entegrasyon-kurucu` ⏳

> **Not (2026-05-18)**: `mt-content-uretici` kapsamdan çıkarıldı. Sistem sadece paid odaklı (UGC creator outreach + organik post = kullanıcının yapmayacağı işler). Trend research → `mt-creative-yonetmeni` Mod E.

## Her ajan için uyulacak kurallar

- Adı `mt-` prefix'i ile başlar.
- YAML başlığı `TETIKLEME-SOZLESMESI.md` Bölüm A şablonuna uyar.
- Her ajanın `agent-rehberi/<ad>.md` altında kullanıcıya dönük bir rehberi olur.

## İlgili dosyalar

- [TETIKLEME-SOZLESMESI.md](../../TETIKLEME-SOZLESMESI.md) — Description yazım kuralları
- [HIZLI-BASVURU.md](../../HIZLI-BASVURU.md) — Cheatsheet
- [agent-rehberi/](../../agent-rehberi/) — Her ajanın detaylı kullanıcı rehberi
