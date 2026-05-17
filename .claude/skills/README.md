# .claude/skills/ — User-Invocable Skill'ler

Bu klasör 13 adet user-invocable skill içerir. Her skill `<skill-adi>/SKILL.md` formatında bir klasör altında yaşar.

> ⚠️ Phase 0 sonu: Bu klasör henüz boş. Skill'ler Phase 2'de **yavaş mod** ile sırayla yazılacak.

## Yazılım sırası (kullanım sıklığına göre)

1. `mt-terim-ogren`
2. `mt-hesap-ac`
3. `mt-yeni-uygulama`
4. `mt-rakip-analizi`
5. `mt-butce-planla`
6. `mt-creative-uretim`
7. `mt-content-takvimi`
8. `mt-yeni-kampanya`
9. `mt-haftalik-rapor`
10. `mt-aylik-strateji`
11. `mt-revenuecat-ozet`
12. `mt-aso-audit`
13. `mt-api-entegrasyon`

## Her skill için uyulacak kurallar

- Adı `mt-` prefix'i ile başlar.
- `user-invocable: true` YAML alanı set'lidir → `/mt-<adi>` slash komutu ile çağrılır.
- YAML başlığı `TETIKLEME-SOZLESMESI.md` Bölüm B şablonuna uyar.
- Her skill'in `skill-rehberi/<ad>.md` altında kullanıcıya dönük bir rehberi olur.

## İlgili dosyalar

- [TETIKLEME-SOZLESMESI.md](../../TETIKLEME-SOZLESMESI.md)
- [HIZLI-BASVURU.md](../../HIZLI-BASVURU.md)
- [skill-rehberi/](../../skill-rehberi/)
