import { useEffect, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import {
  COMBINADAS,
  SECUENCIAS,
  MCD_MCM_DIRECTO,
  MCM_APLICACION,
  MCD_APLICACION,
  WORKSHOP1_TOTAL_ITEMS,
  type ComputeExercise,
  type SequenceExercise,
  type WordExercise,
} from '@/data/workshop1'

const STORAGE_KEY = 'taller1-progreso-v1'

interface Workshop1Props {
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

export function Workshop1({ onNavigate }: Workshop1Props) {
  const { done, markDone } = useWorkshopProgress()
  const doneCount = Object.keys(done).length
  const pct = Math.min(100, Math.round((doneCount / WORKSHOP1_TOTAL_ITEMS) * 100))

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button
        onClick={() => onNavigate('talleres')}
        className="text-sm text-ink-muted transition hover:text-ink"
      >
        ← Talleres
      </button>

      <p className="mt-4 font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">Taller 1</p>
      <h1 className="mt-2 font-display text-4xl text-ink">
        Operaciones Combinadas, Secuencias y M.C.D./M.C.M.
      </h1>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        Resuelve cada ejercicio y verifica tu respuesta al instante. Si te quedas atascado, revisa la
        solución paso a paso — tu progreso se guarda automáticamente en este dispositivo.
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div className="h-1.5 w-56 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-warm transition-[width]" style={{ width: `${pct}%` }} />
        </div>
        <span className="font-mono-nums text-sm text-ink-muted">
          {doneCount}/{WORKSHOP1_TOTAL_ITEMS} completados
        </span>
      </div>

      <Section title="Parte I · Operaciones Combinadas" subtitle="Aplica la jerarquía de operaciones de adentro hacia afuera.">
        <div className="grid gap-4">
          {COMBINADAS.map((ex) => (
            <ComputeCard key={ex.id} ex={ex} done={Boolean(done[`compute-${ex.id}`])} onSolve={() => markDone(`compute-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte I · Secuencias Numéricas" subtitle="Encuentra el patrón que forma cada secuencia.">
        <div className="grid gap-4">
          {SECUENCIAS.map((ex) => (
            <SequenceCard key={ex.id} ex={ex} done={done} markDone={markDone} />
          ))}
        </div>
      </Section>

      <Section title="Parte II · M.C.D. y M.C.M. — Cálculo Directo" subtitle="Descompón en factores primos y compara.">
        <div className="grid gap-4">
          {MCD_MCM_DIRECTO.map((ex) => (
            <WordCard key={ex.id} ex={ex} done={Boolean(done[`word-${ex.id}`])} onSolve={() => markDone(`word-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte II · Problemas de Aplicación (M.C.M.)" subtitle="Situaciones de encuentros o coincidencias periódicas.">
        <div className="grid gap-4">
          {MCM_APLICACION.map((ex) => (
            <WordCard key={ex.id} ex={ex} done={Boolean(done[`word-${ex.id}`])} onSolve={() => markDone(`word-${ex.id}`)} />
          ))}
        </div>
      </Section>

      <Section title="Parte II · Problemas de Aplicación (M.C.D.)" subtitle="Situaciones de reparto o corte exacto.">
        <div className="grid gap-4">
          {MCD_APLICACION.map((ex) => (
            <WordCard key={ex.id} ex={ex} done={Boolean(done[`word-${ex.id}`])} onSolve={() => markDone(`word-${ex.id}`)} />
          ))}
        </div>
      </Section>

      {pct === 100 && (
        <div className="animate-in fade-in mt-10 rounded-xl border border-pine bg-pine/10 p-6 text-center">
          <p className="font-display text-lg text-pine">¡Taller completado! 🎉</p>
          <p className="mt-1 text-sm text-ink-muted">Resolviste los {WORKSHOP1_TOTAL_ITEMS} ítems del Taller 1.</p>
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

function ComputeCard({ ex, done, onSolve }: { ex: ComputeExercise; done: boolean; onSolve: () => void }) {
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
        <p className="font-mono-nums text-base leading-relaxed text-ink">{ex.statement}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
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
            {correct ? '✓ Correcto' : `✗ Incorrecto, intenta de nuevo`}
          </span>
        )}
      </div>

      {revealed && (
        <div className="animate-in fade-in mt-4 flex flex-col gap-1.5 border-t border-line pt-4 font-mono-nums text-sm text-ink-muted">
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

function SequenceCard({
  ex,
  done,
  markDone,
}: {
  ex: SequenceExercise
  done: Record<string, boolean>
  markDone: (key: string) => void
}) {
  const [answers, setAnswers] = useState<string[]>(ex.questions.map(() => ''))
  const [checked, setChecked] = useState<boolean[]>(ex.questions.map(() => false))
  const [revealed, setRevealed] = useState(false)

  const allDone = ex.questions.every((_, i) => done[`seq-${ex.id}-${i}`])

  const verify = (i: number) => {
    const correct = Number(answers[i]) === ex.questions[i].answer
    setChecked((c) => c.map((v, idx) => (idx === i ? true : v)))
    if (correct) markDone(`seq-${ex.id}-${i}`)
  }

  return (
    <div className={cn('rounded border bg-surface p-5', allDone ? 'border-pine' : 'border-line')}>
      <div className="flex items-start gap-3">
        <ExerciseBadge id={ex.id} correct={allDone} />
        <div className="flex flex-wrap items-center gap-2 font-mono-nums text-lg text-ink">
          {ex.sequence.map((n, i) => (
            <span key={i} className="rounded bg-surface-raised px-2.5 py-1">
              {n}
            </span>
          ))}
          <span className="text-ink-muted">…</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 pl-10">
        {ex.questions.map((q, i) => {
          const correct = Number(answers[i]) === q.answer
          return (
            <div key={i} className="flex flex-wrap items-center gap-3">
              <p className="min-w-[16rem] text-sm text-ink-muted">{q.prompt}</p>
              <input
                type="number"
                value={answers[i]}
                onChange={(e) => {
                  const copy = [...answers]
                  copy[i] = e.target.value
                  setAnswers(copy)
                  setChecked((c) => c.map((v, idx) => (idx === i ? false : v)))
                }}
                className="w-28 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
                placeholder="Respuesta"
              />
              <button
                onClick={() => verify(i)}
                disabled={answers[i] === ''}
                className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
              >
                Verificar
              </button>
              {checked[i] && (
                <span className={cn('text-sm font-medium', correct ? 'text-pine' : 'text-danger')}>
                  {correct ? '✓ Correcto' : `✗ Es ${q.answer}`}
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div className="pl-10">
        <button
          onClick={() => setRevealed((r) => !r)}
          className="mt-3 text-xs text-ink-muted underline decoration-dotted hover:text-ink"
        >
          {revealed ? 'Ocultar explicación del patrón' : 'Ver explicación del patrón'}
        </button>
        {revealed && (
          <p className="animate-in fade-in mt-2 text-sm leading-relaxed text-ink-muted">{ex.patternExplain}</p>
        )}
      </div>
    </div>
  )
}

function WordCard({ ex, done, onSolve }: { ex: WordExercise; done: boolean; onSolve: () => void }) {
  const [guess, setGuess] = useState('')
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const correct = guess !== '' && Number(guess) === ex.targetValue

  const verify = () => {
    setChecked(true)
    if (correct) onSolve()
  }

  return (
    <div className={cn('rounded border bg-surface p-5', done ? 'border-pine' : 'border-line')}>
      <div className="flex items-start gap-3">
        <ExerciseBadge id={ex.id} correct={done} />
        <div>
          <p className="font-medium text-ink">{ex.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{ex.statement}</p>
          <p className="mt-2 font-mono-nums text-sm text-ink-muted">
            Números: {ex.numbers.join(', ')} · calcula el{' '}
            <strong className="text-ink">{ex.mode === 'mcm' ? 'M.C.M.' : 'M.C.D.'}</strong>
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 pl-10">
        <input
          type="number"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value)
            setChecked(false)
          }}
          placeholder={ex.mode === 'mcm' ? 'M.C.M.' : 'M.C.D.'}
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
            <p key={i}>{s}</p>
          ))}
          <p className="mt-2 font-body text-pine">{ex.finalAnswer}</p>
        </div>
      )}
    </div>
  )
}
