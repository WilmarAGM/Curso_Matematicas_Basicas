import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { PATTERN_MAIN, PATTERN_PRACTICE, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module4Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module4Patterns({ onNavigate, onDone }: Module4Props) {
  const [guess, setGuess] = useState('')
  const [hintLevel, setHintLevel] = useState(0)
  const [solved, setSolved] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const tryGuess = () => {
    if (Number(guess) === PATTERN_MAIN.next) {
      setSolved(true)
      onDone()
    } else {
      setHintLevel((h) => Math.min(h + 1, 2))
    }
  }

  return (
    <ModuleShell
      id="patrones"
      eyebrow="Módulo 04"
      title="Análisis de Patrones Numéricos"
      onNavigate={onNavigate}
      intro="Un patrón numérico es una secuencia de números formada por una regla específica. Reconocerlo es cuestión de comparar términos consecutivos."
    >
      <div className="rounded border border-line bg-surface p-6">
        <p className="text-sm text-ink-muted">Analiza la secuencia y predice el siguiente número:</p>
        <div className="mt-3 flex flex-wrap items-center gap-2 font-mono-nums text-2xl text-ink">
          {PATTERN_MAIN.sequence.map((n) => (
            <span key={n} className="rounded bg-surface-raised px-3 py-1.5">
              {n}
            </span>
          ))}
          <span className="px-2 text-ink-muted">→</span>
          <span className="rounded border-2 border-dashed border-warm px-3 py-1.5 text-warm">?</span>
        </div>

        {!solved ? (
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-3">
              <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Tu respuesta"
                className="w-36 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
              />
              <button
                onClick={tryGuess}
                disabled={guess === ''}
                className="rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90 disabled:opacity-40"
              >
                Comprobar
              </button>
            </div>

            {hintLevel > 0 && (
              <div className="mt-4 flex flex-col gap-2 text-sm text-ink-muted">
                <p className="animate-in fade-in">
                  Pista 1 — Calcula la diferencia entre cada par de términos consecutivos.
                </p>
                {hintLevel > 1 && (
                  <p className="animate-in fade-in font-mono-nums">
                    Pista 2 — Las diferencias son: {PATTERN_MAIN.diffs.slice(0, hintLevel).join(', ')}...
                    ¿qué tipo de números son?
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in mt-6 rounded border-l-2 border-pine bg-pine/5 p-4">
            <p className="font-medium text-pine">¡Correcto! El siguiente número es 38.</p>
            <div className="mt-3 flex flex-wrap gap-3 font-mono-nums text-sm text-ink">
              <span>6−3=3</span>
              <span>11−6=5</span>
              <span>18−11=7</span>
              <span>27−18=9</span>
            </div>
            <p className="mt-2 text-sm text-ink-muted">
              El patrón suma una secuencia de números impares consecutivos (+3, +5, +7, +9…), así que
              27 + 11 = 38.
            </p>
          </div>
        )}

        {!solved && (
          <button
            onClick={() => setRevealed(true)}
            className="mt-4 text-xs text-ink-muted underline decoration-dotted hover:text-ink"
          >
            Mostrar solución
          </button>
        )}
        {revealed && !solved && (
          <p className="animate-in fade-in mt-3 text-sm text-ink-muted">
            Las diferencias son 3, 5, 7, 9 (impares consecutivos), así que el siguiente salto es +11:
            27 + 11 = <strong className="text-ink">38</strong>.
          </p>
        )}
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Practica con otras secuencias</h2>
        <div className="mt-5 flex flex-col gap-4">
          {PATTERN_PRACTICE.map((p) => (
            <PracticeRow key={p.sequence.join(',')} pattern={p} />
          ))}
        </div>
      </div>
    </ModuleShell>
  )
}

function PracticeRow({ pattern }: { pattern: (typeof PATTERN_PRACTICE)[number] }) {
  const [guess, setGuess] = useState('')
  const [checked, setChecked] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const correct = Number(guess) === pattern.next

  return (
    <div className="rounded border border-line bg-surface p-4">
      <div className="flex flex-wrap items-center gap-2 font-mono-nums text-lg text-ink">
        {pattern.sequence.map((n) => (
          <span key={n} className="rounded bg-surface-raised px-2 py-1">
            {n}
          </span>
        ))}
        <span className="text-ink-muted">→ ?</span>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-32 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
          placeholder="Siguiente"
        />
        <button
          onClick={() => setChecked(true)}
          disabled={guess === ''}
          className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
        >
          Verificar
        </button>
        <button
          onClick={() => setShowHint(true)}
          className="text-xs text-ink-muted underline decoration-dotted hover:text-ink"
        >
          Pista
        </button>
        {checked && (
          <span className={cn('text-sm font-medium', correct ? 'text-pine' : 'text-danger')}>
            {correct ? '✓ Correcto' : `✗ Es ${pattern.next}`}
          </span>
        )}
      </div>
      {showHint && <p className="animate-in fade-in mt-2 text-sm text-ink-muted">{pattern.hint}</p>}
    </div>
  )
}
