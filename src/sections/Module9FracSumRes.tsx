import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import {
  HETEROGENEAS_PRACTICE,
  HETEROGENEAS_STEPS,
  HOMOGENEAS_PRACTICE,
  HOMOGENEAS_STEPS,
  MODULES_SEMANA2,
  type FracPractice,
  type SectionId,
} from '@/data/content'
import { cn } from '@/lib/utils'

interface Module9Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

function PracticeList({
  items,
  inputs,
  setInputs,
  checked,
  onCheck,
}: {
  items: FracPractice[]
  inputs: Record<number, { num: string; den: string }>
  setInputs: (fn: (v: Record<number, { num: string; den: string }>) => Record<number, { num: string; den: string }>) => void
  checked: Record<number, boolean>
  onCheck: (i: number) => void
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((p, i) => {
        const v = inputs[i] ?? { num: '', den: '' }
        const done = checked[i]
        const correct = Number(v.num) * p.ansDen === p.ansNum * Number(v.den) && v.den !== '' && Number(v.den) !== 0
        return (
          <div key={p.label} className="rounded border border-line bg-surface p-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono-nums text-lg text-ink">
                {p.aNum}/{p.aDen} {p.op} {p.bNum}/{p.bDen} =
              </span>
              <input
                type="number"
                value={v.num}
                onChange={(e) => setInputs((prev) => ({ ...prev, [i]: { ...(prev[i] ?? { num: '', den: '' }), num: e.target.value } }))}
                disabled={done}
                placeholder="num"
                className="w-16 rounded border border-line-strong bg-surface px-2 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine disabled:opacity-60"
              />
              <span className="text-ink-muted">/</span>
              <input
                type="number"
                value={v.den}
                onChange={(e) => setInputs((prev) => ({ ...prev, [i]: { ...(prev[i] ?? { num: '', den: '' }), den: e.target.value } }))}
                disabled={done}
                placeholder="den"
                className="w-16 rounded border border-line-strong bg-surface px-2 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine disabled:opacity-60"
              />
              <button
                onClick={() => onCheck(i)}
                disabled={done || v.num === '' || v.den === ''}
                className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
              >
                Verificar
              </button>
              {done && (
                <span className={cn('text-sm font-medium', correct ? 'text-pine' : 'text-danger')}>
                  {correct ? '✓ Correcto' : `✗ Es ${p.ansNum}/${p.ansDen}`}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function Module9FracSumRes({ onNavigate, onDone }: Module9Props) {
  const [stepH, setStepH] = useState(0)
  const [stepHet, setStepHet] = useState(0)

  const [homInputs, setHomInputs] = useState<Record<number, { num: string; den: string }>>({})
  const [homChecked, setHomChecked] = useState<Record<number, boolean>>({})
  const [hetInputs, setHetInputs] = useState<Record<number, { num: string; den: string }>>({})
  const [hetChecked, setHetChecked] = useState<Record<number, boolean>>({})

  const maybeDone = (hom: Record<number, boolean>, het: Record<number, boolean>) => {
    if (Object.keys(hom).length === HOMOGENEAS_PRACTICE.length && Object.keys(het).length === HETEROGENEAS_PRACTICE.length) {
      onDone()
    }
  }

  return (
    <ModuleShell
      id="sumaResta"
      eyebrow="Módulo 04"
      title="Suma y Resta de Fraccionarios"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA2}
      hubId="semana2"
      hubLabel="Semana 2"
      intro="Cuando los fraccionarios tienen el mismo denominador (homogéneas) se suman o restan directamente los numeradores. Cuando el denominador es distinto (heterogéneas), se usa a/b ± c/d = (ad ± bc)/bd, o el mcm de los denominadores si son grandes."
    >
      <div className="rounded border border-line bg-surface p-5">
        <h2 className="font-display text-lg text-ink">Fracciones homogéneas</h2>
        <p className="mt-1 text-sm text-ink-muted">Se suman o restan los numeradores y se conserva el denominador.</p>
        <div className="mt-4 flex flex-col gap-2">
          {HOMOGENEAS_STEPS.slice(0, stepH + 1).map((s) => (
            <div key={s.label} className="animate-in fade-in slide-in-from-bottom-1 rounded border border-line bg-surface-raised p-3 duration-300">
              <span className="text-xs uppercase tracking-wide text-warm">{s.label}</span>
              <p className="mt-1 font-mono-nums text-lg text-ink">{s.expr}</p>
            </div>
          ))}
        </div>
        {stepH < HOMOGENEAS_STEPS.length - 1 && (
          <button
            onClick={() => setStepH((s) => Math.min(s + 1, HOMOGENEAS_STEPS.length - 1))}
            className="mt-4 rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
          >
            Siguiente paso →
          </button>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-ink">Practica: homogéneas</h3>
        <p className="mt-1 mb-4 text-sm text-ink-muted">Ingresa el resultado y simplifícalo si es posible.</p>
        <PracticeList
          items={HOMOGENEAS_PRACTICE}
          inputs={homInputs}
          setInputs={setHomInputs}
          checked={homChecked}
          onCheck={(i) =>
            setHomChecked((c) => {
              const next = { ...c, [i]: true }
              maybeDone(next, hetChecked)
              return next
            })
          }
        />
      </div>

      <div className="mt-12 rounded border border-line bg-surface p-5">
        <h2 className="font-display text-lg text-ink">Fracciones heterogéneas</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Con denominadores pequeños, aplica (a/b) ± (c/d) = (ad ± bc)/bd. Con denominadores grandes,
          usa el mcm de los denominadores.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          {HETEROGENEAS_STEPS.slice(0, stepHet + 1).map((s) => (
            <div key={s.label} className="animate-in fade-in slide-in-from-bottom-1 rounded border border-line bg-surface-raised p-3 duration-300">
              <span className="text-xs uppercase tracking-wide text-warm">{s.label}</span>
              <p className="mt-1 font-mono-nums text-lg text-ink">{s.expr}</p>
            </div>
          ))}
        </div>
        {stepHet < HETEROGENEAS_STEPS.length - 1 && (
          <button
            onClick={() => setStepHet((s) => Math.min(s + 1, HETEROGENEAS_STEPS.length - 1))}
            className="mt-4 rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90"
          >
            Siguiente paso →
          </button>
        )}
      </div>

      <div className="mt-6">
        <h3 className="font-medium text-ink">Practica: heterogéneas</h3>
        <p className="mt-1 mb-4 text-sm text-ink-muted">Ingresa el resultado (puede ser negativo).</p>
        <PracticeList
          items={HETEROGENEAS_PRACTICE}
          inputs={hetInputs}
          setInputs={setHetInputs}
          checked={hetChecked}
          onCheck={(i) =>
            setHetChecked((c) => {
              const next = { ...c, [i]: true }
              maybeDone(homChecked, next)
              return next
            })
          }
        />
      </div>
    </ModuleShell>
  )
}
