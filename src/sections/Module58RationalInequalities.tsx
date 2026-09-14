import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { MODULES_SEMANA12, RATIONAL_INEQ_QUIZ, RATIONAL_INEQ_STEPS, RATIONAL_INEQ_STEPS_METHOD, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module58Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module58RationalInequalities({ onNavigate, onDone }: Module58Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = RATIONAL_INEQ_QUIZ[current]
  const isLast = current === RATIONAL_INEQ_QUIZ.length - 1

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
      id="inecuacionesRacionales"
      eyebrow="Módulo 03"
      title="Inecuaciones Racionales"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA12}
      hubId="semana12"
      hubLabel="Semana 12"
      intro="Son inecuaciones donde la variable aparece en el numerador y en el denominador. Nunca se puede pasar el denominador a multiplicar al otro lado si tiene variable — eso eliminaría una restricción."
    >
      <div className="rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">Método de los puntos críticos</h2>
        <ol className="mt-3 flex flex-col gap-2">
          {RATIONAL_INEQ_STEPS_METHOD.map((s, i) => (
            <li key={s} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine/15 text-xs font-bold text-pine">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10">
        <StepBlock title="Ejemplo: (x + 4)/(x − 2) ≥ 3" steps={RATIONAL_INEQ_STEPS} accent="leaf" />
      </div>

      <div className="mt-8 rounded border border-warm/40 bg-warm/5 p-4 text-sm text-ink-muted">
        ⚠️ <strong className="text-ink">El punto que anula el denominador siempre se excluye</strong>{' '}
        de la solución (aquí x=2), sin importar si la desigualdad es estricta o no.
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, RATIONAL_INEQ_QUIZ.length)}/{RATIONAL_INEQ_QUIZ.length}
          </span>
        </div>

        {!finished ? (
          <div className="rounded border border-line bg-surface p-6">
            <p className="text-[15px] leading-relaxed text-ink font-mono-nums">{q.prompt}</p>
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
              Obtuviste {score} de {RATIONAL_INEQ_QUIZ.length}
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
