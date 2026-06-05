# Modül 2 — Funnel ve Metrikler (25 dk)

> **Ne öğreneceksin?**
> 1. Funnel nedir — kullanıcı nasıl ilerler?
> 2. Her aşamanın metriği ne, hangi soruyu cevaplıyor?
> 3. IAP + Ads tabanlı casual game için hangi metrikler öncelikli?

---

## 1. Funnel Nedir?

Kullanıcının seni "duymak"tan "sana para vermek"e giden yolculuğu. Her adımda bir kısım kullanıcı düşer — bu kaçınılmaz. Ama her adımda kayıp oranını küçültmek = daha fazla para.

```
Awareness (Reklamı gördü)
    ↓  [CPM, CTR]
Click (Reklama tıkladı)
    ↓  [CR — tıklama → install]
Install (Uygulamayı indirdi)
    ↓  [CPI]
Activation (İlk anlamlı eylemi yaptı)
    ↓  [D1 Retention]
Retention (Geri döndü)
    ↓  [D7 / D30 Retention]
Revenue (Para ödedi ya da reklam izledi)
    ↓  [LTV, ROAS, Payback Period]
```

Her ok = kayıp noktası. Her metrik = o kaybı ölçer.

---

## 2. Metrikler — Tek Tek

### CPM (Cost Per Mille)
- **Ne**: 1000 reklam gösterimi için ödediğin para
- **Formül**: (Harcama ÷ Gösterim) × 1000
- **Örnek**: $10 harcadın, 5000 kişi gördü → CPM = $2
- **Ne soruyu cevaplar**: "Reklamım hedef kitleye ne kadar ucuza ulaşıyor?"
- **Tipik aralık**: $5–$20 (Türkiye daha düşük, US daha yüksek)

### CTR (Click Through Rate)
- **Ne**: Reklamı görenlerin kaçı tıkladı
- **Formül**: (Tıklama ÷ Gösterim) × 100
- **Örnek**: 5000 kişi gördü, 50 tıkladı → CTR = %1
- **Ne soruyu cevaplar**: "Creative'im dikkat çekiyor mu?"
- **Tipik aralık**: %1–3 iyi, %0.5 altı kötü

### CPI (Cost Per Install)
- **Ne**: Bir install için ödediğin para
- **Formül**: Toplam Harcama ÷ Install Sayısı
- **Örnek**: $50 harcadın, 25 install aldın → CPI = $2
- **Ne soruyu cevaplar**: "Bir kullanıcıyı uygulamama çekmek kaç dolara maliyor?"
- **Casual game Türkiye tipik aralığı**: $0.30–$1.50
- **Önemli**: Düşük CPI her zaman iyi değil — kalitesiz kullanıcı ucuz gelir, para ödemez

### CR (Conversion Rate) — Reklam → Install
- **Ne**: Reklama tıklayanların kaçı uygulamayı indirdi
- **Formül**: (Install ÷ Tıklama) × 100
- **Örnek**: 50 tıklama, 25 install → CR = %50
- **Ne soruyu cevaplar**: "App Store sayfam (ASO) tıklamayı install'a çeviriyor mu?"
- **Dikkat**: CR düşükse sorun reklamda değil, App Store sayfasında

### D1 / D7 / D30 Retention
- **Ne**: İndirenlerden 1. / 7. / 30. gün hâlâ kullananların oranı
- **Formül**: (Gün X'te aktif kullanıcı ÷ Install eden toplam) × 100
- **Örnek**: 100 kişi indirdi, 1. gün 40'ı açtı → D1 = %40
- **Ne soruyu cevaplar**: "Uygulama insanı tutuyor mu?"
- **Casual game benchmark**:
  - D1: %30–40 iyi, %20 altı kötü
  - D7: %15–25 iyi
  - D30: %5–10 iyi
- **Neden kritik**: Retention düşükse paid UA harcamak para yakmak — kullanıcı geliyor, kalıp gidiyor

### LTV (Lifetime Value — Kullanıcı Yaşam Boyu Değeri)
- **Ne**: Bir kullanıcının uygulamanda ömrü boyunca getirdiği ortalama gelir
- **Formül**: Basit → ARPU × Ortalama Kullanım Süresi (ay)
- **Örnek**: Kullanıcı aylık ortalama $0.50 getiriyor, 6 ay kalıyor → LTV = $3
- **Ne soruyu cevaplar**: "Bir kullanıcı bana ne kadar para kazandırıyor?"
- **IAP + Ads app için LTV kaynakları**: Reklam izleme geliri + IAP satın alma
- **Uyarı**: Gerçek LTV'yi görmek için en az 90 gün veri gerekir

### ROAS (Return on Ad Spend — Reklam Harcamasından Dönüş)
- **Ne**: Reklama harcadığın her $1 için kaç $1 geri aldın
- **Formül**: Reklam Kaynaklı Gelir ÷ Reklam Harcaması
- **Örnek**: $100 harcadın, o kampanyadan $150 geldi → ROAS = 1.5 (ya da %150)
- **Ne soruyu cevaplar**: "Reklam harcamam karlı mı?"
- **Hedef**: ROAS > 1 = zarar yok. ROAS > 2 = sağlıklı. Ama dikkat: zaman ekseni önemli
- **IAP + Ads için nüans**: Gelir anlık değil — D30, D60, D90 ROAS'a bakılır

### Payback Period (Geri Ödeme Süresi)
- **Ne**: Bir kullanıcıyı edinme maliyetini o kullanıcının geliriyle karşılama süresi
- **Formül**: CPI ÷ (Aylık ARPU)
- **Örnek**: CPI = $1, aylık ARPU = $0.25 → Payback = 4 ay
- **Ne soruyu cevaplar**: "Ne zaman kara geçerim?"
- **Hedef**: Casual game için 3–6 ay makul. 12 ay+ riskli (bütçe tükenir)

### ARPU (Average Revenue Per User)
- **Ne**: Kullanıcı başına ortalama aylık gelir
- **Formül**: Toplam Gelir ÷ Aktif Kullanıcı Sayısı
- **IAP + Ads için**: Hem reklam geliri hem IAP toplamı

---

## 3. Metrikler Birbirini Nasıl Bağlar?

Tek metriğe bakma — zinciri oku:

```
CPM düşük + CTR düşük  → Creative zayıf (görsel dikkat çekmiyor)
CPM düşük + CTR iyi + CPI yüksek → App Store sayfası zayıf (CR kötü)
CPI düşük + D1 düşük  → Kalitesiz kullanıcı geliyor (hedefleme yanlış)
CPI iyi + D7 iyi + ROAS düşük → Monetization zayıf (para kazanmıyor)
```

Her sorunun bir metrik "sinyali" var.

---

## 4. IAP + Ads Casual Game İçin Öncelik Sırası

Senin app tipin (What The Emoji, Blur Film) için en kritik metrikler:

1. **D1 Retention** — kalıp kalmamasının ilk sinyali
2. **CPI** — edinme maliyeti
3. **D7 Retention** — gerçek bağlılık
4. **ARPU (Ads + IAP)** — para kazanma verimliliği
5. **Payback Period** — sürdürülebilirlik
6. **ROAS (D30)** — kampanya karlılığı

Subscription app'lerde ROAS önce gelir — seninkilerde retention öne çıkar çünkü reklam geliri tekrar gelen kullanıcıyla büyür.

---

## 5. Fairora Özelinde Not

Fairora'da AI maliyeti var — bu LTV hesabını değiştirir. Kullanıcı başına gelir, o kullanıcının getirdiği AI API maliyetini karşılamalı. Fairora için **net LTV** = Gelir − AI API Maliyeti. Bu yüzden Fairora'da monetization (subscription veya IAP) çok daha kritik.

---

## 6. Sıkça Karıştırılır

❌ **"CPI düşük = başarılı kampanya"** → Hayır. CPI $0.20 ama D1 %5 ise kalitesiz trafik. Ucuz ama işe yaramaz.

❌ **"ROAS 1 = başabaş"** → Dikkat. Reklam maliyeti dışında Apple %30 kesinti, sunucu, AI maliyeti var. Gerçek başabaş ROAS > 1.5–2.

❌ **"LTV sabit"** → Hayır. Retention artarsa LTV artar. ASO iyileşirse daha kaliteli kullanıcı gelir, LTV artar.

---

## 7. Kendini Test (3 soru)

1. CPI $2, D1 retention %15 — bu iyi bir kampanya mı? Neden?
2. ROAS 0.8 çıktı. Ne anlama gelir, ne yaparsın?
3. Payback period 8 ay çıktı, aylık bütçen $300. Risk nedir?

---

## ✅ Modül 2 Tamam — Sonraki Adım

👉 Modül 3 — iOS Attribution Gerçekliği (25 dk, kritik modül)

**Modül 3'te öğrenecekler**: iOS 14.5 sonrası attribution neden kırıldı, SKAdNetwork nedir, platformların "modeled conversion" dediği şey ne, kampanya kararlarını bu bağlamda nasıl vermeli.
