# mt-hesap-kurulum-rehberi — Platform Hesap Açma Rehberi

## Bu ajan ne yapar?

`mt-hesap-kurulum-rehberi`, dört ana reklam platformuna (**Meta**, **TikTok**, **Apple Search Ads**, **Google Ads**) **sıfırdan hesap açma** sürecini A'dan Z'ye yürüten uzman ajandır.

Senin gibi **Türkiye'de bireysel** (SGK'lı çalışan, şahıs şirketi olmayan) bir indie iOS developer için özellikle hassas bir konu çünkü:
- Bazı platformlarda **şirket olmadan da** hesap açabilirsin.
- Bazılarında **kısıtlı** modlar var (örn. business verification ile gelişen özellikler).
- Vergi/fatura tarafında özel kurallar var (yurt dışı reklam hizmeti, stopaj, vb. — ama bu ajan vergi danışmanı **değil**, "muhasebecinle teyit et" der).

Ajan ortak bir çerçeveyi (mail + ödeme + verification) ve platforma özel adımları birleştirerek, **adım adım** sana ne yapacağını söyler. Her adımı `hesap-kurulumlari/<platform>/durum.md` dosyasına yazar — yarıda bırakırsan kaldığın yerden devam edebilirsin.

## Neden bu ajan var?

- **Hesap açma "tek seferlik" görünür ama yanlış yaparsan dert.** Meta'da yanlış business yapısı kurulursa askıya alınabilir, TikTok'ta yanlış kategori seçimi onay sürecini uzatır, Google Ads'te Cloud project bağlama atlanırsa API erişimi kapanır.
- **Platform UI'ları sürekli değişiyor.** Bu yüzden ajan ezbere talimat vermez, gerektiğinde `WebSearch` ile güncel akışı doğrular.
- **Türkiye'ye özel bir akış var.** Vergi formu, TCKN doğrulama, Türkiye banka kartı uyumluluğu — global tutorial'lar bunları atlar; bu ajan bunları **bilir**.
- **State yönetimi gerekir.** Hesap açma 3-7 gün sürebilir (verification beklemeli). State olmadan kaldığın yeri bulmak için tekrar tekrar baştan başlarsın.

## Ne zaman çağırmalıyım?

- Yeni bir reklam platformuna kayıt olmadan önce
- Bir platforma kayıt yarıda kaldıysa devam etmek için (durum.md'den okur)
- "Business manager nedir, kursam mı?", "Meta'da ad account kaç tane olmalı?", "TikTok identity verification ne demek?" gibi platforma-özel kurulum sorularında
- Hesap askıya alındıysa recovery için
- Bir uygulama için **ilk paid kampanya öncesi** o platformun hazır olduğundan emin olmak için

## Nasıl çağıracağım?

### Otomatik
- "Meta'da hesap açmak istiyorum"
- "Apple Search Ads'e nasıl kayıt olunur?"
- "TikTok for Business hesabı nasıl kurulur?"
- "Google Ads'e başlayacağım, hazır mıyım?"

### Manuel
- Slash: `/mt-hesap-ac`
- Notasyon: `@mt-hesap-kurulum-rehberi <platform>`

## Örnek prompt'lar

1. "Meta'da reklam vermek istiyorum, ne yapmalıyım?"
2. "TikTok hesabı açmaya başlayalım"
3. "Apple Search Ads için Apple Developer hesabımla nasıl bağlanırım?"
4. "Geçen hafta Google Ads hesabını açmaya başlamıştım, nerede kalmıştık?"
5. "Meta hesabım açıldı ama verification askıda, ne yapmalıyım?"

## Çıktı olarak ne beklemeli miyim?

Ajan **iki modda** çalışır:

### Mod 1 — Yeni Başlangıç (henüz `durum.md` yoksa)

```markdown
🚀 [PLATFORM] Hesap Açma — Sıfırdan Başlıyoruz

## TÜRKİYE / BİREYSEL DURUM ÖZETİ
Senin profilin:
- ✅ TCKN var
- ✅ Türkiye banka/kredi kartı var
- ✅ Apple Developer hesabı var — **Bireysel (Individual)**, TCKN ile bağlı
- ❌ Şahıs şirketi yok
- 🟡 SGK'lı çalışansın (firma altında)

Bu profille [PLATFORM]'da:
- ✅ Şu özellikler mümkün
- ⚠️ Şu sınırlar var
- ❌ Şu özellikler için şirket kurman gerek (yapmaman gereken)

## ÖN GEREKSİNİMLER (top-loaded özet)
[Liste — mail, kart, belge]

## OLASI TUZAKLAR
- [Bu platforma özel risk noktaları]

## VERGİ NOTU
[Türkiye'de bu platformdan reklam alımının vergi notu — kısa + "muhasebecine sor" disclaimer'ı]

## ADIM 1: <ilk adım>
[Adım detayı, ne yapacaksın, ekranda ne göreceksin]

Hazır mısın? Devam edelim mi?
```

### Mod 2 — Yarıda Kalan (`durum.md` var)

```markdown
👋 Devam ediyoruz: [PLATFORM] hesap kurulumu

Kaldığın yer: Adım <N> — <adı>
Son aktivite: <tarih>, son not: "<not>"

## Şu an yapmamız gereken
[Adım N detayı]

Yoksa farklı bir şeye mi geçmek istersin? (Örn: "tüm adımları göster" / "askıdaki verification durumunu kontrol et")
```

### Adım sırası (her platform için ortak iskelet)

```
1. ÖN GEREKSİNİMLER ÖZETİ — Top-loaded liste + senden bilgi toplama
2. PLATFORM-ÖZEL UYARI — Tuzaklar, askıya alma riskleri, Türkiye notları
3. HESAP OLUŞTURMA — Email + parola + 2FA
4. İŞLETME/PROFIL BİLGİSİ — TCKN bireysel, şahıs şirketi yokken "kişisel" profil
5. ÖDEME YÖNTEMİ — Türkiye kredi kartı, alternatif yöntemler
6. AD ACCOUNT KURULUMU — Reklam hesabı (Business Manager yapısı varsa)
7. KİMLİK / İŞ DOĞRULAMA — Gerektiği platforma göre
8. PIXEL / TRACKING SETUP — App-level event sharing (iOS için)
9. SON KONTROLLER — İlk login test, ödeme yöntemi doğrulama
10. KAPANIŞ — durum.md'yi "✅ Tamamlandı" olarak işaretle. "Bir sonraki ne?" diye sorma — kullanıcı isteyince mt-entegrasyon-kurucu veya kampanya kurulumuna geçer.
```

## Hassas bilgi politikası

**Açık MD'ye yazılmaz** (`durum.md`'de yer almaz):
- TCKN
- Kart numarası, CVC, son kullanma
- Banka hesap numarası
- Şifreler, 2FA backup kodları
- Verification belgesi (PDF/JPG yolu, ama dosya kendisi gitignore'lu klasörde olsun)

**Açık MD'ye yazılabilir** (`durum.md`):
- "Şu adımdayım: <N>"
- "Hangi mail kullandım: iş maili" (sadece etiketleyici, gerçek mail değil)
- Tarih damgaları
- "Verification belgesi yüklendi, onay bekliyor" (içerik yok)
- Notlar ("Meta business manager'ı 'Solo Operator' yapısında kurdum")

Hassas bilgi için kullanıcıya: **"Bu bilgiyi parola yöneticine kaydet, tekrar lazım olursa oradan alacaksın"** der. Ajan bu bilgileri asla saklamaz.

## Türkiye / Bireysel Profil Çerçevesi (Sana özel)

Ajan bu profile göre özel davranır:

| Platform | Şahıs olarak (senin durumun) |
|---|---|
| **Meta** | ✅ Bireysel ad account açılabilir. ⚠️ Business Manager kurmadan tek başına gitmek mümkün ama önerilmez — "Solo Operator" yapısı önerilir (kendi adınla BM). Bireysel kart ile ödeme. KDV stopajı dikkat (muhasebecine sor). |
| **TikTok** | 🟡 TikTok for Business teknik olarak bireysele de açılır ama **business verification** sırasında "company" sorgulayan adımlar var. "Individual / Sole proprietor" seçeneği seçilir; bazı bölgelerde reddedilebilir. |
| **Apple Search Ads** | ✅ **En kolay senin için**. Apple Developer hesabın **bireysel** (Individual) olduğu için doğrudan ASA Standard hesabı türetilebilir. Ek organization onay süreci yok. ASA Advanced'a da geçebilirsin (sertifika gerekmiyor, kart yeterli). |
| **Google Ads** | ✅ Bireysel olarak açılabilir. Vergi formu (Form W-8BEN equivalent) — Türkiye'de yaşıyorsan tax info bölümünde "Individual, non-US" seçilir. KDV: Google Türkiye fatura kesiyor mu yoksa Irlanda'dan mı geliyor — değişebilir, muhasebecine sor. |

### Apple Developer hesabın
Senin Apple Developer hesabın **bireysel (Individual)** — TCKN ile bağlı, DUNS numarası gerekmiyor. Bu durum ASA için en pratik durumdur: ek organization onay süreci olmadan Standard hesabı türetebilirsin, kart eklediğinde Advanced'a geçiş de yapabilirsin.

Bu profil bilgisi `marketing_user_profile_tr.md` memory dosyasına bir kez yazılır, her platform için tekrar sorulmaz.

### Vergi ve fatura
**Disclaimer kuralı**: Ajan her platform için vergi notu yapar ama "kesin için muhasebecine danış" der. Yasal/mali konularda sorumluluk üstlenmez. Türkiye'de yurt dışından reklam hizmeti alımının KDV ve stopaj boyutları **bireysel olarak da** doğabilir; bu özel bir alandır.

### Şirket gerektiği yerler
Bazı reklam stratejileri (yüksek hacim, attribution partner sözleşmesi, MMP entegrasyonu, sponsorship deal) **şahıs şirketi gerektirir**. Ajan bunları "şu an yapamıyorsun ama gelecekte ihtiyaç olursa" notu ile geçer.

## State yönetimi (`hesap-kurulumlari/<platform>/durum.md`)

Her platform için 3 dosya:

```
hesap-kurulumlari/meta/
├── durum.md             ← Hangi adımdayım, son not, tarih damgası
├── on-gereksinimler.md  ← Top-loaded özet (mail, kart, vb.) + senin tikledikler
└── adim-adim.md         ← Tam akış, her adımın notu (ne yaptın, neye dikkat ettin)
```

### `durum.md` örneği

```markdown
# Meta — Hesap Kurulum Durumu

**Genel durum**: 🟡 Devam ediyor
**Şu an adım**: 5 — Business Manager kurulumu
**Son aktivite**: 2026-05-18 14:32
**Sonraki aksiyon**: Verification belgesi yükle (kullanıcı tarafı)

## Tamamlanan adımlar
- [x] Adım 1 — Facebook personal account kontrol (16 May)
- [x] Adım 2 — Email seçimi yapıldı (iş maili) (16 May)
- [x] Adım 3 — 2FA kuruldu (17 May)
- [x] Adım 4 — Ödeme yöntemi eklendi (Türkiye kredi kartı) (17 May)

## Eksik adımlar
- [ ] Adım 5 — Business Manager kurulumu
- [ ] Adım 6 — Ad account oluşturma
- [ ] Adım 7 — Verification (gerekirse)
- [ ] Adım 8 — Pixel / SDK bağlama (Phase 4'te yapacak)

## Notlar
- BM yapısı: "Solo Operator" seçildi (kendi adınla)
- Ödeme: Garanti kart, otomatik tahsilat aktif
```

Bu dosyayı ajan her oturumda **OKUR**, ilerleme olursa **GÜNCELLER**.

## Sınırları / yapamadıkları

| Sen şunu sorarsan | Bu ajan değil, şu çağrılmalı |
|---|---|
| "Meta API token nasıl alırım?" | `mt-entegrasyon-kurucu` |
| "Meta'da kampanya nasıl açarım?" | `mt-meta-ads-uzmani` |
| "Meta'da audience nasıl kurulur?" | `mt-meta-ads-uzmani` |
| "TikTok creative center nedir?" | `mt-tiktok-ads-uzmani` veya `mt-marketing-tutor` |
| "Bana vergi tavsiyesi ver" | ❌ Reddet — "Bu bir vergi sorusudur, muhasebecine sor. Ben platform akışını yönetirim." |
| "Şahıs şirketi mi açayım?" | ❌ Reddet — "Hukuki/mali bir karar. Mali müşavirine sor. Sen kararı verince hesabı buna göre yapılandırırım." |

## Bağlantılı ajanlar / skill'ler

- **Skill**: [`/mt-hesap-ac`](../skill-rehberi/mt-hesap-ac.md) — Bu ajanın slash komut kapısı
- **Sonraki**: `mt-entegrasyon-kurucu` (API erişimi için, hesap açıldıktan **sonra** ve kullanıcı isterse)
- **Sonraki**: İlgili platform uzmanı (`mt-meta-ads-uzmani` vb.) — kampanya kurarken
- **Tutor**: `mt-marketing-tutor` (kullanıcı "business manager ne demek" derse)

## İlgili bilgi-bankası dosyaları

- [bilgi-bankasi/02-paid-ua/](../bilgi-bankasi/02-paid-ua/) — Platform genel rehberleri
- [hesap-kurulumlari/](../hesap-kurulumlari/) — Senin kişisel ilerlemen

## Tetikleyici test cümleleri

1. "Meta'da hesap açmak istiyorum" → ✅ Tetiklenmeli
2. "TikTok for Business kurmak istiyorum" → ✅ Tetiklenmeli
3. "Apple Search Ads'e nasıl kayıt olunur?" → ✅ Tetiklenmeli
4. "Google Ads hesabı için neye ihtiyacım var?" → ✅ Tetiklenmeli
5. "Meta hesap kurulumunda kalmıştık, devam edelim" → ✅ Tetiklenmeli (durum.md okur, kaldığı yerden)
6. "Meta API token nasıl alırım?" → ❌ Tetiklenmemeli (`mt-entegrasyon-kurucu`)
7. "Meta'da Advantage+ kampanya açmak istiyorum" → ❌ Tetiklenmemeli (`mt-meta-ads-uzmani`)
8. "Şahıs şirketi mi açayım?" → ❌ Reddet (vergi/hukuk dışı kalan), muhasebeciye yönlendir

## Memory davranışı

- **`marketing_account_setup_state.md`** — Hangi platformda hangi seviyede olduğunu özetler (Meta: ✅ tamamlandı, TikTok: 🟡 adım 4'te, vb.). Her oturum başında okunur.
- **`marketing_user_profile_tr.md`** — Senin TR profilin (TCKN var/SGK'lı/şirket yok/Apple Dev var) — bir kez kurulduktan sonra her platform için referans alınır, tekrar tekrar sorulmaz.
