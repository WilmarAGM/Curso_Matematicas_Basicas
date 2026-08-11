import type { SectionId } from '@/data/content'

export interface Week {
  number: number
  title: string
  status: 'disponible' | 'proximamente'
  summary: string
  hubId?: SectionId
}

export const WEEKS: Week[] = [
  {
    number: 1,
    title: 'Conceptos Básicos de Aritmética',
    status: 'disponible',
    summary:
      'Historia de los números, conjuntos numéricos, propiedades de las operaciones, jerarquía (PEMDAS), patrones numéricos y MCM/MCD.',
    hubId: 'semana1',
  },
  {
    number: 2,
    title: 'Próximamente',
    status: 'proximamente',
    summary: 'El contenido de esta semana se publicará antes de la clase correspondiente.',
  },
  {
    number: 3,
    title: 'Próximamente',
    status: 'proximamente',
    summary: 'El contenido de esta semana se publicará antes de la clase correspondiente.',
  },
  {
    number: 4,
    title: 'Próximamente',
    status: 'proximamente',
    summary: 'El contenido de esta semana se publicará antes de la clase correspondiente.',
  },
]
