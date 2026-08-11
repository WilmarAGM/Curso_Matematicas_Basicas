import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { PEMDAS_PRACTICE, PEMDAS_RULES, PEMDAS_WORKED_STEPS, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module3Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module3Pemdas({ onNavigate, onDone }: Module3Props) {
  const [step, setStep] = useState(0)
  const [inputs, setInputs] = useState<Record<number, string>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const revealNext = () => {
    setStep((s) => Math.min(s + 1, PEMDAS_WORKED_STEPS.length - 1))
    if (step + 1 === PEMDAS_WORKED_STEPS.length - 1) onDone()
  }

  const check = (i: number) => setChecked((c) => ({ ...c, [i]: true }))

  return (
    <ModuleShell
      id="pemdas"
      eyebrow="Módulo 03"
      title="Jerarquía de Operaciones (PEMDAS)"
      onNavigate={onNavigate}
      intro="Cuando una expresión combina varias operaciones, el orden en que se resuelven no es opcional: sigue una jerarquía fija."
    >
      <ol className="flex flex-col gap-2">
        {PEMDAS_RULES.map((r, i) => (
          <li key={r} className="flex gap-3 rounded border border-line bg-surface p-3">
            <span className="font-mono-nums text-sm text-warm">{i + 1}</span>
            <span className="text-sm leading-relaxed text-ink">{r}</span>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Ejemplo resuelto, paso a paso</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Presiona "Siguiente paso" para revelar la resolución de{' '}
          <span className="font-mono-nums">13 − {'{'}2 + [6 + 3 − (8 + 7)]{'}'}</span>
        </p>

        <div className="mt-5 flex flex-col gap-2">
          {PEMDAS_WORKED_STEPS.slice(0, step + 1).map((s) => (
            <div
              key={s.label}
              className="animate-in fade-in slide-in-from-bottom-1 rounded border border-line bg-surface p-4 duration-300"
            >
              <span className="text-xs uppercase tracking-wide text-warm">{s.label}</span>
              <p className="mt-1 font-mono-nums text-lg text-ink">{s.expr}</p>
            </div>
          ))}
        </div>

        {step < PEMDAS_WORKED_STEPS.length - 1 && (
          <button
            onClick={revealNext}
            className="mt-4 rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
          >
            Siguiente paso →
          </button>
        )}
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Ahora practica tú</h2>
        <p className="mt-1 mb-5 text-sm text-ink-muted">
          Resuelve cada expresión aplicando la jerarquía de operaciones e ingresa el resultado.
        </p>
        <div className="flex flex-col gap-4">
          {PEMDAS_PRACTICE.map((p, i) => {
            const value = inputs[i] ?? ''
            const isChecked = checked[i]
            const isCorrect = Number(value) === p.answer
            return (
              <div key={p.expr} className="rounded border border-line bg-surface p-4">
                <p className="font-mono-nums text-lg text-ink">{p.expr}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setInputs((v) => ({ ...v, [i]: e.target.value }))}
                    placeholder="Resultado"
                    className="w-32 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
                  />
                  <button
                    onClick={() => check(i)}
                    disabled={value === ''}
                    className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
                  >
                    Verificar
                  </button>
                  {isChecked && (
                    <span className={cn('text-sm font-medium', isCorrect ? 'text-pine' : 'text-danger')}>
                      {isCorrect ? '✓ Correcto' : `✗ El resultado correcto es ${p.answer}`}
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </ModuleShell>
  )
}
