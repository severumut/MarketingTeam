# mt-strateji-uzmani

Aylık marketing planlayıcı + bütçe allocator + KPI hedef belirleyici. **Para + KPI** boyutunda strateji çerçevesi.

> `mt-paid-ua-uzmani` "hangi kanal / hangi yön" der; bu ajan "hangi kanala kaç para / hangi rakam = başarı" der.

---

## Bu ajan ne yapar?

### Mod A — Plan Üretimi (aylık default, üç aylık opsiyonel)
- Hedeflerden başla, kanal/uygulama allocation'a in
- Aylık plan + **haftalık checkpoint'ler** (sınırlı bütçe + sık takip için kritik)
- KPI eşikleri tanımla (yeşil/sarı/kırmızı ışıklar)
- Erken revize tetikleyicileri (% sapma)
- Çıktı: `butce/<yyyy-mm>.md`

### Mod B — Bütçe Allocation
- Mevcut bütçeyi uygulamalar × kanallar arasında dağıt
- Geçen ay performansına göre **rebalance** önerir
- "Şu kanal kötü, buradan al, şuna ver" gibi spesifik öneriler

### Mod C — KPI Hedef Belirleme
- Yüksek seviye hedef ("D30 ROAS > 1.0") → kampanya bazlı alt-KPI'lara çevirir
- Target CPI = LTV / 5-10 (rule of thumb), payback period, retention hedefleri
- App tipine göre adapte (subscription / IAP / ads farklı)

### Yapmadığı
- Kanal seçimi / kanal mix mantığı / funnel haritası → `mt-paid-ua-uzmani`
- Platform-spesifik kampanya kurma → `mt-meta-ads-uzmani`, vb.
- Haftalık performans okuma + kes/devam kararı → `mt-kampanya-analisti`
- Creative üretim → `mt-creative-yonetmeni`

---

## Neden ayrı bir ajan?

3 ajan arasında çakışan görünen ama net ayrılan iş:

| Ajan | Soru |
|---|---|
| `mt-paid-ua-uzmani` | "Hangi kanal? Hangi sırada?" (yön) |
| **`mt-strateji-uzmani`** | "Hangi kanala kaç para? Hedef ne?" (para + KPI) |
| `mt-kampanya-analisti` | "Geçen hafta nasıl gitti? Şu kampanyayı kes mi?" (operasyonel takip) |

Bu üçü birbirini besler ama farklı zihinlerle çalışır.

---

## Aylık Strateji + Haftalık Checkpoint Felsefesi

**Kullanıcı sınırlı bütçe** ile çalışıyor → aylık taahhüt mantıklı (learning phase için 7-14 gün gerekli), ama **haftalık takip** zorunlu (4 datapoint vs 1 = 4x daha hızlı sinyal).

### Yapı

```
Ay başı:    mt-strateji-uzmani aylık plan yazar
            (haftalık checkpoint'ler + KPI eşikleri ile)
              ↓
Her hafta:  mt-kampanya-analisti haftalık rapor yazar
            (checkpoint'lere bakar)
              ↓
Eşik aşılırsa:
  - Küçük sapma (creative refresh, audience tweak)
    → mt-kampanya-analisti öneriyor → ilgili platform ajan uyguluyor
  - Büyük sapma (kanal kes, bütçe kaydır)
    → mt-strateji-uzmani çağrılır → plan revize
              ↓
Ay sonu:    mt-strateji-uzmani retrospektif + sonraki ay planı
```

### Checkpoint örneği

```markdown
- **Hafta 1 sonu**: Test phase. Beklenen install: 30-50. CPI tolerans: < $5
  🚦 Yeşil: < $5 CPI → devam
  🟡 Sarı: $5-7 CPI → creative refresh (mt-creative-yonetmeni Mod D)
  🔴 Kırmızı: > $7 CPI → kampanya kes, brief revize
```

---

## Ne zaman çağırılmalı?

- "Bu ay bütçemi nasıl dağıtmalıyım?"
- "Aylık marketing planı yapalım"
- "ROAS hedefim 1.2, kampanya bazına nasıl bölünür?"
- "Geçen ay $X harcadım, bu ay nereye yatırmalıyım?"
- "Üç aylık plan yazalım"
- "Hedef install 1000, bütçe ne kadar olmalı?"
- "Target CPI ne olmalı, LTV $30"

## Ne zaman çağırılmamalı?

| Soru | Doğru ajan |
|---|---|
| "Hangi kanaldan başlamalıyım?" | `mt-paid-ua-uzmani` |
| "Meta'da AAC nasıl kurulur?" | `mt-meta-ads-uzmani` |
| "Geçen hafta kampanyalar nasıl gitti?" | `mt-kampanya-analisti` |
| "ROAS düşük, scale edebilir miyim?" | `mt-kampanya-analisti` |
| "Bütçe kavramı nedir?" | `mt-marketing-tutor` |
| "Reklam görseli üret" | `mt-creative-yonetmeni` |

---

## Nasıl çağırılır?

**Doğal dil**:
- "Bu ay $500'ümü nasıl bölmeli?"
- "Aylık plan yapalım"
- "KPI hedeflerimi belirle"

**Manuel**: `@mt-strateji-uzmani <sorum>`

**Skill üzerinden** (Phase 2): `/mt-butce-planla`, `/mt-aylik-strateji`

---

## Örnek prompt'lar

1. *"Habit tracker app için Haziran ayı planı. Bütçe $500, hedef D30 ROAS 1.2"*
2. *"Mayıs sonu, Haziran planını yazalım. Mayıs verisi raporlar/ altında"*
3. *"$300 bütçem var, 2 uygulamam var, nasıl bölmeli?"*
4. *"Aylık $200 düşük mü? Ne kadar olmalı 100 install hedef için?"*
5. *"Q3 planı (üç aylık) yapalım, ölçeklenme hedefli"*

---

## Çıktılar

### `butce/<yyyy-mm>.md` (ana çıktı)

Aylık plan + bütçe allocation + KPI eşikleri + haftalık checkpoint'ler.

### `projects/<app>/02-paid-ua-stratejisi.md` (append)

Uygulama-spesifik KPI hedefleri. mt-paid-ua-uzmani'nin yazdığı "Kanal Stratejisi" bölümünün altına **"Bütçe & KPI Hedefleri"** bölümü eklenir.

### Memory: `marketing_strategy_state.md`

- Aylık bütçe geçmişi
- KPI hedef vs gerçekleşen tablosu
- Plan revize tarihi
- Sonraki revizyon trigger'ları

---

## Sınırları

- Kanal seçimi yapmaz → `mt-paid-ua-uzmani`
- Platform kurmaz → ilgili platform ajan
- Veri okumaz / kes-devam demez → `mt-kampanya-analisti`
- Creative üretmez → `mt-creative-yonetmeni`
- Hesap açmaz → `mt-hesap-kurulum-rehberi`
- API kurmaz → `mt-entegrasyon-kurucu`

---

## Bağlantılı ajanlar / skill'ler

- **Önceki adım**: `mt-paid-ua-uzmani` (kanal yön kararı verilmiş olmalı)
- **Performans verisi besleyen**: `mt-kampanya-analisti` (raporlar/'dan okur)
- **Strateji uygulayan**: Platform ajanlar (`mt-meta-ads-uzmani`, vs.)
- **Skill bağlantısı**: `/mt-butce-planla`, `/mt-aylik-strateji`

---

## İlgili bilgi-bankası dosyaları

- `bilgi-bankasi/01-temeller/temel-metrikler.md` (KPI tanımları)
- `bilgi-bankasi/02-paid-ua/bidding-stratejileri.md`
- `bilgi-bankasi/06-monetization/subscription-pricing-stratejileri.md` (LTV → target CPI)
- `bilgi-bankasi/09-playbooklar/indie-dev-paid-launch.md`

---

## Tetikleyici test cümleleri

| Cümle | Beklenen |
|---|---|
| "Bu ay $500'ümü nasıl bölmeli?" | ✅ tetiklenmeli |
| "Aylık marketing planı yazalım" | ✅ tetiklenmeli |
| "Hedef ROAS 1.2 için bütçe ne olmalı?" | ✅ tetiklenmeli |
| "Üç aylık plan hazırlayalım" | ✅ tetiklenmeli |
| "Target CPI ne olmalı, LTV $30" | ✅ tetiklenmeli |
| "KPI hedeflerimi belirle" | ✅ tetiklenmeli |
| "Hangi kanaldan başlamalıyım?" | ❌ → `mt-paid-ua-uzmani` |
| "Geçen hafta kampanyalar nasıl?" | ❌ → `mt-kampanya-analisti` |
| "ROAS düşük scale" | ❌ → `mt-kampanya-analisti` |
| "Meta'da AAC nasıl kurulur?" | ❌ → `mt-meta-ads-uzmani` |
| "ROAS ne demek?" | ❌ → `mt-marketing-tutor` |
| "Creative üret" | ❌ → `mt-creative-yonetmeni` |
