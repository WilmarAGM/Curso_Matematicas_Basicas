import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { FACTOR_COMUN_QUIZ, FACTOR_COMUN_STEPS, FACTOR_GROUP_STEPS, MODULES_SEMANA5, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module22Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module22FactorComun({ onNavigate, onDone }: Module22Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = FACTOR_COMUN_QUIZ[current]
  const isLast = current === FACTOR_COMUN_QUIZ.length - 1

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
      id="factorComun"
      eyebrow="Módulo 02"
      title="Factor Común y Agrupación"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA5}
      hubId="semana5"
      hubLabel="Semana 5"
      intro={
        <>
          Factorizar es el proceso inverso de expandir: convertir un polinomio en un producto de
          factores más simples. El <strong>factor común</strong> busca los elementos que se repiten en
          todos los términos — tanto en los coeficientes como en las variables con su menor exponente.
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <StepBlock title="Factor común: 3x² − 6x" steps={FACTOR_COMUN_STEPS} accent="pine" />
        <StepBlock title="Factor común por agrupación: a² + ab + ax + bx" steps={FACTOR_GROUP_STEPS} accent="leaf" />
      </div>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted">
        La agrupación se usa cuando el polinomio tiene <strong>cuatro términos</strong> sin un factor
        común a todos: se agrupan de dos en dos, se saca el factor común de cada pareja y, si ambos
        grupos comparten el mismo binomio, ese binomio se convierte en el nuevo factor común.
      </p>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: factoriza</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, FACTOR_COMUN_QUIZ.length)}/{FACTOR_COMUN_QUIZ.length}
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
              Obtuviste {score} de {FACTOR_COMUN_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === FACTOR_COMUN_QUIZ.length
                ? 'Excelente, dominas el factor común y la agrupación.'
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
