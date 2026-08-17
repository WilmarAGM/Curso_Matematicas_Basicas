import { useMemo, useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import {
  ALGEBRA_CLASSIFY_ITEMS,
  ALGEBRA_INTRO_PROBLEMS,
  ALGEBRA_KIND_LABELS,
  MODULES_SEMANA4,
  type AlgebraKind,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

const KINDS: AlgebraKind[] = ['monomio', 'binomio', 'trinomio', 'polinomio']

const KIND_COLOR: Record<AlgebraKind, { hover: string; correct: string }> = {
  monomio: { hover: 'hover:border-pine hover:text-pine', correct: 'border-pine bg-pine/15 text-pine' },
  binomio: { hover: 'hover:border-leaf hover:text-leaf', correct: 'border-leaf bg-leaf/15 text-leaf' },
  trinomio: { hover: 'hover:border-ember hover:text-ember', correct: 'border-ember bg-ember/15 text-ember' },
  polinomio: { hover: 'hover:border-warm hover:text-warm', correct: 'border-warm bg-warm/15 text-warm' },
}

interface Module16Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module16AlgebraExpr({ onNavigate, onDone }: Module16Props) {
  const [answers, setAnswers] = useState<Record<number, AlgebraKind>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})
  const order = useMemo(() => ALGEBRA_CLASSIFY_ITEMS, [])

  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = ALGEBRA_INTRO_PROBLEMS[current]
  const isLast = current === ALGEBRA_INTRO_PROBLEMS.length - 1

  const maybeDone = (rev: Record<number, boolean>, quizDone: boolean) => {
    if (Object.keys(rev).length === order.length && quizDone) onDone()
  }

  const choose = (i: number, kind: AlgebraKind) => {
    if (revealed[i]) return
    setAnswers((a) => ({ ...a, [i]: kind }))
    setRevealed((r) => {
      const next = { ...r, [i]: true }
      maybeDone(next, finished)
      return next
    })
  }

  const pick = (i: number) => {
    if (choice !== null) return
    setChoice(i)
    if (i === q.answerIndex) setScore((s) => s + 1)
  }

  const advance = () => {
    if (isLast) {
      setFinished(true)
      maybeDone(revealed, true)
      return
    }
    setCurrent((c) => c + 1)
    setChoice(null)
  }

  const correctCount = order.filter((it, i) => revealed[i] && answers[i] === it.kind).length
  const attempted = Object.keys(revealed).length

  return (
    <ModuleShell
      id="expresionesAlgebraicas"
      eyebrow="Módulo 01"
      title="Expresiones Algebraicas"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA4}
      hubId="semana4"
      hubLabel="Semana 4"
      prevFallback={{ id: 'semana4', label: 'Semana 4' }}
      intro={
        <>
          Una <strong>variable</strong> es una letra que representa a cualquier número de un conjunto
          dado. Al combinar variables y números reales con suma, resta, multiplicación, división,
          potencias y raíces, obtenemos una <strong>expresión algebraica</strong>. Un{' '}
          <strong>monomio</strong> tiene un solo término (ax^k); según el número de términos, la
          expresión se llama binomio, trinomio o, en general, polinomio. El grado es el mayor
          exponente de la variable.
        </>
      }
    >
      <div className="mt-2">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Clasifica cada expresión</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            {correctCount}/{attempted} correctas
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {order.map((item, i) => (
            <div key={item.display} className="rounded border border-line bg-surface p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono-nums text-lg text-ink">{item.display}</span>
                <div className="flex flex-wrap gap-2">
                  {KINDS.map((k) => {
                    const isChosen = answers[i] === k
                    const isRevealed = revealed[i]
                    const isCorrectKind = k === item.kind
                    const c = KIND_COLOR[k]
                    return (
                      <button
                        key={k}
                        onClick={() => choose(i, k)}
                        disabled={isRevealed}
                        className={cn(
                          'rounded border px-3 py-1.5 text-sm font-medium transition',
                          !isRevealed && cn('border-line-strong text-ink', c.hover),
                          isRevealed && isCorrectKind && c.correct,
                          isRevealed && isChosen && !isCorrectKind && 'border-danger bg-danger/10 text-danger',
                          isRevealed && !isChosen && !isCorrectKind && 'border-line text-ink-muted opacity-50',
                        )}
                      >
                        {ALGEBRA_KIND_LABELS[k]}
                      </button>
                    )
                  })}
                </div>
              </div>
              {revealed[i] && (
                <p className={cn('mt-3 animate-in fade-in text-sm leading-relaxed', answers[i] === item.kind ? 'text-pine' : 'text-danger')}>
                  {answers[i] === item.kind ? 'Correcto — ' : `Incorrecto, es ${ALGEBRA_KIND_LABELS[item.kind]} — `}
                  {item.explain}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Traduce el lenguaje verbal a expresiones algebraicas</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, ALGEBRA_INTRO_PROBLEMS.length)}/{ALGEBRA_INTRO_PROBLEMS.length}
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
              Obtuviste {score} de {ALGEBRA_INTRO_PROBLEMS.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === ALGEBRA_INTRO_PROBLEMS.length
                ? 'Excelente, dominas la traducción de expresiones algebraicas.'
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
