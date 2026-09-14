import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { GEOMETRIC_APPLICATION_QUIZ, MODULES_SEMANA6, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module30Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module30GeometricApplications({ onNavigate, onDone }: Module30Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = GEOMETRIC_APPLICATION_QUIZ[current]
  const isLast = current === GEOMETRIC_APPLICATION_QUIZ.length - 1

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
      id="aplicacionesGeometricas"
      eyebrow="Módulo 05"
      title="Aplicaciones Geométricas"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA6}
      hubId="semana6"
      hubLabel="Semana 6"
      intro="Cierra la Semana 6 (y la unidad de factorización) resolviendo problemas de áreas y triángulos que se modelan con ecuaciones cuadráticas y se resuelven factorizando."
    >
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-xl text-ink">
          Problema {Math.min(current + 1, GEOMETRIC_APPLICATION_QUIZ.length)}/{GEOMETRIC_APPLICATION_QUIZ.length}
        </h2>
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
            Obtuviste {score} de {GEOMETRIC_APPLICATION_QUIZ.length}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {score === GEOMETRIC_APPLICATION_QUIZ.length
              ? '¡Excelente! Completaste la Semana 6 con un puntaje perfecto.'
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
