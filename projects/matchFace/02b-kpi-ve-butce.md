# 2026 Turnuva Penceresi — KPI Hedefleri & Bütçe Planı

**App**: Match Face: Football Camera
**Pencere**: 11 Haziran – 19 Temmuz 2026 (6 hafta) + 5–10 Haziran ön-yükleme sprint'i (0. hafta)
**Yazılma tarihi**: 2026-06-05 (bugün 5 Haziran — kickoff'a 6 gün)
**Yazan**: mt-strateji-uzmani (bütçe allocator + KPI hedef belirleyici)
**Dayandığı belge**: `02-paid-ua-stratejisi.md` (mt-paid-ua-uzmani, v1)
**Durum**: App henüz canlı değil (submit kullanıcı onayında)

---

## 0. Bu doküman ne yapar, ne yapmaz

`mt-paid-ua-uzmani` **yön** verdi: "ASA'ya küçük ve niyetli, organiğe enerji, Meta/TikTok'a şartlı viral-tohum, Google AC yok." Ben o yönün üstüne **para + ölçü** koyuyorum:

- **3 bütçe senaryosu** (Lean / Moderate / Aggressive) — sen seç, hiçbirini varsaymıyorum.
- **6 haftalık para dağılımı** — kanal yönüyle %100 tutarlı (ağırlık creative üretim + minimal ASA, doğrudan-satın-alma kampanyası YOK).
- **KPI hedefleri** — birincil olarak indirme hacmi, viral paylaşım, ASA marka kapsamı, aktivasyon; gelir ikincil.
- **Haftalık yeşil/sarı/kırmızı eşikler** — neye bakıp "iyi / dikkat / kes" diyeceğiz.

> **Kritik çerçeve**: Bu bir "gelir oyunu" değil. Bütçeyi gelir geri-getirsin diye değil, **görünür olmak + viral döngüyü ateşlemek** için harcıyoruz. Başarının ölçüsü ROAS değil; indirme hacmi, paylaşım sayısı ve organik dalganın kendi kendini beslemesi.

---

## 1. Birim ekonomisi neden bütçe şeklini belirliyor

Tek cümlede: **her indirme için $1–4 ödeyip ~$0.025 geri alıyorsun** (ROAS ~0.02). Bu yüzden para, "kurulum satın alan" kampanyalara değil, üç ucuz/verimli yere gider:

1. **Creative üretim** (en büyük pay) — viral döngünün yakıtı. Bir TikTok/Reels videosu 50K kişiye organik ulaşırsa, CAC (Customer Acquisition Cost — Müşteri Edinme Maliyeti) ≈ 0. Aynı 50K'yı paid ile almak $50K–200K tutardı. Para buraya gider çünkü **kaldıraç (leverage) en yüksek burada**.
2. **ASA (Apple Search Ads)** — minimal ama sürekli. Marka savunması (birisi "match face" arayınca taklit reklamı çıkmasın) + "world cup filter" gibi niyetli aramaları yakalama. Niyet zaten orada; biz sadece görünürlük satın alıyoruz.
3. **(Opsiyonel) Meta/TikTok viral-tohum** — sadece organik zayıf kalırsa ve pik maç haftasında, "install satın al" diye değil, güçlü bir creative'i ateşleyip paylaşım dalgası başlatmak için.

**Doğrudan-satın-alma (IAP-optimize app install) kampanyası bütçenin HİÇBİR senaryosunda yok.** Bu bilinçli.

---

## 2. ÜÇ BÜTÇE SENARYOSU — sen seç

Aşağıdaki üç senaryo **tüm 6 haftalık pencere** içindir (0. hafta sprint + 6 turnuva haftası). Hiçbiri "doğru" değil; üçü farklı iştah ve risk seviyesi. Rakamların yanındaki mantığı oku, hangisi sana uyuyorsa onu söyle — planı ona göre kesinleştireceğim.

### Senaryo karşılaştırma tablosu

| Kalem | 🟢 Lean (~$300) | 🟡 Moderate (~$800) | 🔴 Aggressive (~$2.000) |
|---|---|---|---|
| **Creative üretim** (fal.ai/Shotstack + iterasyon) | $120 | $400 | $1.100 |
| **ASA** (marka savunma + generic niyet) | $180 | $300 | $500 |
| **Meta/TikTok viral-tohum** (şartlı) | $0 | $100 (sadece tetiklenirse) | $400 (sadece tetiklenirse) |
| **TOPLAM** | **~$300** | **~$800** | **~$2.000** |
| ASA günlük tavan (ort.) | ~$5/gün | ~$8/gün | ~$13/gün |
| Creative kapsamı | ~8–12 video/görsel | ~25–35 varyant | ~60–80 varyant + premium modeller |
| Viral-tohum | Yok | 1 pik haftası, küçük | 2 pik haftası, gerçek test |

### 🟢 Lean — ~$300 ("organik kanıtla, parayı koru")

- **Mantık**: Asıl motor zaten organik (CAC~0). Bu senaryo der ki: "Önce ürünün ve watermark döngüsünün kendi kendine yürüyüp yürümediğini ücretsiz kanıtla; para sadece ASA marka savunması + bir avuç güçlü creative'e gitsin."
- **Neyi satın alıyor**: Marka aramalarında görünürlük (taklit savunması) + 8–12 kaliteli organik tohum video/görsel. Viral-tohum paid YOK.
- **Kime uygun**: Bütçe kısıtlıysa, ya da "önce bedava kanalı test edeyim, işe yararsa büyütürüm" diyorsan. **Indie default'u olarak en savunulabilir seçenek** — çünkü bu app'in tüm tezi organik.
- **Riski**: Organik beklenenden yavaş ateşlenirse, ölçeklemek için elinde paid kaldıracı az kalır (ama zaten paid kaldıracı bu app'te zayıf).

### 🟡 Moderate — ~$800 ("organik + güvenlik ağı")

- **Mantık**: Organik hâlâ #1, ama creative üretimine ciddi yatırım (daha çok varyant = daha çok viral şansı) + ASA'da biraz daha geniş niyet kapsamı + **bir** pik maç haftası için küçük viral-tohum cebinde hazır.
- **Neyi satın alıyor**: 25–35 creative varyant (A/B test edip kazananı bulma şansı çok daha yüksek), daha geniş ASA keyword kapsamı, ve organik zayıf kalırsa **tek** bir pik haftasında $100'lık tohum denemesi.
- **Kime uygun**: "Bu pencereyi ciddiye alıyorum, makul bir bütçe ayırabilirim, ama çılgınca harcamam" diyorsan. **Çoğu indie için tatlı nokta (sweet spot).**
- **Riski**: Creative üretimine para harcayıp organik yine de tutmazsa, harcanan kısmen boşa gider — ama yine de marka savunması ve öğrenme değeri kalır.

### 🔴 Aggressive — ~$2.000 ("pencereyi sonuna kadar zorla")

- **Mantık**: "Bu turnuva bir daha gelmez, pik haftaları kaçarsa kaçtı. Elimden gelen tüm görünürlüğü ve creative cephanesini kur." Creative üretiminde premium modeller (daha yüksek kalite hook'lar), geniş ASA, ve 2 ayrı pik haftasında gerçek viral-tohum testi.
- **Neyi satın alıyor**: 60–80 creative varyant + premium üretim (Veo/Kling sınıfı video), maksimum ASA niyet kapsamı, 2 pik maç haftasında $400 viral-tohum (paylaşım/lift ölçümüyle).
- **Kime uygun**: Bu app'i ciddi bir "viral marka momenti" bahsi olarak görüyorsan ve $2K'yı kaybetmeyi göze alabiliyorsan. **Üst sınır** — bunun ötesi birim ekonomisi yüzünden anlamsız.
- **Riski**: En yüksek nominal kayıp riski. Ama dikkat: burada bile para çoğunlukla creative'e (kalıcı asset + öğrenme) gidiyor, "yakılan" paid install'a değil.

> **Benim açık önerim**: Eğer kararsızsan **🟡 Moderate (~$800)** ile başla. Birim ekonomisi gerçeği göz önüne alınınca Aggressive'in marjinal faydası düşük; Lean ise pik haftalarının tek-seferlik doğasında biraz fazla temkinli. Ama bu **senin** iştah kararın — söyle, kesinleştireyim.

---

## 3. Bütçe dağılımı — 6 haftalık zaman çizelgesi (Moderate örneği)

Aşağıdaki tablo **Moderate (~$800)** senaryosu içindir; seçtiğin senaryoya göre rakamları ölçekleyeceğim. Strateji **ön-yüklemeli (front-loaded)**: en büyük creative harcaması 0. hafta + ilk turnuva haftasında, çünkü pik talep şimdi yükseliyor ve geç kalan her gün pik kaçırır.

| Hafta | Tarih | Creative | ASA | Viral-tohum | Haftalık | Odak |
|---|---|---|---|---|---|---|
| **0 (sprint)** | 5–10 Haz | $200 | $30 | $0 | $230 | Tohum içerik üret, ASA kur, submit |
| **1 (kickoff)** | 11–18 Haz | $80 | $60 | $0 | $140 | Kickoff dalgası, ASA niyet yakala |
| **2** | 19–25 Haz | $50 | $55 | $0–100 | $105–205 | Karar noktası: organik tutuyor mu? |
| **3** | 26 Haz–2 Tem | $40 | $50 | $0 | $90 | Grup sonu / nakavt başlangıcı |
| **4** | 3–9 Tem | $30 | $50 | $0 | $80 | Çeyrek/yarı final hype |
| **5** | 10–16 Tem | $0 | $40 | $0 | $40 | Final yaklaşımı, son itiş |
| **6 (sönümleme)** | 17–19 Tem | $0 | $15 | $0 | $15 | Final + 19 Tem TÜM paid kapat |
| **TOPLAM** | | **$400** | **$300** | **$0–100** | **~$700–800** | |

**Okuma notları**:
- **Creative öne yüklü**: $200'ün $400'lük creative bütçesinin yarısı 0. haftada — çünkü tohum içerik kickoff'tan ÖNCE hazır olmalı. Sonra her pik öncesi taze hook için azalan miktarlar (creative fatigue — içerik bayatlaması her 1-2 haftada bir tazeleme ister).
- **ASA sabit-ish ve sürekli**: Marka savunması turnuva boyunca asla kapanmaz; generic niyet pik haftalarında biraz yükselir. 19 Temmuz'da kapanır.
- **Viral-tohum şartlı**: Sadece 2. hafta karar noktasında "organik zayıf + bütçe var" ikisi birden doğruysa tetiklenir. Default: tetiklenmez, o $100 cepte kalır.

---

## 4. KPI HEDEFLERİ — neye bakıp başarı diyeceğiz

Bu app için klasik KPI'lar (D30 ROAS, payback period, subscribe conversion) **yanıltıcı** olur — subscription yok, long-tail yok, gelir ikincil. Onun yerine **viral kamera app'ine uygun kuzey yıldızı (north star) metrikleri** koyuyorum.

### 4.1 Birincil KPI'lar (bunlara bakacağız)

| # | KPI | Nasıl ölçülür | Neden birincil |
|---|---|---|---|
| 1 | **Toplam indirme hacmi** (6 hafta) | App Store Connect | Erişimin ham ölçüsü; her şeyin temeli |
| 2 | **Günlük indirme + maç-günü spike korelasyonu** | App Store Connect (günlük) | Talep dalgasına biniyor muyuz? |
| 3 | **Paylaşım/export sayısı** | Uygulama içi event (first_share / first_export) | Viral motorun nabzı |
| 4 | **Paylaşım başına yeni indirme (≈ K-factor)** | Paylaşım sayısı vs organik install lift | Döngü kendini besliyor mu? **En kritik tek metrik** |
| 5 | **Aktivasyon oranı** (indirme → ilk boya + ilk paylaşım) | Uygulama içi event | İndirenler değer anına ulaşıyor mu? |
| 6 | **ASA marka kapsamı + keyword başına CPI** | ASA Attribution API | Marka savunması çalışıyor + tek temiz paid sinyali |

> **K-factor (viral katsayı — bir kullanıcının ortalama kaç yeni kullanıcı getirdiği)**: K = (kullanıcı başına ortalama paylaşım) × (paylaşım başına dönüşüm oranı). **K ≥ 1 = kendi kendine büyüyen viral döngü** (her kullanıcı en az bir yeni kullanıcı getiriyor). K < 1 ama yüksek = paid/organik tohumu güçlü çoğaltıyor. Bu app'in tüm tezi bu sayıyı yükseltmek.

### 4.2 İkincil KPI (bonus, hedef değil)

| KPI | Gerçekçi beklenti | Not |
|---|---|---|
| **IAP gelir** (video unlock $0.99 × ~%3 dönüşüm) | base ~$2.5K | **Hedef değil, yan ürün.** 100K indirme × %3 × ~$0.84 net ≈ $2.5K. Bu rakamı kovalamıyoruz; indirme hacmini kovalıyoruz, gelir onun gölgesi. |

### 4.3 İndirme hacmi hedef bantları (base / upside / downside)

Brief'teki SOM (Serviceable Obtainable Market — gerçekçi ulaşılabilir pazar) ~50K–500K tahminiyle tutarlı. iOS-only + tek-mevsim + dar wedge gerçeğini hesaba katarak:

| Senaryo | 6 haftalık toplam indirme | Ne anlama gelir |
|---|---|---|
| **Downside** (kötü) | ~25K–50K | Organik ateşlenmedi; "ayrı app indir" direnci doğrulandı (brief'teki #1 risk). Wedge çalışmadı. |
| **Base** (gerçekçi) | ~75K–150K | Organik tohum tuttu, maç-günü spike'ları gerçek, watermark döngüsü dönüyor. **Başarı sayılır.** |
| **Upside** (iyi) | ~200K–500K | En az bir creative gerçekten viral oldu (K≥1 anları), bir-iki maç penceresi patladı. **Bu app için ana vurgun (home run).** |

> **Önemli**: Bu bantlar geniş çünkü viral sonuç doğası gereği öngörülemez — bir tek video tüm dağılımı değiştirebilir. Downside'a düşersek erken (2. hafta) anlarız ve harcamayı keseriz; upside'a çıkarsak organik zaten taşır, fazladan para gerekmez.

### 4.4 Diğer birincil KPI hedefleri

| KPI | Downside | Base | Upside |
|---|---|---|---|
| Aktivasyon oranı (indirme → ilk paylaşım) | < %20 | %30–45 | > %50 |
| Paylaşım başına yeni indirme (≈K) | < 0.1 | 0.2–0.5 | ≥ 0.7 (bazı günler ≥1) |
| ASA generic CPI (niyet aramaları) | > $2.50 | $1.00–2.00 | < $1.00 |
| ASA marka kapsamı (impression share) | < %50 | %70–90 | > %90 |

---

## 5. HAFTALIK CHECKPOINT'LER — yeşil / sarı / kırmızı

Her hafta sonunda şu eşiklere bakıp karar veriyoruz. **Bu app'in özel kuralı**: "kes" çoğunlukla *paid'i* kesmek demek — organik döngü ucuz olduğu için onu turnuva boyunca açık tutarız.

### 0. Hafta sonu (10 Haz) — Pre-launch sprint bitti mi?
Henüz veri yok; bu bir **hazırlık checkpoint'i**.
- 🟢 **Yeşil**: App submit edildi VE onay geldi/yolda + ASA kuruldu (marka + generic) + 3–5 tohum video hazır → kickoff'a hazırız.
- 🟡 **Sarı**: Submit edildi ama onay belirsiz, VEYA ASA yarım, VEYA < 3 video → eksiği bugün kapat.
- 🔴 **Kırmızı**: App hâlâ submit edilmedi → **#1 aciliyet, her şeyi bırak**. Onay gecikmesi pik kaçırmanın en büyük nedeni.

### 1. Hafta sonu (18 Haz) — Kickoff dalgası tuttu mu?
- 🟢 **Yeşil**: İndirmeler maç günleriyle korele spike yapıyor + aktivasyon > %30 + en az bir tohum video organik çekiş gösteriyor (paylaşımlar geliyor) → **devam, parayı koru, viral-tohum'a girme.**
- 🟡 **Sarı**: İndirme var ama spike zayıf, aktivasyon %20–30 → **creative refresh** (yeni hook, `/mt-creative-uretim`), ASA generic keyword genişlet.
- 🔴 **Kırmızı**: İndirme düz, aktivasyon < %20, paylaşım yok → wedge çalışmıyor olabilir. Creative yönünü kökten değiştir; ASA marka savunmasını koru, generic'i kıs.

### 2. Hafta sonu (25 Haz) — KARAR NOKTASI: organik kendini besliyor mu?
Bu pencerenin **en kritik checkpoint'i**. Viral-tohum tetiklenir mi burada belli olur.
- 🟢 **Yeşil**: Paylaşım başına yeni indirme ≥ 0.3 + organik install lift görünür → **organik tutuyor, viral-tohum'a GİRME**, parayı koru, sadece creative besle.
- 🟡 **Sarı**: Döngü zayıf (K ~0.1–0.3) AMA bütçe var ve creative güçlü → **tek pik haftası viral-tohum tetikle** ($100 Moderate / $0 Lean). Amaç: install satın almak değil, güçlü creative'i ateşleyip lift yaratmak. Ölç: paylaşım/lift, CPI değil.
- 🔴 **Kırmızı**: Paylaşım yok, indirme düşüyor, downside bandında (~25–50K yolunda) → **viral-tohum'a girme (para yakma)**. ASA marka savunması + minimal generic'e düş, retrospektife hazırlan.

### 3. Hafta sonu (2 Tem) — Nakavt momentum
- 🟢 **Yeşil**: Base/upside bandında, maç-günü spike'ları sürüyor → taze hook üret (`/mt-creative-uretim`), ASA açık tut, akışı koru.
- 🟡 **Sarı**: Düşüş başladı, creative bayatladı → **mutlaka yeni hook** (1-2 haftada içerik bayatlar), ASA generic'i nakavt maçlarına göre güncelle.
- 🔴 **Kırmızı**: İlgi sönüyor, organik durdu → harcamayı minimuma çek, sadece ASA marka savunması kalsın.

### 4. Hafta sonu (9 Tem) — Yarı final hype
- 🟢 **Yeşil**: Final yaklaşımı yeni spike getiriyor → son creative dalgasını hazırla (5. hafta finali için).
- 🟡 **Sarı**: Momentum yavaş → tek güçlü "final" hook'una odaklan, dağıtma.
- 🔴 **Kırmızı**: Sönmüş → creative üretimini durdur, sadece ASA bekleme modunda.

### 5. Hafta sonu (16 Tem) — Final itişi
- 🟢 **Yeşil**: Final haftası spike geliyor → son organik büyük itiş, ASA generic finalde zirvede.
- 🟡/🔴: Beklenenti düşür, 19 Tem kapanışa hazırlan.

### 6. Hafta (17–19 Tem) — Sönümleme + kapanış
- **19 Temmuz'da istisnasız TÜM paid kapat** (ASA dahil). Talep ~0'a çöküyor, her dolar boşa. Sonrası → `mt-kampanya-analisti` ile retrospektif.

---

## 6. ERKEN REVİZE TETİKLEYİCİLERİ

Ay/pencere bitmeden planı yeniden açacağımız durumlar:

- **Submit/onay gecikmesi** → her gecikme günü pik kaçırır. Onay 11 Haz'a yetişmezse, ASA ve creative kadansını kayan launch tarihine göre yeniden hizala (acil).
- **İndirme hacmi 2. hafta sonunda downside bandında (~25–50K yolunda)** → viral-tohum'u iptal et, ASA'yı minimuma çek, retrospektife geç (parayı koru).
- **Bir creative beklenmedik viral oldu (K≥1 sinyali)** → o yöne creative bütçesini kaydır, ASA generic'i o videodaki dile/temaya göre güncelle. **Upside'ı kovala.**
- **ASA generic CPI > $2.50 sürekli** → o keyword grubunu kıs, marka savunmasına yoğunlaş (niyetli ucuz trafik kalmadı demektir).
- **Bütçe senaryosu değişimi** → Lean'den Moderate'e (veya tersi) geçmek istersen, kalan haftaların dağılımını yeniden hesaplarım.

---

## 7. BAŞARI NEDİR? (tek paragraf)

Bu ucuz-bahis, tek-mevsim app için **başarı, kâr değil erişim ve momentumdur**: 11 Haziran–19 Temmuz penceresinde gerçekçi olarak **~75K–150K indirme** (base) toplamak, indirenlerin en az **%30–45'inin bir şey paylaşması** (yani watermarklı export'un feed'lere yayılıp ücretsiz reklam döngüsünü çevirmesi), ve **maç-günü spike'larının** ürünün doğal hype'ıyla korele patlaması — tüm bunları **birkaç yüz dolarlık** (Lean) ila **~$2K'lık** (Aggressive) bir harcamayla, çoğu creative üretimine giderek, sıfır doğrudan-satın-alma kampanyası yakarak yapmak. Eğer tek bir creative gerçekten tutuşur (K≥1 anları, upside ~200K–500K) ise bu bir **vurgun**; tutuşmazsa bile birkaç yüz dolarla marka savunması + organik testi yapmış, parayı korumuş oluruz. **Gelir ($2.5K civarı) güzel bir yan ürün ama asla puan tablosu değil** — bu app'te kazanmak, 19 Temmuz'da "bu turnuvada görünür olduk ve döngüyü çevirdik" diyebilmektir.

---

## 8. Sonraki adımlar

1. **Bütçe senaryosunu seç** (Lean / Moderate / Aggressive) → planı kesinleştiririm, bu dosyayı seçilen rakamlarla günceller.
2. **App'i submit et** (kullanıcı onayında) — 0. hafta #1 aciliyeti.
3. **ASA hesabı + kampanya kurulumu** → `mt-apple-search-ads-uzmani` / `/mt-hesap-ac`.
4. **Tohum creative üretimi** (3–5 video, kickoff öncesi) → `mt-creative-yonetmeni` / `/mt-creative-uretim`.
5. **1. hafta sonu (18 Haz)** → ilk haftalık rapor → `mt-kampanya-analisti` / `/mt-haftalik-rapor`.

---

## Karar değişiklik logu

- **2026-06-05 (v1)**: İlk KPI + bütçe planı yazıldı. `02-paid-ua-stratejisi.md` v1 yönünün üstüne kuruldu. 3 senaryo (Lean ~$300 / Moderate ~$800 / Aggressive ~$2.000) sunuldu, kullanıcı seçimi bekliyor. Birincil KPI = indirme hacmi + K-factor + ASA marka kapsamı + aktivasyon; gelir ikincil (base ~$2.5K). İndirme hedef bandı: downside ~25–50K / base ~75–150K / upside ~200–500K. Bütçenin ağırlığı creative üretimde, doğrudan-satın-alma kampanyası sıfır. Pencere 11 Haz–19 Tem, 19 Tem'de tüm paid kapanır. Seçilen senaryo sonrası dağılım kesinleştirilecek.
