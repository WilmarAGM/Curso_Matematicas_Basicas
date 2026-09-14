import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import {
  MODULES_SEMANA9,
  SYS_3X3_EQUALIZATION_STEPS,
  SYS_3X3_QUIZ,
  SYS_3X3_SUBSTITUTION_STEPS,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module43Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module43Sys3x3Sub({ onNavigate, onDone }: Module43Props) {
  const [current, setCurrent] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = SYS_3X3_QUIZ[current]
  const isLast = current === SYS_3X3_QUIZ.length - 1

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
      id="sistema3x3SustitucionIgualacion"
      eyebrow="Módulo 03"
      title="Sistema 3x3: Sustitución e Igualación"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA9}
      hubId="semana9"
      hubLabel="Semana 9"
      intro="Con tres incógnitas usamos los mismos métodos que en 2x2, pero en varias rondas: primero reducimos el sistema 3x3 a uno 2x2, y luego resolvemos como ya sabemos. No se recomienda el método gráfico (requeriría 3 dimensiones)."
    >
      <p className="mb-6 max-w-prose text-sm leading-relaxed text-ink-muted">
        Ejemplo guía: un número de tres cifras cuya suma es 15; las centenas más las unidades es el
        doble de las decenas; y el número original más 594 invierte sus cifras. Esto produce el sistema:
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        <StepBlock title="Sustitución" steps={SYS_3X3_SUBSTITUTION_STEPS} accent="pine" />
        <StepBlock title="Igualación" steps={SYS_3X3_EQUALIZATION_STEPS} accent="leaf" />
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: resuelve el sistema 3x3</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            Problema {Math.min(current + 1, SYS_3X3_QUIZ.length)}/{SYS_3X3_QUIZ.length}
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
              Obtuviste {score} de {SYS_3X3_QUIZ.length}
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              {score === SYS_3X3_QUIZ.length
                ? 'Excelente, dominas la sustitución e igualación en 3x3.'
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
