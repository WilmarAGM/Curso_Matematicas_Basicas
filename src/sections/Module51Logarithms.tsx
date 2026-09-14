import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { LOG_DEFINITION, LOG_EXPAND_STEPS, LOG_PROPERTIES, LOG_QUIZ, LOG_TO_POWER_STEPS, MODULES_SEMANA11, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module51Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module51Logarithms({ onNavigate, onDone }: Module51Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = LOG_QUIZ[current]
  const isLast = current === LOG_QUIZ.length - 1

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
      id="logaritmos"
      eyebrow="Módulo 01"
      title="Logaritmos"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA11}
      hubId="semana11"
      hubLabel="Semana 11"
      prevFallback={{ id: 'semana11', label: 'Semana 11' }}
      intro={
        <>
          Un logaritmo es el exponente al que hay que elevar una base para obtener un número dado.{' '}
          <strong className="font-mono-nums">{LOG_DEFINITION}</strong>. Los logaritmos con base 10 se
          llaman comunes; con base e (número Euler), naturales — y se escriben ln.
        </>
      }
    >
      <StepBlock title="Convertir logaritmos en potencias" steps={LOG_TO_POWER_STEPS} accent="pine" />

      <div className="mt-10 rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">Propiedades de los logaritmos</h2>
        <p className="mt-1 text-sm text-ink-muted">Para toda base B &gt; 0, B ≠ 1, y números positivos M, N.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {LOG_PROPERTIES.map((p) => (
            <div key={p.name} className="rounded border border-line-strong bg-surface-raised px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ember">{p.name}</span>
              <p className="mt-1 font-mono-nums text-sm text-ink">{p.rule}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <StepBlock title="Ejemplo: expande log_a(x³√y / z²)" steps={LOG_EXPAND_STEPS} accent="leaf" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, LOG_QUIZ.length)}/{LOG_QUIZ.length}
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
              Obtuviste {score} de {LOG_QUIZ.length}
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
