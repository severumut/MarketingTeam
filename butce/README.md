# butce/ — Aylık Bütçe Takibi

Aylık reklam bütçesi planlama ve takip dosyaları. `mt-strateji-uzmani` + `/mt-butce-planla` skill'i bu klasörü kullanır.

## Klasör yapısı

```
butce/
├── README.md                       ← Bu dosya
├── _sablon/                        ← Aylık bütçe şablonu
└── <yyyy-mm>.md                    ← Her ay için bir dosya (örn. 2026-05.md)
```

## Aylık bütçe oluşturmak için

```
/mt-butce-planla
```

(Phase 2'de yazılacak.) Skill seninle birlikte:
1. Toplam ay bütçeni alır
2. Uygulamalar arasında dağıtır (hedef + performansa göre)
3. Kanallar arasında dağıtır (Meta / TikTok / ASA / Google)
4. Test bütçesi vs scale bütçesi ayırır
5. KPI hedefleri belirler (D7 ROAS, CPI tavanı vb.)

## Format örneği

Bir `<yyyy-mm>.md` dosyası şu yapıyı içerir:

```markdown
# 2026-05 — Mayıs Bütçesi

## Toplam: $X
## Uygulama dağılımı
- App A: $X (yüzde Y) — neden
- App B: $X (yüzde Y) — neden

## Kanal dağılımı (App A)
- Apple Search Ads: $X (test $Y, scale $Z)
- Meta Ads: $X
- TikTok Ads: $X
- Google Ads: $X

## KPI hedefleri
- D7 ROAS: 0.5+
- CPI tavanı: $2.50
- Trial-to-paid: %25+

## Riskler / notlar
- ...
```
