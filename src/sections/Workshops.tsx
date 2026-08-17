import { Card } from '@/components/ui/card'

interface WorkshopsProps {
  onNavigate: (id: string) => void
}

export function Workshops({ onNavigate }: WorkshopsProps) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="border-b border-line pb-8 mb-10">
        <h1 className="font-display text-3xl leading-tight text-ink md:text-5xl">
          Talleres
        </h1>
        <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
          Ejercicios y talleres prácticos para el desarrollo del curso.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card
          role="button"
          onClick={() => onNavigate('taller1')}
          className="group flex flex-col items-start gap-2 p-5 text-left cursor-pointer transition-all active:translate-y-1 active:shadow-none hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,80,223,0.15)]"
        >
          <span className="font-mono-nums text-xs uppercase tracking-wide text-ink-muted">Semana 1</span>
          <span className="font-display text-lg text-ink">
            Taller 1 — Operaciones Combinadas, Secuencias y M.C.D./M.C.M.
          </span>
          <span className="text-sm leading-relaxed text-ink-muted">
            20 ejercicios interactivos con verificación instantánea y solución paso a paso.
          </span>
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-warm" />
            Empezar taller
          </span>
        </Card>

        <Card
          role="button"
          onClick={() => onNavigate('taller2')}
          className="group flex flex-col items-start gap-2 p-5 text-left cursor-pointer transition-all active:translate-y-1 active:shadow-none hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(32,80,223,0.15)]"
        >
          <span className="font-mono-nums text-xs uppercase tracking-wide text-ink-muted">Semana 2</span>
          <span className="font-display text-lg text-ink">
            Taller 2 — Fraccionarios: Equivalencia, Propiedades y Operaciones
          </span>
          <span className="text-sm leading-relaxed text-ink-muted">
            28 ejercicios de nivel alto con verificación instantánea y solución paso a paso.
          </span>
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
            <span className="h-2 w-2 rounded-full bg-warm" />
            Empezar taller
          </span>
        </Card>
      </div>
    </div>
  )
}
