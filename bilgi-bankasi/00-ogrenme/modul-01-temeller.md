# Modül 1 — Temeller (15 dk)

> **Ne öğreneceksin?**
> 1. App marketing'in 3 sütununu (Paid UA, Organik Content, ASO) ne işe yaradığını
> 2. Indie iOS dev'in pazardaki konumunu — bütçe gerçekliği
> 3. "Tek bir kazanan formül" yok — test ve iterasyon mantığı

---

## 1. App Marketing 3 Sütun Üzerine Oturur

App'in indirilmesini ve gelir üretmesini sağlamanın 3 ana yolu var. Hepsi aynı anda çalışır, biri diğerini besler.

### 🅰 Paid UA (User Acquisition) — **Para vererek install satın alma**
- Meta (Facebook + Instagram), TikTok, Apple Search Ads, Google'a reklam parası verirsin
- "Şu kadar para, şu kadar install" mantığı
- **Avantaj**: Hızlı, ölçeklenebilir, hangi mesajın çalıştığını veri ile öğrenirsin
- **Dezavantaj**: Para biter, install durur. iOS attribution (kim nereden geldi) çalışırken zor

### 🅱 Organik Content / Sosyal Medya — **Kendi içeriğinle organik trafik**
- TikTok/Reels/Shorts'a video atarsın, viral olursa milyon kişi görür
- Twitter/X, Reddit, IndieHackers'da launch yaparsın
- **Avantaj**: Para yok (üretim zamanı dışında). Topluluk + güven yaratır
- **Dezavantaj**: Yavaş, predictable değil. Tutmazsa boş efor

**Senin durumunda**: Bu sistemde **organik content kapsam dışı** — full-time iş + indie eşittir zaman kısıtı. Sadece paid + ASO odaklıyız.

### 🅲 ASO (App Store Optimization) — **App Store içinde keşfedilebilir olma**
- App Store'da "habit tracker" arandığında üst sıralarda görünme
- Title, subtitle, keywords field, screenshots, ikon, review
- **Avantaj**: Ücretsiz, kalıcı (bir kez doğru yap, aylarca trafik)
- **Dezavantaj**: Rekabetli kategorilerde zor. Apple algoritması belirleyici

---

## 2. Bu Üçü Nasıl Birbirini Besler?

```
            ┌─────────────────┐
            │   PAID UA       │  ← reklamla install satın al
            └────────┬────────┘
                     │
                     ▼
            ┌─────────────────┐
            │   ASO           │  ← user App Store'a gelir (reklamdan veya organik)
            │                 │     → ekran iyiyse install
            └────────┬────────┘     → ekran kötüyse vazgeçer (para boşa)
                     │
                     ▼
            ┌─────────────────┐
            │   App içinde    │  ← onboarding + paywall + retention
            │   (operasyonel) │
            └─────────────────┘
                     │
                     ▼
                  Revenue
```

**Önemli içgörü**: Paid UA "musluk", ASO "huni darlığı".

- Musluk geniş (paid bütçesi yüksek) ama huni dar (ASO kötü, screenshot çirkin) = para boşa
- Musluk dar (düşük bütçe) ama huni geniş (ASO mükemmel) = bütçenden en yüksek verim

**Senin için strateji**: Önce ASO'yu iyi tut (zaten yapıyorsun), sonra paid'i aç. Sistem bu yüzden ASO'yu "ikinci sütun" diyor — temel zaten orada, biz ince ayar yapacağız.

---

## 3. Indie iOS Dev'in Pazardaki Yeri

App Store'da ~1.8 milyon uygulama var. Sektör gerçekleri:
- **Top %1 uygulama** günde 10K+ install alıyor (Spotify, Duolingo, Calm seviyesi)
- **Indie ortalaması**: günde 5-50 install yeterli sayılıyor
- **Subscription app aylık $1000-5000 net**: indie için "geçer not"

Bu noktada bir karar var:
- "Viral olalım" → düşük olasılık, kontrolün dışında
- "Kontrollü büyüme" → paid UA + ASO ince ayar (sürdürülebilir, ölçülebilir)

**Senin sistemde** ikinci yolu seçtin. Bu daha sağlıklı çünkü:
- Aylık $200-500 paid bütçeyle ölçeklenebilir
- Her hafta ne olduğunu görürsün
- Yanlış giderse müdahale edebilirsin

---

## 4. "Kazanan Formül" Yok — Test ve Iterasyon

Marketing'in en yanıltıcı söylemi: "Şu yöntem en iyi". **Doğru değil**. Her uygulama, her pazar, her dönem farklı.

Doğru yaklaşım:
1. **Hipotez kur**: "Habit tracker için TikTok'ta lifestyle video çalışır"
2. **Test et**: Küçük bütçeyle (örn. $30) hipotezi denersen
3. **Veri oku**: 7-14 gün sonra CPI / CR / D7 retention bak
4. **Karar ver**:
   - Çalıştı → bütçeyi artır (scale)
   - Çalışmadı → hipotezi revize et (yeni hook? yeni audience?)
   - Belirsiz → bir tur daha (learning phase tamamlanmadı)

Bu döngü hayatın boyunca tekrarlanır. **İyi marketing'çi olmak = bu döngüyü hızlı + ucuz yapmak**.

---

## 5. Senin App'lerinden Örnekler

### Fairora (AI ile masal oluştur)
- **App tipi tahmini**: Freemium veya Subscription (AI maliyeti var → para gerekli)
- **Paid UA için potansiyeli**: Yüksek — "AI ile dakikalar içinde kişisel masal" net bir vaat
- **Hedef kitle**: Ebeveynler (çocuk masalı), yaratıcı içerik üreticiler
- **ASO ipucu**: "masal", "AI hikaye", "çocuk masalı" Türkiye'de güçlü keyword'ler

### What The Emoji? (Kelime Bulmaca)
- **App tipi tahmini**: Free + Ads + IAP (hint paketi vb.)
- **Paid UA için potansiyeli**: Orta — bulmaca app'leri rekabetli, viral hook gerekli
- **Hedef kitle**: 25-55 yaş, casual game lovers, Türkçe konuşan
- **ASO ipucu**: "kelime oyunu", "emoji bulmaca" — kısa Türkçe keyword'ler

### Blur Film (Sinema Tahmin Oyunu)
- **App tipi tahmini**: Free + Ads + IAP (multiplayer feature?)
- **Paid UA için potansiyeli**: Orta-yüksek — multiplayer = social sharing = organik amplification
- **Hedef kitle**: Film severler, 18-45, multiplayer trivia oyuncuları
- **ASO ipucu**: "film tahmin", "sinema oyunu", "trivia" — niş ama hedefli

---

## 6. Sıkça Karıştırılır

❌ **"Paid UA aç → install patlar"** → Yanlış. Paid UA install verir ama eğer ASO/paywall kötüyse yine düşer.

❌ **"Viral olalım → para gerekmez"** → Yanlış. Viral kontrol edilemez. Test edilen + scale edilen = paid.

❌ **"ASO bir kez yapılır, biter"** → Yanlış. Apple algoritması, rakipler, trendler değişir. Aylık ince ayar lazım.

❌ **"Yüksek install = başarı"** → Yanlış. **Yüksek revenue ve düşük churn = başarı**. 1000 install %1 ödüyorsa, 100 install %20 ödüyorsa ikincisi daha iyi.

---

## 7. Detay İstersen

Bu modül **özet**. Detay için:
- `bilgi-bankasi/01-temeller/app-marketing-nedir.md` (Phase 3'te yazılacak)
- `bilgi-bankasi/01-temeller/paid-ua-vs-aso-vs-content.md` (Phase 3'te yazılacak)

Şimdilik bu modül yeterli.

---

## 8. Kendini Test (5 soru)

Cevapları aşağıda kapalı. Önce kendin cevapla, sonra bak.

1. **Paid UA, ASO ve organik content arasında temel fark nedir?**
2. **"Musluk geniş, huni dar" durumu nedir? Senin app'in için riski nedir?**
3. **Senin sistem neden organik content'i kapsam dışı bıraktı?**
4. **"Kazanan formül yok" deyimi pratikte ne demek? Kaç günlük bir döngü öneriliyor?**
5. **Aylık $500 paid bütçeyle ölçeklenebilir bir indie iOS dev senaryosu yaşanabilir mi? Neden?**

---

## Cevaplar (gizle, kendin cevapla)

<details>
<summary>👉 Cevaplara bak</summary>

1. Paid UA = para ile install. ASO = App Store içinde keşfedilebilirlik. Organik content = sosyal medya viral. Üçü birlikte çalışır.

2. Musluk = paid trafik. Huni = App Store sayfası (screenshot, başlık). Musluk geniş + huni dar = reklamdan gelen kullanıcı sayfayı görüp vazgeçiyor = boşa para. Senin app'inde önce ASO temizliği lazım, sonra paid scale.

3. Çünkü kullanıcı (sen) full-time iş + indie. Zaman kısıtı var. Organik content sürekli üretim ister (haftada 3-5 video, takvim, trend takibi). Paid + ASO daha sürdürülebilir.

4. Demek = sektörde "şu yol kesin işler" diye iddia eden satıyordur. Pratikte: test → ölç → karar. **7-14 günlük** bir test döngüsü standart (Meta learning phase 50 conversion gerektirir, bu da 1-2 hafta).

5. Evet. Tipik indie senaryosu. $500/ay = günlük ~$16 bütçe. 3-4 kampanya × günlük $5 = haftalık 5-50 install + KPI takibi. Ölçek = işe yaramayanı kes + işe yarayanı %30 büyüt.

</details>

---

## ✅ Modül 1 Tamam — Sonraki Adım

👉 [Modül 2 — Funnel ve Metrikler (25 dk, kritik modül)](modul-02-funnel-metrikler.md)

**Modül 2'de öğrenecekler**: Funnel mantığı (Awareness → Install → Activation → Retention → Revenue), temel metrikler (CPI, ROAS, LTV, retention, payback), hangi metrik hangi soruyu cevaplıyor.

> 💡 Modül 2 sistemin en kritik modüllerinden biri. Onsuz raporları okuyamazsın.
