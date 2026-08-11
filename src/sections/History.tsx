import { useState } from 'react'
import { TIMELINE, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface HistoryProps {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function History({ onNavigate, onDone }: HistoryProps) {
  const [index, setIndex] = useState(0)
  const entry = TIMELINE[index]
  const isLast = index === TIMELINE.length - 1

  const goNext = () => {
    if (isLast) {
      onDone()
      onNavigate('conjuntos')
      return
    }
    setIndex((i) => Math.min(i + 1, TIMELINE.length - 1))
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">Prólogo</p>
      <h1 className="mt-2 font-display text-4xl text-ink">La historia de los números</h1>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        Antes de clasificar números en conjuntos, vale la pena preguntarse: ¿de dónde salieron?
        Cada tipo de número que estudiaremos nació para resolver un problema humano concreto.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-[220px_1fr]">
        <ol className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible md:pb-0">
          {TIMELINE.map((t, i) => (
            <li key={t.title} className="shrink-0 md:shrink">
              <button
                onClick={() => setIndex(i)}
                className={cn(
                  'flex w-full flex-col items-start gap-0.5 rounded border-l-2 px-3 py-2 text-left transition',
                  i === index
                    ? 'border-warm bg-surface-raised'
                    : 'border-line text-ink-muted hover:border-line-strong',
                )}
              >
                <span className="font-mono-nums text-xs">{t.era}</span>
                <span className="text-sm leading-snug text-ink">{t.title}</span>
              </button>
            </li>
          ))}
        </ol>

        <div
          key={entry.title}
          className="animate-in fade-in slide-in-from-bottom-1 rounded border border-line bg-surface p-6 duration-300 md:p-8"
        >
          <span className="font-mono-nums text-sm text-warm">{entry.era}</span>
          <h2 className="mt-1 font-display text-2xl text-ink">{entry.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{entry.text}</p>
          <div className="mt-5 rounded border-l-2 border-pine bg-pine/5 px-4 py-3 text-sm leading-relaxed text-ink">
            <strong className="text-pine">Dato curioso —</strong> {entry.fact}
          </div>

          <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={index === 0}
              className="text-sm text-ink-muted transition hover:text-ink disabled:opacity-30"
            >
              ← Anterior
            </button>
            <span className="font-mono-nums text-xs text-ink-muted">
              {index + 1} / {TIMELINE.length}
            </span>
            <button
              onClick={goNext}
              className="rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
            >
              {isLast ? 'Continuar a Conjuntos Numéricos →' : 'Siguiente →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
