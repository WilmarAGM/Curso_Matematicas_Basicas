import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { INTERVAL_NOTATION, INTERVAL_QUIZ, INTERVAL_UNION_STEPS, MODULES_SEMANA11, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module54Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module54Intervals({ onNavigate, onDone }: Module54Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = INTERVAL_QUIZ[current]
  const isLast = current === INTERVAL_QUIZ.length - 1

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
      id="intervalos"
      eyebrow="Módulo 04"
      title="La Recta Numérica: Intervalos"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA11}
      hubId="semana11"
      hubLabel="Semana 11"
      intro="Un intervalo es un conjunto de números reales representado como un segmento de la recta numérica. La unión (∪) junta los elementos de ambos conjuntos; la intersección (∩) toma solo lo común."
    >
      <div className="overflow-x-auto rounded border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-raised text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-4 py-3">Notación</th>
              <th className="px-4 py-3">Conjunto</th>
              <th className="px-4 py-3">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {INTERVAL_NOTATION.map((row) => (
              <tr key={row.notation} className="border-t border-line">
                <td className="px-4 py-3 font-mono-nums text-pine">{row.notation}</td>
                <td className="px-4 py-3 font-mono-nums text-ink">{row.set}</td>
                <td className="px-4 py-3 text-ink-muted">{row.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10">
        <StepBlock title="Unión e intersección: A=(1,3), B=[2,7], C=[−2,1]" steps={INTERVAL_UNION_STEPS} accent="leaf" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, INTERVAL_QUIZ.length)}/{INTERVAL_QUIZ.length}
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
              Obtuviste {score} de {INTERVAL_QUIZ.length}
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
