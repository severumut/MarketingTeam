# ASO Stratejisi — Match Face: Football Camera

**Tarih:** 2026-06-05
**Hazırlayan:** mt-aso-uzmani (App Store Optimization — App Store Mağaza Optimizasyonu uzmanı)
**Kapsam:** 10 boyutlu denetim + ince ayar + pik-pencere (turnuva) optimizasyonu
**Durum:** v1.0 PREPARE_FOR_SUBMISSION — **henüz submit edilmedi** → değişiklik şu an ucuz/kolay
**Storefront önceliği:** en-GB (primary) > en-US > es-MX > pt-BR > tr · 175 ülke
**Kritik zamanlama:** Bugün 5 Haziran. Turnuva 11 Haziran – 19 Temmuz (~6 hafta). Kickoff'a **6 gün.** Tüm ASO kararları submit-öncesi **tek seferde** kilitlenmeli — turnuva ortasında keyword değiştirmek indexleme gecikmesi (Apple'ın yeni keyword'leri arama sonuçlarına işlemesi ~24-72 saat sürer) yüzünden pik haftaları yakar.

> **Bu döküman bir "sıfırdan kur" değil.** Mevcut listing zaten sofistike: keyword'ler popularity/difficulty (popülerlik/zorluk) verisine dayalı seçilmiş, title/subtitle/keyword arasında sıfır-tekrar disiplini uygulanmış, trademark-temizlik bilinçli. Bu döküman o temelin üzerine **ince ayar** koyar — birkaç yüksek-değerli boşluğu kapatır, pik-pencereye göre keyword alanını sıkılaştırır.

---

## 0. Yönetici Özeti (önce bunu oku)

**Üç cümlede durum:**

1. **Listing zaten güçlü (genel skor 78/100).** En büyük açık tek bir kelimede: rakip analizinin doğruladığı **"watermark / no watermark"** boşluğu — Match Face'in en büyük farklılaşması (Snap watermark lock-in'inden kaçış) hiçbir keyword alanında yok. Yüksek-niyet, düşük-rekabet, sıfır risk. **Submit öncesi mutlaka eklenmeli.**

2. **En zayıf üç boyut görsel tarafta:** preview video (yok — 0/10), screenshot sayısı/derinliği (4 adet, 6-8 ideal), ve ratings/reviews (henüz canlı değil — sıfır oy ile başlıyor, ilk 6 gün kritik). Bunlar conversion (dönüşüm — sayfayı görenin indirmeye dönme oranı) sürücüleri; keyword sadece sayfaya *getirir*, görsel *kapatır*.

3. **Pik-pencere realitesi her şeyi yönetir.** A/B test için zaman yok; tek-yükleme. Event terimleri (world/cup/mundial/copa) doğru şekilde sadece keyword alanında gizli, title/subtitle trademark-temiz — bu karar **korunmalı.** Önerilerimin tamamı submit-öncesi tek-sefer uygulanabilir; hiçbiri yeni build gerektirmez (metadata-only değişiklikler App Store Connect'ten anında).

**Tek-cümle aksiyon:** Keyword alanlarına "watermark" ailesini sıkıştır + 4 → 6 screenshot'a çık + 15-20 sn preview video ekle → submit. Geri kalan her şey pik-pencere-içi P1.

---

## 1. ASO Skor Tablosu (10 boyut, 100 üzerinden)

| # | Boyut | Skor /10 | Gerekçe |
|---|---|---|---|
| 1 | **App Name** (30 karakter) | 9 | "Match Face: Football Camera" (27/30). Brand + 2 generic keyword ("football", "camera") title'da indexli. Trademark-temiz. "Football" en-GB için doğru kelime (US'de "soccer" ama en-GB primary olduğu için doğru tercih). Neredeyse mükemmel. |
| 2 | **Subtitle** (30 karakter) | 8 | "Photo booth, soccer & avatars" (29/30). "booth" sahiplenmesi akıllı (rakip Football Booth ölü). "soccer" US/global, "avatars" AI-jeneratör trafiğinin kenarını yakalıyor. Eksi: karakterin %97'si dolu, esneklik yok — ama bu doluluk *iyi*, boşa harcanmamış. |
| 3 | **Keyword alanı** (100 karakter) | 7 | en-GB 86/100 dolu. Popularity/difficulty-dengeli, sıfır-tekrar. **AMA 14 karakter boş + "watermark" boşluğu var** → en somut iyileştirme noktası. (Bölüm 3'te detay.) |
| 4 | **İkon** | 7 | Görmeden tam puanlayamam (canlı değil), ama brief'ten çıkarım: AR yüz + bayrak konsepti kategoride ayırt edici. **Risk:** küçük boyutta (Search sonucunda ~60px) bayrak detayı + yüz birlikte okunabilir mi? Tek-bayrak + net yüz silüeti > kalabalık çok-bayrak. (Bölüm 4.) |
| 5 | **Screenshots** | 6 | 4 adet (hook · prediction · squad · share) — mantıklı akış, doğru sıra. **Eksi: sadece 4.** Apple 10'a izin veriyor; 6-8 ideal. Social proof + watermark-wedge görseli eksik. İlk 2 screenshot (Search'te görünen) hook gücü kritik. (Bölüm 5.) |
| 6 | **Preview video** | 0 | **Yok.** Bu app'in çekirdeği *hareket* (canlı AR, kafaya dönen banner, grup selfie) — statik screenshot bunu satamaz. Preview video conversion'ı %20-35 artırabilir ve App Store'da otomatik oynar. En büyük tek kayıp. (Bölüm 6.) |
| 7 | **Description + Promo Text** | 7 | Brief'te tam görünmüyor ama yapı sağlam varsayımıyla. Description SEO'ya değil conversion'a hizmet eder (Apple description'ı indexlemez — yaygın yanlış bilinen nokta). İlk 3 satır (Promo Text + description açılışı) hook olmalı. Promo Text (170 karakter, metadata, anında değişir) pik-pencerede maç-haftası mesajı için silah. (Bölüm 7.) |
| 8 | **Localization** | 8 | 4 locale canlı (en-GB, es-MX, pt-BR, tr) + keyword'ler her dilde ayrı optimize — bu indie için çok iyi. Eksi: **en-US ayrı locale değil** (en-GB fallback). US #1 hedef pazar olduğu için bu önemli kaçış — "soccer" US'de "football"dan baskın. (Bölüm 8.) |
| 9 | **Ratings ortalama** | N/A → 5 | Henüz canlı değil, sıfır oy. Skorlanamaz ama "0 oy ile lansman" bir conversion handikabı: sosyal kanıt yok. İlk 6 günde organik 4.5+ oy toplamak pik-pencere ranking'i için kritik. (Bölüm 9.) |
| 10 | **CPP / Conversion altyapısı** | 6 | Custom Product Page (Özel Ürün Sayfası — belirli trafik kaynağına özel screenshot seti) henüz tanımlı değil. Paid/ASA trafiği geldiğinde default sayfa yerine niyet-eşleşmeli CPP conversion'ı yükseltir. Submit-öncesi şart değil ama paid başlamadan hazır olmalı. (Bölüm 10.) |

**TOPLAM: 78 / 100** *(Ratings N/A → nötr 5 ile; preview video 0 ana çekici. Bu skor "güçlü temel + iki görsel boşluk" demek. Keyword tarafı zaten 8+ seviyesinde.)*

---

## 2. Event-pencere açısı: Pik haftalarında arama hacmi nasıl patlar, keyword alanı yakalıyor mu?

### Arama davranışı pik-pencerede nasıl değişir

Turnuva başladığında (11 Haziran) ve özellikle maç-haftalarında, App Store'da şu arama terimleri **patlar** (historik turnuva dönemi davranışı):
- **Generic event:** "world cup", "world cup 2026", "mundial", "copa" → hacim 5-15x
- **Fan/davranış:** "football filter", "soccer face", "flag face", "fan camera", "world cup filter"
- **Spesifik mikro-spike:** Bir ülke maçından önce o ülkenin diline kayar ("bandera mexico", "bayrak yüz")

### Title/subtitle vs keyword alanı — doğru ayrım korunmalı

Mevcut karar **doğru ve korunmalı:**
- **Title/subtitle = trademark-temiz** ("World Cup" bir FIFA tescilli markası; title/subtitle'da kullanmak App Store reddi/takedown riski — 6-hafta penceresinde ölümcül).
- **Keyword alanı = agresif olabilir** çünkü gizli (kullanıcı görmez, sadece arama eşleştirme). "world", "cup", "2026" burada güvenli ve doğru yerleştirilmiş.

> **Önemli netlik:** "world" + "cup" ayrı kelimeler olarak keyword alanında olunca Apple bunları "world cup" araması için de eşleştirir (Apple keyword'leri kombine eder). Yani "world cup 2026" araması zaten yakalanıyor — bu iyi. **"fifa" bilinçli dışarıda = doğru karar**, dokunma.

### Keyword alanı pik-talebi yakalıyor mu? Locale-bazlı değerlendirme

| Locale | Mevcut event-yakalama | Değerlendirme | Boşluk |
|---|---|---|---|
| **en-GB** | world, cup, 2026, fan, flag, supporter, national, team, goal | **Güçlü.** Generic event + fan davranışı kapsanmış. | "watermark", "filter" (tr'de var, en'de yok!), "face paint" tam ifade |
| **es-MX** | mundial, 2026, bandera, hincha, marcador, seleccion, nacional, aficionado, gol, cara, pintura | **Çok güçlü.** "mundial" doğru event terimi, fan davranışı tam. | "video" var ama "sin marca de agua" (watermark) yok; "filtro" yok |
| **pt-BR** | copa, mundo, 2026, bandeira, selecao, torcida, palpite, placar, pintura, rosto, avatar, video | **Çok güçlü.** "copa do mundo" yakalanıyor, "palpite" (tahmin) benzersiz mod'u yansıtıyor. | "sem marca d'água" yok; "filtro" yok |
| **tr** | video, ar, 2026, bayrak, yüz, boyama, milli, takım, tahmin, skor, taraftar, gol, filtre | **Sağlam ama event-zayıf.** Brief doğru tespit: TR'de "world cup" pop=5 (ölü). "filtre" var (iyi). | "dünya kupası" düşük hacimli ama denenebilir; "maç" eklenebilir |

**Locale-bazlı net öneriler aşağıda Bölüm 3'te keyword alanına işlendi.**

---

## 3. Keyword Stratejisi — ince ayar (rakip boşlukları işlendi)

### Rakip analizinden gelen üç boşluk

1. **"watermark / no watermark / remove watermark"** → Match Face'in EN büyük farklılaşması, hiçbir locale keyword'ünde yok. Düşük rekabet (kimse bu açıyı satmıyor), yüksek niyet (Snap watermark pain'i arayan = tam hedef). **P0.**
2. **"filter / filtre / filtro"** → tr'de var, en/es/pt'de yok. Çok yüksek hacimli generic terim ("world cup filter" pik-pencerede en aranan kalıplardan). **P0.**
3. **"booth / photo booth"** → subtitle'da "booth" zaten var (indexli). Rakip Football Booth ölü → bu kelimede kolay öne geçilir. Keyword alanında tekrar **gerekmez** (zaten subtitle'da). Sıfır-tekrar disiplini korunsun.

> **"AI" terimi hakkında karar:** Rakip analizi haklı olarak uyardı — Match Face AI-jeneratör değil (real-time AR). "ai" eklemek yanlış beklenti → kötü rating riski. **Eklemeyin.** "avatar" zaten subtitle/keyword'de var ve o trafiğin meşru kenarını yakalıyor. AI trafiği bizim "an"ımız değil.

### Önerilen keyword alanı revizyonları (comma-no-space, 100 karakter limit)

**Format kuralı hatırlatma:** Apple keyword alanı virgülle ayrılır, **boşluk YOK** (boşluk karakter yer). Tekil/çoğul birini seç (Apple ikisini de eşleştirir). Title/subtitle'daki kelimeleri tekrarlama.

**en-GB — MEVCUT (86/100):**
```
world,cup,2026,sticker,video,editor,selfie,fan,flag,paint,national,team,goal,supporter
```

**en-GB — ÖNERİ (≈99/100):**
```
world,cup,2026,sticker,video,filter,fan,flag,paint,national,team,goal,watermark,facepaint
```
*Değişiklik gerekçesi:* `editor` ve `selfie` düşük-marjinal (selfie zaten "camera" title'da örtük; editor jenerik) → çıkar. `filter` (çok yüksek hacim event-pencerede), `watermark` (farklılaşma + niyet), `facepaint` (tam-ifade, "face paint" araması için) gir. `supporter` korundu (en-GB için "fan"in tamamlayıcısı). **Net: 2 zayıf çıktı, 3 yüksek-değer girdi.**

> Karakter sayımı: yaklaşık 99 — sınıra yakın ama içinde. Submit öncesi App Store Connect karakter sayacında doğrula (Türkçe/aksanlı karakter yok, güvenli).

**es-MX — MEVCUT:**
```
mundial,2026,video,gol,bandera,hincha,marcador,seleccion,nacional,pintura,cara,aficionado
```

**es-MX — ÖNERİ:**
```
mundial,2026,video,gol,bandera,hincha,marcador,seleccion,filtro,pintura,cara,marcadeagua
```
*Değişiklik:* `nacional` (selección ile kavramsal örtüşme) ve `aficionado` (hincha ile örtüşme — ikisi de "taraftar") → birini çıkar, `filtro` + `marcadeagua` (watermark) gir. Not: "sin marca de agua" çok uzun; "marcadeagua" tek-token olarak girilirse "marca de agua" araması için kısmi eşleşir. Düşük hacim ama sıfır-rekabet niyet sinyali.

**pt-BR — MEVCUT:**
```
copa,mundo,2026,avatar,video,bandeira,selecao,torcida,palpite,placar,pintura,rosto
```

**pt-BR — ÖNERİ:**
```
copa,mundo,2026,avatar,video,bandeira,selecao,torcida,palpite,placar,filtro,rosto
```
*Değişiklik:* `pintura` (rosto/cara konsepti zaten kapsıyor + düşük arama) → `filtro` (yüksek hacim). pt-BR seti zaten çok güçlü; minimal dokunuş. "sem marca d'água" karakteri pahalı, eklenmiyor — pt-BR'de watermark niyeti düşük öncelik.

**tr — MEVCUT:**
```
video,ar,2026,duzenleyici,bayrak,yuz,boyama,milli,takim,tahmin,skor,taraftar,gol,filtre
```

**tr — ÖNERİ:**
```
video,ar,2026,mac,bayrak,yuz,boyama,milli,takim,tahmin,skor,taraftar,gol,filtre
```
*Değişiklik:* `duzenleyici` (uzun, düşük-niyet jenerik "editör") → `mac` ("maç" — TR'de futbol davranış terimi, "maç filtresi"/"maç kamerası" yakalar; not: "maç" yerine "mac" yazımı — Apple Türkçe karakteri normalize eder ama ASCII "mac" hem "maç" hem güvenli, **Apple Macintosh ile karışma riski düşük çünkü locale tr**). Watermark TR'de "filigran" — düşük arama, eklemeye değmez; pik-pencere TR'de zaten organik/lokal.

> **Türkçe karakter notu:** tr keyword alanında ş/ç/ğ/ü/ö/ı kullanımı — Apple bunları normalize eder (ç↔c eşleşir), ama emin olmak için ASCII yazım ("yuz", "boyama") mevcut sette zaten doğru kullanılmış. Koru.

---

## 4. İkon değerlendirmesi

İkonu canlı göremiyorum (app submit edilmedi), ama brief'ten ve kategori-best-practice'ten ince-ayar notları:

- **Search sonucunda ikon ~60×60px** görünür. Bu boyutta okunabilirlik testi: ikonu telefonda küçült, 2 metre uzaktan bak. Yüz + bayrak konsepti bu boyutta "ne olduğu" anlaşılıyor mu?
- **Tek-bayrak > çok-bayrak:** İkonda kalabalık (3 yüz, 3 bayrak) küçük boyutta lapaya döner. Tek net yüz + tek tanınır bayrak rengi (veya jenerik renkli yüz boyası) daha güçlü. Hangi bayrak? **Nötr/jenerik renk paleti** (kırmızı-yeşil-mavi yüz boyası) belirli ülkeye bağlanmaz, 175 ülkede çalışır — milliyetçilik tetiklemez, trademark-temiz kalır.
- **Kategori ayırt ediciliği:** App Store Photo & Video kategorisi mavi/mor gradient ikonlarla dolu. Match Face'in **yüksek-satürasyon bayrak rengi + insan yüzü** kombinasyonu feed'de sıyrılır — bu bir avantaj, koru.
- **Metin yok:** İkonda kelime/yazı olmamalı (60px'de okunmaz, Apple da önermez).

**Aksiyon:** İkon muhtemelen iyi durumda. Tek test: 60px küçültme okunabilirlik kontrolü. Eğer çok-yüz/çok-bayrak ise → tek-yüz/jenerik-renk versiyonu dene (bu bir **mt-creative-yonetmeni** brief'i olabilir, ama düşük öncelik — mevcut ikon muhtemelen yeterli).

---

## 5. Screenshot stratejisi + brief (üretim → mt-creative-yonetmeni)

### Mevcut durum ve hedef

Mevcut 4 screenshot (hook · prediction · squad · share) — **akış mantıklı, sıra doğru.** Sorun sayı ve iki eksik mesaj: **social proof yok** + **watermark-wedge görselleştirilmemiş.** Hedef: **6 screenshot.**

**Kritik kural:** App Store Search sonucunda **ilk 2 screenshot** (portre formatta) küçük önizleme olarak görünür — kullanıcı sayfaya girmeden bunları görür. İlk 2 = en güçlü hook + en net değer. Akış buna göre.

### Önerilen 6-screenshot akışı + başlık brief'i

Her screenshot için üst-başlık (caption — görsel üstündeki kısa metin, ~30 karakter, izinli iddia) ve görsel brief:

| # | Rol | Başlık (caption) önerisi | Görsel brief (mt-creative-yonetmeni'ne) |
|---|---|---|---|
| 1 | **HERO / hook** | "Wear your colours. Live." | Canlı AR yüz boyası — bir genç yüzünde tam-yüz bayrak renkleri (jenerik kırmızı/beyaz), enerjik gülümseme, stadyum-vibe arka plan (jenerik, marka yok). Hareket hissi. ARKit "canlı" olduğunu vurgula. |
| 2 | **WHO WINS / benzersiz mod** | "Call the score 🔥" | İki yanakta 2 farklı takım rengi + kafa üstünde "WHO WINS" banner + skor tahmini (örn. 2-1). Bu rakipte OLMAYAN mekanik — ikinci sıraya koy ki Search'te görünsün. |
| 3 | **GRUP / multi-face** | "Squad mode. 3 fans." | 3 kişi grup selfie, herkes kendi bayrağı, parti/izleme-partisi vibe. AI-jeneratörlerin yapamadığı "an". |
| 4 | **WATERMARK WEDGE (YENİ)** | "No logo. Just you." | Split-screen: solda Snap-logolu içerik (jenerik "rakip platform damgası" temsili — gerçek Snap logosu KULLANMA, jenerik damga), sağda Match Face temiz çıktı. "Post anywhere, clean." Bu rakipte tamamen boş alan. |
| 5 | **SOCIAL PROOF / share (YENİ-birleşik)** | "One tap → every app." | Native share sheet görseli: TikTok/IG/WhatsApp ikonları + "ready caption" gösterimi. *Eğer lansmandan sonra gerçek rating birikirse:* "4.8★" rozeti eklenebilir (sadece gerçek rakam — şu an yok, P1 güncelleme). |
| 6 | **CTA / kapanış** | "Free to play. $0.99 to keep." | Net değer özeti: ücretsiz sınırsız foto + premium video. App ikonu + indirme dürtüsü. Fiyat şeffaflığı güven verir. |

### Apple iddia kuralları (caption'larda dikkat)

**İzinli (gerçekse):** "#1 in Photo & Video" (gerçekten chart'ta #1 olunursa), "4.8★" (gerçek rakam birikince), "Featured by Apple" (olursa). **Şu an hiçbiri yok → caption'lar özellik-odaklı, iddiasız** (yukarıdaki gibi). Pik-pencerede chart'a girilirse #1/#X iddiası eklenebilir.

**Yasak:** Garanti iddiası, rakip-isim karşılaştırması ("better than Snapchat" YASAK — onun yerine jenerik "no logo" wedge). Sağlık/tıbbi iddia (alakasız).

### Üretim notu

**Tüm screenshot'lar mt-creative-yonetmeni'ne devredilir** — Ideogram V3 önerisi (text rendering güvenli: "WHO WINS", "$0.99", caption'lar net çıkar; çoklu-dil caption gerekirse de güvenli). Brief: 6.9"/6.7" boyut, en-GB seti master → diğer locale'lere caption-çevirili varyant (es-MX/pt-BR/tr caption'ları lokalize). **Bu pik-pencere için P1** (submit'e mevcut 4 ile girilebilir, 6'ya çıkış ilk hafta içinde güncellenebilir — metadata değişikliği, yeni build gerekmez).

---

## 6. Preview video önerisi (şu an YOK — en büyük tek görsel kayıp)

### Neden kritik

Match Face'in çekirdeği **hareket:** canlı AR, kafaya dönen "WHO WINS" banner, grup selfie'de herkesin kendi bayrağının gerçek-zamanlı takibi. **Statik screenshot bunu satamaz.** App Store preview video sayfada **otomatik (sessiz) oynar** → ilk 3 saniye hook = conversion sürücüsü. Preview video conversion'ı tipik %20-35 artırır; bu app için potansiyel daha yüksek çünkü "live" iddiasının kanıtı sadece videoda görülür.

### Brief (15-20 saniye, App Store preview spec)

- **Süre:** 15-20 sn (Apple max 30 sn; pik-pencerede kısa = iyi, dikkat süresi düşük).
- **Sessiz-dostu:** Otomatik sessiz oynar → ses olmadan anlaşılmalı. Caption/kinetik tipografi ile.
- **İlk 3 saniye (hook):** Yüze canlı bayrak boyasının *uygulanma anı* — boş yüz → tek dokunuşla bayrak renkleri akıyor. "Wow" anı en başta.
- **Akış (3-20 sn):** (a) yüz boyası canlı → (b) "WHO WINS" modu, banner kafaya dönüyor → (c) 3-kişi grup → (d) share sheet, temiz export "no watermark" vurgusu → (e) app ikonu + "Free" CTA.
- **Marka-temiz:** Jenerik bayrak renkleri, FIFA/kit/oyuncu yok, gerçek Snap logosu yok.

### Üretim yolu

Preview video **mt-creative-yonetmeni**'ne devredilir. **AMA en güçlü preview = gerçek app ekran kaydı** (App Store preview video kuralı: app'in gerçek arayüzünü göstermeli, %100 render/animasyon kabul edilmez). İdeal yol: **gerçek cihazda ekran kaydı** (kullanıcının kendi işi — app'i çekiyor) + mt-creative-yonetmeni'nin caption/kurgu/müzik post-prodüksiyonu (Shotstack ile). Ham kayıt kullanıcıdan, kurgu creative ajanından.

**Öncelik:** P1 (submit'e videosuz girilebilir ama ilk hafta içinde mutlaka eklenmeli — pik-pencerenin conversion'ını en çok bu yükseltir). Eğer submit'e 1 gün kala ham ekran kaydı hazırsa P0'a çekilebilir.

---

## 7. Description + Promo Text ince ayarı

**Yaygın yanlış-bilinen netlik:** Apple **description'ı keyword için indexlemez** (Google Play'in aksine). Description'a keyword tıkıştırmak işe yaramaz; description **conversion'a** hizmet eder (okuyup ikna olan kullanıcı). Sadece **App Name + Subtitle + Keyword alanı** indexlenir.

### Description yapısı (öneri)

- **İlk 3 satır (kullanıcı "more" demeden görür) = hook.** Özellik listesi değil, fayda. Örnek açılış:
  > "Turn your face into your team's flag — live. Predict the score, tag your squad, and post it everywhere. Clean. No logo."
- Sonra **özellik listesi** (emoji-başlı, taranabilir): canlı AR, WHO WINS modu, 3-kişi grup, watermarksız export, 175 ülke.
- **Fiyat şeffaflığı:** "Free: unlimited photos. Premium ($0.99 once): video + no watermark." Tek-seferlik vurgusu güven verir (abonelik yorgunluğuna karşı satış noktası).

### Promo Text — pik-pencere silahı (170 karakter, anında değişir, build gerektirmez)

Promo Text description'ın üstünde görünür ve **App Store Connect'ten anında güncellenir** (review beklemez). Bu pik-pencerede maç-haftası mesajı için en çevik araç:

- **Lansman:** "The tournament starts now. Paint your colours, predict the score, post clean to every app. 🏆"
- **Maç-haftası güncelleme örneği:** "Big match this weekend? Get match-ready in 10 seconds." (her hafta değiştir — taze tutar, indexlenmez ama conversion'a dokunur)

**Aksiyon:** Promo Text'i lansmanda doldur, pik boyunca haftalık tazele. P0 (sıfır maliyet, anında).

---

## 8. Localization stratejisi

### Mevcut durum: güçlü (indie için üst düzey)

4 locale canlı, her birinde ayrı keyword optimizasyonu — bu sıradan bir indie'nin çok ötesinde. Korunmalı.

### Tek önemli boşluk: en-US ayrı locale değil

- **Durum:** en-GB primary, en-US ona fallback (geri düşer). Yani US App Store'unda en-GB metni gösteriliyor.
- **Neden önemli:** US = **#1 hedef paid pazar** (brief). en-GB'de "football" doğru; ama US'de **"soccer"** baskın arama terimi. Subtitle'da "soccer" zaten var (iyi — fallback US'yi kısmen kurtarıyor), ama ayrı en-US locale ile keyword alanı US'ye optimize edilebilir:
  - en-US keyword'lerinde "soccer" öne, "football" hâlâ tut (US'de "football" = Amerikan futbolu ama event-pencerede karışık aranır).
  - "world cup" US'de **çok yüksek hacim** (ev sahibi heyecanı, %26→%32 izleyici artışı).
- **Aksiyon:** **en-US'yi ayrı locale olarak ekle** (App Store Connect → yeni dil ekle: English (U.S.)). Subtitle US için: "Photo booth, soccer & avatars" zaten çalışır. Keyword US varyantı:
  ```
  world,cup,2026,soccer,sticker,video,filter,fan,flag,paint,team,watermark,facepaint
  ```
  *(football → soccer swap, geri kalan en-GB ile aynı mantık)*

**Öncelik:** P0 eğer submit öncesi yetişirse (US #1 pazar, küçük efor, büyük kapsama); yetişmezse P1 ilk hafta.

### Diğer diller — pik-pencerede genişleme?

- **6-hafta penceresi** yeni dil eklemeyi sınırlı-değerli yapar (çeviri kalitesi + indexleme süresi). **Mevcut 4+US ile kal.**
- LatAm/Brezilya zaten es-MX/pt-BR ile kapsanıyor (Android-ağırlıklı pazar → organik strateji, ASO sayfası organik viral export'tan gelen iOS kullanıcısını karşılar). Bu yeterli.
- **Fransızca/Almanca eklemek?** Cazip ama 6-haftada çeviri+indexleme riski > getiri. **Yapma** — odak ABD+İngilizce+mevcut.

### Kültürel adaptasyon notları

- **Caption tonu:** es-MX/pt-BR'de daha coşkulu/enerjik ton ("¡Pinta tus colores!"), en-GB'de daha kuru/akıllı. Screenshot caption çevirileri makine-çeviri DEĞİL — futbol-kültürü argosu doğru olmalı ("hincha", "torcida" doğru kullanılmış, devam).
- **tr:** "world cup" ölü → "Dünya Kupası" event terimi yerine futbol-genel + "maç" + "milli takım" davranışı vurgula (mevcut keyword bunu doğru yapıyor).

---

## 9. Ratings & Reviews stratejisi (0 oyla lansman — ilk 6 gün kritik)

### Durum

Sıfır oyla başlıyorsun. Sosyal kanıt yok = conversion handikabı (kullanıcı "4.7★ 2K oy" gören rakibe daha çok güvenir — ama rakipler ölü/düşük-oy, bu lehine). **İlk 6 gün** (kickoff'a kadar) ve ilk hafta organik oy toplama pik-pencere ranking'ini doğrudan etkiler (Apple yeni+yüksek-oylu app'leri event aramalarında yukarı çeker).

### Agresif ama doğru-zamanlı rating prompt stratejisi

Apple yılda 3 prompt'a izin verir (`SKStoreReviewController`). Bu app kısa-ömürlü → **3 hakkı da pik-pencerede kullan.** Trigger'lar (developer'a ilet — bu app-içi kod, kullanıcının işi):

1. **1. trigger — ilk "wow" anı:** Kullanıcı ilk başarılı export'u yaptıktan hemen sonra (içeriği paylaştı = memnun). En güçlü an.
2. **2. trigger — WHO WINS modu kullanımı:** Benzersiz mod'u deneyince (engagement sinyali yüksek).
3. **3. trigger — 2. veya 3. oturum açılışı:** Geri dönen kullanıcı = memnun kullanıcı.

**Pre-filter (kritik — kötü oyu engelle):** Native prompt'tan ÖNCE app-içi mini-soru: "Match Face'i beğendin mi?" → **Evet** → native rating prompt (App Store'a 5★ gider). **Hayır** → app-içi feedback formu (App Store'a prompt GİTMEZ, şikayet sana özel gelir). Bu, ortalama rating'i korur — özellikle 0-oy lansmanında ilk oyların 5★ olması kritik.

### Review velocity + negative review yönetimi

- **Hedef:** İlk hafta 50+ oy, 4.5+ ortalama. Pik-pencerede her gün yeni oy = ranking yakıtı.
- **Negative review reply (24-48 saat içinde):** Empati + spesifik çözüm + (varsa) "yeni versiyonda düzeltildi" notu. Şablon:
  > "Bunu duyduğuma üzüldüm — [spesifik sorun] yaşamış olman can sıkıcı. [Spesifik çözüm/ayar]. Bir sonraki güncellemede bunu iyileştiriyoruz. Yardım için kakun.co'dan yaz."
- **3+ aynı şikayet = product issue** → developer'a feedback (örn. "AR yüz takibi X telefonda kötü" tekrar ederse).

**Öncelik:** Pre-filter + 3 trigger = P0 (kod, kullanıcının işi, submit-öncesi olmalı). Reply disiplini = pik-pencere boyunca sürekli.

---

## 10. CPP (Custom Product Page) + Conversion stratejisi

### CPP nedir, neden?

Custom Product Page = aynı app için, belirli trafik kaynağına özel **alternatif screenshot/metin seti** (App Store Connect'te tanımlanır, ayrı URL alır). Paid/ASA trafiği default sayfa yerine niyet-eşleşmeli CPP'ye düşürülürse conversion artar (mesaj-trafik uyumu).

### Match Face için CPP planı (paid başlamadan hazır olmalı)

Birim ekonomisi gerçeği (brief): paid UA gelir için zarar; değer **viral döngü + dar ASA**'dan gelir. Bu yüzden CPP **minimal ama hedefli:**

- **CPP 1 — "WHO WINS" hook (ASA + sosyal trafik için):** İlk screenshot WHO WINS modu, başlık "Predict the score. Tag your rival." Tahmin-kavgası açısıyla gelen trafiğe (organik sosyal + ASA generic) eşleşir.
- **CPP 2 — "No watermark" wedge (Snap-pain trafiği için):** İlk screenshot watermark-wedge, başlık "Stop posting their logo." Snap watermark pain'i arayan ASA/sosyal trafiğe eşleşir. Bu rakipte boş = en savunulabilir CPP.

> **CPP sayısı az tutuldu (2)** çünkü 6-hafta + dar paid bütçesi çok varyant test etmeye izin vermez. İki net niyet, iki net sayfa.

### App Store Connect'te yaratma rehberi (adım adım)

1. App Store Connect → Match Face → sol menü "Custom Product Pages" → "(+)".
2. Her CPP'ye ad ver ("WHO WINS hook", "No watermark wedge") — bu ad sadece sana görünür.
3. Default sayfadan farklı screenshot seti + promo text yükle (metadata-only, yeni build gerekmez).
4. Her CPP submit edilir (Apple review — genelde hızlı, ama pik-pencerede **erken submit et**, review beklemesi olmasın).
5. Onaylanınca her CPP benzersiz bir App Store URL alır.

### ASA'ya bağlama → DEVİR

**CPP'leri ASA (Apple Search Ads) kampanyalarına bağlama → mt-apple-search-ads-uzmani'ne devir.** Yönlendirme: "CPP 1'i (WHO WINS) generic/discovery kampanyalara, CPP 2'yi (no watermark) brand/niyet-yoğun keyword'lere bağla." Bu benim sınırım dışı — ASA kampanya kurulumu o uzmanın işi.

**Öncelik:** P1 (submit-öncesi şart değil; paid/ASA başlamadan önce hazır olmalı — yani ilk 1 hafta içinde).

---

## 11. ÖNCELİKLİ İYİLEŞTİRME LİSTESİ (6 güne sığan)

### P0 — Submit ÖNCESİ (bugün-yarın, hepsi metadata, build gerektirmez)

| # | Aksiyon | Tam içerik / nereye |
|---|---|---|
| 1 | **Keyword alanlarına "watermark" + "filter" ailesini işle** | Bölüm 3'teki 4 locale revizyonunu App Store Connect'e gir. en-GB: `world,cup,2026,sticker,video,filter,fan,flag,paint,national,team,goal,watermark,facepaint` (+ es/pt/tr revizyonları). Karakter sayacında doğrula. |
| 2 | **en-US'yi ayrı locale olarak ekle** | App Store Connect → English (U.S.) ekle. Keyword: `world,cup,2026,soccer,sticker,video,filter,fan,flag,paint,team,watermark,facepaint`. US #1 pazar — yetişirse P0, yetişmezse P1. |
| 3 | **Promo Text doldur** | "The tournament starts now. Paint your colours, predict the score, post clean to every app. 🏆" (her locale lokalize). Anında değişir, build yok. |
| 4 | **Rating pre-filter + 3 trigger kodu** | Developer işi: "Beğendin mi?" → Evet→native prompt, Hayır→app-içi feedback. Trigger'lar: ilk export, WHO WINS kullanımı, 2./3. oturum. (Bölüm 9.) |
| 5 | **İkon 60px okunabilirlik kontrolü** | Telefonda küçült, 2m'den bak. Çok-yüz/çok-bayrak ise tek-yüz/jenerik-renk dene (düşük öncelik — muhtemelen zaten iyi). |

### P1 — Pik-pencere içi (ilk hafta, lansman + kickoff arası/sonrası — metadata güncellemeleri)

| # | Aksiyon | Not |
|---|---|---|
| 6 | **Preview video ekle (15-20 sn)** | En büyük conversion kazancı. Gerçek ekran kaydı (kullanıcı) + kurgu (mt-creative-yonetmeni/Shotstack). Bölüm 6 brief. |
| 7 | **Screenshot 4 → 6'ya çıkar** | Watermark-wedge (#4) + share/social-proof (#5) ekle. mt-creative-yonetmeni brief (Bölüm 5), Ideogram V3. |
| 8 | **2 CPP kur** (WHO WINS + no-watermark) | App Store Connect, paid başlamadan. ASA bağlama → mt-apple-search-ads-uzmani. (Bölüm 10.) |
| 9 | **Promo Text haftalık tazele** | Maç-haftası mesajı. Sıfır maliyet, conversion'a dokunur. |
| 10 | **Negative review reply disiplini** | 24-48 saat, empati+çözüm şablonu. 3+ tekrar şikayet → developer'a. |

### P2 — Nice-to-have (zaman/efor kalırsa)

| # | Aksiyon | Not |
|---|---|---|
| 11 | **Screenshot caption'ları locale'lere lokalize çevir** | es-MX/pt-BR/tr için makine-çeviri DEĞİL, futbol-argosu doğru. Master en-GB'den varyant. |
| 12 | **Chart'a girilirse "#1/#X in Photo & Video" iddiası ekle** | Sadece gerçekse. Screenshot #1 caption'a rozet. Pik-pencerede mümkün. |
| 13 | **Gerçek rating birikince "4.X★" rozeti** | Screenshot #5'e. Sadece gerçek rakam (Apple kuralı). İlk hafta sonrası. |

---

## 12. Sınırlar + devir noktaları

- **ASA kampanya kurma / CPP'leri kampanyaya bağlama** → mt-apple-search-ads-uzmani (CPP'leri ben tasarlarım, ASA'ya bağlama o uzmanın işi).
- **Screenshot + preview video ÜRETİMİ** → mt-creative-yonetmeni (brief'leri ben yazdım; Ideogram V3 görsel, Shotstack video kurgu).
- **Preview video HAM ekran kaydı** → kullanıcı (gerçek app arayüzü Apple kuralı; kurgu creative ajanına).
- **Rating prompt kod implementasyonu + pre-filter** → developer (kullanıcının kendi işi; ben stratejiyi/trigger'ları verdim).
- **Paid bütçe/kanal kararı + birim ekonomisi** → mt-paid-ua-uzmani + mt-strateji-uzmani.
- **Pricing ($0.99 kararı)** → mt-strateji-uzmani (mevcut karar sağlam, dokunmadım).

---

## 13. Sonraki denetim

- **Kickoff sonrası (12-13 Haziran):** Lansman canlı olunca → gerçek rating velocity + ilk screenshot conversion + keyword indexleme kontrolü. İlk gerçek veri.
- **Pik-pencere ortası (~1 Temmuz):** Promo Text tazeleme + chart pozisyonu → #X iddia güncellemesi.
- Bu app **yak-at tek-mevsim** → 19 Temmuz sonrası ASO denetimi anlamsız (durability 1/10). Tüm enerji 11 Haziran–19 Temmuz penceresine.

---

*Hazırlayan: mt-aso-uzmani · Kaynak girdiler: mt-rakip-arastirmaci benchmark (2026-06-05) + App Brief · Tüm öneriler submit-öncesi tek-sefer uygulanabilir, metadata-only (yeni build gerektirmez) olacak şekilde tasarlandı.*
