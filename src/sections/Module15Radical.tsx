import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { MODULES_SEMANA3, RADICAL_EXAMPLES, RADICAL_WORD_PROBLEMS, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module15Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module15Radical({ onNavigate, onDone }: Module15Props) {
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = RADICAL_WORD_PROBLEMS[current]
  const isLast = current === RADICAL_WORD_PROBLEMS.length - 1

  const maybeDone = (radChecked: Record<number, boolean>, quizFinished: boolean) => {
    if (Object.keys(radChecked).length === RADICAL_EXAMPLES.length && quizFinished) onDone()
  }

  const check = (i: number) => {
    setChecked((c) => {
      const next = { ...c, [i]: true }
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
      maybeDone(checked, true)
      return
    }
    setCurrent((c) => c + 1)
    setChoice(null)
  }

  return (
    <ModuleShell
      id="radicacion"
      eyebrow="Módulo 05"
      title="Radicación"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA3}
      hubId="semana3"
      hubLabel="Semana 3"
      intro={
        <>
          La expresión <sup>b</sup>√(cᵃ) representa la raíz n-ésima principal de c: b es el índice
          del radical y cᵃ es el radicando. Para convertir un radical en potencia: <sup>b</sup>√(cᵃ)
          = c^(a/b). Con índice impar, la raíz de un número negativo también es negativa.
        </>
      }
    >
      <div className="mt-2">
        <h2 className="font-display text-xl text-ink">Resuelve los radicales</h2>
        <p className="mt-1 mb-5 text-sm text-ink-muted">Ingresa el resultado (coeficiente entero) de cada radical.</p>
        <div className="flex flex-col gap-3">
          {RADICAL_EXAMPLES.map((it, i) => {
            const value = inputs[i] ?? ''
            const done = checked[i]
            const correct = Number(value) === it.ansNum
            return (
              <div key={it.display} className="rounded border border-line bg-surface p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono-nums text-lg text-ink">{it.display} =</span>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setInputs((v) => ({ ...v, [i]: e.target.value }))}
                    disabled={done}
                    placeholder="resultado"
                    className="w-24 rounded border border-line-strong bg-surface px-2 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine disabled:opacity-60"
                  />
                  <button
                    onClick={() => check(i)}
                    disabled={done || value === ''}
                    className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
                  >
                    Verificar
                  </button>
                </div>
                {done && (
                  <p className={cn('mt-3 animate-in fade-in text-sm leading-relaxed', correct ? 'text-pine' : 'text-danger')}>
                    {correct ? 'Correcto — ' : `Incorrecto, es ${it.ansNum} — `}
                    {it.explain}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Problemas de razonamiento con radicación</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, RADICAL_WORD_PROBLEMS.length)}/{RADICAL_WORD_PROBLEMS.length}
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
              Obtuviste {score} de {RADICAL_WORD_PROBLEMS.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === RADICAL_WORD_PROBLEMS.length
                ? 'Excelente, dominas la radicación y sus aplicaciones.'
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
