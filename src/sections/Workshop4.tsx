import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  EXPRESIONES_CLASIFICA,
  EXPRESIONES_COMPUTE,
  PROPIEDADES,
  POLINOMIOS,
  PRODUCTOS_NOTABLES,
  APLICACIONES,
  WORKSHOP4_TOTAL_ITEMS,
  type AlgClassifyExercise,
  type AlgComputeExercise,
  type AlgebraKind4,
} from '@/data/workshop4'

const STORAGE_KEY = 'taller4-progreso-v1'

interface Workshop4Props {
  onNavigate: (id: string) => void
}

function useWorkshopProgress() {
  const [done, setDone] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setDone(JSON.parse(raw))
    } catch {
      // sin almacenamiento disponible
    }
  }, [])

  const markDone = (key: string) => {
    setDone((prev) => {
      if (prev[key]) return prev
      const next = { ...prev, [key]: true }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // ignorar
      }
      return next
    })
  }

  return { done, markDone }
}

export function Workshop4({ onNavigate }: Workshop4Props) {
  const { done, markDone } = useWorkshopProgress()
  const doneCount = Object.keys(done).length
  const pct = Math.min(100, Math.round((doneCount / WORKSHOP4_TOTAL_ITEMS) * 100))

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={() => onNavigate('talleres')}
        className="text-sm text-ink-muted transition hover:text-ink"
      >
        ← Talleres
      </button>

      <p className="mt-4 font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">Taller 4 · Nivel alto</p>
      <h1 className="mt-2 font-display text-4xl text-ink">
        Expresiones Algebraicas, Polinomios y Productos Notables
      </h1>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        {WORKSHOP4_TOTAL_ITEMS} ejercicios de exigencia alta que integran toda la temática de la
        Semana 4: expresiones algebraicas, propiedades, operaciones con polinomios (suma, resta,
        producto y división) y productos notables. Cada ejercicio pide construir la expresión
        correcta y evaluarla o extraer un coeficiente — verifica tu respuesta al instante y revisa
        la solución paso a paso.
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-warm transition-[width]" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-mono-nums text-sm text-ink-muted">
          {doneCount}/{WORKSHOP4_TOTAL_ITEMS} completados
        </span>
      </div>

      <Section title="Parte I · Expresiones Algebraicas" subtitle="Clasificación por número de términos y traducción de lenguaje verbal a expresiones.">
        <div className="grid gap-4">
          {EXPRESIONES_CLASIFICA.map((ex) => (
            <ClassifyCard key={ex.id} ex={ex} done={Boolean(done[`c4-${ex.id}`])} onSolve={() => markDone(`c4-${ex.id}`)} />
          ))}
          {EXPRESIONES_COMPUTE.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`c4-${ex.id}`])} onSolve={() => markDone(`c4-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte II · Propiedades de las Expresiones Algebraicas" subtitle="Distributiva, agrupación de semejantes, inverso, asociativa y conmutativa.">
        <div className="grid gap-4">
          {PROPIEDADES.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`c4-${ex.id}`])} onSolve={() => markDone(`c4-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte III · Operaciones con Polinomios" subtitle="Suma, resta, producto y división — extrae coeficientes o evalúa el resultado.">
        <div className="grid gap-4">
          {POLINOMIOS.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`c4-${ex.id}`])} onSolve={() => markDone(`c4-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte IV · Productos Notables" subtitle="Cuadrado y cubo de un binomio, suma por diferencia, trinomio cuadrado y diferencia de cubos.">
        <div className="grid gap-4">
          {PRODUCTOS_NOTABLES.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`c4-${ex.id}`])} onSolve={() => markDone(`c4-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte V · Aplicaciones con Productos Notables" subtitle="Geometría, finanzas y situaciones cotidianas modeladas con álgebra.">
        <div className="grid gap-4">
          {APLICACIONES.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`c4-${ex.id}`])} onSolve={() => markDone(`c4-${ex.id}`)} />
          ))}
        </div>
      </Section>

      {pct === 100 && (
        <div className="animate-in fade-in mt-10 rounded-xl border border-pine bg-pine/10 p-6 text-center">
          <p className="font-display text-lg text-pine">¡Taller completado! 🎉</p>
          <p className="mt-1 text-sm text-ink-muted">Resolviste los {WORKSHOP4_TOTAL_ITEMS} ítems del Taller 4.</p>
        </div>
      )}
    </div>
  )
}

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="mt-12">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <p className="mt-1 mb-5 text-sm text-ink-muted">{subtitle}</p>
      {children}
    </div>
  )
}

function ExerciseBadge({ id, correct }: { id: number; correct: boolean }) {
  return (
    <span
      className={cn(
        'flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono-nums text-xs font-medium',
        correct ? 'bg-pine text-pine-foreground' : 'bg-surface-raised text-ink-muted',
      )}
    >
      {correct ? '✓' : id}
    </span>
  )
}

function ComputeCard({ ex, done, onSolve }: { ex: AlgComputeExercise; done: boolean; onSolve: () => void }) {
  const [guess, setGuess] = useState('')
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const correct = guess !== '' && Number(guess) === ex.answer

  const verify = () => {
    setChecked(true)
    if (correct) onSolve()
  }

  return (
    <div className={cn('rounded border bg-surface p-5', done ? 'border-pine' : 'border-line')}>
      <div className="flex items-start gap-3">
        <ExerciseBadge id={ex.id} correct={done} />
        <p className="text-[15px] leading-relaxed text-ink">{ex.statement}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 pl-10">
        <input
          type="number"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value)
            setChecked(false)
          }}
          placeholder="Resultado"
          className="w-32 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
        />
        <button
          onClick={verify}
          disabled={guess === ''}
          className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
        >
          Verificar
        </button>
        <button
          onClick={() => setRevealed((r) => !r)}
          className="text-xs text-ink-muted underline decoration-dotted hover:text-ink"
        >
          {revealed ? 'Ocultar solución' : 'Ver solución paso a paso'}
        </button>
        {checked && (
          <span className={cn('text-sm font-medium', correct ? 'text-pine' : 'text-danger')}>
            {correct ? '✓ Correcto' : '✗ Incorrecto, intenta de nuevo'}
          </span>
        )}
      </div>

      {revealed && (
        <div className="animate-in fade-in mt-4 ml-10 flex flex-col gap-1.5 border-t border-line pt-4 font-mono-nums text-sm text-ink-muted">
          {ex.steps.map((s, i) => (
            <p key={i} className={i === ex.steps.length - 1 ? 'text-pine' : undefined}>
              {s}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

const KINDS: AlgebraKind4[] = ['monomio', 'binomio', 'trinomio', 'polinomio']
const KIND_LABELS: Record<AlgebraKind4, string> = {
  monomio: 'Monomio',
  binomio: 'Binomio',
  trinomio: 'Trinomio',
  polinomio: 'Polinomio',
}

function ClassifyCard({ ex, done, onSolve }: { ex: AlgClassifyExercise; done: boolean; onSolve: () => void }) {
  const [choice, setChoice] = useState<AlgebraKind4 | null>(null)

  const choose = (k: AlgebraKind4) => {
    if (choice) return
    setChoice(k)
    if (k === ex.kind) onSolve()
  }

  return (
    <div className={cn('rounded border bg-surface p-5', done ? 'border-pine' : 'border-line')}>
      <div className="flex items-start gap-3">
        <ExerciseBadge id={ex.id} correct={done} />
        <span className="font-mono-nums text-lg text-ink">{ex.statement}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 pl-10">
        {KINDS.map((k) => {
          const isChosen = choice === k
          const isAnswer = k === ex.kind
          return (
            <button
              key={k}
              onClick={() => choose(k)}
              disabled={!!choice}
              className={cn(
                'rounded border px-3 py-1.5 text-sm font-medium transition',
                !choice && 'border-line-strong text-ink hover:border-pine hover:text-pine',
                choice && isAnswer && 'border-pine bg-pine/15 text-pine',
                choice && isChosen && !isAnswer && 'border-danger bg-danger/10 text-danger',
                choice && !isChosen && !isAnswer && 'border-line text-ink-muted opacity-50',
              )}
            >
              {KIND_LABELS[k]}
            </button>
          )
        })}
      </div>

      {choice && (
        <p className={cn('animate-in fade-in mt-3 ml-10 text-sm leading-relaxed', choice === ex.kind ? 'text-pine' : 'text-danger')}>
          {choice === ex.kind ? 'Correcto — ' : `Incorrecto, es ${KIND_LABELS[ex.kind]} — `}
          {ex.explain}
        </p>
      )}
    </div>
  )
}
