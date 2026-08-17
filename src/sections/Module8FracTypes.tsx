import { useMemo, useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import {
  FRACTION_CLASSIFY_ITEMS,
  FRACTION_KIND_LABELS,
  MIXED_CONVERT_ITEMS,
  MODULES_SEMANA2,
  type FractionKind,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

const KINDS: FractionKind[] = ['propia', 'impropia', 'mixta']

const KIND_COLOR: Record<FractionKind, { hover: string; correct: string }> = {
  propia: { hover: 'hover:border-pine hover:text-pine', correct: 'border-pine bg-pine/15 text-pine' },
  impropia: { hover: 'hover:border-leaf hover:text-leaf', correct: 'border-leaf bg-leaf/15 text-leaf' },
  mixta: { hover: 'hover:border-ember hover:text-ember', correct: 'border-ember bg-ember/15 text-ember' },
}

interface Module8Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module8FracTypes({ onNavigate, onDone }: Module8Props) {
  const [answers, setAnswers] = useState<Record<number, FractionKind>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})
  const order = useMemo(() => FRACTION_CLASSIFY_ITEMS, [])

  const [convInputs, setConvInputs] = useState<Record<number, string>>({})
  const [convChecked, setConvChecked] = useState<Record<number, boolean>>({})

  const choose = (i: number, kind: FractionKind) => {
    if (revealed[i]) return
    setAnswers((a) => ({ ...a, [i]: kind }))
    setRevealed((r) => {
      const next = { ...r, [i]: true }
      if (Object.keys(next).length === order.length && Object.keys(convChecked).length === MIXED_CONVERT_ITEMS.length) {
        onDone()
      }
      return next
    })
  }

  const checkConv = (i: number) => {
    setConvChecked((c) => {
      const next = { ...c, [i]: true }
      if (Object.keys(next).length === MIXED_CONVERT_ITEMS.length && Object.keys(revealed).length === order.length) {
        onDone()
      }
      return next
    })
  }

  const correctCount = order.filter((it, i) => revealed[i] && answers[i] === it.kind).length
  const attempted = Object.keys(revealed).length

  return (
    <ModuleShell
      id="tiposFracciones"
      eyebrow="Módulo 03"
      title="Tipos de Fracciones"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA2}
      hubId="semana2"
      hubLabel="Semana 2"
      intro="Según la relación entre numerador y denominador, una fracción puede ser propia, impropia o mixta."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <DefCard name="Propia" text="El numerador es menor que el denominador. Su valor está entre 0 y 1. Ej: 2/5, 3/7, 9/11." color="text-pine" />
        <DefCard name="Impropia" text="El numerador es mayor o igual que el denominador. Su valor es mayor o igual a 1. Ej: 5/2, 11/9, 5/5." color="text-leaf" />
        <DefCard name="Mixta" text="Está compuesta de una parte entera y otra fraccionaria. Ej: 3 2/5, 1 3/7, 5 9/11." color="text-ember" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Ejercicio: clasifica cada fracción</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            {correctCount}/{attempted} correctas
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {order.map((item, i) => (
            <div key={item.display} className="rounded border border-line bg-surface p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono-nums text-lg text-ink">{item.display}</span>
                <div className="flex flex-wrap gap-2">
                  {KINDS.map((k) => {
                    const isChosen = answers[i] === k
                    const isRevealed = revealed[i]
                    const isCorrectKind = k === item.kind
                    const c = KIND_COLOR[k]
                    return (
                      <button
                        key={k}
                        onClick={() => choose(i, k)}
                        disabled={isRevealed}
                        className={cn(
                          'rounded border px-3 py-1.5 text-sm font-medium transition',
                          !isRevealed && cn('border-line-strong text-ink', c.hover),
                          isRevealed && isCorrectKind && c.correct,
                          isRevealed && isChosen && !isCorrectKind && 'border-danger bg-danger/10 text-danger',
                          isRevealed && !isChosen && !isCorrectKind && 'border-line text-ink-muted opacity-50',
                        )}
                      >
                        {FRACTION_KIND_LABELS[k]}
                      </button>
                    )
                  })}
                </div>
              </div>
              {revealed[i] && (
                <p className={cn('mt-3 animate-in fade-in text-sm leading-relaxed', answers[i] === item.kind ? 'text-pine' : 'text-danger')}>
                  {answers[i] === item.kind ? 'Correcto — ' : `Incorrecto, es ${FRACTION_KIND_LABELS[item.kind]} — `}
                  {item.explain}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">De mixta a impropia</h2>
        <p className="mt-1 mb-5 text-sm leading-relaxed text-ink-muted">
          Para convertir una fracción mixta en impropia: multiplica el entero por el denominador, súmale
          el numerador y deja el mismo denominador. Ejemplo: 3 2/5 = (3·5 + 2)/5 = 17/5.
        </p>
        <div className="flex flex-col gap-3">
          {MIXED_CONVERT_ITEMS.map((it, i) => {
            const value = convInputs[i] ?? ''
            const done = convChecked[i]
            const correct = Number(value) === it.ansNum
            return (
              <div key={`${it.whole}-${it.num}-${it.den}`} className="rounded border border-line bg-surface p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono-nums text-lg text-ink">
                    {it.whole} {it.num}/{it.den} =
                  </span>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setConvInputs((v) => ({ ...v, [i]: e.target.value }))}
                    disabled={done}
                    placeholder="num"
                    className="w-16 rounded border border-line-strong bg-surface px-2 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine disabled:opacity-60"
                  />
                  <span className="font-mono-nums text-ink-muted">/ {it.den}</span>
                  <button
                    onClick={() => checkConv(i)}
                    disabled={done || value === ''}
                    className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
                  >
                    Verificar
                  </button>
                  {done && (
                    <span className={cn('text-sm font-medium', correct ? 'text-pine' : 'text-danger')}>
                      {correct ? '✓ Correcto' : `✗ Es ${it.ansNum}/${it.den}`}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ModuleShell>
  )
}

function DefCard({ name, text, color }: { name: string; text: string; color: string }) {
  return (
    <div className="rounded border border-line bg-surface p-4">
      <span className={cn('font-display text-lg', color)}>{name}</span>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  )
}
