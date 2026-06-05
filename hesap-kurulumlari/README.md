# hesap-kurulumlari/ — Reklam Platformları Hesap Açma Takibi

Her reklam platformuna **sıfırdan hesap açma** sürecinin takip dosyaları. `mt-hesap-kurulum-rehberi` ajanı + `/mt-hesap-ac` skill'i bu klasörü kullanır.

## Klasör yapısı

```
hesap-kurulumlari/
├── README.md                       ← Bu dosya
├── _sablon/                        ← Yeni platform için şablon
├── meta/                           ← Meta Business / Ads Manager hesap kurulumu
│   ├── durum.md                    ← Şu an hangi adımdayım, eksikler
│   ├── on-gereksinimler.md         ← Mail, kart, işletme bilgisi listesi
│   └── adim-adim.md                ← Tam akış (ajan doldurur)
├── tiktok/                         ← TikTok for Business
├── apple-search-ads/               ← ASA hesabı
└── google-ads/                     ← Google Ads + Google Cloud
```

## Yeni bir platforma hesap açmak için

```
/mt-hesap-ac
```

(Phase 2'de yazılacak.) `mt-hesap-kurulum-rehberi` seninle birlikte:
1. Ön gereksinimleri kontrol eder (mail, kart, işletme bilgisi, vergi)
2. Adım adım hesabı açar
3. Business manager / ad account verification'a kadar götürür
4. İlk login kontrolü yapar
5. Her adımı `durum.md`'ye işler — yarıda bırakırsan kaldığın yerden devam edebilirsin

## Mevcut durum

| Platform | Durum |
|---|---|
| Meta Business | ❌ Açılmadı |
| TikTok for Business | ❌ Açılmadı |
| Apple Search Ads | ✅ Tamamlandı (2026-06-05) |
| Google Ads | ❌ Açılmadı |

> Not: Apple Search Ads için iOS dev olduğun için zaten Apple Developer hesabın var → daha kolay olacak.

## Hassas bilgi

Vergi numarası, ödeme yöntemi, banka bilgisi gibi bilgileri **asla** açık MD'lere yazma. Bunlar:
- `hesap-kurulumlari/**/private.md` (gitignore'lu)
- Veya parola yöneticinde

Public `durum.md` dosyaları sadece "hangi adımdayım" bilgisini içerir.
