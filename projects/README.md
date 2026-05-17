# projects/ — Senin Uygulamaların

Her uygulaman için ayrı bir klasör burada yaşar. `_sablon/` klasörü `/mt-yeni-uygulama` skill'i tarafından kopyalanır.

## Yapı

```
projects/
├── README.md
├── _sablon/                          ← Yeni uygulama şablonu (değiştirme)
└── <app-adi>/                        ← Senin uygulamaların buraya
```

## `_sablon/` içeriği

```
_sablon/
├── README.md
├── 00-app-overview.md                ← App adı, App Store ID, kategori, paket adı, launch tarihi
├── 01-hedef-kitle.md                 ← Persona, lokasyon, demografi
├── 02-paid-ua-stratejisi.md          ← Kanal mix, bütçe çerçevesi, KPI
├── 03-monetization.md                ← Free/paid, IAP, subscription
├── 04-rakip-analizleri/              ← /mt-rakip-analizi çıktıları
├── 05-aso-stratejisi.md              ← ASO durumu + iyileştirme
├── kampanyalar/
│   ├── meta/
│   ├── tiktok/
│   ├── apple-search-ads/
│   └── google/
├── creative/
│   ├── gorseller/
│   ├── videolar/
│   └── copy/
├── content/
│   ├── takvim.md
│   └── ureticiler.md
├── raporlar/
│   ├── haftalik/
│   ├── aylik/
│   └── revenuecat/
└── notlar.md
```

## Yeni uygulama eklemek için

```
/mt-yeni-uygulama
```

> ⚠️ Phase 0 sonu: Bu skill henüz yazılmadı. Phase 2'de yazılacak.
> Şu an manuel olarak `_sablon`'u kopyalayabilirsin: `cp -R _sablon <app-adi>`

## Senin 4 uygulaman

Sen 4 canlı uygulamaya sahipsin. Bunları `/mt-yeni-uygulama` ile teker teker ekleyebilirsin (Phase 4'te). Şu an isim/kategori vermesen de olur — ihtiyacın olduğu zaman ekleriz.
