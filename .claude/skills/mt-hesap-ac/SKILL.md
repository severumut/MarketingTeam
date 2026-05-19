---
name: mt-hesap-ac
description: |
  Bir reklam platformuna (Meta, TikTok, ASA, Google Ads) sıfırdan hesap açma akışı. Adım adım yönlendirme + yarıda kalırsa kaldığı yerden devam. mt-hesap-kurulum-rehberi ajanını çağırır, ilerlemeyi hesap-kurulumlari/<platform>/durum.md'ye yazar.
  TRIGGER when: kullanıcı "/mt-hesap-ac" veya doğal "X platformunda hesap açmak istiyorum" der.
  SKIP when: API token kurulum (programatik erişim — mt-entegrasyon-kurucu) veya kampanya kurma.
  ÖRNEK KOMUTLAR: "/mt-hesap-ac", "Meta'da hesap açalım", "TikTok for Business kayıt".
user-invocable: true
---

# /mt-hesap-ac

## Akış
1. Hangi platform? (Meta / TikTok / ASA / Google Ads / diğer)
2. `hesap-kurulumlari/<platform>/durum.md` kontrol — yarıda kalmış kurulum var mı?
3. Varsa kaldığı yerden, yoksa sıfırdan:
   - `mt-hesap-kurulum-rehberi` ajanını çağır
   - Ön gereksinimler kontrol (e-posta, telefon, kart, TCKN, vb. — Türkiye bireysel)
   - Adım adım kayıt akışı
4. Her adım sonrası `durum.md` güncelle (hassas bilgi yazılmaz)
5. Tamamlandığında `hesap-kurulumlari/README.md` özet tablosunu güncelle

## Çıktı
- `hesap-kurulumlari/<platform>/durum.md` (ilerleme takibi)
- `hesap-kurulumlari/<platform>/on-gereksinimler.md` (eksik liste)
- `hesap-kurulumlari/<platform>/adim-adim.md` (log)
- `hesap-kurulumlari/README.md` (özet tablo update)

## Bağımlılık
- `mt-hesap-kurulum-rehberi` ajanı

## Bağlı sonraki adımlar
- Hesap tamamlanınca → ilgili platform ajan (Meta/TikTok/ASA/Google) kampanya kurmaya geçer
- API erişimi gerekiyorsa → `/mt-api-entegrasyon`
