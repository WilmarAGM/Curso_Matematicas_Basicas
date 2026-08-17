import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import {
  MODULES_SEMANA4,
  POLY_ADD_STEPS,
  POLY_PRODUCT_STEPS,
  POLY_SUB_STEPS,
  POLY_WORD_PROBLEMS,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module18Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

function StepBlock({ title, steps }: { title: string; steps: { label: string; expr: string }[] }) {
  const [step, setStep] = useState(0)
  return (
    <div className="rounded border border-line bg-surface p-5">
      <h2 className="font-display text-lg text-ink">{title}</h2>
      <div className="mt-4 flex flex-col gap-2">
        {steps.slice(0, step + 1).map((s) => (
          <div key={s.label} className="animate-in fade-in slide-in-from-bottom-1 rounded border border-line bg-surface-raised p-3 duration-300">
            <span className="text-xs uppercase tracking-wide text-warm">{s.label}</span>
            <p className="mt-1 font-mono-nums text-base text-ink">{s.expr}</p>
          </div>
        ))}
      </div>
      {step < steps.length - 1 && (
        <button
          onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          className="mt-4 rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
        >
          Siguiente paso →
        </button>
      )}
    </div>
  )
}

export function Module18PolyOps({ onNavigate, onDone }: Module18Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = POLY_WORD_PROBLEMS[current]
  const isLast = current === POLY_WORD_PROBLEMS.length - 1

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
      id="operacionesPolinomios"
      eyebrow="Módulo 03"
      title="Operaciones con Polinomios"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA4}
      hubId="semana4"
      hubLabel="Semana 4"
      intro="Sea P(x) = x³ − 6x² + 2x + 4 y Q(x) = 6x² + 2x + 4. Sumamos y restamos agrupando términos semejantes; multiplicamos aplicando la propiedad distributiva."
    >
      <div className="flex flex-col gap-6">
        <StepBlock title="Adición: P(x) + Q(x)" steps={POLY_ADD_STEPS} />
        <StepBlock title="Sustracción: P(x) − Q(x)" steps={POLY_SUB_STEPS} />
        <StepBlock title="Producto: P(x) · Q(x)" steps={POLY_PRODUCT_STEPS} />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: operaciones con polinomios</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, POLY_WORD_PROBLEMS.length)}/{POLY_WORD_PROBLEMS.length}
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
              Obtuviste {score} de {POLY_WORD_PROBLEMS.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === POLY_WORD_PROBLEMS.length
                ? 'Excelente, dominas las operaciones con polinomios.'
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
