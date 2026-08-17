import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { MODULES_SEMANA4, NOTABLE_PRODUCTS_LIST, NOTABLE_PRODUCTS_QUIZ, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module19Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module19NotableProducts({ onNavigate, onDone }: Module19Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = NOTABLE_PRODUCTS_QUIZ[current]
  const isLast = current === NOTABLE_PRODUCTS_QUIZ.length - 1

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
      id="productosNotables"
      eyebrow="Módulo 04"
      title="Productos Notables"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA4}
      hubId="semana4"
      hubLabel="Semana 4"
      intro="Ciertos productos de binomios se presentan con tanta frecuencia que conviene reconocerlos de memoria, sin desarrollarlos paso a paso."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {NOTABLE_PRODUCTS_LIST.map((p) => (
          <div key={p.name} className="rounded border border-line bg-surface p-4">
            <span className="font-medium text-ink">{p.name}</span>
            <p className="mt-1 font-mono-nums text-sm text-ink-muted">{p.example}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: desarrolla y elige la opción correcta</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Pregunta {Math.min(current + 1, NOTABLE_PRODUCTS_QUIZ.length)}/{NOTABLE_PRODUCTS_QUIZ.length}
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
                  {isLast ? 'Ver resultado' : 'Siguiente pregunta →'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded border border-line bg-surface p-6 text-center">
            <p className="font-display text-2xl text-ink">
              Obtuviste {score} de {NOTABLE_PRODUCTS_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === NOTABLE_PRODUCTS_QUIZ.length
                ? 'Excelente, dominas los productos notables.'
                : 'Revisa las fórmulas de arriba y vuelve a intentarlo si quieres mejorar tu puntaje.'}
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
