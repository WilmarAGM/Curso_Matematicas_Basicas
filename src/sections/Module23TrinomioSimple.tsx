import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { MODULES_SEMANA5, TRINOMIO_SIMPLE_QUIZ, TRINOMIO_SIMPLE_STEPS, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module23Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module23TrinomioSimple({ onNavigate, onDone }: Module23Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = TRINOMIO_SIMPLE_QUIZ[current]
  const isLast = current === TRINOMIO_SIMPLE_QUIZ.length - 1

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
      id="trinomioSimple"
      eyebrow="Módulo 03"
      title="Trinomio de la forma x² + bx + c"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA5}
      hubId="semana5"
      hubLabel="Semana 5"
      intro={
        <>
          Se resuelve por ensayo y error: buscamos dos números que, multiplicados, den el término
          independiente <strong>c</strong>, y que, sumados (o restados), den el coeficiente del término
          medio <strong>b</strong>. Conviene descomponer c en sus factores primos para probar combinaciones.
        </>
      }
    >
      <StepBlock title="Ejemplo: x² + 7x + 12" steps={TRINOMIO_SIMPLE_STEPS} accent="pine" />

      <div className="mt-8 rounded border border-line bg-surface-raised/40 p-4 text-sm text-ink-muted">
        💡 <strong className="text-ink">Tip:</strong> si c es positivo, ambos números tienen el mismo
        signo que b. Si c es negativo, los números tienen signos distintos y el mayor (en valor
        absoluto) lleva el signo de b.
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: factoriza el trinomio</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, TRINOMIO_SIMPLE_QUIZ.length)}/{TRINOMIO_SIMPLE_QUIZ.length}
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
                  {isLast ? 'Ver resultado' : 'Siguiente problema →'}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded border border-line bg-surface p-6 text-center">
            <p className="font-display text-2xl text-ink">
              Obtuviste {score} de {TRINOMIO_SIMPLE_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === TRINOMIO_SIMPLE_QUIZ.length
                ? 'Excelente, dominas el trinomio x² + bx + c.'
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
