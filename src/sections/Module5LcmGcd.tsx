import { useMemo, useState } from 'react'
import { ModuleShell } from '@/components/app/ModuleShell'
import { FACTOR_CHOICES, MACHINE_PROBLEM, factorize, type SectionId } from '@/data/content'
import { cn } from '@/lib/utils'

interface Module5Props {
  onNavigate: (id: SectionId) => void
  onDone: () => void
}

function factorString(n: number) {
  const f = factorize(n)
  return Object.entries(f)
    .map(([p, e]) => (e > 1 ? `${p}^${e}` : `${p}`))
    .join(' · ')
}

export function Module5LcmGcd({ onNavigate, onDone }: Module5Props) {
  const [chosen, setChosen] = useState(3600)
  const [nums, setNums] = useState<string[]>(['8', '12', '18'])
  const [showCalc, setShowCalc] = useState(false)
  const [ownAttempt, setOwnAttempt] = useState({ lcm: '', gcd: '' })
  const [checked, setChecked] = useState(false)

  const parsed = nums.map((n) => parseInt(n, 10)).filter((n) => n > 0)
  const factorsPerNumber = useMemo(() => parsed.map((n) => ({ n, f: factorize(n) })), [parsed])

  const { lcm, gcd } = useMemo(() => {
    if (parsed.length < 2) return { lcm: null as number | null, gcd: null as number | null }
    const gcd2 = (a: number, b: number): number => (b === 0 ? a : gcd2(b, a % b))
    const lcm2 = (a: number, b: number) => (a * b) / gcd2(a, b)
    return { lcm: parsed.reduce(lcm2), gcd: parsed.reduce(gcd2) }
  }, [parsed])

  return (
    <ModuleShell
      id="mcmMcd"
      eyebrow="Módulo 05"
      title="MCM y MCD"
      onNavigate={onNavigate}
      intro="El Teorema Fundamental de la Aritmética es la base de todo cálculo de mínimo común múltiplo y máximo común divisor."
    >
      <div className="rounded border border-line bg-surface p-5">
        <h2 className="font-display text-lg text-ink">Teorema Fundamental de la Aritmética</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Todo entero positivo se puede representar de forma <strong className="text-ink">única</strong> como
          producto de factores primos, excepto por el orden.
        </p>
        <p className="mt-3 font-mono-nums text-lg text-pine">3600 = 2⁴ · 3² · 5²</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded border border-line bg-surface p-5">
          <h3 className="font-medium text-ink">Mínimo Común Múltiplo (MCM)</h3>
          <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed text-ink-muted">
            <li>El <em>menor</em> número que es múltiplo de todos.</li>
            <li>Se toman factores comunes y no comunes con su <strong>mayor</strong> exponente.</li>
          </ul>
        </div>
        <div className="rounded border border-line bg-surface p-5">
          <h3 className="font-medium text-ink">Máximo Común Divisor (MCD)</h3>
          <ul className="mt-2 list-disc pl-4 text-sm leading-relaxed text-ink-muted">
            <li>El <em>mayor</em> número que divide a todos exactamente.</li>
            <li>Se toman <strong>solo</strong> los factores comunes con su <strong>menor</strong> exponente.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Árbol de factores primos</h2>
        <p className="mt-1 mb-4 text-sm text-ink-muted">Elige un número para descomponerlo:</p>
        <div className="flex flex-wrap gap-2">
          {FACTOR_CHOICES.map((n) => (
            <button
              key={n}
              onClick={() => setChosen(n)}
              className={cn(
                'rounded border px-3 py-1.5 font-mono-nums text-sm transition',
                chosen === n
                  ? 'border-pine bg-pine/15 text-pine'
                  : 'border-line-strong text-ink hover:border-pine',
              )}
            >
              {n}
            </button>
          ))}
        </div>
        <FactorTree n={chosen} />
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Ejemplo de aplicación: el problema de las máquinas</h2>
        <div className="mt-3 rounded border border-line bg-surface p-5">
          <p className="text-sm leading-relaxed text-ink-muted">
            En una fábrica, la máquina A produce una pieza cada 8 min, la máquina B cada 12 min y la C
            cada 18 min. Si comienzan a las 8:00 AM, ¿a qué hora volverán a coincidir?
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            {MACHINE_PROBLEM.machines.map((m) => (
              <div key={m.name} className="rounded bg-surface-raised p-3">
                <p className="font-mono-nums text-sm text-ink-muted">{m.minutes} min</p>
                <p className="mt-1 font-mono-nums text-ink">{m.factorStr}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono-nums text-ink">
            MCM(8, 12, 18) = 2³ · 3² = 8 · 9 = <strong className="text-pine">72 minutos</strong>
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            72 minutos equivalen a 1 hora y 12 minutos. Por lo tanto, coincidirán a las{' '}
            <strong className="text-ink">{MACHINE_PROBLEM.resultTime}</strong>.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-xl text-ink">Calculadora guiada</h2>
        <p className="mt-1 mb-4 text-sm text-ink-muted">
          Ingresa 2 o 3 números y, si quieres, intenta calcular el MCM y el MCD tú primero.
        </p>
        <div className="rounded border border-line bg-surface p-5">
          <div className="flex flex-wrap gap-3">
            {nums.map((val, i) => (
              <input
                key={i}
                type="number"
                value={val}
                onChange={(e) => {
                  const copy = [...nums]
                  copy[i] = e.target.value
                  setNums(copy)
                  setShowCalc(false)
                  setChecked(false)
                }}
                className="w-24 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
              />
            ))}
            {nums.length < 3 && (
              <button
                onClick={() => setNums([...nums, ''])}
                className="rounded border border-dashed border-line-strong px-3 py-1.5 text-sm text-ink-muted hover:text-ink"
              >
                + número
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <input
              type="number"
              placeholder="Tu MCM"
              value={ownAttempt.lcm}
              onChange={(e) => setOwnAttempt((a) => ({ ...a, lcm: e.target.value }))}
              className="w-28 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
            />
            <input
              type="number"
              placeholder="Tu MCD"
              value={ownAttempt.gcd}
              onChange={(e) => setOwnAttempt((a) => ({ ...a, gcd: e.target.value }))}
              className="w-28 rounded border border-line-strong bg-surface px-3 py-1.5 font-mono-nums text-sm text-ink outline-none focus:border-pine"
            />
            <button
              onClick={() => setChecked(true)}
              disabled={parsed.length < 2}
              className="rounded border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition hover:bg-surface-raised disabled:opacity-40"
            >
              Verificar mi respuesta
            </button>
            <button
              onClick={() => {
                setShowCalc(true)
                onDone()
              }}
              disabled={parsed.length < 2}
              className="rounded bg-pine px-4 py-2 text-sm font-medium text-pine-foreground transition hover:opacity-90 disabled:opacity-40"
            >
              Ver cálculo paso a paso
            </button>
          </div>

          {checked && lcm !== null && (
            <p className="animate-in fade-in mt-3 text-sm">
              MCM:{' '}
              <span className={cn(Number(ownAttempt.lcm) === lcm ? 'text-pine' : 'text-danger')}>
                {Number(ownAttempt.lcm) === lcm ? 'correcto' : `incorrecto, es ${lcm}`}
              </span>
              {'  ·  '}
              MCD:{' '}
              <span className={cn(Number(ownAttempt.gcd) === gcd ? 'text-pine' : 'text-danger')}>
                {Number(ownAttempt.gcd) === gcd ? 'correcto' : `incorrecto, es ${gcd}`}
              </span>
            </p>
          )}

          {showCalc && lcm !== null && (
            <div className="animate-in fade-in mt-5 flex flex-col gap-3 border-t border-line pt-4">
              {factorsPerNumber.map(({ n }) => (
                <p key={n} className="font-mono-nums text-sm text-ink">
                  {n} = {factorString(n)}
                </p>
              ))}
              <p className="mt-2 font-mono-nums text-ink">
                MCM = <strong className="text-pine">{lcm}</strong> (factores comunes y no comunes,
                mayor exponente)
              </p>
              <p className="font-mono-nums text-ink">
                MCD = <strong className="text-pine">{gcd}</strong> (solo factores comunes, menor
                exponente)
              </p>
            </div>
          )}
        </div>
      </div>
    </ModuleShell>
  )
}

function FactorTree({ n }: { n: number }) {
  const steps = useMemo(() => {
    const list: { value: number; factor: number | null }[] = [{ value: n, factor: null }]
    let x = n
    for (let p = 2; p * p <= x; p++) {
      while (x % p === 0) {
        x /= p
        list.push({ value: x, factor: p })
      }
    }
    if (x > 1 && x !== n) list.push({ value: 1, factor: x })
    return list
  }, [n])

  const f = factorize(n)
  const expr = Object.entries(f)
    .map(([p, e]) => (e > 1 ? `${p}^${e}` : p))
    .join(' · ')

  return (
    <div className="mt-5 rounded border border-line bg-surface p-5">
      <div className="flex flex-wrap items-center gap-2 font-mono-nums text-sm">
        {steps.map((s, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="rounded bg-surface-raised px-2.5 py-1.5 text-ink">{s.value}</span>
            {i < steps.length - 1 && <span className="text-ink-muted">÷{steps[i + 1].factor}→</span>}
          </span>
        ))}
      </div>
      <p className="mt-4 font-mono-nums text-lg text-pine">
        {n} = {expr}
      </p>
    </div>
  )
}
