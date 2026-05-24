# mt-marketing-tutor — Terim & Kavram Öğretici

## Bu ajan ne yapar?

`mt-marketing-tutor`, app marketing dünyasının terimlerini ve kavramlarını **sıfırdan başlayan bir indie iOS developer'a** anlaşılır şekilde öğreten uzman ajandır. **İki modu vardır**:

### 🎓 Mod A — Standard Mode (Tek-shot terim öğretim)
- Sen bir terim sorduğunda detaylı format ile cevap verir
- `SOZLUK.md`'ye otomatik ekler
- Sektör İngilizcesi + Türkçe karşılık + örnek + ilgili kavramlar + sıkça karıştırılır

### 📚 Mod B — Curriculum Mode (Müfredat Sohbeti) ⭐ YENİ
- `OGRENME-YOL-HARITASI.md`'deki 8 modüllük müfredatı **sırayla sohbet halinde** anlatır
- `marketing_learning_progress.md` memory'sinden **nerede olduğunu bilir**
- Statik MD okutmaz — **kendi cümlelerinle, etkileşimli, soru-cevaplı** anlatır
- Senin app'lerinden (Fairora / What The Emoji / Blur Film) örnekler verir
- Modül sonunda mini-test soruları
- Yan sorular curriculum'u bozmaz — cevaplar, sonra müfredata geri döner

Her terim öğrenildikten sonra `SOZLUK.md`'ye otomatik eklenir; sen anladıktan ve diyalog ilerledikten sonra tutor o entry'yi **rafine eder** (basitleştirip ya da derinleştirip seviyene uydurur).

## Neden bu ajan var? (Ayrı tutulma sebebi)

- **Öğrenme ile operasyon ayrılmalı.** Uzman ajanlar (`mt-meta-ads-uzmani`, `mt-kampanya-analisti` vb.) iş yapar, müşteriye anlatma değil iş çıkarma odaklıdır. Onların yanında bir "bilmiyorum" demen onların işini bozar.
- **Sıfırdan başlayanın hızı yavaş.** Tutor sabırla aynı terim üstünde 5 farklı açıdan konuşabilir. Operasyonel ajan bunu yapmaz.
- **Sözlük disiplini.** Yeni öğrenilen her terim merkezi bir yere (`SOZLUK.md`) yazılır. Bu disiplin tek bir ajana ait olmalı — herkes yazarsa kaos olur.

## Ne zaman çağırmalıyım?

- Bir terim duyduğunda ve ne demek olduğunu bilmiyorsan
- İki terimin farkını anlamak istediğinde ("CPI ile CPA farkı?")
- Sektör İngilizcesi bir kelimenin Türkçesini öğrenmek istediğinde
- Bir kavramı **derinleştirmek** istediğinde (zaten biliyorsun ama daha derin örnek lazım)
- Diğer bir ajan / Claude bilmediğin bir terim kullandığında ve sana "şunu açıklayayım mı?" dediğinde

## Nasıl çağıracağım?

### Otomatik (default)
Doğal Türkçe sor, Claude otomatik tetikler:
- "ROAS nedir?"
- "Cohort analizi ne demek?"
- "AEM açılımı nedir?"

### Manuel
- Slash: `/mt-terim-ogren <terim>` (örnek: `/mt-terim-ogren ROAS`)
- Notasyon: `@mt-marketing-tutor <sorum>`

### Programatik (Claude tarafından)
Diğer ajanların cevaplarında bilinmeyen bir terim geçtiyse, Claude `mt-marketing-tutor`'u arka planda çağırıp açıklamayı sohbete yerleştirir (parantez içinde mini-tanım, gerekirse "tam öğrenmek ister misin?" sorusu).

## Örnek prompt'lar

1. "ROAS nedir?"
2. "ROAS ile LTV arasındaki fark?"
3. "Payback period kavramı kafamı karıştırıyor, açıklayabilir misin?"
4. "Cohort analizi ne demek?"
5. "AEM nedir? Tam adı ne?"
6. "SKAN ile attribution nasıl çalışır?"
7. "Bu önceki öğrendiğimiz CPI ile ne ilgisi var bunun?" *(konuşmayı önceki terimle bağlama örneği)*

## Çıktı olarak ne beklemeli miyim?

Tutor'un standart yanıt formatı:

```markdown
**KISALTMA** — *Full English Name* *(Türkçe karşılık)*

[Kapsamlı 2-3 cümlelik tanım — tek cümleyle geçiştirmez, ama overload da etmez]

## Detay
[2-4 paragraf — kavramın derinliği, nereden geldiği, neden önemli, indie iOS dev için ne ifade ediyor. Senin app dünyandan örneklerle.]

## Örnek
[Somut sayısal örnek — örn: "Apple Search Ads'e $50 harcadın, 25 install geldi → CPI = $50 / 25 = $2.00"]

## İlgili kavramlar
- **<terim>** — kısa not + bağlantı (örn: "CPA — install yerine başka bir aksiyon (kayıt, satın alma) için ödediğin fiyat")

## Sıkça karıştırılır
- CPI **≠** CPA (install vs aksiyon)
- CPI **≠** CPM (install başına vs 1000 gösterim başına)

## Sözlüğe eklendi mi?
✅ Yeni eklendi (alfabetik C harfine)
veya
🔄 Zaten vardı, anlama düzeyine göre güncellendi
```

**Konuşma devam ederse** tutor önceki cevabın üstüne ekler:

```markdown
[Önceki cevabıma ek olarak, sorduğun açıdan...]

[Yeni açıklama, eski örneği genişletme, daha derin örnek]

## Yine ilgili
- ...
```

## Sınırları / yapamadıkları

Tutor şunları **yapmaz**, başka ajana yönlendirir:

| Sen şunu sorarsan | Tutor değil, şu çağrılmalı |
|---|---|
| "CPI'ım çok yüksek, ne yapmalıyım?" | `mt-kampanya-analisti` (analiz + aksiyon) |
| "Hangi ROAS hedefim olmalı?" | `mt-strateji-uzmani` (KPI belirleme) |
| "Meta'da kampanya nasıl açılır?" | `mt-meta-ads-uzmani` (platform kurulumu) |
| "Bu kampanya creative'i iyi mi?" | `mt-creative-yonetmeni` |

Tutor "ben olsam yapardım" tarzı stratejik yorum vermez. Açıklar, öğretir, bağlamı verir — karar vermek için seni stratejik ajanlara yönlendirir.

## Bağlantılı ajanlar / skill'ler

- **Skill**: [`/mt-terim-ogren`](../skill-rehberi/mt-terim-ogren.md) — Bu ajanın slash komut formundaki kapısı.
- **Sıkça beraber**: Her uzman ajan (tutor proaktif olarak çağrılabilir).
- **Yönlendirilen**: `mt-kampanya-analisti`, `mt-strateji-uzmani` (operasyonel sorular).

## İlgili bilgi-bankası dosyaları

- [bilgi-bankasi/01-temeller/](../bilgi-bankasi/01-temeller/) — Tutor'un ana referans havuzu (Phase 3'te dolacak)
- [bilgi-bankasi/01-temeller/temel-metrikler.md](../bilgi-bankasi/01-temeller/temel-metrikler.md) — CPI, ROAS, LTV vb.
- [SOZLUK.md](../SOZLUK.md) — Tutor bu dosyayı sürekli büyütür ve rafine eder

## Memory davranışı

Tutor Claude memory sistemini şu şekilde kullanır:

- **`marketing_known_terms.md`** — Senin bildiğin (geçmiş öğrendiğin) terimlerin listesi. Bu listeye baka baka yeni öğretirken **üstüne koyar** ("bildiğin CPI üzerinden gidersek, CPA şu açıdan farklı..." gibi).
- **`marketing_learning_style.md`** — Senin nasıl öğrendiğini takip eder (örn. örnek istiyor mu, soyut tanımı yeterli mi, sayısal örnek seviyor mu).
- **Konuşma içi context** — Aynı session'da konuşulan terim üzerinden devam ettiğini fark eder, "biraz önce gördüğümüz X ile bağlantılı olarak..." der.

## Tetikleyici test cümleleri

Phase 1 ajan turunun sonunda bu cümleler test edilir:

1. "CPI nedir?" → ✅ **Tetiklenmeli** (`mt-marketing-tutor`)
2. "ROAS ile LTV farkı nedir?" → ✅ **Tetiklenmeli**
3. "Cohort analizi ne demek?" → ✅ **Tetiklenmeli**
4. "AEM açılımı nedir?" → ✅ **Tetiklenmeli**
5. "Şu az önce öğrendiğim ROAS'ı biraz daha açar mısın?" → ✅ **Tetiklenmeli** (organik diyalog)
6. "CPI'ım çok yüksek, ne yapmalıyım?" → ❌ **Tetiklenmemeli** (`mt-kampanya-analisti` tetiklenmeli)
7. "Hangi ROAS hedefim olmalı?" → ❌ **Tetiklenmemeli** (`mt-strateji-uzmani` tetiklenmeli)
8. "Meta'da nasıl kampanya açarım?" → ❌ **Tetiklenmemeli** (`mt-meta-ads-uzmani` tetiklenmeli)

## Proaktif tetikleme — Claude için kurallar

`CLAUDE.md` Claude'a şu kuralları verir:

1. **İlk kez geçen bir terim varsa** (kullanıcının memory'de olmadığı), Claude o terimi parantez içinde mini-tanımla yumuşatır:
   > "Bu kampanya AEM (Aggregated Event Measurement — Meta'nın iOS 14.5+ sonrası ölçüm sistemi) ile çalışıyor..."
2. **Kullanıcı açıkça "anlamadım", "ne demek o", "açıklar mısın" derse** → otomatik `mt-marketing-tutor` çağrılır.

> Not: "Cevabın sonuna 2+ kısaltma varsa 'öğrenmek ister misin?' sormak" gibi proaktif teklif yapılmaz — kullanıcı bilmediği bir şeyi kendi doğal akışında zaten sorar; ekstra sormak gürültü yaratır.
