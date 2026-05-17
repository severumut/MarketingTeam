# entegrasyonlar/ — API ve MCP Entegrasyon Durumu

Bu klasör hangi platformlara API ile bağlı olduğunu, hangileri için kurulumun beklediğini takip eder. **Gerçek tokenlar bu klasörde değil**, `.env` veya `entegrasyonlar/token-vault.md` (gitignore'lu) içinde.

## Hızlı durum

📊 **Genel durum tablosu**: [kurulu-entegrasyonlar.md](kurulu-entegrasyonlar.md)

## Klasör yapısı

```
entegrasyonlar/
├── README.md                       ← Bu dosya
├── kurulu-entegrasyonlar.md        ← Durum tablosu
├── revenuecat/                     ← ✅ Kurulu (MCP)
├── meta-marketing-api/             ← ⏳ Phase 4
├── tiktok-business-api/            ← ⏳ Phase 4
├── apple-search-ads/               ← ⏳ Phase 4
├── google-ads/                     ← ⏳ Phase 4
└── token-vault.md.ornek            ← Token saklama şablonu
```

## Yeni entegrasyon eklemek için

```
/mt-api-entegrasyon
```

> ⚠️ Bu skill Phase 2'de yazılacak. `mt-entegrasyon-kurucu` ajanı seninle adım adım yürür.

## Güvenlik prensipleri

1. **Hiçbir gerçek token bu repoda commit'lenmez.** `.gitignore` token'lı dosyaları engeller.
2. Hassas dosyalar:
   - `.env` (.env.ornek var, gerçek değerli .env yok)
   - `entegrasyonlar/token-vault.md` (gitignore'lu)
   - `entegrasyonlar/<platform>/secrets.md` (gitignore'lu)
   - `entegrasyonlar/<platform>/credentials.json` (gitignore'lu)
3. Bir token'ı geçici test için bir yerde gördün → hemen `git status` çek, commit'lenmediğinden emin ol.
