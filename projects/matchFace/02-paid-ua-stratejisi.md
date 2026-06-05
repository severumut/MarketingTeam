# Match Face: Football Camera — Paid UA Stratejisi

**Son güncelleme**: 2026-06-05
**Versiyon**: 1
**Karar veren**: mt-paid-ua-uzmani (Paid User Acquisition stratejik yönü)
**Durum**: App henüz canlı değil (PREPARE_FOR_SUBMISSION) · Turnuvaya 6 gün

---

## Durum analizi

Match Face, bilinçli olarak tasarlanmış bir **tek-mevsim ("yak-at") viral kamera uygulaması**: ARKit yüz takibiyle canlı milli bayrak boyası + "Who Wins" tahmin modu, ücretsiz/sınırsız watermarklı foto, video ise tek-seferlik $0.99 IAP (In-App Purchase — Uygulama İçi Satın Alma) arkasında. Turnuva 11 Haziran – 19 Temmuz 2026; bugün 5 Haziran. Kickoff'a **6 gün**, talep şu an yükseliyor, 19 Temmuz'dan sonra sıfıra çöküyor.

Bu doküman tek bir acı gerçeğin üstüne kurulu ve onu sürekli hatırlatacak:

> **Bu uygulamanın birim ekonomisi, doğrudan IAP için paid kullanıcı çekmeyi (paid UA'yı) matematiksel olarak imkânsız kılar.**

Rakamlar:
- LTV/indirme (Lifetime Value — bir kullanıcının yaşam boyu getirdiği net gelir) ≈ net $0.84 × ~%3 dönüşüm ≈ **~$0.025/indirme**. Tek seferlik satın alma, long-tail (uzun kuyruk — sonradan tekrar gelir) yok.
- iOS CPI (Cost Per Install — Kurulum Başına Maliyet), futbol pazarlarında Meta/TikTok app install için tipik **$1–4**.
- Yani her indirme için $1–4 ödeyip karşılığında ~$0.025 alıyorsun. ROAS (Return on Ad Spend — Reklam Harcamasından Dönüş) ≈ **0.01–0.03**. Bu, harcadığın her $100 için ~$1–3 geri gelmesi demek. **Ağır, yapısal zarar.**

Bu yüzden klasik "Meta'ya $X bas, kurulum al" mantığı bu uygulama için **yanlış cevaptır**. Değer iki yerden gelir: (a) **viral döngü** — her watermarklı paylaşım gömülü bir reklamdır, CAC (Customer Acquisition Cost — Müşteri Edinme Maliyeti) ≈ 0; (b) **ASA gibi yüksek-niyetli, düşük-maliyetli kanal** — zaten "world cup filter / football camera" arayan kişiyi yakalama. Paid'i bir **gelir aracı değil, viral-tohum ekme ve yüksek-niyet yakalama aracı** olarak konumluyoruz.

---

## Önerim (tek cümle)

**Paid'i minimumda ve cerrahi tut: yalnızca ASA (Apple Search Ads) çalıştır — marka savunması + "world cup/football filter" yüksek-niyet yakalama için; gerçek motor ise organik/viral (TikTok/Reels + watermarklı export döngüsü) olsun. Meta/TikTok paid'i, çalıştırılırsa bile, "install satın alma" için değil yalnızca viral-tohum ateşlemesi için ve sıkı durdurma kurallarıyla.**

---

## Neden bu öneri? (dürüst gerekçe)

1. **Birim ekonomisi paid-for-IAP'yi öldürüyor.** Yukarıdaki ROAS ~0.02. Hiçbir kampanya optimizasyonu 40x'lik açığı kapatamaz. Bunu kovalamak parayı yakmaktır.
2. **Asıl varlık ürünün içine gömülü: watermark.** Free kullanıcı sınırsız watermarklı foto üretip TikTok/IG/WhatsApp/Snap'e yayıyor. Her paylaşım = ücretsiz reklam. Bu, CAC'ı ~0 olan organik bir edinme makinesidir — paid'in asla yenemeyeceği ekonomi.
3. **ASA bir istisna, çünkü niyet zaten orada.** "world cup filter", "football camera", "bayrak yüz" arayan kişi zaten indirmeye niyetli. Burada CPI çok daha düşük, dönüşüm yüksek; ayrıca **marka savunması** kritik (birisi "match face" arayınca rakip/taklit reklamı çıkmasın). ASA, bu app için **tek mantıklı paid kanal**.
4. **Zaman yok.** Test→öğren→ölçekle rampası için normalde haftalar gerekir; sende 6 gün var ve pik maç haftaları kaçınca bir daha gelmiyor. Bu yüzden "yavaş optimize edilen paid" değil, "hızlı kurulan ASA + ağır organik" doğru hamledir. **Hız > mükemmellik.**
5. **iOS-only + ABD avantajı ASA ile örtüşüyor.** Hedef pazarın (ABD, iOS-yoğun ~%57) tam da ASA'nın en güçlü olduğu yer. LatAm/Brezilya futbol-deli ama Android-ağırlıklı — orada paid verimsiz, organik/viral mantıklı.

---

## Senin senaryon için karar matrisi

| Faktör | Durum | Karar |
|---|---|---|
| Birim ekonomisi | LTV ~$0.025 vs CPI $1–4 → ROAS ~0.02 | **Paid-for-IAP YOK.** Paid yalnızca viral-tohum + niyet-yakalama |
| Monetizasyon modeli | Tek-seferlik $0.99 IAP, long-tail yok | Paid'i "gelir" diye okuma; "erişim/momentum" diye oku |
| Asıl edinme motoru | Watermarklı export döngüsü (CAC~0) | **Organik/viral = #1.** Paid onu besler, yerini almaz |
| Yüksek-niyet kanal | "world cup/football filter" araması mevcut | **ASA = tek mantıklı paid.** Marka savunması + niyet yakalama |
| Coğrafya | ABD (iOS-yoğun, ev sahibi, genç) > UK > (LatAm/BR organik) | ASA harcamasını **ABD + UK**'ya yoğunlaştır |
| Zaman | Kickoff'a 6 gün, pik kaçınca gelmez | Test rampası yok; **kur–izle–çek**. Hız öncelikli |
| Durability | 1/10, 19 Tem sonrası talep ~0 | Hiçbir kanala "uzun vadeli" yatırım yapma; turnuva penceresi her şey |

---

## Kanal mix ve HER kanalın ROLÜ

Bu app için "kanal mix yüzdesi" klasik anlamda yanıltıcı olur (çünkü en büyük "kanal" para harcamayan organik). Onun yerine **rol bazlı** veriyorum.

### 1. Organik / Viral — ASIL MOTOR (CAC ≈ 0)
- **Kanal**: TikTok + Instagram Reels (senin ürettiğin içerik) + uygulama içi watermarklı export döngüsü (kullanıcıların ürettiği).
- **Rol**: Edinmenin %80+'i buradan gelmeli. Watermark zaten ürüne gömülü reklam; sen ayrıca TikTok/Reels'e tohum içerik basıp dalgayı başlatıyorsun.
- **Neden #1**: Birim ekonomisi paid'i öldürdüğü için, ölçeklenebilir tek sağlıklı kaynak bu. Maç-haftası mikro-spike'ları organikte patlar.
- **Devir**: İçerik üretimi → `mt-creative-yonetmeni` / `/mt-creative-uretim` (TikTok/Reels hook videoları, watermarklı export'u öne çıkaran konsept).

### 2. ASA (Apple Search Ads) — TEK MANTIKLI PAID KANAL
- **Rol A — Marka savunması (defensive)**: "match face", "football camera" gibi marka/yakın terimlerde kendi reklamın çıksın; taklit/rakip senin trafiğini çalmasın. Düşük bütçe, yüksek öncelik.
- **Rol B — Yüksek-niyet yakalama (generic)**: "world cup filter", "football filter", "flag face", "soccer camera" gibi niyetli aramalarda görün. Burada CPI düşük, dönüşüm yüksek; ASA Attribution API en güvenilir attribution'ı verir.
- **Coğrafya**: ABD + UK öncelik. (LatAm/BR'de ASA da çalışır ama Android-ağırlık erişimi kısar — ikincil.)
- **Neden**: Niyet zaten var; sen sadece görünürlük satın alıyorsun. Bu, ~$0.025 LTV'ye rağmen en azından "ucuz ve niyetli" indirme demek — momentum ve App Store sıralama sinyali için değerli.
- **Devir**: → **`mt-apple-search-ads-uzmani`** (kampanya tipi, search match, keyword seçimi, marka vs generic ayrımı). Hesap yoksa → `mt-hesap-kurulum-rehberi` / `/mt-hesap-ac`.

### 3. Meta / TikTok (paid) — OPSİYONEL, SADECE VİRAL-TOHUM (direct-response IAP DEĞİL)
- **Rol**: Eğer (ve sadece eğer) bütçe ve istek varsa, küçük bir **awareness/viral-tohum** denemesi. Amaç "install satın almak" değil — güçlü bir creative'i ateşleyip organik paylaşım dalgasını tetiklemek. Başarı metriği CPI değil, **paylaşım/viral katsayısı ve organik install lift'i**.
- **Net uyarı**: Bunu "app install kampanyası, kurulum başına optimize" olarak kurarsan birim ekonomisi seni ezer. Eğer kurulursa, ThruPlay/video view veya engagement hedefiyle, sıkı günlük tavanla ve **maç-haftası penceresine kısıtlı** olmalı.
- **Önerim**: Turnuva başında (1. hafta) **çalıştırma**; önce organik + ASA'nın çekip çekmediğini gör. Ancak organik beklenenden zayıf kalır ve bütçen varsa, pik maç haftasında kısa, creative-tahrikli bir tohum denemesi düşünülebilir.
- **Devir** (eğer yapılırsa): Meta → `mt-meta-ads-uzmani`, TikTok → `mt-tiktok-ads-uzmani`. Creative → `mt-creative-yonetmeni`.

### 4. Google App Campaigns — BU TURNUVA İÇİN HAYIR
- ML-ağırlıklı, install-optimize kara kutu; birim ekonomisi buna en uygunsuz kanal. Bu pencerede zaman ve para ayırma.

**Rol dağılımı özeti**:

| Kanal | Rol | Para harcar mı? | Öncelik |
|---|---|---|---|
| Organik/Viral (TikTok/Reels + watermark döngüsü) | Asıl edinme motoru | Hayır (CAC~0) | **#1** |
| ASA | Marka savunması + yüksek-niyet yakalama | Evet (düşük, niyetli) | **#2** |
| Meta/TikTok paid | Viral-tohum / awareness (IAP DEĞİL) | Opsiyonel, kısıtlı | #3 (şartlı) |
| Google AC | — | — | Bu pencerede yok |

> Not: Para rakamları ve kanal başına bütçe bölüşümü **bu dokümanın işi değil** — bunu `mt-strateji-uzmani` belirler. Ben sadece "ASA'ya küçük ve niyetli, organiğe enerji, Meta/TikTok'a şartlı/kısıtlı" diye **yön** veriyorum.

---

## Funnel haritası

iOS-only, viral kamera mantığıyla funnel klasik "install→subscribe" değil; "install→paylaş→yeni install" döngüsü. Her aşamada hangi kanal:

- **AWARENESS (farkındalık)** → Organik TikTok/Reels (senin tohum içeriğin) + watermarklı export'lar başka kullanıcıların feed'inde. Şartlıysa Meta/TikTok paid burada tohum atar. *ASA burada değil — ASA niyetli kişiyi yakalar, yeni farkındalık yaratmaz.*
- **INSTALL (kurulum)** → İki yol: (1) **ASA** = arayıp bulan yüksek-niyetli kişi; (2) **Organik** = viral içerikten/paylaşımdan gelen kişi. İki yol da App Store'a iner.
- **ACTIVATION (ilk değer anı)** → Ürün içi. Kritik aktivasyon eventi: **ilk yüz boyama + ilk export/paylaşım**. Bu app için "aktive oldu" = "bir şey paylaştı" demek, çünkü paylaşım hem değer hem de yeni edinme tohumu. İzlenecek birincil event: **first_share / first_export**.
- **VIRAL LOOP (döngü)** → Her watermarklı export = feed'de gömülü reklam = yeni awareness. Bu funnel'ın kalbi. Burada izlenecek: **paylaşım başına yeni install** (yaklaşık viral katsayı). Kanal: organik, kendi kendini besler.
- **REVENUE (gelir, İKİNCİL)** → Video-record hard gate'i + watermark soft upsell. $0.99 tek-seferlik. Bu funnel'da **gelir bir bonus, hedef değil.** Tüm strateji indirme ve paylaşım hacmine optimize; gelir onun yan ürünü.

---

## iOS attribution gerçeği (neyi izleyeceksin, neyi kovalamayacaksın)

Küçük-pencereli, viral, IAP'li bir iOS app için attribution (hangi kanalın hangi kullanıcıyı getirdiğini ölçme) zaten zor; senin durumunda **kovalamaya değmez bile**.

- **SKAN (SKAdNetwork — Apple'ın gizlilik-korumalı reklam ölçüm sistemi)**: Kullanıcı bazlı değil, agrege ve gecikmeli veri verir. Düşük hacimli kampanyalarda Apple "privacy threshold" nedeniyle veriyi kısar/gizler — yani küçük ASA/Meta harcamasında muhtemelen **anlamlı SKAN postback'i bile alamazsın.**
- **Meta AEM (Aggregated Event Measurement — iOS 14.5+ ölçüm çerçevesi, 8 event slotu)**: Meta paid yapılırsa primary event olarak **install veya first_open** seç (subscription yok zaten). Ama unutma: Meta "modeled conversion" (tahmini dönüşüm) raporlar — bunu gerçek satış sanma.
- **ASA Attribution API**: Bu app için en güvenilir attribution kaynağı. ASA'da hangi keyword'ün indirme getirdiğini nispeten temiz görürsün. Bu da ASA'yı tercih etmek için bir sebep daha.
- **MMP (AppsFlyer/Adjust gibi 3. parti ölçüm aracı)**: Bu uygulama için **GEREKSİZ.** Aylık $100-300 maliyet, ~$0.025 LTV'li tek-mevsim app'te kendini asla çıkarmaz. Kurma.

**Sonuç — attribution yerine NE izlenmeli (kuzey yıldızı metrikleri):**
1. **Günlük indirme hacmi** (App Store Connect) — özellikle maç-günü spike'larıyla korelasyon.
2. **Paylaşım/export sayısı** (uygulama içi event) — viral motorun nabzı.
3. **Paylaşım başına yeni install** (kabaca viral katsayı) — döngü çalışıyor mu?
4. **ASA'da keyword başına indirme + CPI** (ASA Attribution API) — tek temiz paid sinyali.
5. **App Store kategori/keyword sıralaması** — momentum göstergesi.

Bunları RevenueCat (free tier) + App Store Connect + ASA panelinden izleyebilirsin; ek altyapı gerekmez. Detaylı okuma/yorum sonradan → `mt-kampanya-analisti` / `/mt-haftalik-rapor`.

---

## Zaman çizelgesi — 6 gün + turnuva penceresi (somut aksiyon sırası)

Strateji **ön-yüklemeli (front-loaded)**: en büyük enerji kickoff öncesi + ilk hafta. Pik maç haftaları ürünün doğal hype'ıyla örtüşür; sen sadece görünür olmalısın.

### FAZ 0 — Kickoff öncesi sprint (5–10 Haziran, 6 gün)
- **5–6 Haz (bugün–yarın)**:
  1. **App'i submit et** (kullanıcı onayında) — review gecikmesi en büyük risk; her gün gecikme pik kaçırır. **#1 aciliyet.**
  2. **ASA hesabı hazır mı?** Değilse → `/mt-hesap-ac` (Apple Search Ads). Bireysel Apple Developer için kurulum en kolay paid kanal.
- **7–8 Haz**:
  3. **ASA marka savunma kampanyası kur** ("match face" + yakın terimler, ABD+UK). Küçük, ama canlı olsun. → `mt-apple-search-ads-uzmani`.
  4. **ASA generic/niyet kampanyası kur** ("world cup filter", "football camera", "flag face" vb.). → `mt-apple-search-ads-uzmani`.
  5. **3-5 organik tohum videosu hazırla** (TikTok/Reels) — "Who Wins" modu + watermarklı export hook'u. → `/mt-creative-uretim`.
- **9–10 Haz**:
  6. Organik tohum videolarını **yayınlamaya başla** (kickoff'tan hemen önce ısınma).
  7. ASA canlı olduğunu doğrula; ilk indirmeleri izle.
  8. Bütçe çerçevesini netleştir → `mt-strateji-uzmani` / `/mt-butce-planla` (ASA günlük tavanı + organik içerik kadansı).

### FAZ 1 — Kickoff haftası (11–18 Haziran)
- **11 Haz (kickoff)**: Maç-öncesi 30-60 dk ısınma penceresi gerçek. Organik içeriği maç saatlerine senkronla. ASA zaten niyeti yakalıyor.
- Her maç günü: organik post + watermarklı export döngüsünün kendini beslemesini izle.
- ASA performansını günlük kontrol et: niyetli keyword'ler indirme getiriyor mu, CPI makul mü? → çekirdek metrik #4.
- **Karar noktası (~14-15 Haz)**: Organik patlıyorsa → Meta/TikTok paid'e hiç girme, parayı koru. Organik beklenenden zayıfsa **ve** bütçe varsa → bir sonraki pik maç haftası için kısa, creative-tahrikli **viral-tohum** denemesi planla (IAP optimize DEĞİL). → `mt-meta-ads-uzmani` / `mt-tiktok-ads-uzmani`.

### FAZ 2 — Turnuva ortası (19 Haziran – 12 Temmuz)
- Pik maç haftalarını (özellikle ABD maçları + nakavt turları) **organik içerik dalgalarıyla** sür. Bunlar doğal spike'lar — ürün hype'ına bin, fazla para harcama.
- ASA'yı açık tut (niyet aramaları turnuva boyunca yüksek); marka savunmasını asla kapatma.
- Creative fatigue'i izle: organik içerik 1-2 haftada bayatlar; her pik öncesi yeni hook → `/mt-creative-uretim`.

### FAZ 3 — Final + sönümleme (13–19 Temmuz)
- Final haftası son büyük organik itiş.
- **19 Temmuz'da tüm paid'i kapat** (ASA dahil) — talep çöküyor, harcama anlamsızlaşıyor.
- Sonrası: `mt-kampanya-analisti` ile retrospektif — ne işe yaradı, gelecek turnuva (2026 sonrası eventler) için ders.

---

## İlk somut adım (bu hafta)

**Bugün/yarın: App'i submit et (kullanıcı onayında) + ASA hesabını hazırla.** Review onayı en büyük zaman riski; ASA ise tek mantıklı paid kanalın. İkisi de bu pencerede her şeyin önünde.

→ ASA hesabı için: `/mt-hesap-ac` (Apple Search Ads)

---

## Net öncelik sırası (dürüst)

CLAUDE.md genel önceliği "paid UA #1" der — ama bu uygulama için dürüst cevap önceliği **tersine çevirmektir**, çünkü birim ekonomisi paid-for-revenue'yu imkânsız kılıyor:

1. **App submit + onay** (her şeyin önünde — zaman riski).
2. **Organik/viral** (TikTok/Reels tohum + watermark döngüsü) — **asıl edinme motoru.**
3. **ASA** — tek mantıklı paid: marka savunması + yüksek-niyet yakalama.
4. **Meta/TikTok paid** — sadece şartlı, kısıtlı, viral-tohum amaçlı (IAP DEĞİL).
5. **Google AC / MMP** — bu pencerede hayır.

---

## Sonraki uzmana köprü

- **App submit / hesap kurulumu** → `mt-hesap-kurulum-rehberi` / `/mt-hesap-ac`
- **ASA kampanya kurulumu** (marka + generic, ABD/UK, keyword) → **`mt-apple-search-ads-uzmani`** *(birincil devir)*
- **Bütçe rakamı + ASA günlük tavanı + KPI** → `mt-strateji-uzmani` / `/mt-butce-planla`
- **Organik + paid creative üretimi** (TikTok/Reels hook, watermark-öne-çıkaran video) → `mt-creative-yonetmeni` / `/mt-creative-uretim`
- **Meta viral-tohum** (eğer Faz 1 karar noktasında tetiklenirse) → `mt-meta-ads-uzmani`
- **TikTok viral-tohum** (eğer tetiklenirse) → `mt-tiktok-ads-uzmani`
- **Performans okuma / haftalık** → `mt-kampanya-analisti` / `/mt-haftalik-rapor`

---

## Kanal mix (% — para harcanan kanallar arası, yön)

> Yüzdeler para rakamı değil, **paid bütçe içi ağırlık yönü**. Gerçek tutarları `mt-strateji-uzmani` belirler.

| Kanal | Paid bütçe payı (yön) | Notu |
|---|---|---|
| ASA | **%85-100** | Tek mantıklı paid. Marka savunma + niyet yakalama, ABD/UK |
| Meta paid | %0-15 (şartlı) | Yalnız viral-tohum, Faz 1 karar noktasında tetiklenirse |
| TikTok paid | %0-15 (şartlı) | Meta yerine alternatif tohum kanalı; biri seçilir |
| Google AC | %0 | Bu pencerede yok |

> Organik/viral bu tabloda yok çünkü para harcamıyor — ama **gerçek edinme hacminin çoğunluğu oradan gelmeli.** Paid tablosu küçük; asıl iş ücretsiz döngüde.

---

## Karar değişiklik logu

- **2026-06-05 (v1)**: İlk strateji yazıldı. Çekirdek karar: birim ekonomisi (LTV ~$0.025 vs CPI $1–4) paid-for-IAP'yi imkânsız kıldığı için paid'i minimize et; **organik/viral = asıl motor**, **ASA = tek mantıklı paid** (marka savunma + niyet yakalama, ABD/UK), Meta/TikTok yalnız şartlı viral-tohum, Google AC yok. Zaman çizelgesi turnuvaya (11 Haz–19 Tem) ön-yüklendi. ASA → `mt-apple-search-ads-uzmani`'ye devredilecek.

---

Doküman hedef yolu: `/Users/umut/Desktop/MarketingTeam/projects/matchFace/02-paid-ua-stratejisi.md` (klasör adı `matchFace`; brief'teki `match-face` slug'ından farklı — kaydederken bu yolu kullan). Memory dosyası `marketing_paid_ua_decisions.md` henüz yok; ilk kez bu app için oluşturulup yukarıdaki v1 kararı işlenmeli.
