import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { MODULES_SEMANA10, NONLINEAR_CASE2_QUIZ, NONLINEAR_CASE2_STEPS, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module47Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module47NonlinearCase2({ onNavigate, onDone }: Module47Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = NONLINEAR_CASE2_QUIZ[current]
  const isLast = current === NONLINEAR_CASE2_QUIZ.length - 1

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
      id="noLinealCaso2"
      eyebrow="Módulo 02"
      title="Caso 2: Ambas Ecuaciones No Lineales"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA10}
      hubId="semana10"
      hubLabel="Semana 10"
      intro="Cuando ambas ecuaciones son cuadráticas, el método de reducción suele ser el más rápido: sumar o restar las ecuaciones para eliminar una variable al cuadrado."
    >
      <StepBlock title="Ejemplo: x² + y² = 41, x² − y² = 9" steps={NONLINEAR_CASE2_STEPS} accent="leaf" />

      <div className="mt-8 rounded border border-line bg-surface-raised/40 p-4 text-sm text-ink-muted">
        💡 <strong className="text-ink">Cuidado con los signos:</strong> como x² = 25 tiene dos raíces
        (x=5 y x=−5) y y² = 16 también (y=4 y y=−4), el sistema puede tener hasta 4 soluciones —
        combina cada signo de x con cada signo de y.
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, NONLINEAR_CASE2_QUIZ.length)}/{NONLINEAR_CASE2_QUIZ.length}
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
              Obtuviste {score} de {NONLINEAR_CASE2_QUIZ.length}
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
