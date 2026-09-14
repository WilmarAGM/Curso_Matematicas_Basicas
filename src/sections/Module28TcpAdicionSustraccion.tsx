import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { MODULES_SEMANA6, TCPAS_QUIZ, TCPAS_STEPS, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module28Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module28TcpAdicionSustraccion({ onNavigate, onDone }: Module28Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = TCPAS_QUIZ[current]
  const isLast = current === TCPAS_QUIZ.length - 1

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
      id="tcpAdicionSustraccion"
      eyebrow="Módulo 03"
      title="TCP por Adición y Sustracción"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA6}
      hubId="semana6"
      hubLabel="Semana 6"
      intro={
        <>
          Un caso especial: el primer y último término tienen raíz cuadrada exacta, pero al término
          medio le falta (o le sobra) algo para ser un TCP completo. La estrategia: <strong>sumamos y
          restamos</strong> la cantidad que falta — así no alteramos la expresión — y queda un TCP menos
          una diferencia de cuadrados.
        </>
      }
    >
      <StepBlock title="Ejemplo: a⁴ + a² + 1" steps={TCPAS_STEPS} accent="ember" />

      <div className="mt-8 rounded border border-line bg-surface-raised/40 p-4 text-sm text-ink-muted">
        💡 <strong className="text-ink">Idea clave:</strong> sumar y restar el mismo término es como sumar
        cero — no cambia el valor de la expresión, pero reorganiza los términos para revelar un TCP
        escondido detrás de una diferencia de cuadrados.
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: completa el TCP</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, TCPAS_QUIZ.length)}/{TCPAS_QUIZ.length}
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
              Obtuviste {score} de {TCPAS_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === TCPAS_QUIZ.length
                ? 'Excelente, dominas el TCP por adición y sustracción.'
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
