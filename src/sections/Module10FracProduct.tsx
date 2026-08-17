import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { MODULES_SEMANA2, PRODUCT_PRACTICE, PRODUCT_WORKED, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module10Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module10FracProduct({ onNavigate, onDone }: Module10Props) {
  const [inputs, setInputs] = useState<Record<number, { num: string; den: string }>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const setVal = (i: number, field: 'num' | 'den', value: string) => {
    setInputs((v) => ({ ...v, [i]: { ...(v[i] ?? { num: '', den: '' }), [field]: value } }))
  }

  const check = (i: number) => {
    setChecked((c) => {
      const next = { ...c, [i]: true }
      if (Object.keys(next).length === PRODUCT_PRACTICE.length) onDone()
      return next
    })
  }

  return (
    <ModuleShell
      id="producto"
      eyebrow="Módulo 05"
      title="Producto de Fraccionarios"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA2}
      hubId="semana2"
      hubLabel="Semana 2"
      intro="Para multiplicar fraccionarios, se multiplican los numeradores entre sí y los denominadores entre sí: (a/b) · (c/d) = (a·c)/(b·d)."
    >
      <div className="rounded border border-line bg-surface p-5">
        <h2 className="font-display text-lg text-ink">Ejemplo 16 — Producto de fracciones</h2>
        <p className="mt-3 font-mono-nums text-lg text-ink">
          {PRODUCT_WORKED.aNum}/{PRODUCT_WORKED.aDen} · {PRODUCT_WORKED.bNum}/{PRODUCT_WORKED.bDen} ={' '}
          <span className="text-pine">
            {PRODUCT_WORKED.ansNum}/{PRODUCT_WORKED.ansDen}
          </span>
        </p>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: multiplica los fraccionarios</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            {Object.keys(checked).length}/{PRODUCT_PRACTICE.length} verificadas
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {PRODUCT_PRACTICE.map((p, i) => {
            const v = inputs[i] ?? { num: '', den: '' }
            const done = checked[i]
            const correct = v.den !== '' && Number(v.den) !== 0 && Number(v.num) * p.ansDen === p.ansNum * Number(v.den)
            return (
              <div key={`${p.aNum}-${p.bNum}`} className="rounded border border-line bg-surface p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono-nums text-lg text-ink">
                    {p.aNum}/{p.aDen} · {p.bNum}/{p.bDen} =
                  </span>
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
      </div>
    </ModuleShell>
  )
}
