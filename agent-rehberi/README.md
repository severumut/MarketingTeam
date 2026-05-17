# agent-rehberi/ — Ajan Kullanıcı Rehberleri

Her ajan için, kullanıcıya dönük "ne / neden / ne zaman / nasıl" rehberi burada yaşar. Bu klasör Phase 1'de her ajan turuyla birlikte büyür.

## Şablon

Her `agent-rehberi/<ad>.md` dosyası şu şablona uyar:

```markdown
# <Ajan Adı>

## Bu ajan ne yapar?
[Sıfırdan başlayan birine anlatır gibi 1-2 paragraf]

## Neden bu ajan var? (Ayrı tutulma sebebi)
[Diğer ajanlardan ayıran çizgi]

## Ne zaman çağırmalıyım?
- Senaryo 1
- Senaryo 2

## Nasıl çağıracağım? (Doğal dil + Agent tool ile programatik)
[Örnekler]

## Örnek prompt'lar
1. "..."
2. "..."

## Çıktı olarak ne beklemeli miyim?
[Format + örnek çıktı snippet]

## Sınırları / yapamadıkları
[Bu ajanı değil, başkasını çağırmak istediğin durumlar]

## Bağlantılı ajanlar / skill'ler
- ...

## İlgili bilgi-bankası dosyaları
- ...

## Tetikleyici test cümleleri
1. "<cümle>" → ✅ tetiklenmeli
2. "<cümle>" → ❌ tetiklenmemeli (`<doğru ajan>` tetiklenmeli)
```

## Mevcut rehberler

> Phase 1 başlamadı — henüz hiçbir rehber yok.

## İlgili dosyalar

- [.claude/agents/](../.claude/agents/) — Asıl ajan dosyaları
- [TETIKLEME-SOZLESMESI.md](../TETIKLEME-SOZLESMESI.md) — Tetikleme kuralları
