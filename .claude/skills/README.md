# .claude/skills/ — User-Invocable Skill'ler

Bu klasör **12** adet user-invocable skill içerir. Her skill `<skill-adi>/SKILL.md` formatında bir klasör altında yaşar.

> ⚠️ Phase 0 sonu: Bu klasör henüz boş. Skill'ler Phase 2'de **yavaş mod** ile sırayla yazılacak.

## Yazılım sırası (kullanım sıklığına göre)

1. `mt-terim-ogren`
2. `mt-hesap-ac`
3. `mt-yeni-uygulama`
4. `mt-rakip-analizi`
5. `mt-butce-planla`
6. `mt-creative-uretim`
7. `mt-yeni-kampanya`
8. `mt-haftalik-rapor`
9. `mt-aylik-strateji`
10. `mt-revenuecat-ozet`
11. `mt-aso-audit`
12. `mt-api-entegrasyon`

> **Not (2026-05-18)**: `mt-content-takvimi` kapsamdan çıkarıldı (paid-only sistemde organik content takvimi gerekmez).

## Her skill için uyulacak kurallar

- Adı `mt-` prefix'i ile başlar.
- `user-invocable: true` YAML alanı set'lidir → `/mt-<adi>` slash komutu ile çağrılır.
- YAML başlığı `TETIKLEME-SOZLESMESI.md` Bölüm B şablonuna uyar.
- Her skill'in `skill-rehberi/<ad>.md` altında kullanıcıya dönük bir rehberi olur.

---

## 🔧 Tüm skill'lerin ortak davranış kuralları (UNIVERSAL PATTERN)

### 1. Maliyet onayı (sadece maliyet doğuran adımlarda)

Bir skill maliyet doğuran bir aksiyon yapacaksa (fal.ai üretim, Shotstack render, paid API çağrısı), **adımın ne yapacağını detaylıca açıklasın**, sonra onay istesin.

**Yanlış**: "Creative üretim başlatılıyor, onaylar mısın? (E/H)"

**Doğru**:
```
Üretim planı:
- 5 image varyantı üretilecek (FLUX Pro)
- Brief: Habit App Reels — lifestyle minimal
- Tahmini maliyet: 5 × $0.05 = $0.25
- Süre: ~30 saniye
- Çıktı: projects/habit-app/creative/2026-05-19-reels-lifestyle/

Onaylar mısın? (E / H / değiştir)
```

Maliyet doğurmayan adımlar (memory okuma, dosya tarama, rapor yazma) için onay sorma — sessiz devam.

### 2. Skill sonunda özet rapor (zorunlu)

Her skill bitiminde **chat'te 5-10 satırlık özet** + **dosya linki**:

```
✅ Tamamlandı

Özet:
- Habit App için Haziran ayı planı yazıldı
- Toplam bütçe: $500
- 3 kanal allocation (ASA $200 / Meta $200 / TikTok $100)
- D30 ROAS hedef: 1.2

📄 Dosya: butce/2026-06.md

Sonraki adım önerisi:
- 🎯 /mt-hesap-ac → eğer ASA hesabı yoksa
- 🎯 /mt-creative-uretim → kampanya öncesi creative
- 💡 Alternatif: /mt-rakip-analizi → kategori benchmark kullanışlı olabilir
```

### 3. Multi-step skill state (yarıda kalırsa devam)

Şu skill'lerde state kaydı **zorunlu**:
- `/mt-hesap-ac` → `hesap-kurulumlari/<platform>/durum.md`
- `/mt-yeni-uygulama` → `projects/<app>/onboarding-durum.md` (yeni)
- `/mt-yeni-kampanya` → `projects/<app>/kampanyalar/<platform>/.draft-<tarih>.md`
- `/mt-api-entegrasyon` → `entegrasyonlar/<platform>/.kurulum-durum.md`

Tek-shot skill'lerde gerekmez.

### 4. Sonraki adım önerisi (akıllı, gürültüsüz)

Skill bitiminde **mantıklı sonraki adım(lar)** önerilsin. Ama:
- **Otomatik çağırma yok** — kullanıcı bilinçli karar
- **Tüm skill listesi yok** — sadece **o adımdan sonra mantıklı** olanlar (1-3 öneri)
- **Neden önerildiği belirtilsin** — "X yaptığın için Y mantıklı"

Örnek: `/mt-yeni-uygulama` bitiminden sonra:
- Sonraki adım: `/mt-hesap-ac` — uygulamayı eklendi, paid'e başlamadan platform hesabı gerekli
- Alternatif: `/mt-rakip-analizi` — eğer rakip benchmark zaten yapılmadıysa derinleştirebilirsin

### 5. Scheduled task aktivasyonu (Phase 4)

Şu skill'ler Phase 4'te scheduled-tasks MCP ile otomatize edilecek:
- `/mt-haftalik-rapor` → Pazartesi 09:00
- `/mt-aylik-strateji` → Ayın 1'i 09:00
- `/mt-revenuecat-ozet` → Günlük 18:00

## İlgili dosyalar

- [TETIKLEME-SOZLESMESI.md](../../TETIKLEME-SOZLESMESI.md)
- [HIZLI-BASVURU.md](../../HIZLI-BASVURU.md)
- [skill-rehberi/](../../skill-rehberi/)
