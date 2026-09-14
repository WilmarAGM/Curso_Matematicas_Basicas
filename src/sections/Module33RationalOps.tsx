import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import {
  MODULES_SEMANA7,
  RATIONAL_ADD_STEPS,
  RATIONAL_DIV_STEPS,
  RATIONAL_MULT_STEPS,
  RATIONAL_OPS_QUIZ,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module33Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module33RationalOps({ onNavigate, onDone }: Module33Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = RATIONAL_OPS_QUIZ[current]
  const isLast = current === RATIONAL_OPS_QUIZ.length - 1

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
      id="operacionesRacionales"
      eyebrow="Módulo 03"
      title="Operaciones con Expresiones Racionales"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA7}
      hubId="semana7"
      hubLabel="Semana 7"
      intro="Las expresiones racionales (fracciones de polinomios) se suman, restan, multiplican y dividen igual que las fracciones numéricas — la clave está en factorizar primero para encontrar el mínimo común múltiplo o simplificar."
    >
      <div className="flex flex-col gap-6">
        <StepBlock title="Adición (mismo denominador)" steps={RATIONAL_ADD_STEPS} accent="pine" />
        <div className="grid gap-6 lg:grid-cols-2">
          <StepBlock title="Producto" steps={RATIONAL_MULT_STEPS} accent="leaf" />
          <StepBlock title="División" steps={RATIONAL_DIV_STEPS} accent="ember" />
        </div>
      </div>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted">
        Recomendación de la guía: <strong>factoriza siempre primero</strong> — numerador y denominador —
        antes de sumar, multiplicar o dividir. Así puedes cancelar factores comunes y trabajar con
        expresiones mucho más simples.
      </p>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: simplifica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, RATIONAL_OPS_QUIZ.length)}/{RATIONAL_OPS_QUIZ.length}
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
              Obtuviste {score} de {RATIONAL_OPS_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === RATIONAL_OPS_QUIZ.length
                ? 'Excelente, dominas las operaciones con expresiones racionales.'
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
