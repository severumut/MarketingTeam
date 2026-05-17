# BAŞLA BURADAN — Sıfırdan App Marketing AI Takımı'na 30 Dakikalık Tur

Marketing'i hiç bilmiyorsan ve bu klasöre yeni geldiysen, bu dokümanı yukarıdan aşağı oku. Sonunda sistemin nasıl çalıştığını, hangi soruyu sorduğunda ne olacağını ve ilk adımı nasıl atacağını bileceksin.

---

## 1. Bu sistem ne yapar? (3 dakika)

Sen 4 canlı iOS uygulamasına sahip bir geliştiricisin. App'in iyi yapılması yetmiyor — indirme almak, gelir oluşturmak için **marketing** yapman gerekiyor. Bu klasörde Claude'a "marketing ekibi" rolü oynayan 14 uzman ajan ve 13 hazır iş akışı (skill) var.

Sen normal Türkçe yazarsın, Claude doğru uzmanı kendi seçer ve çağırır. Bilmen gereken tek şey, hangi tür sorunun hangi alana ait olduğu — onu da bu doküman netleştirir.

**Önceliğimiz**: Ücretli reklam (PAID UA) → İçerik üretimi → ASO (App Store Optimization). ASO'yu zaten yapıyorsun, bu sistemin esas gücü paid kanallarda.

---

## 2. Marketing diye konuşulan şey nedir? (5 dakika)

App marketing 3 ana sütun üstüne kurulur:

### Sütun 1 — PAID UA (User Acquisition / Kullanıcı Edinme)
Para verip reklam göstererek install çekmek. Ana kanallar:
- **Apple Search Ads (ASA)** — App Store içinde keyword bidding ile reklam
- **Meta Ads** — Facebook + Instagram (Reels, Stories, Feed)
- **TikTok Ads** — TikTok native + Spark Ads (UGC reklam)
- **Google App Campaigns (AC)** — Google'ın tüm envanteri (YouTube, Search, Display)

### Sütun 2 — Content Production
Reklamlar boşlukta dönmüyor — onlara malzeme lazım. Görseller, video script'leri, hook'lar, UGC creator brief'leri, organik TikTok / Reels içeriği.

### Sütun 3 — ASO (App Store Optimization)
Para vermeden organik trafik: keyword optimizasyonu, başlık/altyazı/screenshot, conversion rate, rating/review.

Bu üç sütun birbirini besler. Paid trafik gönderirsin ama listing kötüyse install almazsın (ASO). Reklamın bombasal olabilir ama content'in tükenmiş olabilir (content). Hepsi birbirine bağlı.

---

## 3. Sistem mimarisi — Ajanlar vs Skill'ler (5 dakika)

### Ajanlar (14 adet, `mt-` prefix'li)
Belirli bir uzmanlık alanında derinleşmiş "uzman kafalar". Sen bir konuda soru sorduğunda Claude doğru uzmanı **otomatik** çağırır. Örnek: "Meta'da Advantage+ kampanya nasıl açılır?" sorusu `mt-meta-ads-uzmani` ajanını tetikler.

### Skill'ler (13 adet, `mt-` prefix'li)
Hazır iş akışları. `/<skill-adi>` slash komutu ile çağrılır veya doğru durumda Claude otomatik tetikler. Örnek: `/mt-yeni-uygulama` yeni bir uygulama için tam onboarding akışı çalıştırır.

### Tetikleme nasıl?
- **Otomatik**: Sen normal Türkçe yaz, Claude `CLAUDE.md` + `TETIKLEME-SOZLESMESI.md` üstünden doğru uzmanı seçer.
- **Manuel**: `/mt-<skill>` slash komut veya `@mt-<ajan>` notasyonu.

Detay için: [HIZLI-BASVURU.md](HIZLI-BASVURU.md)

---

## 4. Hangi soru → hangi uzman? (5 dakika)

Hızlı eşleştirme:

| Aklındaki şey | Uzmanı |
|---|---|
| "X terimi ne demek?" | `mt-marketing-tutor` |
| "Meta'da hesap nasıl açılır?" | `mt-hesap-kurulum-rehberi` |
| "Hangi kanaldan başlamalıyım?" | `mt-paid-ua-uzmani` |
| "Meta / TikTok / ASA / Google reklam kur" | İlgili platform uzmanı |
| "Reklam görseli üret" | `mt-creative-yonetmeni` |
| "TikTok için video fikri" | `mt-content-uretici` |
| "Bütçemi nasıl bölmeli?" | `mt-strateji-uzmani` |
| "Kampanyalarım nasıl gidiyor?" | `mt-kampanya-analisti` |
| "Rakibim ne yapıyor?" | `mt-rakip-arastirmaci` |
| "API/token bağlamak istiyorum" | `mt-entegrasyon-kurucu` |
| "ASO denetlemek" | `mt-aso-uzmani` |

---

## 5. İlk uygulamayı ekle (5 dakika)

Sistemin asıl gücü `projects/<app-adi>/` klasörlerinde toplanır — her uygulaman için ayrı bir dosya hiyerarşisi. Eklemek için:

```
/mt-yeni-uygulama
```

Bu skill seninle birlikte uygulamanın bilgilerini toplar (isim, kategori, hedef kitle, monetization modeli), `projects/_sablon/`'dan klasörü kopyalar, ASO çerçevesi + paid stratejisi + rakip haritası + monetization planı çıkartır.

> Phase 1-2'de henüz ajan ve skill'ler yazılmadığı için bu komut şu an çalışmaz. Önce Phase 1 (ajanlar) ve Phase 2 (skill'ler) bitmeli. İlerleme için [ROADMAP.md](ROADMAP.md)'e bak.

---

## 6. İlk reklamı verirsem ne olur? (5 dakika)

Pratik akış:

1. **Hangi kanaldan başlayayım?** → Doğal soru yaz, `mt-paid-ua-uzmani` öneri verir. Indie iOS dev için tipik öneri: **ASA önce** (privacy-friendly, yüksek niyet), sonra Meta veya TikTok.

2. **Platforma hesap aç** → `/mt-hesap-ac`. `mt-hesap-kurulum-rehberi` sana adım adım hesap açtırır. Hangi mail, hangi işletme bilgisi, hangi vergi numarası, hangi kart — hepsini sırayla ister.

3. **Creative üret** → `/mt-creative-uretim`. Gemini ile reklam görselleri / video varyantları üretilir.

4. **Kampanya kur** → `/mt-yeni-kampanya`. Platform uzmanı seninle adım adım kampanya kurar.

5. **Haftalık takip** → `/mt-haftalik-rapor`. Veriyi analiz eder, "kes / devam et / scale et" der.

---

## 7. Sonraki adımlar (2 dakika)

1. **[CLAUDE.md](CLAUDE.md)** dosyasını oku — Claude'un bu klasörde nasıl davrandığı.
2. **[ROADMAP.md](ROADMAP.md)** ile mevcut Phase'e bak.
3. Phase 1'e geç: ajanları yazmaya başla. Sıra: `mt-marketing-tutor` → `mt-hesap-kurulum-rehberi` → `mt-paid-ua-uzmani` → ...

Her ajan/skill yazılırken birlikte oturup üzerinden geçeceğiz — yavaş mod.

---

## Sözlük gerektiren bir şey çıktıysa

Sistem kurulurken karşına bilmediğin terimler çıkacak. Üç seçenek:

1. Doğrudan sor: "ROAS nedir?" → `mt-marketing-tutor` tetiklenir.
2. `/mt-terim-ogren ROAS` ile spesifik bir terim öğren.
3. [SOZLUK.md](SOZLUK.md) dosyasına bak (zamanla büyür).
