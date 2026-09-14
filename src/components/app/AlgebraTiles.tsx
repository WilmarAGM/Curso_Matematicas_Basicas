/**
 * Visualización geométrica de productos notables (estilo "algebra tiles").
 * Usa proporciones fijas (a=180, b=90 px) solo para dibujar; las etiquetas
 * muestran las variables, no los píxeles.
 */
import type { ReactNode } from 'react'

const A = 180
const B = 90
const PAD = 28

function Label({ x, y, children, className = '' }: { x: number; y: number; children: ReactNode; className?: string }) {
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" className={className}>
      {children}
    </text>
  )
}

export function SquareBinomialTiles({ sign = '+' }: { sign?: '+' | '-' }) {
  const isSum = sign === '+'
  const size = A + B
  const w = size + PAD * 2
  const h = size + PAD * 2

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto w-full max-w-sm" role="img" aria-label={`Diagrama de (a ${sign} b)²`}>
      {/* a² */}
      <rect x={PAD} y={PAD} width={A} height={A} className="fill-pine/25 stroke-pine" strokeWidth={2} />
      <Label x={PAD + A / 2} y={PAD + A / 2} className="fill-pine font-mono-nums text-[15px] font-semibold">
        a²
      </Label>

      {isSum ? (
        <>
          {/* ab (derecha) */}
          <rect x={PAD + A} y={PAD} width={B} height={A} className="fill-ember/25 stroke-ember" strokeWidth={2} />
          <Label x={PAD + A + B / 2} y={PAD + A / 2} className="fill-ember font-mono-nums text-[13px] font-semibold">
            ab
          </Label>
          {/* ab (abajo) */}
          <rect x={PAD} y={PAD + A} width={A} height={B} className="fill-ember/25 stroke-ember" strokeWidth={2} />
          <Label x={PAD + A / 2} y={PAD + A + B / 2} className="fill-ember font-mono-nums text-[13px] font-semibold">
            ab
          </Label>
          {/* b² */}
          <rect x={PAD + A} y={PAD + A} width={B} height={B} className="fill-warm/30 stroke-warm" strokeWidth={2} />
          <Label x={PAD + A + B / 2} y={PAD + A + B / 2} className="fill-warm font-mono-nums text-[13px] font-semibold">
            b²
          </Label>
        </>
      ) : (
        <>
          {/* representamos (a-b)² como el cuadrado a² menos las dos franjas ab y sumando b² una vez (se resta dos veces, se devuelve una) */}
          <rect x={PAD + A - B} y={PAD} width={B} height={A} className="fill-ember/20 stroke-ember" strokeWidth={2} strokeDasharray="4 3" />
          <Label x={PAD + A - B / 2} y={PAD + A / 2} className="fill-ember font-mono-nums text-[12px] font-semibold">
            −ab
          </Label>
          <rect x={PAD} y={PAD + A - B} width={A} height={B} className="fill-ember/20 stroke-ember" strokeWidth={2} strokeDasharray="4 3" />
          <Label x={PAD + A / 2} y={PAD + A - B / 2} className="fill-ember font-mono-nums text-[12px] font-semibold">
            −ab
          </Label>
          <rect x={PAD + A - B} y={PAD + A - B} width={B} height={B} className="fill-leaf/25 stroke-leaf" strokeWidth={2} />
          <Label x={PAD + A - B / 2} y={PAD + A - B / 2} className="fill-leaf font-mono-nums text-[13px] font-semibold">
            +b²
          </Label>
        </>
      )}

      {/* Ejes con medidas */}
      <line x1={PAD} y1={PAD - 10} x2={PAD + A} y2={PAD - 10} className="stroke-ink-muted" strokeWidth={1.5} />
      <Label x={PAD + A / 2} y={PAD - 18} className="fill-ink-muted font-mono-nums text-[12px]">
        a
      </Label>
      <line x1={PAD + A} y1={PAD - 10} x2={PAD + A + B} y2={PAD - 10} className="stroke-ink-muted" strokeWidth={1.5} />
      <Label x={PAD + A + B / 2} y={PAD - 18} className="fill-ink-muted font-mono-nums text-[12px]">
        b
      </Label>
      <line x1={PAD - 10} y1={PAD} x2={PAD - 10} y2={PAD + A} className="stroke-ink-muted" strokeWidth={1.5} />
      <Label x={PAD - 20} y={PAD + A / 2} className="fill-ink-muted font-mono-nums text-[12px]">
        a
      </Label>
      <line x1={PAD - 10} y1={PAD + A} x2={PAD - 10} y2={PAD + A + B} className="stroke-ink-muted" strokeWidth={1.5} />
      <Label x={PAD - 20} y={PAD + A + B / 2} className="fill-ink-muted font-mono-nums text-[12px]">
        b
      </Label>
    </svg>
  )
}

/** Prueba geométrica de a² − b² = (a + b)(a − b): un cuadrado con una esquina
 * recortada tiene la misma área que un rectángulo (a+b)×(a−b). */
export function DifferenceOfSquaresTiles() {
  const size = A
  const cut = B * 0.62
  const w1 = size + PAD * 2
  const h1 = size + PAD * 2

  const rectW = size + cut
  const rectH = size - cut
  const w2 = rectW + PAD * 2
  const h2 = size + PAD * 2

  return (
    <div className="flex flex-wrap items-start justify-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <svg viewBox={`0 0 ${w1} ${h1}`} className="w-full max-w-[220px]" role="img" aria-label="Cuadrado a² con esquina de lado b recortada">
          <rect x={PAD} y={PAD} width={size} height={size} className="fill-pine/20 stroke-pine" strokeWidth={2} />
          <rect x={PAD + size - cut} y={PAD} width={cut} height={cut} className="fill-paper stroke-danger" strokeWidth={2} strokeDasharray="4 3" />
          <Label x={PAD + size / 2 - cut / 4} y={PAD + size / 2 + cut / 4} className="fill-pine font-mono-nums text-[14px] font-semibold">
            a² − b²
          </Label>
          <Label x={PAD + size - cut / 2} y={PAD + cut / 2} className="fill-danger font-mono-nums text-[11px] font-semibold">
            b²
          </Label>
          <line x1={PAD} y1={PAD - 10} x2={PAD + size} y2={PAD - 10} className="stroke-ink-muted" strokeWidth={1.5} />
          <Label x={PAD + size / 2} y={PAD - 18} className="fill-ink-muted font-mono-nums text-[12px]">a</Label>
        </svg>
        <p className="text-center text-xs text-ink-muted">Área restante: a² − b²</p>
      </div>

      <div className="mt-6 flex items-center font-mono-nums text-2xl text-ink-muted">=</div>

      <div className="mt-6 flex flex-col items-center gap-2">
        <svg viewBox={`0 0 ${w2} ${h2}`} className="w-full max-w-[260px]" role="img" aria-label="Rectángulo (a+b) por (a-b) de igual área">
          <rect x={PAD} y={PAD + cut} width={rectW} height={rectH} className="fill-leaf/25 stroke-leaf" strokeWidth={2} />
          <Label x={PAD + rectW / 2} y={PAD + cut + rectH / 2} className="fill-leaf font-mono-nums text-[14px] font-semibold">
            (a + b)(a − b)
          </Label>
          <line x1={PAD} y1={PAD + cut - 10} x2={PAD + rectW} y2={PAD + cut - 10} className="stroke-ink-muted" strokeWidth={1.5} />
          <Label x={PAD + rectW / 2} y={PAD + cut - 18} className="fill-ink-muted font-mono-nums text-[12px]">a + b</Label>
          <line x1={PAD - 10} y1={PAD + cut} x2={PAD - 10} y2={PAD + cut + rectH} className="stroke-ink-muted" strokeWidth={1.5} />
          <Label x={PAD - 22} y={PAD + cut + rectH / 2} className="fill-ink-muted font-mono-nums text-[12px]">a − b</Label>
        </svg>
        <p className="text-center text-xs text-ink-muted">Se recorta la franja b y se reacomoda: mismo área.</p>
      </div>
    </div>
  )
}
