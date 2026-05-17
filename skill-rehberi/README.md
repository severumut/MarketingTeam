# skill-rehberi/ — Skill Kullanıcı Rehberleri

Her skill için, kullanıcıya dönük "ne / neden / ne zaman / nasıl" rehberi burada yaşar. Bu klasör Phase 2'de her skill turuyla birlikte büyür.

## Şablon

Her `skill-rehberi/<ad>.md` dosyası şu şablona uyar:

```markdown
# /<skill-adı>

## Bu skill ne yapar?
[1-2 paragraf]

## Neden bu skill var?
[Manuel yapılabilir mi, niye otomatize ediyoruz]

## Ne zaman çalıştırmalıyım?
- Senaryo 1
- Senaryo 2

## Nasıl çalıştırılır?
[Slash komut + doğal dil tetikleyicileri]

## Adım adım akış
1. ...
2. ...

## Çıktılar (hangi dosyalar nereye yazılır)
- `<dosya yolu>` — ne içerir

## Bağımlılıklar (hangi ajanlar, hangi MCP'ler)
- ...

## İlgili skill'ler
- ...

## Tetikleyici test cümleleri
1. "<cümle>" → ✅ tetiklenmeli
2. "<cümle>" → ❌ tetiklenmemeli
```

## Mevcut rehberler

> Phase 2 başlamadı — henüz hiçbir rehber yok.

## İlgili dosyalar

- [.claude/skills/](../.claude/skills/) — Asıl skill dosyaları
- [TETIKLEME-SOZLESMESI.md](../TETIKLEME-SOZLESMESI.md)
