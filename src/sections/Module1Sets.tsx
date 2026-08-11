import { useMemo, useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { CLASSIFY_ITEMS, SET_LABELS, type NumberSet, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

const SETS: NumberSet[] = ['N', 'Z', 'Q', "Q'"]

const SET_COLOR: Record<NumberSet, { hover: string; correct: string }> = {
  N: { hover: 'hover:border-pine hover:text-pine', correct: 'border-pine bg-pine/15 text-pine' },
  Z: { hover: 'hover:border-leaf hover:text-leaf', correct: 'border-leaf bg-leaf/15 text-leaf' },
  Q: { hover: 'hover:border-ember hover:text-ember', correct: 'border-ember bg-ember/15 text-ember' },
  "Q'": { hover: 'hover:border-warm hover:text-warm', correct: 'border-warm bg-warm/15 text-warm' },
}

interface Module1Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module1Sets({ onNavigate, onDone }: Module1Props) {
  const [answers, setAnswers] = useState<Record<number, NumberSet>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})
  const order = useMemo(() => CLASSIFY_ITEMS, [])

  const choose = (i: number, set: NumberSet) => {
    if (revealed[i]) return
    setAnswers((a) => ({ ...a, [i]: set }))
    setRevealed((r) => ({ ...r, [i]: true }))
    if (Object.keys(revealed).length + 1 === order.length) onDone()
  }

  const correctCount = order.filter((it, i) => revealed[i] && answers[i] === it.set).length
  const attempted = Object.keys(revealed).length

  return (
    <ModuleShell
      id="conjuntos"
      eyebrow="Módulo 01"
      title="¿Qué son los Conjuntos Numéricos?"
      onNavigate={onNavigate}
      intro={
        <>
          Los números reales (ℝ) se crearon para cumplir necesidades específicas, desde contar
          objetos hasta medir distancias diagonales. Dentro de ℝ conviven cuatro subconjuntos.
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <DefCard
          symbol="ℕ"
          name="Naturales"
          text="Para contar. ℕ = {0, 1, 2, 3, …}"
          color="text-pine"
        />
        <DefCard
          symbol="ℤ"
          name="Enteros"
          text="Incluyen los negativos, para describir deudas o temperaturas. ℤ = {…, −2, −1, 0, 1, 2, …}"
          color="text-leaf"
        />
        <DefCard
          symbol="ℚ"
          name="Racionales"
          text="Cocientes de enteros (denominador ≠ 0). Ejemplo: 10/2, 30/8."
          color="text-ember"
        />
        <DefCard
          symbol="ℚ'"
          name="Irracionales"
          text="Expresión decimal no finita ni periódica. Ejemplo: √3, π."
          color="text-warm"
        />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Ejercicio: clasifica cada número</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            {correctCount}/{attempted} correctas
          </span>
        </div>
        <p className="mb-5 text-sm text-ink-muted">
          Elige el conjunto <em>más específico</em> al que pertenece cada número.
        </p>

        <div className="flex flex-col gap-3">
          {order.map((item, i) => (
            <div key={item.display} className="rounded border border-line bg-surface p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono-nums text-lg text-ink">{item.display}</span>
                <div className="flex flex-wrap gap-2">
                  {SETS.map((s) => {
                    const isChosen = answers[i] === s
                    const isRevealed = revealed[i]
                    const isCorrectSet = s === item.set
                    const c = SET_COLOR[s]
                    return (
                      <button
                        key={s}
                        onClick={() => choose(i, s)}
                        disabled={isRevealed}
                        className={cn(
                          'rounded border px-3 py-1.5 text-sm font-medium transition',
                          !isRevealed && cn('border-line-strong text-ink', c.hover),
                          isRevealed && isCorrectSet && c.correct,
                          isRevealed && isChosen && !isCorrectSet && 'border-danger bg-danger/10 text-danger',
                          isRevealed && !isChosen && !isCorrectSet && 'border-line text-ink-muted opacity-50',
                        )}
                      >
                        {s}
                      </button>
                    )
                  })}
                </div>
              </div>
              {revealed[i] && (
                <p
                  className={cn(
                    'mt-3 animate-in fade-in text-sm leading-relaxed',
                    answers[i] === item.set ? 'text-pine' : 'text-danger',
                  )}
                >
                  {answers[i] === item.set ? 'Correcto — ' : `Incorrecto, es ${SET_LABELS[item.set]} — `}
                  {item.explain}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </ModuleShell>
  )
}

function DefCard({ symbol, name, text, color }: { symbol: string; name: string; text: string; color: string }) {
  return (
    <div className="rounded border border-line bg-surface p-4">
      <div className="flex items-baseline gap-2">
        <span className={cn('font-display text-2xl', color)}>{symbol}</span>
        <span className="font-medium text-ink">{name}</span>
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  )
}
