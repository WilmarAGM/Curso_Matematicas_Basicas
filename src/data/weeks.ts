import type { SectionId } from '@/data/content'

export interface Week {
  number: number
  title: string
  status: 'disponible' | 'proximamente'
  summary: string
  competencia?: string
  hubId?: SectionId
}

export const WEEKS: Week[] = [
  {
    number: 1,
    title: 'Conceptos Básicos de Aritmética',
    status: 'disponible',
    competencia: 'Modelando expresiones aritméticas',
    summary:
      'Historia de los números, conjuntos numéricos, propiedades de las operaciones, jerarquía (PEMDAS), patrones numéricos y MCM/MCD.',
    hubId: 'semana1',
  },
  {
    number: 2,
    title: 'Racionales, irracionales y fracciones',
    status: 'proximamente',
    competencia: 'Modelando expresiones aritméticas',
    summary:
      'Conjuntos numéricos (racionales, irracionales y reales), fracciones equivalentes, propiedades de las fracciones, tipos de fracciones y sus operaciones.',
  },
  {
    number: 3,
    title: 'Operaciones y radicación',
    status: 'proximamente',
    competencia: 'Modelando expresiones aritméticas',
    summary:
      'Operaciones entre conjuntos numéricos, operaciones y aplicaciones con fracciones, potenciación y radicación.',
  },
  {
    number: 4,
    title: 'Expresiones algebraicas',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary:
      'Expresiones algebraicas, adición, sustracción y multiplicación, productos notables. Ingreso del primer 30 %.',
  },
  {
    number: 5,
    title: 'División y factorización',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary: 'Expresiones algebraicas, división de polinomios y factorización.',
  },
  {
    number: 6,
    title: 'Factorización',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary: 'Factorización.',
  },
  {
    number: 7,
    title: 'Racionales y racionalización',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary:
      'Ceros de polinomios y teorema del factor, expresiones racionales, operaciones con racionales y racionalización.',
  },
  {
    number: 8,
    title: 'Ecuaciones lineales y cuadráticas',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary:
      'Ecuación lineal y sus aplicaciones, ecuación cuadrática, discriminante y soluciones complejas.',
  },
  {
    number: 9,
    title: 'Complejos y sistemas de ecuaciones',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary:
      'Números complejos (definición de imaginario y operaciones básicas), sistemas de ecuaciones lineales 2x2 y 3x3 y sus aplicaciones.',
  },
  {
    number: 10,
    title: 'Sistemas no lineales',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary:
      'Sistemas de ecuaciones no lineales 2x2 con ecuaciones cuadráticas. Ingreso del segundo 30 %.',
  },
  {
    number: 11,
    title: 'Logaritmos y recta numérica',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary:
      'Logaritmos: ecuaciones exponenciales y logarítmicas. Recta numérica: conjunto, intervalos, valor absoluto y distancia.',
  },
  {
    number: 12,
    title: 'Inecuaciones',
    status: 'proximamente',
    competencia: 'Modelando expresiones algebraicas',
    summary: 'Inecuaciones lineales, inecuaciones con valor absoluto e inecuaciones racionales y cuadráticas.',
  },
  {
    number: 13,
    title: 'Trigonometría y triángulos',
    status: 'proximamente',
    competencia: 'Modelando expresiones trigonométricas',
    summary:
      'Trigonometría, ángulos, teorema de Pitágoras, razones trigonométricas de triángulos rectángulos, ley del seno y coseno y sus aplicaciones.',
  },
  {
    number: 14,
    title: 'Identidades trigonométricas',
    status: 'proximamente',
    competencia: 'Modelando expresiones trigonométricas',
    summary: 'Identidades trigonométricas.',
  },
  {
    number: 15,
    title: 'Ecuaciones trigonométricas',
    status: 'proximamente',
    competencia: 'Modelando expresiones trigonométricas',
    summary: 'Ecuaciones trigonométricas.',
  },
  {
    number: 16,
    title: 'Repaso y cierre',
    status: 'proximamente',
    competencia: 'Modelando expresiones trigonométricas',
    summary: 'Taller de repaso de trigonometría. Ingreso del 40 % final.',
  },
]
