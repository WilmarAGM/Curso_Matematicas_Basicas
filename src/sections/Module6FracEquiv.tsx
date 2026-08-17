import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { MODULES_SEMANA2, SIMPLIFY_ITEMS, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module6Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module6FracEquiv({ onNavigate, onDone }: Module6Props) {
  const [inputs, setInputs] = useState<Record<number, { num: string; den: string }>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const setVal = (i: number, field: 'num' | 'den', value: string) => {
    setInputs((v) => ({ ...v, [i]: { ...(v[i] ?? { num: '', den: '' }), [field]: value } }))
  }

  const check = (i: number) => {
    setChecked((c) => {
      const next = { ...c, [i]: true }
      if (Object.keys(next).length === SIMPLIFY_ITEMS.length) onDone()
      return next
    })
  }

  const isCorrect = (i: number) => {
    const it = SIMPLIFY_ITEMS[i]
    const v = inputs[i]
    if (!v) return false
    return Number(v.num) === it.ansNum && Number(v.den) === it.ansDen
  }

  return (
    <ModuleShell
      id="equivalentes"
      eyebrow="Módulo 01"
      title="Fracciones Equivalentes"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA2}
      hubId="semana2"
      hubLabel="Semana 2"
      prevFallback={{ id: 'semana2', label: 'Semana 2' }}
      intro={
        <>
          Dos fracciones son equivalentes cuando el producto de extremos es igual al producto de
          medios: a/b = c/d si a·d = b·c. Si multiplicamos numerador y denominador por el mismo
          número obtenemos una fracción equivalente — a eso se le llama <strong>amplificar</strong>.
          Si los dividimos por su máximo común divisor, la <strong>simplificamos</strong>.
        </>
      }
    >
      <div className="rounded border border-line bg-surface p-5">
        <h2 className="font-display text-lg text-ink">Ejemplo 5 — Fracciones equivalentes</h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm text-ink-muted">Amplificar por 4 el racional 2/5</p>
            <p className="mt-1 font-mono-nums text-lg text-pine">2/5 · 4/4 = 8/20</p>
          </div>
          <div>
            <p className="text-sm text-ink-muted">Simplificar el racional 8/20</p>
            <p className="mt-1 font-mono-nums text-lg text-pine">8/20 = 4/10 = 2/5</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Ejercicio 4: simplifica cada fracción</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            {Object.keys(checked).length}/{SIMPLIFY_ITEMS.length} verificadas
          </span>
        </div>
        <p className="mb-5 text-sm text-ink-muted">
          Encuentra la fracción equivalente en su forma más simple.
        </p>

        <div className="flex flex-col gap-3">
          {SIMPLIFY_ITEMS.map((it, i) => {
            const v = inputs[i] ?? { num: '', den: '' }
            const done = checked[i]
            const correct = isCorrect(i)
            return (
              <div key={`${it.num}/${it.den}`} className="rounded border border-line bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono-nums text-lg text-ink">
                    {it.num}/{it.den}
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={v.num}
                      onChange={(e) => setVal(i, 'num', e.target.value)}
                      disabled={done}
                      placeholder="num"
                      className="w-16 rounded border border-line-strong bg-surface px-2 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine disabled:opacity-60"
                    />
                    <span className="text-ink-muted">/</span>
                    <input
                      type="number"
                      value={v.den}
                      onChange={(e) => setVal(i, 'den', e.target.value)}
                      disabled={done}
                      placeholder="den"
                      className="w-16 rounded border border-line-strong bg-surface px-2 py-1.5 text-center font-mono-nums text-sm text-ink outline-none focus:border-pine disabled:opacity-60"
                    />
                    <button
                      onClick={() => check(i)}
                      disabled={done || v.num === '' || v.den === ''}
                      className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
                    >
                      Verificar
                    </button>
                  </div>
                </div>
                {done && (
                  <p className={cn('mt-3 animate-in fade-in text-sm leading-relaxed', correct ? 'text-pine' : 'text-danger')}>
                    {correct ? 'Correcto — ' : `Incorrecto, la forma más simple es ${it.ansNum}/${it.ansDen} — `}
                    {it.num}/{it.den} = {it.ansNum}/{it.ansDen}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </ModuleShell>
  )
}
