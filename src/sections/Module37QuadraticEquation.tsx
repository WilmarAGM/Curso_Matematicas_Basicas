import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { MODULES_SEMANA8, QUADRATIC_EQ_QUIZ, QUADRATIC_EQ_STEPS, QUADRATIC_FORMULA, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module37Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module37QuadraticEquation({ onNavigate, onDone }: Module37Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = QUADRATIC_EQ_QUIZ[current]
  const isLast = current === QUADRATIC_EQ_QUIZ.length - 1

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
      id="ecuacionCuadratica"
      eyebrow="Módulo 02"
      title="Ecuación Cuadrática"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA8}
      hubId="semana8"
      hubLabel="Semana 8"
      intro="Una ecuación cuadrática tiene la forma ax² + bx + c = 0, con a ≠ 0. Se puede resolver factorizando, o con la fórmula general — deducida completando el cuadrado."
    >
      <div className="rounded border border-line bg-surface p-6 text-center">
        <p className="font-mono-nums text-xl text-pine">{QUADRATIC_FORMULA}</p>
        <p className="mt-2 text-sm text-ink-muted">
          Esta fórmula se obtiene despejando x de ax²+bx+c=0 mediante el método de completar el
          cuadrado (visto en Semana 6) — funciona para cualquier ecuación cuadrática, incluso las que
          no se pueden factorizar por ensayo y error.
        </p>
      </div>

      <div className="mt-8">
        <StepBlock title="Ejemplo: 2x² + 8x − 24 = 0" steps={QUADRATIC_EQ_STEPS} accent="leaf" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: resuelve la ecuación cuadrática</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, QUADRATIC_EQ_QUIZ.length)}/{QUADRATIC_EQ_QUIZ.length}
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
              Obtuviste {score} de {QUADRATIC_EQ_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === QUADRATIC_EQ_QUIZ.length
                ? 'Excelente, dominas la ecuación cuadrática.'
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
      </div>
    </ModuleShell>
  )
}
