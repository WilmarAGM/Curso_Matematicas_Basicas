import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import {
  DIVISION_PROOF_STEPS,
  DIVISION_QUIZ,
  LONG_DIVISION_STEPS,
  MODULES_SEMANA5,
  SYNTHETIC_DIVISION_STEPS,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module21Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module21DivisionPoly({ onNavigate, onDone }: Module21Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = DIVISION_QUIZ[current]
  const isLast = current === DIVISION_QUIZ.length - 1

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
      id="divisionPolinomios"
      eyebrow="Módulo 01"
      title="División de Polinomios"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA5}
      hubId="semana5"
      hubLabel="Semana 5"
      prevFallback={{ id: 'semana5', label: 'Semana 5' }}
      intro={
        <>
          Si f(x) y p(x) son polinomios y p(x) ≠ 0, existen polinomios únicos q(x) y r(x) tales que{' '}
          <strong>f(x) = p(x) · q(x) + r(x)</strong>, donde r(x) = 0 o el grado de r(x) es menor que el
          de p(x). q(x) es el cociente y r(x) el residuo.
        </>
      }
    >
      <div className="rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">Los cuatro términos de la división</h2>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 font-mono-nums text-sm">
          <div className="rounded border border-line-strong bg-surface-raised px-4 py-3 text-center">
            <span className="block text-lg font-bold text-pine">D</span>
            <span className="text-ink-muted">Dividendo</span>
          </div>
          <div className="rounded border border-line-strong bg-surface-raised px-4 py-3 text-center">
            <span className="block text-lg font-bold text-leaf">d</span>
            <span className="text-ink-muted">Divisor</span>
          </div>
          <div className="rounded border border-line-strong bg-surface-raised px-4 py-3 text-center">
            <span className="block text-lg font-bold text-ember">C</span>
            <span className="text-ink-muted">Cociente</span>
          </div>
          <div className="rounded border border-line-strong bg-surface-raised px-4 py-3 text-center">
            <span className="block text-lg font-bold text-warm">R</span>
            <span className="text-ink-muted">Residuo</span>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-ink-muted">
          Propiedades: grado(C) = grado(D) − grado(d) · grado(d) &gt; grado(R) · grado máximo de R = grado(d) − 1.
        </p>
      </div>

      <div className="mt-10">
        <StepBlock title="Prueba de la división: 17 ÷ 5" steps={DIVISION_PROOF_STEPS} accent="pine" />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <StepBlock title="División larga (Euclidiana)" steps={LONG_DIVISION_STEPS} accent="leaf" />
        <StepBlock title="División sintética (Ruffini)" steps={SYNTHETIC_DIVISION_STEPS} accent="ember" />
      </div>
      <p className="mt-3 text-xs text-ink-muted">
        La división sintética solo funciona cuando el divisor tiene grado 1 (forma x − a). Para divisores de
        grado 2 o más, se usa división larga.
      </p>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: cociente y residuo</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, DIVISION_QUIZ.length)}/{DIVISION_QUIZ.length}
          </span>
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
              Obtuviste {score} de {DIVISION_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === DIVISION_QUIZ.length
                ? 'Excelente, dominas la división de polinomios.'
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
