# BAŞLA BURADAN — Match Face: Football Camera

> **Bu dosya ilk okunacak dosyadır.** 4 uzman (paid UA yönü, KPI+bütçe, rakip benchmark, ASO) ayrı ayrı doküman yazdı; bu dosya hepsini birleştirir, çelişkilerini denetler ve **bugünden (5 Haziran) kickoff'a (11 Haziran) kadar ne yapacağını** sıraya koyar.
>
> **Tarih:** 2026-06-05 · **Hazırlayan:** mt-marketing-orkestratoru (kıdemli orkestratör senteziyle) · **Kaynak dokümanlar:** `02-paid-ua-stratejisi.md`, `02b-kpi-ve-butce.md`, `04-rakip-analizleri/_benchmark-2026-06-05.md`, `05-aso-stratejisi.md` (+ `00-app-overview.md`, `01-hedef-kitle.md`, `03-monetization.md`)

---

## 1. Yönetici özeti (4-6 cümle)

**Match Face**, turnuva penceresine (11 Haziran – 19 Temmuz 2026) kilitli, iOS-only, bilinçli "yak-at" (tek-mevsim) bir **viral kamera uygulaması**: ARKit (Apple'ın artırılmış gerçeklik teknolojisi) ile yüze canlı milli bayrak boyası + "Who Wins" skor tahmin modu; ücretsiz/sınırsız watermark'lı (logo damgalı) foto, video ise tek-seferlik $0.99 IAP (In-App Purchase — Uygulama İçi Satın Alma) arkasında.

**En kritik tek gerçek:** Önünde sadece **6 gün** (submit + hazırlık) ve **6 hafta** (turnuva) var; ve birim ekonomisi acımasız — bir indirmenin yaşam boyu getirisi (LTV — Lifetime Value) ≈ **$0.025**, oysa iOS'ta bir kurulumun reklamla maliyeti (CPI — Cost Per Install — Kurulum Başına Maliyet) futbol pazarlarında **$1-4**. Yani "reklam ver, kurulum satın al" matematiği her $100 için ~$1-3 geri getirir (ROAS ~0.02) — yapısal, kapatılamaz bir zarar.

**Ana stratejik tez tek cümlede:** Bu app'te kazanmak para harcayarak indirme satın almak değil; **watermark'lı her paylaşımın gömülü bir reklam olduğu organik/viral döngüyü ateşlemek** ve onu yalnızca ASA (Apple Search Ads — Apple'ın App Store arama reklamı) ile yüksek-niyetli aramada ve marka savunmasında desteklemektir.

---

## 2. Tutarlılık kritiği (4 doküman birbirini tutuyor mu?)

4 dokümanı adversarial (şüpheci, çelişki arayan) gözle birlikte okudum. **Genel sonuç: çekirdek tez 4 dokümanda da %100 tutarlı** — hepsi "birim ekonomisi paid-for-IAP'yi öldürür → organik/viral asıl motor → ASA tek mantıklı paid → trademark-temiz kal" çizgisinde buluşuyor. Aşağıda tek tek denetlenen noktalar:

### ✅ Bütçe dağılımı kanal yönüyle TUTARLI
Paid UA dokümanı "ASA'ya küçük ve niyetli, organiğe enerji, Meta/TikTok'a şartlı viral-tohum, Google AC yok" dedi. Bütçe dokümanı bunun üstüne para koydu: Moderate (~$800) senaryosunda **creative $400 + ASA $300 + şartlı viral-tohum $0-100**, doğrudan-satın-alma kampanyası **sıfır**. Para ağırlığı creative + minimal ASA'da; yön ve para birbiriyle çelişmiyor. **Tutarlı.**

### ✅ KPI hedefleri 6-hafta + iOS-only + $0.025 LTV gerçeğiyle GERÇEKÇİ (fazla iyimser değil)
Bu en kritik denetimdi. Bütçe dokümanı bilinçli olarak **ROAS/gelir hedefi koymadı** (doğru karar — gelir kovalamak bu app'te yanlış puan tablosu olurdu). Bunun yerine indirme hacmi + K-factor (viral katsayı) + aktivasyon + ASA kapsamı koydu. İndirme bandı: downside ~25-50K / base ~75-150K / upside ~200-500K — ve bu, app overview'daki SOM (~50K-500K) tahminiyle ve monetization dokümanındaki gelir tablosuyla (base $1.3K-13K) **tutarlı**. Gelir "ikincil, ~$2.5K yan ürün" olarak konumlanmış, hedef değil. **Bu gerçekçi, fazla iyimser değil** — hatta bantların geniş tutulması (viral öngörülemez olduğu için) dürüst bir yaklaşım. **Tutarlı ve gerçekçi.**

> ⚠️ **Tek dikkat noktası (çelişki değil, gerilim):** Base hedef ~75-150K indirme, **birkaç yüz dolarlık** (Lean) bir harcamayla esas olarak organiğe bel bağlıyor. Bu indirme rakamlarının tamamı **organik/viral döngünün tutması şartına** bağlı. Rakip dokümanı net uyardı: "ayrı app indir" davranışı bu kategoride **tarihsel olarak hiç kanıtlanmadı** (en büyük #1 risk). Yani hedefler matematiksel olarak iyimser değil ama **bir varsayıma** (organik ateşlenir) dayanıyor. Bu bir çelişki değil — 2. hafta karar noktasının (25 Haz) tam olarak bu varsayımı test etmek için konmuş olması iyi tasarlanmış. Sadece bilinçli ol: **eğer organik 2. haftada tutmazsa downside (~25-50K) gerçek senaryodur ve bu bir başarısızlık değil, planın öngördüğü dal.**

### ✅ ASO önerileri trademark-temiz kuralıyla ÇAKIŞMIYOR
Bunu özellikle kontrol ettim çünkü en olası çatışma noktası burasıydı. ASO dokümanı event terimlerini ("world", "cup", "2026", "mundial", "copa") **yalnızca gizli keyword alanında** kullanıyor, **title/subtitle'da değil** — ve "fifa"yı bilinçli dışarıda bırakıyor. App overview'daki trademark-temiz kuralı (FIFA/World Cup markası title/subtitle'da YOK) ile **birebir uyumlu**. Önerilen yeni keyword'ler ("watermark", "filter", "facepaint") jenerik ve risksiz. Screenshot brief'i de "gerçek Snap logosu KULLANMA, jenerik damga" diyerek rakip-marka riskini de eliyor. **Çakışma yok, tam tersine kuralı koruyor.**

### ✅ Wedge (dar üstünlük) tanımı 3 dokümanda hizalı
Rakip dokümanı wedge'i "real-time çok-yüzlü AR + watermark'sız çapraz-platform export + trademark-temiz genişlik" olarak tanımladı. ASO bunu "watermark" keyword'ü + watermark-wedge screenshot'una çevirdi. Paid UA ise watermark döngüsünü "asıl edinme motoru" yaptı. Üçü aynı wedge'i farklı katmanda çalıştırıyor. **Tutarlı ve birbirini güçlendiriyor.**

### ⚠️ Eksik kalan / dikkat edilecek boşluklar
Çelişki değil ama **birleşik planda doldurulması gereken boşluklar**:

1. **Submit kararı hâlâ kullanıcı onayında ve henüz verilmemiş.** 4 dokümanın da #1 aciliyeti bu, ama hiçbiri senin yerine basamaz. Her dokümanın varsayımı "app 11 Haz'a yetişir". Onay gecikirse **tüm takvim kayar** — bu en büyük tek risk ve tamamen senin elinde.
2. **Bütçe senaryosu seçilmedi.** Bütçe dokümanı 3 senaryo (Lean ~$300 / Moderate ~$800 / Aggressive ~$2.000) sundu ve **senin seçmeni bekliyor**. Seçilene kadar haftalık para dağılımı kesinleşmez. Orkestratör önerisi: **kararsızsan Moderate (~$800)** — ama bu senin iştah kararın.
3. **Preview video'nun ham kaydı senin işin.** ASO dokümanı en büyük conversion kazancının preview video olduğunu söylüyor; ama Apple kuralı gereği gerçek app ekran kaydı gerekiyor — bunu **sen çekeceksin**, creative ajan sadece kurgulayacak. Bu, takvimde planlanması gereken bir kullanıcı-bağımlı iş.
4. **Rating prompt + pre-filter kodu developer (senin) işin.** ASO dokümanı strateji veriyor ama implementasyon app-içi kod — submit öncesi yapılmalı.

**Özet:** Dört doküman stratejik olarak tek ses; sayısal hedefler gerçekçi (iyimser değil); trademark kuralı korunuyor. Açık olan tek şey **senin vereceğin 2 karar** (submit onayı + bütçe senaryosu) ve **2 senin-bağımlı üretim** (ham video kaydı + rating kodu).

---

## 3. 6 günlük aksiyon planı (5 Haz → 11 Haz kickoff)

Strateji **ön-yüklemeli (front-loaded)**: en büyük enerji kickoff'tan ÖNCE. Her gecikme günü pik maç haftası kaçırır. Sıra **öncelik bazlı** — yukarıdan aşağı yap.

### 🔴 Bugün–Yarın (5-6 Haz) — EN ACİL, her şeyin önünde

1. **ASO P0 düzenlemelerini yap, SONRA submit et.** (Sıra önemli: keyword değişikliği submit'ten önce ucuz; sonra indexleme gecikmesi pik yakar.) Hepsi metadata, yeni build gerektirmez:
   - Keyword alanlarına **"watermark" + "filter" ailesini** işle (4 locale, ASO dokümanı Bölüm 3'teki tam stringler). en-GB örnek: `world,cup,2026,sticker,video,filter,fan,flag,paint,national,team,goal,watermark,facepaint`
   - **en-US'yi ayrı locale olarak ekle** ("soccer" öne — US #1 pazar).
   - **Promo Text doldur** (her locale): "The tournament starts now. Paint your colours, predict the score, post clean to every app. 🏆"
   - → bu ince-ayar `/mt-aso-audit` çıktısında hazır; doğrudan App Store Connect'e gir.
2. **App'i submit et (senin onayın).** Review onayı **en büyük zaman riski**. Bu beklemez. → submit hazırlığı/checklist için `00-app-overview.md` açık durum maddeleri.
3. **Rating prompt + pre-filter kodunu ekle** (developer işi — ilk export / WHO WINS / 2.-3. oturum trigger'ları; "Beğendin mi?" → Evet→native, Hayır→app-içi feedback). Submit'ten önce build'de olmalı.

### 🟠 6-8 Haz — Bütçe kararı + creative üretim başlasın

4. **Bütçe senaryonu seç** (Lean / Moderate / Aggressive). → `/mt-butce-planla` (mt-strateji-uzmani planı seçilen rakamla kesinleştirir). *Kararsızsan: Moderate ~$800.*
5. **3-5 organik tohum videosu üret** (TikTok/Reels) — rakip dokümanının işaret ettiği 3 boş açı: (a) "Snap'te yap, her yere TEMİZ at" / watermark-karşıtı, (b) "Who Wins" tahmin kavgası, (c) grup/izleme-partisi. → `/mt-creative-uretim` (mt-creative-yonetmeni).
6. **Preview video ham kaydını çek** (senin işin — gerçek app ekran kaydı, 15-20 sn, ilk 3 sn "wow" anı). Kurgu için creative ajana devredilecek.

### 🟡 7-9 Haz — ASA kurulumu (tek mantıklı paid kanal)

7. **ASA hesabı hazır mı? Değilse kur.** Bireysel Apple Developer için en kolay paid kanal. → `/mt-hesap-ac` (Apple Search Ads).
8. **ASA marka savunma kampanyası** kur ("match face" + yakın terimler, ABD+UK) — taklit/rakip senin trafiğini çalmasın. → `/mt-yeni-kampanya` (mt-apple-search-ads-uzmani).
9. **ASA generic/niyet kampanyası** kur ("world cup filter", "football camera", "flag face", "no watermark" niyeti). → `/mt-yeni-kampanya` (mt-apple-search-ads-uzmani).
10. **2 CPP** (Custom Product Page — niyet-eşleşmeli özel ürün sayfası) hazırla: "WHO WINS hook" + "no watermark wedge", ASA'ya bağlanmak için. → ASO dokümanı Bölüm 10 + mt-apple-search-ads-uzmani.

### 🟢 9-11 Haz — Isınma + doğrulama

11. **Organik tohum videolarını yayınlamaya başla** (kickoff'tan hemen önce ısınma).
12. **Screenshot 4 → 6'ya çıkar** (watermark-wedge + share/social-proof ekle) ve **preview video'yu** ekle (ham kayıt + creative kurgu). → metadata güncellemesi, yeni build gerektirmez.
13. **ASA'nın canlı olduğunu doğrula**; ilk indirmeleri ve App Store Connect günlük hacmini izlemeye başla.
14. **0. hafta checkpoint'i (10 Haz):** App submit + onay yolda + ASA kurulu + 3-5 video hazır mı? Eksik varsa bugün kapat. → `/mt-haftalik-rapor`.

> **Altın kural:** Eğer bir gün her şeyi yapamıyorsan, sıralama şu: **(1) ASO+submit > (2) creative üretim > (3) ASA kurulum > (4) organik tohum yayını.** Submit her şeyin önünde, çünkü canlı olmayan app'e hiçbir kanal trafik çekemez.

---

## 4. Sonraki adım (şimdi ne demelisin)

**Şunu yaz:** *"ASO P0 düzenlemelerini yapıp app'i submit etmeye hazırım — `/mt-aso-audit` çıktısındaki keyword + en-US + Promo Text değişikliklerini bana adım adım ver, sonra submit checklist'ini birlikte geçelim."*

> (Ya da daha kısa: *"Submit'e hazırlanalım"* veya *"Bütçe senaryosunu seçelim"* — hangisini önce halletmek istersen.)
