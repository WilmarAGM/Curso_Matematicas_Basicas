import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { EXP_EQ_BASE_STEPS, EXP_EQ_STEPS, EXP_LOG_QUIZ, LOG_EQ_STEPS, MODULES_SEMANA11, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module52Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module52ExpLogEquations({ onNavigate, onDone }: Module52Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = EXP_LOG_QUIZ[current]
  const isLast = current === EXP_LOG_QUIZ.length - 1

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
      id="ecuacionesExpLog"
      eyebrow="Módulo 02"
      title="Ecuaciones Exponenciales y Logarítmicas"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA11}
      hubId="semana11"
      hubLabel="Semana 11"
      intro="Estrategias clave: reescribe una forma como la otra, iguala bases cuando sea posible, o aplica logaritmo (o ln) a ambos lados cuando las bases sean distintas."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <StepBlock title="Igualando bases: 3^x = 27" steps={EXP_EQ_STEPS} accent="pine" />
        <StepBlock title="Convirtiendo a la misma base: 2^(x−3) = 8^(x+1)" steps={EXP_EQ_BASE_STEPS} accent="leaf" />
      </div>
      <div className="mt-10">
        <StepBlock title="Aplicando ln: e^(10k) = 7" steps={LOG_EQ_STEPS} accent="ember" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, EXP_LOG_QUIZ.length)}/{EXP_LOG_QUIZ.length}
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
              Obtuviste {score} de {EXP_LOG_QUIZ.length}
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
