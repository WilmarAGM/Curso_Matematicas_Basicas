import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import {
  ALGEBRA_APPLICATION_PROBLEMS,
  ALGEBRA_PROPERTY_LIST,
  MODULES_SEMANA4,
  NOTABLE_PRODUCTS_LIST,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module20Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module20AlgebraApplications({ onNavigate, onDone }: Module20Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = ALGEBRA_APPLICATION_PROBLEMS[current]
  const isLast = current === ALGEBRA_APPLICATION_PROBLEMS.length - 1

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
      id="aplicacionesAlgebra"
      eyebrow="Módulo 05"
      title="Aplicaciones con Expresiones Algebraicas"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA4}
      hubId="semana4"
      hubLabel="Semana 4"
      intro="Cierra la semana traduciendo situaciones cotidianas — salarios, edades, tarifas, costos de producción — a expresiones algebraicas."
    >
      <div className="mb-12 rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">Mapa de fórmulas de la Semana 4</h2>
        <p className="mt-1 text-sm text-ink-muted">Repásalas antes de resolver los problemas finales.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {ALGEBRA_PROPERTY_LIST.map((p) => (
            <div key={p.name} className="rounded border border-line-strong bg-surface-raised px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-pine">{p.name}</span>
              <p className="mt-1 font-mono-nums text-sm text-ink">{p.example}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {NOTABLE_PRODUCTS_LIST.map((p) => (
            <div key={p.name} className="rounded border border-line-strong bg-surface-raised px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ember">{p.name}</span>
              <p className="mt-1 font-mono-nums text-sm text-ink">{p.example}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-xl text-ink">
          Problema {Math.min(current + 1, ALGEBRA_APPLICATION_PROBLEMS.length)}/{ALGEBRA_APPLICATION_PROBLEMS.length}
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
            Obtuviste {score} de {ALGEBRA_APPLICATION_PROBLEMS.length}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {score === ALGEBRA_APPLICATION_PROBLEMS.length
              ? '¡Excelente! Completaste la Semana 4 con un puntaje perfecto.'
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
