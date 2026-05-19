---
name: mt-butce-planla
description: |
  Aylık bütçe planlama + KPI hedef belirleme. mt-strateji-uzmani ajanını çağırır. Bütçeyi uygulamalar × kanallar arasında dağıtır, haftalık checkpoint'ler tanımlar.
  TRIGGER when: "/mt-butce-planla" veya "Bu ay bütçemi nasıl bölmeli?", "Aylık plan yapalım".
  SKIP when: kavram öğrenme (mt-marketing-tutor), performans okuma (mt-kampanya-analisti).
  ÖRNEK KOMUTLAR: "/mt-butce-planla", "Haziran bütçesi", "$500 nasıl dağıtmalı?".
user-invocable: true
---

# /mt-butce-planla

## Akış
1. Hangi periyot? (aylık default, üç aylık opsiyonel)
2. Toplam bütçe (memory'den varsa öner, değişiklik var mı?)
3. `mt-strateji-uzmani` ajanını çağır → Mod A (Plan Üretimi)
4. Ajan:
   - Geçen ay verisini oku (raporlar/ + RevenueCat)
   - KPI hedefler belirle
   - Uygulama × kanal allocation
   - 4 haftalık checkpoint'ler + eşikler
   - Erken revize tetikleyicileri
5. Çıktı: `butce/<yyyy-mm>.md` + ilgili `projects/<app>/02-paid-ua-stratejisi.md` append

## Çıktı
- `butce/<yyyy-mm>.md`
- `projects/<app>/02-paid-ua-stratejisi.md`'de "Bütçe & KPI Hedefleri" bölümü

## Bağımlılık
- `mt-strateji-uzmani` ajanı
- (opsiyonel) `mt-kampanya-analisti` (geçen ay verisi için)
