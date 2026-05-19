---
name: mt-api-entegrasyon
description: |
  Yeni platforma API / MCP entegrasyonu. mt-entegrasyon-kurucu ajanını çağırır. Token alma, OAuth flow, .env güncelleme, MCP ekleme, test çağrısı.
  TRIGGER when: "/mt-api-entegrasyon" veya "API bağla", "Token al", "MCP kur".
  SKIP when: platform hesap açma (mt-hesap-ac), kampanya kurma (ilgili platform ajan).
  ÖRNEK KOMUTLAR: "/mt-api-entegrasyon", "Meta Marketing API kuralım", "TikTok için MCP".
user-invocable: true
---

# /mt-api-entegrasyon

## Akış
1. Hangi platform / entegrasyon? (Meta Marketing API, TikTok Business API, ASA, Google Ads, yeni MCP)
2. Mod? (yeni kurulum / yenileme / debug)
3. `mt-entegrasyon-kurucu` ajanını çağır
4. Ajan adım adım yönlendirir:
   - Developer hesabı kontrol
   - Token alma akışı (OAuth/JWT/API key)
   - Scope seçimi
   - `.env` güncelleme
   - MCP ekleme (varsa: `claude mcp add ...`)
   - Test çağrısı (Bash + curl)
5. `entegrasyonlar/<platform>/setup-notlari.md` yazılır
6. `entegrasyonlar/kurulu-entegrasyonlar.md` tablosu update edilir

## Çıktı
- `entegrasyonlar/<platform>/setup-notlari.md`
- `.env` güncellemesi
- `entegrasyonlar/kurulu-entegrasyonlar.md` update

## Bağımlılık
- `mt-entegrasyon-kurucu` ajanı
- `mcp-registry` MCP (kurulu ✅)
