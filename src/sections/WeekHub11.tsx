import type { SectionId } from '@/data/content'
import { WeekGuideCard } from '@/components/app/WeekGuideCard'

interface WeekHub11Props {
  onNavigate: (id: SectionId) => void
}

export function WeekHub11({ onNavigate }: WeekHub11Props) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12">
      <p className="font-mono-nums text-sm uppercase tracking-[0.14em] text-warm">Semana 11</p>
      <h1 className="mt-2 font-display text-4xl text-ink">Logaritmos y Recta Numérica</h1>
      <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        Logaritmos y sus propiedades, ecuaciones exponenciales y logarítmicas con sus aplicaciones, y la recta numérica: intervalos, valor absoluto y distancia. Toda la semana se trabaja en la guía: complétala en línea o descárgala para imprimir.
      </p>

      <WeekGuideCard
        slug="semana11"
        pdf="Guia_Semana11_Logaritmos_RectaNumerica.pdf"
        description="Logaritmos y sus propiedades, ecuaciones exponenciales y logarítmicas, aplicaciones, intervalos, valor absoluto y distancia: todos los ejemplos y ejercicios de la guía (con sus errores corregidos), retos y problemas tipo parcial. Cada bloque tiene «Comprobar» y «Ver solución»."
      />

      <div className="mt-10 border-t border-line pt-6">
        <button onClick={() => onNavigate('semanas' as SectionId)} className="text-sm text-ink-muted transition hover:text-ink">
          ← Volver a Semanas
        </button>
      </div>
    </div>
  )
}
