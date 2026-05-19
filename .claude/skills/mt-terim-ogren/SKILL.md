---
name: mt-terim-ogren
description: |
  Hızlı kavram öğrenme — bir marketing terimini sıfırdan örnekle açıklar, SOZLUK.md'ye ekler. mt-marketing-tutor ajanını çağırır.
  TRIGGER when: kullanıcı "/mt-terim-ogren <terim>" yazdığında veya "X kavramını öğret" der.
  SKIP when: terim kavram değil operasyonel soru (CPI'm yüksek ne yapayım gibi).
  ÖRNEK KOMUTLAR: "/mt-terim-ogren CPI", "/mt-terim-ogren ROAS vs LTV", "/mt-terim-ogren AEM".
user-invocable: true
---

# /mt-terim-ogren

## Akış
1. Kullanıcının verdiği terim(ler)i al
2. `mt-marketing-tutor` ajanını çağır
3. Ajan terim(ler)i açıklar: KISALTMA — Full English Name — Türkçe karşılık — Detay — Örnek — İlgili kavramlar — Sık karıştırılır
4. Kullanıcının anladığından emin olduktan sonra `SOZLUK.md`'ye alfabetik ekler
5. Memory'ye (`marketing_known_terms.md`) ekler

## Çıktı
- Ajanın açıklaması (chat'te)
- `SOZLUK.md` güncellemesi (gerektiğinde)

## Bağımlılık
- `mt-marketing-tutor` ajanı
