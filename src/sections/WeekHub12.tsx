import type { SectionId } from '@/data/content'
import { WeekGuideCard } from '@/components/app/WeekGuideCard'

interface WeekHub12Props {
  onNavigate: (id: SectionId) => void
}

export function WeekHub12({ onNavigate }: WeekHub12Props) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">Semana 12</p>
      <h1 className="mt-2 font-display text-4xl text-ink">Inecuaciones</h1>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        Inecuaciones lineales, con valor absoluto, racionales, cuadráticas y con radicales. Esta es la última semana del bloque de Álgebra (Semanas 4-12). Toda la semana se trabaja en la guía: complétala en línea o descárgala para imprimir.
      </p>

      <WeekGuideCard
        slug="semana12"
        pdf="Guia_Semana12_Inecuaciones.pdf"
        description="Inecuaciones lineales, con valor absoluto, racionales, cuadráticas y con radicales: todos los ejemplos y ejercicios de la guía (con sus errores corregidos), tablas de signos para llenar, retos y problemas tipo parcial. Cada bloque tiene «Comprobar» y «Ver solución»."
      />

      <div className="mt-10 border-t border-line pt-6">
        <button onClick={() => onNavigate('semanas' as SectionId)} className="text-sm text-ink-muted transition hover:text-ink">
          ← Volver a Semanas
        </button>
      </div>
    </div>
  )
}
