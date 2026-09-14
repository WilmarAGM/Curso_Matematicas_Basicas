import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import {
  ABS_DISTANCE_QUIZ,
  ABS_INEQ_CASES,
  ABS_INEQ_STEPS,
  ABS_VALUE_PROPERTIES,
  DISTANCE_FORMULA,
  MODULES_SEMANA11,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module55Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module55AbsValueDistance({ onNavigate, onDone }: Module55Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = ABS_DISTANCE_QUIZ[current]
  const isLast = current === ABS_DISTANCE_QUIZ.length - 1

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
      id="valorAbsolutoDistancia"
      eyebrow="Módulo 05"
      title="Valor Absoluto y Distancia"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA11}
      hubId="semana11"
      hubLabel="Semana 11"
      intro="El valor absoluto de a, |a|, es la distancia desde a hasta 0 en la recta numérica — siempre positiva o cero. Cierra la Semana 11 y sienta las bases para las inecuaciones de la próxima semana."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-ink">Propiedades del valor absoluto</h2>
          <div className="mt-4 flex flex-col gap-3">
            {ABS_VALUE_PROPERTIES.map((p) => (
              <div key={p.rule} className="rounded border border-line-strong bg-surface-raised px-4 py-3">
                <span className="font-mono-nums text-sm text-pine">{p.rule}</span>
                <p className="mt-1 text-xs text-ink-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-ink">Distancia entre dos puntos</h2>
          <p className="mt-2 text-center font-mono-nums text-xl text-leaf">{DISTANCE_FORMULA}</p>
          <p className="mt-4 text-sm text-ink-muted">Modelos para resolver desigualdades con valor absoluto:</p>
          <div className="mt-3 flex flex-col gap-2">
            {ABS_INEQ_CASES.map((c) => (
              <div key={c.modelo} className="flex items-center justify-between rounded border border-line-strong bg-surface-raised px-3 py-2 font-mono-nums text-sm">
                <span className="text-ember">{c.modelo}</span>
                <span className="text-ink">{c.solucion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <StepBlock title="Ejemplo: |x − 3| ≤ 2" steps={ABS_INEQ_STEPS} accent="warm" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, ABS_DISTANCE_QUIZ.length)}/{ABS_DISTANCE_QUIZ.length}
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
              Obtuviste {score} de {ABS_DISTANCE_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === ABS_DISTANCE_QUIZ.length
                ? '¡Excelente! Completaste la Semana 11 con un puntaje perfecto.'
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
