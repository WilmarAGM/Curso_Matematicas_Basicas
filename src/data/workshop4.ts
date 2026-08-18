// ---------------------------------------------------------------
// Taller 4: Expresiones Algebraicas, Propiedades, Operaciones con
// Polinomios y Productos Notables (Semana 4)
// Todas las respuestas fueron verificadas simbólicamente con sympy
// (expansión y evaluación exactas de polinomios) antes de publicarse.
// ---------------------------------------------------------------

export type AlgebraKind4 = 'monomio' | 'binomio' | 'trinomio' | 'polinomio'

export interface AlgClassifyExercise {
  id: number
  type: 'classify'
  statement: string
  kind: AlgebraKind4
  explain: string
}

export interface AlgComputeExercise {
  id: number
  type: 'compute'
  statement: string
  answer: number
  steps: string[]
}

export type Workshop4Exercise = AlgClassifyExercise | AlgComputeExercise

// ---- Parte I · Expresiones Algebraicas ----
export const EXPRESIONES_CLASIFICA: AlgClassifyExercise[] = [
  {
    id: 1,
    type: 'classify',
    statement: '−8y⁵',
    kind: 'monomio',
    explain: 'Un solo término (a·x^k): es un monomio de grado 5.',
  },
  {
    id: 2,
    type: 'classify',
    statement: '2x⁵ − 3x³ + x² − 7x + 9',
    kind: 'polinomio',
    explain: 'Tiene cinco términos: se le llama polinomio, de grado 5 (el mayor exponente).',
  },
]

export const EXPRESIONES_COMPUTE: AlgComputeExercise[] = [
  {
    id: 3,
    type: 'compute',
    statement: 'El triple de la suma de un número x y 7, evaluado en x = 5. Traduce a expresión y evalúa.',
    answer: 36,
    steps: [
      'Expresión algebraica: 3(x + 7)',
      'Sustituyendo x = 5: 3(5 + 7) = 3(12)',
      '= 36',
    ],
  },
  {
    id: 4,
    type: 'compute',
    statement: 'La mitad de la diferencia entre el cuadrado de x y 9, evaluada en x = 7.',
    answer: 20,
    steps: [
      'Expresión algebraica: (x² − 9)/2',
      'Sustituyendo x = 7: (7² − 9)/2 = (49 − 9)/2',
      '= 40/2 = 20',
    ],
  },
  {
    id: 5,
    type: 'compute',
    statement:
      'Un rectángulo tiene ancho x y largo el triple del ancho menos 2. Si x = 6, ¿cuál es el área del rectángulo?',
    answer: 96,
    steps: [
      'Largo = 3x − 2',
      'Área = x · (3x − 2)',
      'Con x = 6: largo = 3(6) − 2 = 16',
      'Área = 6 · 16 = 96',
    ],
  },
  {
    id: 6,
    type: 'compute',
    statement:
      'Una empresa tiene ingresos I(x) = 3x² + 200x y costos C(x) = x² + 150x + 5000. Encuentra la función de beneficio B(x) = I(x) − C(x) y evalúala en x = 100.',
    answer: 20000,
    steps: [
      'B(x) = (3x² + 200x) − (x² + 150x + 5000)',
      'B(x) = 2x² + 50x − 5000',
      'B(100) = 2(100)² + 50(100) − 5000 = 20000 + 5000 − 5000',
      '= 20000',
    ],
  },
]

// ---- Parte II · Propiedades de las Expresiones Algebraicas ----
export const PROPIEDADES: AlgComputeExercise[] = [
  {
    id: 7,
    type: 'compute',
    statement: 'Aplica la propiedad distributiva y evalúa en x = 3: 4(3x − 5) + 2(x + 7)',
    answer: 36,
    steps: [
      '4(3x − 5) = 12x − 20',
      '2(x + 7) = 2x + 14',
      'Sumando: 12x − 20 + 2x + 14 = 14x − 6',
      'Con x = 3: 14(3) − 6 = 42 − 6 = 36',
    ],
  },
  {
    id: 8,
    type: 'compute',
    statement: 'Simplifica agrupando términos semejantes y evalúa en x = −2: 5x + (6x + 7) − (3x − 2)',
    answer: -7,
    steps: [
      '5x + 6x + 7 − 3x + 2 = (5x + 6x − 3x) + (7 + 2)',
      '= 8x + 9',
      'Con x = −2: 8(−2) + 9 = −16 + 9',
      '= −7',
    ],
  },
  {
    id: 9,
    type: 'compute',
    statement:
      'Si k es el inverso multiplicativo de 7x (es decir, 7x · k = 1), ¿cuál es el valor de 21x² · k cuando x = 4?',
    answer: 12,
    steps: [
      'Por la propiedad del inverso, k = 1/(7x)',
      '21x² · k = 21x² / (7x) = 3x  (simplificando la x, con x ≠ 0)',
      'Con x = 4: 3(4)',
      '= 12',
    ],
  },
  {
    id: 10,
    type: 'compute',
    statement: 'Aplica la propiedad asociativa y evalúa en x = 2, y = −1: (2x + 3y) + (5x − y)',
    answer: 12,
    steps: [
      'Reagrupando: (2x + 5x) + (3y − y) = 7x + 2y',
      'Con x = 2, y = −1: 7(2) + 2(−1) = 14 − 2',
      '= 12',
    ],
  },
  {
    id: 11,
    type: 'compute',
    statement: 'Aplica la propiedad conmutativa y evalúa en x = 5, y = 2 (con x ≠ 0): 3x · 4y · (2/x)',
    answer: 48,
    steps: [
      'Reordenando los factores: 3 · 4 · 2 · y · (x/x) = 24y  (la x se cancela)',
      'Con y = 2: 24(2)',
      '= 48',
    ],
  },
]

// ---- Parte III · Operaciones con Polinomios ----
export const POLINOMIOS: AlgComputeExercise[] = [
  {
    id: 12,
    type: 'compute',
    statement:
      'Sea P(x) = 3x³ − 2x² + x − 5 y Q(x) = x³ + 4x² − 3x + 2. Calcula P(x) + Q(x) e ingresa el coeficiente de x².',
    answer: 2,
    steps: [
      'P(x) + Q(x) = (3x³+x³) + (−2x²+4x²) + (x−3x) + (−5+2)',
      '= 4x³ + 2x² − 2x − 3',
      'El coeficiente de x² es 2.',
    ],
  },
  {
    id: 13,
    type: 'compute',
    statement:
      'Con los mismos P(x) = 3x³ − 2x² + x − 5 y Q(x) = x³ + 4x² − 3x + 2, calcula P(x) − Q(x) e ingresa el coeficiente de x³.',
    answer: 2,
    steps: [
      'P(x) − Q(x) = (3x³−x³) + (−2x²−4x²) + (x+3x) + (−5−2)',
      '= 2x³ − 6x² + 4x − 7',
      'El coeficiente de x³ es 2.',
    ],
  },
  {
    id: 14,
    type: 'compute',
    statement:
      'Con los mismos P(x) y Q(x), calcula el producto P(x) · Q(x) e ingresa el coeficiente de x⁵.',
    answer: 10,
    steps: [
      'P(x) · Q(x) = 3x⁶ + 10x⁵ − 16x⁴ + 11x³ − 27x² + 17x − 10',
      '(se obtiene aplicando la propiedad distributiva término a término y agrupando semejantes)',
      'El coeficiente de x⁵ es 10.',
    ],
  },
  {
    id: 15,
    type: 'compute',
    statement: 'Divide (2x³ + 3x² − 4x − 6) ÷ (x + 2). Ingresa el residuo.',
    answer: -2,
    steps: [
      'Usando división larga o sintética con raíz x = −2:',
      '2x³ + 3x² − 4x − 6 = (x + 2)(2x² − x − 2) + residuo',
      'Cociente: 2x² − x − 2',
      'Residuo: −2',
    ],
  },
  {
    id: 16,
    type: 'compute',
    statement: 'Con la misma división (2x³ + 3x² − 4x − 6) ÷ (x + 2), ingresa el coeficiente de x² del cociente.',
    answer: 2,
    steps: [
      'El cociente obtenido es 2x² − x − 2.',
      'El coeficiente de x² es 2.',
    ],
  },
  {
    id: 17,
    type: 'compute',
    statement: 'Suma P(x) = 2x² − 3x + 1 y Q(x) = −x² + 5x − 4, y evalúa el resultado en x = 10.',
    answer: 117,
    steps: [
      'P(x) + Q(x) = (2x²−x²) + (−3x+5x) + (1−4)',
      '= x² + 2x − 3',
      'Con x = 10: 10² + 2(10) − 3 = 100 + 20 − 3',
      '= 117',
    ],
  },
]

// ---- Parte IV · Productos Notables ----
export const PRODUCTOS_NOTABLES: AlgComputeExercise[] = [
  {
    id: 18,
    type: 'compute',
    statement: 'Desarrolla (3x − 4)² e ingresa el coeficiente de x.',
    answer: -24,
    steps: [
      '(a − b)² = a² − 2ab + b², con a=3x, b=4',
      '(3x)² − 2(3x)(4) + 4² = 9x² − 24x + 16',
      'El coeficiente de x es −24.',
    ],
  },
  {
    id: 19,
    type: 'compute',
    statement: 'Desarrolla (2x + 5)(2x − 5) y evalúa el resultado en x = 6.',
    answer: 119,
    steps: [
      'Suma por diferencia: (a+b)(a−b) = a² − b², con a=2x, b=5',
      '(2x)² − 5² = 4x² − 25',
      'Con x = 6: 4(36) − 25 = 144 − 25',
      '= 119',
    ],
  },
  {
    id: 20,
    type: 'compute',
    statement: 'Desarrolla (x + 3)³ e ingresa el coeficiente de x².',
    answer: 9,
    steps: [
      '(a+b)³ = a³ + 3a²b + 3ab² + b³, con a=x, b=3',
      'x³ + 3x²(3) + 3x(9) + 27 = x³ + 9x² + 27x + 27',
      'El coeficiente de x² es 9.',
    ],
  },
  {
    id: 21,
    type: 'compute',
    statement: 'Desarrolla (2x − 1)³ y evalúa el resultado en x = 2.',
    answer: 27,
    steps: [
      '(a−b)³ = a³ − 3a²b + 3ab² − b³, con a=2x, b=1',
      '8x³ − 12x² + 6x − 1',
      'Con x = 2: 8(8) − 12(4) + 6(2) − 1 = 64 − 48 + 12 − 1',
      '= 27',
    ],
  },
  {
    id: 22,
    type: 'compute',
    statement:
      'La diferencia de cubos 8x³ − 27 se factoriza como (2x − 3)(4x² + 6x + 9). Evalúa el segundo factor (4x² + 6x + 9) en x = 1.',
    answer: 19,
    steps: [
      'a³ − b³ = (a − b)(a² + ab + b²), con a=2x, b=3',
      'Segundo factor: 4x² + 6x + 9',
      'Con x = 1: 4(1) + 6(1) + 9 = 4 + 6 + 9',
      '= 19',
    ],
  },
  {
    id: 23,
    type: 'compute',
    statement: 'Desarrolla el trinomio cuadrado (x + y + 3)² y evalúa el resultado en x = 2, y = 1.',
    answer: 36,
    steps: [
      '(x+y+c)² = x² + 2xy + y² + 2yc + 2xc + c², con c=3',
      'x² + 2xy + y² + 6y + 6x + 9',
      'Con x=2, y=1: 4 + 4 + 1 + 6 + 12 + 9 = 36',
    ],
  },
]

// ---- Parte V · Aplicaciones con Productos Notables ----
export const APLICACIONES: AlgComputeExercise[] = [
  {
    id: 24,
    type: 'compute',
    statement:
      'El área de un cuadrado de lado (x + 4) menos el área de un cuadrado de lado (x − 4) se puede expresar con un producto notable: (x+4)² − (x−4)² = 4·x·4 = 16x. Evalúa el resultado cuando x = 10.',
    answer: 160,
    steps: [
      '(a+b)² − (a−b)² = 4ab, con a=x, b=4',
      '(x+4)² − (x−4)² = 4(x)(4) = 16x',
      'Con x = 10: 16(10)',
      '= 160',
    ],
  },
  {
    id: 25,
    type: 'compute',
    statement:
      'Un cine cobra $12 por entrada general. Por cada x adultos asisten el doble de estudiantes, que pagan $9 cada uno (con descuento de $3). Expresa el ingreso total I(x) y evalúalo en x = 50.',
    answer: 1500,
    steps: [
      'Ingreso de adultos: 12x',
      'Ingreso de estudiantes: 2x · 9 = 18x',
      'I(x) = 12x + 18x = 30x',
      'Con x = 50: 30(50)',
      '= 1500',
    ],
  },
  {
    id: 26,
    type: 'compute',
    statement: 'Un cubo tiene arista (x + 1). Expresa su volumen como producto notable (x+1)³ y evalúa en x = 3.',
    answer: 64,
    steps: [
      'Volumen = (x + 1)³',
      'Con x = 3: (3 + 1)³ = 4³',
      '= 64',
    ],
  },
  {
    id: 27,
    type: 'compute',
    statement:
      'La diferencia de cuadrados de dos enteros consecutivos n+1 y n es igual a (n+1)² − n² = 2n + 1. Calcula su valor cuando n = 15.',
    answer: 31,
    steps: [
      '(n+1)² − n² = n² + 2n + 1 − n² = 2n + 1',
      'Con n = 15: 2(15) + 1 = 30 + 1',
      '= 31',
    ],
  },
]

export const WORKSHOP4_TOTAL_ITEMS =
  EXPRESIONES_CLASIFICA.length +
  EXPRESIONES_COMPUTE.length +
  PROPIEDADES.length +
  POLINOMIOS.length +
  PRODUCTOS_NOTABLES.length +
  APLICACIONES.length
