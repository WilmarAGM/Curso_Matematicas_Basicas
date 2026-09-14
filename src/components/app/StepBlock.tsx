import { useState } from 'react'

export interface Step {
  label: string
  expr: string
}

interface StepBlockProps {
  title: string
  steps: Step[]
  accent?: 'pine' | 'leaf' | 'ember' | 'warm'
}

const ACCENT_TEXT: Record<NonNullable<StepBlockProps['accent']>, string> = {
  pine: 'text-pine',
  leaf: 'text-leaf',
  ember: 'text-ember',
  warm: 'text-warm',
}

const ACCENT_BG: Record<NonNullable<StepBlockProps['accent']>, string> = {
  pine: 'bg-pine',
  leaf: 'bg-leaf',
  ember: 'bg-ember',
  warm: 'bg-warm',
}

const ACCENT_FG: Record<NonNullable<StepBlockProps['accent']>, string> = {
  pine: 'text-pine-foreground',
  leaf: 'text-leaf-foreground',
  ember: 'text-ember-foreground',
  warm: 'text-warm-foreground',
}

export function StepBlock({ title, steps, accent = 'warm' }: StepBlockProps) {
  const [step, setStep] = useState(0)
  const done = step >= steps.length - 1

  return (
    <div className="rounded border border-line bg-surface p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-lg text-ink">{title}</h2>
        <div className="flex gap-1">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-4 rounded-full transition-colors ${
                i <= step ? ACCENT_BG[accent] : 'bg-line'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        {steps.slice(0, step + 1).map((s) => (
          <div
            key={s.label}
            className="animate-in fade-in slide-in-from-bottom-1 rounded border border-line bg-surface-raised p-3 duration-300"
          >
            <span className={`text-xs uppercase tracking-wide ${ACCENT_TEXT[accent]}`}>{s.label}</span>
            <p className="mt-1 font-mono-nums text-base text-ink">{s.expr}</p>
          </div>
        ))}
      </div>
      {!done ? (
        <button
          onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
          className={`mt-4 rounded px-4 py-2 text-sm font-medium transition hover:opacity-90 ${ACCENT_BG[accent]} ${ACCENT_FG[accent]}`}
        >
          Siguiente paso →
        </button>
      ) : (
        steps.length > 1 && (
          <button
            onClick={() => setStep(0)}
            className="mt-4 rounded border border-line-strong px-3 py-1.5 text-xs font-medium text-ink-muted transition hover:bg-surface-raised hover:text-ink"
          >
            ↺ Repetir desde el paso 1
          </button>
        )
      )}
    </div>
  )
}
