import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { PROPERTY_LIST, PROPERTY_QUIZ, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

const OPTIONS = ['Asociativa', 'Conmutativa', 'Elemento Neutro', 'Inverso', 'Distributiva'] as const

interface Module2Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module2Properties({ onNavigate, onDone }: Module2Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = PROPERTY_QUIZ[current]
  const isLast = current === PROPERTY_QUIZ.length - 1

  const pick = (opt: string) => {
    if (choice) return
    setChoice(opt)
    if (opt === q.answer) setScore((s) => s + 1)
  }

  const advance = () => {
    if (isLast) {
      setFinished(true)
      onDone()
      return
    }
    setCurrent((c) => c + 1)
    setChoice(null)
  }

  return (
    <ModuleShell
      id="propiedades"
      eyebrow="Módulo 02"
      title="Propiedades de las Operaciones"
      onNavigate={onNavigate}
      intro="Las operaciones de suma y producto en ℝ cumplen propiedades vitales que permiten reorganizar y simplificar expresiones."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {PROPERTY_LIST.map((p) => (
          <div key={p.name} className="rounded border border-line bg-surface p-4">
            <span className="font-medium text-ink">{p.name}</span>
            <p className="mt-1 font-mono-nums text-sm text-ink-muted">{p.example}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Quiz: ¿qué propiedad es?</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Pregunta {Math.min(current + 1, PROPERTY_QUIZ.length)}/{PROPERTY_QUIZ.length}
          </span>
        </div>

        {!finished ? (
          <div className="rounded border border-line bg-surface p-6">
            <p className="font-mono-nums text-lg text-ink">{q.expression}</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              {OPTIONS.map((opt) => {
                const isChosen = choice === opt
                const isAnswer = opt === q.answer
                return (
                  <button
                    key={opt}
                    onClick={() => pick(opt)}
                    disabled={!!choice}
                    className={cn(
                      'rounded border px-3 py-2 text-sm font-medium transition text-left',
                      !choice && 'border-line-strong text-ink hover:border-pine hover:text-pine',
                      choice && isAnswer && 'border-pine bg-pine/15 text-pine',
                      choice && isChosen && !isAnswer && 'border-danger bg-danger/10 text-danger',
                      choice && !isChosen && !isAnswer && 'border-line text-ink-muted opacity-50',
                    )}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            {choice && (
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className={cn('text-sm', choice === q.answer ? 'text-pine' : 'text-danger')}>
                  {choice === q.answer ? 'Correcto' : `Incorrecto — la respuesta es ${q.answer}`}
                </span>
                <button
                  onClick={advance}
                  className="rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
                >
                  {isLast ? 'Ver resultado' : 'Siguiente pregunta →'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded border border-line bg-surface p-6 text-center">
            <p className="font-display text-2xl text-ink">
              Obtuviste {score} de {PROPERTY_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === PROPERTY_QUIZ.length
                ? 'Excelente, dominas las propiedades de las operaciones.'
                : 'Repasa las tarjetas de arriba y vuelve a intentarlo si quieres mejorar tu puntaje.'}
            </p>
            <button
              onClick={() => {
                setCurrent(0)
                setChoice(null)
                setScore(0)
                setFinished(false)
              }}
              className="mt-4 rounded border border-line-strong px-4 py-2 text-sm font-medium text-ink transition hover:bg-surface-raised"
            >
              Reintentar
            </button>
          </div>
        )}
      </div>
    </ModuleShell>
  )
}
