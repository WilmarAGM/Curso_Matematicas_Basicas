import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { FACTORING_METHOD_GUIDE, MODULES_SEMANA6, REPASO_FACTORIZACION_QUIZ, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module29Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module29RepasoFactorizacion({ onNavigate, onDone }: Module29Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = REPASO_FACTORIZACION_QUIZ[current]
  const isLast = current === REPASO_FACTORIZACION_QUIZ.length - 1

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
      id="repasoFactorizacion"
      eyebrow="Módulo 04"
      title="Repaso: Todos los Métodos de Factorización"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA6}
      hubId="semana6"
      hubLabel="Semana 6"
      intro="Ya conoces los cinco métodos de factorización. El reto ahora es reconocer cuál usar con solo mirar la expresión — sin que te lo digan de antemano."
    >
      <div className="mb-10 rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">Mapa de decisión completo</h2>
        <p className="mt-1 text-sm text-ink-muted">Incluye ahora el trinomio cuadrado perfecto como caso especial de 3 términos.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {FACTORING_METHOD_GUIDE.map((row) => (
            <div key={row.situation} className="rounded border border-line-strong bg-surface-raised px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-wide text-ember">{row.situation}</span>
              <p className="mt-1 text-sm text-ink">{row.method}</p>
              <p className="mt-1 font-mono-nums text-xs text-ink-muted">{row.example}</p>
            </div>
          ))}
          <div className="rounded border border-line-strong bg-surface-raised px-4 py-3 sm:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-warm">3 términos, caso especial</span>
            <p className="mt-1 text-sm text-ink">
              Si el primer y último término son cuadrados perfectos y el del medio es el doble producto de
              sus raíces: Trinomio Cuadrado Perfecto
            </p>
            <p className="mt-1 font-mono-nums text-xs text-ink-muted">x² + 6x + 9 = (x + 3)²</p>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="font-display text-xl text-ink">
          Problema {Math.min(current + 1, REPASO_FACTORIZACION_QUIZ.length)}/{REPASO_FACTORIZACION_QUIZ.length}
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
            Obtuviste {score} de {REPASO_FACTORIZACION_QUIZ.length}
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            {score === REPASO_FACTORIZACION_QUIZ.length
              ? 'Excelente, dominas todos los métodos de factorización.'
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
