---
name: mt-haftalik-rapor
description: |
  Haftalık performans review. Aktif kampanyaların verisini çeker (RevenueCat MCP + Phase 4'te API'lar + manuel), KPI hesaplar, mt-strateji-uzmani'nin haftalık checkpoint'lerine bakar (yeşil/sarı/kırmızı), aksiyon listesi üretir. mt-kampanya-analisti ajanını çağırır.
  TRIGGER when: "/mt-haftalik-rapor" veya "Bu hafta nasıl gitti?", "Haftalık özet".
  SKIP when: aylık plan (mt-butce-planla), kavram öğrenme (mt-marketing-tutor).
  ÖRNEK KOMUTLAR: "/mt-haftalik-rapor", "Bu hafta kampanyalar nasıl?".
user-invocable: true
---

# /mt-haftalik-rapor

## Akış
1. Hangi periyot? (default: son 7 gün, geçen Pazartesi-Pazar)
2. Hangi uygulama(lar)? (default: hepsi)
3. `mt-kampanya-analisti` ajanını çağır → Mod A (Haftalık Rapor)
4. Ajan:
   - RevenueCat MCP'den son 7 gün veri
   - Mevcut `butce/<yyyy-mm>.md` planından checkpoint oku
   - KPI hesapla, plan vs gerçek karşılaştır
   - Aksiyon listesi (yeşil/sarı/kırmızı ışık + spesifik öneri)
5. Çıktı: `raporlar/<yyyy-mm-dd>-haftalik.md`
6. Aksiyon listesi: hangi ajan/skill'e ne devredildiğini göster

## Çıktı
- `raporlar/<yyyy-mm-dd>-haftalik.md`

## Bağımlılık
- `mt-kampanya-analisti` ajanı
- RevenueCat MCP (kurulu ✅)
- (varsa) `butce/<yyyy-mm>.md` (mt-strateji-uzmani yazdı)
