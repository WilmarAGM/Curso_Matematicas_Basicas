import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { MODULES_SEMANA6, TCP_CONDITIONS, TCP_QUIZ, TCP_STEPS, TCP_STEPS_2, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module26Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module26TCP({ onNavigate, onDone }: Module26Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = TCP_QUIZ[current]
  const isLast = current === TCP_QUIZ.length - 1

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
      id="trinomioCuadradoPerfecto"
      eyebrow="Módulo 01"
      title="Trinomio Cuadrado Perfecto"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA6}
      hubId="semana6"
      hubLabel="Semana 6"
      prevFallback={{ id: 'semana6', label: 'Semana 6' }}
      intro="Este caso corresponde al producto notable del cuadrado de un binomio, pero ahora lo reconocemos al revés: partimos del trinomio y volvemos al binomio."
    >
      <div className="rounded border border-line bg-surface p-6">
        <h2 className="font-display text-lg text-ink">¿Cómo reconocer un TCP?</h2>
        <ol className="mt-3 flex flex-col gap-2">
          {TCP_CONDITIONS.map((c, i) => (
            <li key={c} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pine/15 text-xs font-bold text-pine">
                {i + 1}
              </span>
              {c}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <StepBlock title="Ejemplo: x² + 6x + 9" steps={TCP_STEPS} accent="pine" />
        <StepBlock title="Ejemplo: 4x² − 4xy + y²" steps={TCP_STEPS_2} accent="leaf" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: ¿es TCP? factorízalo</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, TCP_QUIZ.length)}/{TCP_QUIZ.length}
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
              Obtuviste {score} de {TCP_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === TCP_QUIZ.length
                ? 'Excelente, dominas el trinomio cuadrado perfecto.'
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
