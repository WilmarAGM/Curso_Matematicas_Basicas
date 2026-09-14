import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import {
  COMPLEX_NUMBER_TABLE,
  DISCRIMINANT_CASES,
  DISCRIMINANT_QUIZ,
  IMAGINARY_STEPS,
  MODULES_SEMANA8,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module38Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module38DiscriminantComplex({ onNavigate, onDone }: Module38Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = DISCRIMINANT_QUIZ[current]
  const isLast = current === DISCRIMINANT_QUIZ.length - 1

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
      id="discriminanteComplejos"
      eyebrow="Módulo 03"
      title="Discriminante y Números Complejos"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA8}
      hubId="semana8"
      hubLabel="Semana 8"
      intro="El término b² − 4ac de la fórmula cuadrática se llama discriminante: determina cuántas soluciones reales tiene la ecuación, sin necesidad de resolverla completamente."
    >
      <div className="rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">Los tres casos del discriminante</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {DISCRIMINANT_CASES.map((c) => (
            <div key={c.condition} className="rounded border border-line-strong bg-surface-raised px-4 py-3 text-center">
              <span className="block font-mono-nums text-base text-pine">{c.condition}</span>
              <span className="mt-1 block text-xs text-ink-muted">{c.result}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <StepBlock title="Números imaginarios: √(−12)" steps={IMAGINARY_STEPS} accent="ember" />
      </div>

      <div className="mt-10 overflow-x-auto rounded border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-surface-raised text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-4 py-3">Término</th>
              <th className="px-4 py-3">Definición</th>
              <th className="px-4 py-3">Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            {COMPLEX_NUMBER_TABLE.map((row) => (
              <tr key={row.term} className="border-t border-line">
                <td className="px-4 py-3 font-medium text-ink">{row.term}</td>
                <td className="px-4 py-3 text-ink-muted">{row.def}</td>
                <td className="px-4 py-3 font-mono-nums text-ink">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: calcula y clasifica el discriminante</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, DISCRIMINANT_QUIZ.length)}/{DISCRIMINANT_QUIZ.length}
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
              Obtuviste {score} de {DISCRIMINANT_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === DISCRIMINANT_QUIZ.length
                ? 'Excelente, dominas el discriminante y los números complejos.'
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
