import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { StepBlock } from '@/components/app/StepBlock'
import { DifferenceOfSquaresTiles, SquareBinomialTiles } from '@/components/app/AlgebraTiles'
import {
  CUBE_BINOMIAL_STEPS,
  DIAGONAL_AREA_STEPS,
  DIFFERENCE_SQUARES_STEPS,
  DIFF_CUBES_STEPS,
  MODULES_SEMANA4,
  NOTABLE_PRODUCTS_LIST,
  NOTABLE_PRODUCTS_QUIZ,
  SQUARE_BINOMIAL_STEPS,
  SUM_CUBES_STEPS,
  TRINOMIAL_SQUARE_STEPS,
  type SectionId,
} from '@/data/content'
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
      intro="Ciertos productos de binomios se presentan con tanta frecuencia que conviene reconocerlos de memoria. Aquí no solo memorizamos las fórmulas: las vemos geométricamente y las desarrollamos paso a paso."
    >
      <div className="mb-3 grid gap-3 sm:grid-cols-2">
        {NOTABLE_PRODUCTS_LIST.map((p) => (
          <div key={p.name} className="rounded border border-line bg-surface p-4">
            <span className="font-medium text-ink">{p.name}</span>
            <p className="mt-1 font-mono-nums text-sm text-ink-muted">{p.example}</p>
          </div>
        ))}
      </div>
      <p className="mb-10 text-xs text-ink-muted">↑ Formulario de referencia — vuelve aquí cuando lo necesites.</p>

      <div className="flex flex-col gap-10">
        <div className="rounded border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-ink">¿Por qué (a + b)² no es a² + b²?</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
            Geométricamente, (a + b)² es el área de un cuadrado de lado (a + b). Al dividirlo, aparecen
            <em> cuatro</em> regiones: el cuadrado a², dos rectángulos iguales de área ab, y el cuadrado b².
            Por eso el término del medio (2ab) existe.
          </p>
          <div className="mt-5">
            <SquareBinomialTiles sign="+" />
          </div>
          <div className="mt-6">
            <StepBlock title="Ejemplo: (x + 5)²" steps={SQUARE_BINOMIAL_STEPS} accent="pine" />
          </div>
        </div>

        <div className="rounded border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-ink">Suma por diferencia: a² − b² = (a + b)(a − b)</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
            Si le recortas una esquina cuadrada de lado b a un cuadrado de lado a, el área que queda
            (a² − b²) se puede reacomodar exactamente en un rectángulo de lados (a + b) y (a − b).
          </p>
          <div className="mt-5">
            <DifferenceOfSquaresTiles />
          </div>
          <div className="mt-6">
            <StepBlock title="Comprobación numérica" steps={DIFFERENCE_SQUARES_STEPS} accent="leaf" />
          </div>
        </div>

        <div className="rounded border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-ink">Cubo de un binomio</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
            El mismo patrón se extiende a tres dimensiones: (a − b)³ reparte el cubo a³ entre cuatro
            términos, con signos alternos porque b se resta.
          </p>
          <div className="mt-5">
            <StepBlock title="Ejemplo: (2x − 1)³" steps={CUBE_BINOMIAL_STEPS} accent="ember" />
          </div>
        </div>

        <div className="rounded border border-line bg-surface p-6">
          <h2 className="font-display text-lg text-ink">Trinomio al cuadrado</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
            Con tres términos aparecen tres cuadrados y tres dobles productos (uno por cada pareja posible).
          </p>
          <div className="mt-5">
            <StepBlock title="Ejemplo: (x + y + 9)²" steps={TRINOMIAL_SQUARE_STEPS} accent="warm" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded border border-line bg-surface p-6">
            <h2 className="font-display text-lg text-ink">Suma de cubos</h2>
            <StepBlock title="Ejemplo: 8x³ + 27y³" steps={SUM_CUBES_STEPS} accent="pine" />
          </div>
          <div className="rounded border border-line bg-surface p-6">
            <h2 className="font-display text-lg text-ink">Diferencia de cubos</h2>
            <StepBlock title="Ejemplo: 8x³ − 27y³" steps={DIFF_CUBES_STEPS} accent="leaf" />
          </div>
        </div>

        <div className="rounded border border-warm/40 bg-warm/5 p-6">
          <h2 className="font-display text-lg text-ink">Reto integrador: la diagonal y el área</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
            La diagonal de un rectángulo mide x cm y el largo es 2 cm más que el ancho. Este problema
            combina el teorema de Pitágoras con el cuadrado de un binomio para hallar el área.
          </p>
          <div className="mt-5">
            <StepBlock title="Área del rectángulo en función de x" steps={DIAGONAL_AREA_STEPS} accent="warm" />
          </div>
        </div>
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
