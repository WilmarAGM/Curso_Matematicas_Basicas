import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { FACTORING_APPLICATION_QUIZ, FACTORING_METHOD_GUIDE, MODULES_SEMANA5, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module25Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module25FactorApplications({ onNavigate, onDone }: Module25Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = FACTORING_APPLICATION_QUIZ[current]
  const isLast = current === FACTORING_APPLICATION_QUIZ.length - 1

  const pick = (i: number) => {
    if (choice !== null) return
    setChoice(i)
    if (i === q.answerIndex) setScore((s) => s + 1)
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
      id="aplicacionesFactorizacion"
      eyebrow="Módulo 05"
      title="Aplicaciones: División y Factorización"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA5}
      hubId="semana5"
      hubLabel="Semana 5"
      intro="Cierra la semana combinando lo aprendido: ¿qué método de factorización usar según el número de términos? Y problemas de área que se resuelven dividiendo o factorizando."
    >
      <div className="mb-12 rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">¿Qué método uso? Mapa de decisión</h2>
        <p className="mt-1 text-sm text-ink-muted">Antes de aplicar cualquier método, siempre busca primero el factor común.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {FACTORING_METHOD_GUIDE.map((row) => (
            <div key={row.situation} className="rounded border border-line-strong bg-surface-raised px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ember">{row.situation}</span>
              <p className="mt-1 text-sm text-ink">{row.method}</p>
              <p className="mt-1 font-mono-nums text-xs text-ink-muted">{row.example}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-xl text-ink">
          Problema {Math.min(current + 1, FACTORING_APPLICATION_QUIZ.length)}/{FACTORING_APPLICATION_QUIZ.length}
        </h2>
      </div>

      {!finished ? (
        <div className="rounded border border-line bg-surface p-6">
          <p className="text-[15px] leading-relaxed text-ink">{q.prompt}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {q.options.map((opt, i) => {
              const isChosen = choice === i
              const isAnswer = i === q.answerIndex
              return (
                <button
                  key={opt}
                  onClick={() => pick(i)}
                  disabled={choice !== null}
                  className={cn(
                    'rounded border px-3 py-2 text-sm font-medium transition text-left font-mono-nums',
                    choice === null && 'border-line-strong text-ink hover:border-pine hover:text-pine',
                    choice !== null && isAnswer && 'border-pine bg-pine/15 text-pine',
                    choice !== null && isChosen && !isAnswer && 'border-danger bg-danger/10 text-danger',
                    choice !== null && !isChosen && !isAnswer && 'border-line text-ink-muted opacity-50',
                  )}
                >
                  {opt}
                </button>
              )
            })}
          </div>
          {choice !== null && (
            <div className="mt-5 border-t border-line pt-4">
              <p className={cn('text-sm', choice === q.answerIndex ? 'text-pine' : 'text-danger')}>
                {choice === q.answerIndex ? 'Correcto — ' : 'Incorrecto — '}
                {q.solution}
              </p>
              <button
                onClick={advance}
                className="mt-4 rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
              >
                {isLast ? 'Ver resultado' : 'Siguiente problema →'}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded border border-line bg-surface p-6 text-center">
          <p className="font-display text-2xl text-ink">
            Obtuviste {score} de {FACTORING_APPLICATION_QUIZ.length}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {score === FACTORING_APPLICATION_QUIZ.length
              ? '¡Excelente! Completaste la Semana 5 con un puntaje perfecto.'
              : 'Revisa las soluciones y vuelve a intentarlo si quieres mejorar tu puntaje.'}
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
    </ModuleShell>
  )
}
