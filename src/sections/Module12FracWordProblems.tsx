import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { FRACTION_WORD_PROBLEMS, MODULES_SEMANA3, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module12Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module12FracWordProblems({ onNavigate, onDone }: Module12Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = FRACTION_WORD_PROBLEMS[current]
  const isLast = current === FRACTION_WORD_PROBLEMS.length - 1

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
      id="aplicacionFracciones"
      eyebrow="Módulo 02"
      title="Problemas con Fraccionarios"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA3}
      hubId="semana3"
      hubLabel="Semana 3"
      intro="Antes de resolver ejercicios de aplicación, conviene traducir el lenguaje verbal al matemático: la suma de X y Y es X+Y, el doble de un número x es 2x, la cuarta parte de la suma de x e y es (1/4)(x+y), etc. Con esa base, resuelve estos problemas con fraccionarios."
    >
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-xl text-ink">Problema {Math.min(current + 1, FRACTION_WORD_PROBLEMS.length)}/{FRACTION_WORD_PROBLEMS.length}</h2>
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
            Obtuviste {score} de {FRACTION_WORD_PROBLEMS.length}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {score === FRACTION_WORD_PROBLEMS.length
              ? 'Excelente, dominas los problemas de aplicación con fraccionarios.'
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
    </ModuleShell>
  )
}
