import { useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { DIVISION_PRACTICE, DIVISION_WORKED, MODULES_SEMANA3, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module11Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

export function Module11FracDivision({ onNavigate, onDone }: Module11Props) {
  const [inputs, setInputs] = useState<Record<number, { num: string; den: string }>>({})
  const [checked, setChecked] = useState<Record<number, boolean>>({})

  const setVal = (i: number, field: 'num' | 'den', value: string) => {
    setInputs((v) => ({ ...v, [i]: { ...(v[i] ?? { num: '', den: '' }), [field]: value } }))
  }

  const check = (i: number) => {
    setChecked((c) => {
      const next = { ...c, [i]: true }
      if (Object.keys(next).length === DIVISION_PRACTICE.length) onDone()
      return next
    })
  }

  return (
    <ModuleShell
      id="division"
      eyebrow="Módulo 01"
      title="División de Fraccionarios"
      onNavigate={onNavigate}
      modules={MODULES_SEMANA3}
      hubId="semana3"
      hubLabel="Semana 3"
      prevFallback={{ id: 'semana3', label: 'Semana 3' }}
      intro={
        <>
          Para dividir fraccionarios se multiplica en cruz: el numerador del primero por el
          denominador del segundo (será el numerador del resultado), y el denominador del primero
          por el numerador del segundo (será el denominador). (a/b) ÷ (c/d) = (a·d)/(b·c), con b y d
          distintos de 0.
        </>
      }
    >
      <div className="rounded border border-line bg-surface p-5">
        <h2 className="font-display text-lg text-ink">Ejemplo 17 — División de fracciones</h2>
        <p className="mt-3 font-mono-nums text-lg text-ink">
          {DIVISION_WORKED.aNum}/{DIVISION_WORKED.aDen} ÷ {DIVISION_WORKED.bNum}/{DIVISION_WORKED.bDen} ={' '}
          ({DIVISION_WORKED.aNum}·{DIVISION_WORKED.bDen})/({DIVISION_WORKED.aDen}·{DIVISION_WORKED.bNum}) ={' '}
          <span className="text-pine">
            {DIVISION_WORKED.ansNum}/{DIVISION_WORKED.ansDen}
          </span>
        </p>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-display text-xl text-ink">Practica: divide los fraccionarios</h2>
          <span className="font-mono-nums text-sm text-ink-muted">
            {Object.keys(checked).length}/{DIVISION_PRACTICE.length} verificadas
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {DIVISION_PRACTICE.map((p, i) => {
            const v = inputs[i] ?? { num: '', den: '' }
            const done = checked[i]
            const correct = v.den !== '' && Number(v.den) !== 0 && Number(v.num) * p.ansDen === p.ansNum * Number(v.den)
            return (
              <div key={`${p.aNum}-${p.bNum}-${i}`} className="rounded border border-line bg-surface p-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono-nums text-lg text-ink">
                    {p.aNum}/{p.aDen} ÷ {p.bNum}/{p.bDen} =
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
