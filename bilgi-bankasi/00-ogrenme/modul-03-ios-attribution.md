# Modül 3 — iOS Attribution Gerçekliği (25 dk)

> **Ne öğreneceksin?**
> 1. iOS 14.5 öncesi attribution nasıl çalışıyordu?
> 2. Apple ne değiştirdi, neden karıştı?
> 3. SKAdNetwork nedir, nasıl çalışır?
> 4. "Modeled conversion" nedir — platformlar sana ne söyleyip ne saklıyor?
> 5. Bu bağlamda kampanya kararları nasıl verilir?

---

## 1. iOS 14.5 Öncesi: Her Şey Netti

Her iPhone'un benzersiz bir kimliği vardı: **IDFA** (Identifier for Advertisers).

Kullanıcı bir reklama tıklayıp uygulamayı indirdiğinde, reklam platformu (Meta, TikTok, Google) şunu görebiliyordu:
- Bu cihaz hangi reklamı gördü
- Hangi reklama tıkladı
- Uygulamayı indirdi mi
- İçeride ne yaptı (IAP aldı mı, hangi seviyeye geldi)

Sonuç: Tam attribution. "Bu kampanya X install getirdi, Y gelir üretiyor" — kesin veri.

---

## 2. iOS 14.5 Sonrası: Apple Kapıyı Kapattı

**Nisan 2021** — Apple, **ATT** (App Tracking Transparency) framework'ünü zorunlu kıldı.

Artık her uygulama açılışında kullanıcıya bir popup çıkıyor:
> *"Bu uygulama sizi diğer şirketlerin uygulamaları ve web sitelerinde takip etmek istiyor."*
> **[İzin Ver] [Takip Etme]**

Gerçek dünya opt-in oranı: **%20–30** civarı. Yani kullanıcıların %70–80'i "Takip Etme" diyor.

Bu ne anlama gelir?
- IDFA artık yok (ya da %70–80 oranında erişilemiyor)
- Reklam platformları kimin uygulamayı indirdiğini, kimin IAP aldığını **çoğunlukla göremez**

---

## 3. Apple'ın Sunduğu Çözüm: SKAdNetwork

Apple kendi attribution sistemini önerdi: **SKAdNetwork** (SKAN).

Nasıl çalışır:
- Kullanıcı reklamı görür → tıklar → uygulamayı indirir
- 24–48 saat sonra Apple, reklam platformuna **anonim, toplu** bir sinyal gönderir
- Bu sinyal şunları söyler: "Kampanya X, Y kadar install aldı" — ama kim olduğunu, ne yaptığını söylemez
- Gelir bilgisi (IAP, subscription) platform tarafından asla görülmez — sadece senin tanımladığın "conversion value" görülür

**Kısıtlar**:
- Gecikme: 24–72 saat (bazen daha fazla)
- Örnekleme: Küçük kampanyalarda hiç sinyal gelmeyebilir (privacy threshold)
- Granülite yok: Hangi kullanıcının ne yaptığını bilmiyorsun, sadece toplam sayı

---

## 4. Platformlar Ne Yapıyor: Modeled Conversions

Meta, TikTok, Google bu veri boşluğunu nasıl dolduruyor?

**Modeled conversions** (modellenmiş dönüşümler): Platform, gördüğü %20–30 gerçek veriye bakıyor, geri kalan %70–80'i **istatistiksel modelle tahmin ediyor**.

Meta Ads Manager'da "Sonuçlar: 47 install" yazıyorsa:
- Belki 12'si gerçek SKAN verisi
- 35'i Meta'nın tahmini

Platformlar bunu genellikle küçük harflerle, tooltip'te belirtiyor ama ana dashboard'da göstermiyorlar.

**Pratik sonuç**: Gördüğün rakamlar **gerçek değil, tahmin**. Yön doğru olabilir ama kesin sayılara güvenme.

---

## 5. MMP Nedir? (Mobile Measurement Partner)

Bu karmaşıklığı yönetmek için **MMP** araçları var:
- **Adjust**, **AppsFlyer**, **Branch** — üçüncü taraf attribution araçları
- Hem SKAN verisiyle hem de kendi probabilistic modeliyle çalışırlar
- Platformlar arası karşılaştırma yapabilirsin (Meta vs ASA vs Google aynı dashboard'da)

Küçük indie bütçelerde MMP pahalı olabilir. Alternatif: Apple'ın kendi **SKAdNetwork postback** verilerini + RevenueCat'i birlikte kullanmak.

---

## 6. RevenueCat Bu Bağlamda Ne İşe Yarıyor?

RevenueCat, **in-app geliri** takip eder — bu tarafta Apple'ın kısıtlaması yok.

- Kullanıcı IAP aldı mı? → RevenueCat görür
- Hangi cohort daha çok para ödüyor? → RevenueCat görür
- D30 revenue per user? → RevenueCat görür

Ama hangi **reklam kampanyasından** geldiğini bilmez — çünkü IDFA yok.

Pratik yaklaşım:
- Meta Ads → CPI, install tahmini (modeled)
- RevenueCat → Gelir gerçeği
- İkisini birleştirince kabaca ROAS hesabı yapabilirsin

---

## 7. Indie İçin Pratik Çıkarımlar

**Ne yapmalısın:**
1. **Mutlak sayılara güvenme** — "47 install" değil, "40–60 install civarı" olarak oku
2. **Trende bak** — Bir kampanya diğerinden %30 daha iyi görünüyorsa, tahminler de dahil büyük ihtimal gerçekten daha iyi
3. **ROAS'ı RevenueCat + platform verisiyle karşılaştır** — Platform "iyi" diyorsa ama RevenueCat'te gelir yoksa, platform yanlış tahmin ediyor olabilir
4. **ASA'ya özel not**: Apple Search Ads, IDFA kısıtlamasından muaf — kendi ekosistemi içinde tam attribution verir. Bu yüzden ASA verisi en güvenilir platform verisi

**Ne yapmamalısın:**
- Platform rakamlarını gerçekmiş gibi raporlama
- Küçük farkları (5 install farkı) anlamlı kabul etme
- "Meta %40 daha iyi" deyip diğer kanalı hemen kesme — hata payı büyük

---

## 8. Özet Tablo

| Platform | Attribution Kalitesi | Neden |
|---|---|---|
| **Apple Search Ads (ASA)** | En iyi | Apple ekosistemi, IDFA muafiyeti |
| **Meta / Facebook** | Orta | Modeled conversions, %20–30 gerçek veri |
| **TikTok** | Orta | Benzer model |
| **Google UAC** | Orta | Firebase + modeled |
| **RevenueCat** | Gelir için mükemmel | Platform attribution yok ama gelir gerçek |

---

## 9. Kendini Test (2 soru)

1. Meta Ads Manager'da "Bu kampanya 50 install getirdi" yazıyor. Bu 50 rakamına nasıl yaklaşırsın?
2. ASA neden diğer platformlara göre daha güvenilir attribution verir?

---

## ✅ Modül 3 Tamam — Sonraki Adım

👉 Modül 4 — Kanal Mantığı

**Modül 4'te öğrenecekler**: Meta, TikTok, ASA, Google'ın güçlü/zayıf yanları, hangi app tipi için hangi kanal, kanal mix mantığı, ilk kampanyada nereden başlamalı.
