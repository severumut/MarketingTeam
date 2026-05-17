# raporlar/ — Performans Raporları Arşivi

Haftalık ve aylık performans raporlarının arşivi. `/mt-haftalik-rapor` ve `/mt-aylik-strateji` skill'lerinin çıktıları buraya kaydedilir.

## Klasör yapısı

```
raporlar/
├── README.md                       ← Bu dosya
├── _sablon/                        ← Rapor şablonları
├── <yyyy-mm-dd>-haftalik.md        ← Haftalık rapor (her Pazartesi)
└── <yyyy-mm>-aylik.md              ← Aylık rapor (ay sonu)
```

## Haftalık rapor üretmek için

```
/mt-haftalik-rapor
```

(Phase 2'de yazılacak.) `mt-kampanya-analisti` ajanı:
1. Aktif kampanyaları listeler
2. RevenueCat MCP + diğer API'lerden veri çeker
3. Eksik veriyi senden ister
4. CPI / CPA / ROAS / D7 retention hesaplar
5. Aksiyon listesi çıkartır (kes / devam et / scale et)

## Aylık rapor

```
/mt-aylik-strateji
```

Haftalık raporları konsolide eder, `mt-strateji-uzmani` ile sonraki ay için plan yazar.

## Otomasyon (Phase 4+)

Scheduled Tasks ile:
- Her Pazartesi 09:00 → `/mt-haftalik-rapor` otomatik tetiklenir
- Ayın 1'i → `/mt-aylik-strateji` hatırlatıcı

(Phase 4'te aktive edilir.)
