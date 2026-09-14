import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import {
  ABS_INEQ_CASE1_STEPS,
  ABS_INEQ_CASE3_STEPS,
  ABS_INEQ_CASES_2,
  ABS_INEQ_QUIZ_2,
  MODULES_SEMANA12,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module57Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module57AbsInequalities({ onNavigate, onDone }: Module57Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = ABS_INEQ_QUIZ_2[current]
  const isLast = current === ABS_INEQ_QUIZ_2.length - 1

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
      id="inecuacionesValorAbsoluto"
      eyebrow="Módulo 02"
      title="Inecuaciones con Valor Absoluto"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA12}
      hubId="semana12"
      hubLabel="Semana 12"
      intro="Cuatro modelos cubren todos los casos de inecuaciones con valor absoluto — memorízalos y conviertes cada inecuación en una desigualdad simple o doble."
    >
      <div className="overflow-x-auto rounded border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-raised text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-4 py-3">Modelo</th>
              <th className="px-4 py-3">Solución</th>
              <th className="px-4 py-3">Forma</th>
            </tr>
          </thead>
          <tbody>
            {ABS_INEQ_CASES_2.map((row) => (
              <tr key={row.modelo} className="border-t border-line">
                <td className="px-4 py-3 font-mono-nums text-pine">{row.modelo}</td>
                <td className="px-4 py-3 font-mono-nums text-ink">{row.solucion}</td>
                <td className="px-4 py-3 text-ink-muted">{row.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <StepBlock title="Caso |a| < b: |3x − 7| < 1" steps={ABS_INEQ_CASE1_STEPS} accent="leaf" />
        <StepBlock title="Caso |a| > b: |3 + x| > 7" steps={ABS_INEQ_CASE3_STEPS} accent="ember" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, ABS_INEQ_QUIZ_2.length)}/{ABS_INEQ_QUIZ_2.length}
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
              Obtuviste {score} de {ABS_INEQ_QUIZ_2.length}
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
