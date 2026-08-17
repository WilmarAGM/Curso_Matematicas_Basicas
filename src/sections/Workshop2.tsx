import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  EQUIVALENTES,
  PROPIEDADES,
  TIPOS_CLASIFICA,
  TIPOS_COMPUTE,
  SUMA_RESTA,
  PRODUCTO,
  WORKSHOP2_TOTAL_ITEMS,
  type FracComputeExercise,
  type FracClassifyExercise,
} from '@/data/workshop2'

const STORAGE_KEY = 'taller2-progreso-v1'

interface Workshop2Props {
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

export function Workshop2({ onNavigate }: Workshop2Props) {
  const { done, markDone } = useWorkshopProgress()
  const doneCount = Object.keys(done).length
  const pct = Math.min(100, Math.round((doneCount / WORKSHOP2_TOTAL_ITEMS) * 100))

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={() => onNavigate('talleres')}
        className="text-sm text-ink-muted transition hover:text-ink"
      >
        ← Talleres
      </button>

      <p className="mt-4 font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">Taller 2 · Nivel alto</p>
      <h1 className="mt-2 font-display text-4xl text-ink">
        Fraccionarios: Equivalencia, Propiedades y Operaciones
      </h1>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        {WORKSHOP2_TOTAL_ITEMS} ejercicios de exigencia alta que integran toda la temática de la
        Semana 2: fracciones equivalentes, propiedades, tipos de fracciones, suma y resta
        (homogéneas, heterogéneas y mixtas) y producto de fraccionarios. Verifica tu respuesta al
        instante y revisa la solución paso a paso — tu progreso se guarda automáticamente.
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-warm transition-[width]" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-mono-nums text-sm text-ink-muted">
          {doneCount}/{WORKSHOP2_TOTAL_ITEMS} completados
        </span>
      </div>

      <Section title="Parte I · Fracciones Equivalentes" subtitle="Aplica ad = bc para hallar valores desconocidos o simplificar a la mínima expresión.">
        <div className="grid gap-4">
          {EQUIVALENTES.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`compute-${ex.id}`])} onSolve={() => markDone(`compute-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte II · Propiedades de las Fracciones" subtitle="Igualdad, fracción negativa, multiplicación, simplificación y suma/resta.">
        <div className="grid gap-4">
          {PROPIEDADES.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`compute-${ex.id}`])} onSolve={() => markDone(`compute-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte III · Tipos de Fracciones" subtitle="Clasifica y convierte entre fracciones mixtas e impropias.">
        <div className="grid gap-4">
          {TIPOS_CLASIFICA.map((ex) => (
            <ClassifyCard key={ex.id} ex={ex} done={Boolean(done[`classify-${ex.id}`])} onSolve={() => markDone(`classify-${ex.id}`)} />
          ))}
          {TIPOS_COMPUTE.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`compute-${ex.id}`])} onSolve={() => markDone(`compute-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte IV · Suma y Resta de Fraccionarios" subtitle="Homogéneas, heterogéneas y mixtas, con signos combinados.">
        <div className="grid gap-4">
          {SUMA_RESTA.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`compute-${ex.id}`])} onSolve={() => markDone(`compute-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte V · Producto de Fraccionarios" subtitle="Productos encadenados, fracciones mixtas y un problema de aplicación.">
        <div className="grid gap-4">
          {PRODUCTO.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`compute-${ex.id}`])} onSolve={() => markDone(`compute-${ex.id}`)} />
          ))}
        </div>
      </Section>

      {pct === 100 && (
        <div className="animate-in fade-in mt-10 rounded-xl border border-pine bg-pine/10 p-6 text-center">
          <p className="font-display text-lg text-pine">¡Taller completado! 🎉</p>
          <p className="mt-1 text-sm text-ink-muted">Resolviste los {WORKSHOP2_TOTAL_ITEMS} ítems del Taller 2.</p>
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

function ComputeCard({ ex, done, onSolve }: { ex: FracComputeExercise; done: boolean; onSolve: () => void }) {
  const [num, setNum] = useState('')
  const [den, setDen] = useState(ex.ansDen === 1 ? '1' : '')
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const isInteger = ex.ansDen === 1
  const nInput = Number(num)
  const dInput = Number(den)
  const correct =
    num !== '' &&
    den !== '' &&
    dInput !== 0 &&
    nInput * ex.ansDen === ex.ansNum * dInput

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
          value={num}
          onChange={(e) => {
            setNum(e.target.value)
            setChecked(false)
          }}
          placeholder={isInteger ? 'Resultado' : 'num'}
          className="w-24 rounded border border-line-strong bg-surface px-3 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine"
        />
        {!isInteger && (
          <>
            <span className="text-ink-muted">/</span>
            <input
              type="number"
              value={den}
              onChange={(e) => {
                setDen(e.target.value)
                setChecked(false)
              }}
              placeholder="den"
              className="w-24 rounded border border-line-strong bg-surface px-3 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine"
            />
          </>
        )}
        <button
          onClick={verify}
          disabled={num === '' || den === ''}
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

const KINDS: FracClassifyExercise['kind'][] = ['propia', 'impropia', 'mixta']
const KIND_LABELS: Record<FracClassifyExercise['kind'], string> = {
  propia: 'Propia',
  impropia: 'Impropia',
  mixta: 'Mixta',
}

function ClassifyCard({ ex, done, onSolve }: { ex: FracClassifyExercise; done: boolean; onSolve: () => void }) {
  const [choice, setChoice] = useState<FracClassifyExercise['kind'] | null>(null)

  const choose = (k: FracClassifyExercise['kind']) => {
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
