// ---------------------------------------------------------------
// Taller 2: Fraccionarios — Equivalencia, Propiedades, Tipos
// y Operaciones (Semana 2)
// Todas las respuestas fueron verificadas con aritmética exacta
// (fracciones, no decimales) antes de publicarse.
// ---------------------------------------------------------------

export interface FracComputeExercise {
  id: number
  type: 'compute'
  statement: string
  ansNum: number
  ansDen: number
  steps: string[]
}

export interface FracClassifyExercise {
  id: number
  type: 'classify'
  statement: string
  kind: 'propia' | 'impropia' | 'mixta'
  explain: string
}

export type Workshop2Exercise = FracComputeExercise | FracClassifyExercise

// ---- Parte I · Fracciones Equivalentes ----
export const EQUIVALENTES: FracComputeExercise[] = [
  {
    id: 1,
    type: 'compute',
    statement: 'Determina el valor de x para que las fracciones sean equivalentes: 5/8 = x/48',
    ansNum: 30,
    ansDen: 1,
    steps: [
      'Dos fracciones son equivalentes si a·d = b·c.',
      '5/8 = x/48  →  5 · 48 = 8 · x',
      '240 = 8x',
      'x = 240 ÷ 8 = 30',
    ],
  },
  {
    id: 2,
    type: 'compute',
    statement: 'Determina el valor de x para que las fracciones sean equivalentes: x/9 = 84/108',
    ansNum: 7,
    ansDen: 1,
    steps: [
      'x/9 = 84/108  →  x · 108 = 9 · 84',
      '108x = 756',
      'x = 756 ÷ 108 = 7',
      'Verificación: 7/9 = 84/108 (ambas se simplifican dividiendo por 12).',
    ],
  },
  {
    id: 3,
    type: 'compute',
    statement: 'Simplifica a su mínima expresión: 364/637',
    ansNum: 4,
    ansDen: 7,
    steps: [
      '364 = 2² · 7 · 13',
      '637 = 7² · 13',
      'Factor común: 7 · 13 = 91',
      '364 ÷ 91 = 4  y  637 ÷ 91 = 7',
      '364/637 = 4/7',
    ],
  },
  {
    id: 4,
    type: 'compute',
    statement: 'Simplifica a su mínima expresión: 415/747',
    ansNum: 5,
    ansDen: 9,
    steps: [
      '415 = 5 · 83',
      '747 = 9 · 83',
      'Factor común: 83',
      '415 ÷ 83 = 5  y  747 ÷ 83 = 9',
      '415/747 = 5/9',
    ],
  },
  {
    id: 5,
    type: 'compute',
    statement: 'Determina el valor de x para que las fracciones sean equivalentes: 7/12 = 91/x',
    ansNum: 156,
    ansDen: 1,
    steps: [
      '7/12 = 91/x  →  7 · x = 12 · 91',
      '7x = 1092',
      'x = 1092 ÷ 7 = 156',
      'Verificación: 91/156 se simplifica dividiendo por 13, dando 7/12.',
    ],
  },
]

// ---- Parte II · Propiedades de las Fracciones ----
export const PROPIEDADES: FracComputeExercise[] = [
  {
    id: 6,
    type: 'compute',
    statement: 'Aplica la propiedad de la fracción negativa y simplifica: −(7/(−11))',
    ansNum: 7,
    ansDen: 11,
    steps: [
      'Propiedad: a/(−b) = (−a)/b = −(a/b)',
      '−(7/(−11)) = −(−(7/11))',
      'Los dos signos negativos se cancelan',
      '−(7/(−11)) = 7/11',
    ],
  },
  {
    id: 7,
    type: 'compute',
    statement: 'Aplica la propiedad de multiplicación y simplifica: (−3/4) · (−8/9)',
    ansNum: 2,
    ansDen: 3,
    steps: [
      'Propiedad: (a/b) · (c/d) = (a·c)/(b·d)',
      'Negativo por negativo da positivo',
      '(−3/4) · (−8/9) = (3 · 8)/(4 · 9) = 24/36',
      'Simplificando entre 12: 24/36 = 2/3',
    ],
  },
  {
    id: 8,
    type: 'compute',
    statement: 'Aplica la propiedad de suma y resta, con denominadores pequeños: 2/3 + 5/6 − 1/2',
    ansNum: 1,
    ansDen: 1,
    steps: [
      'mcm(3, 6, 2) = 6',
      '2/3 = 4/6,  5/6 = 5/6,  1/2 = 3/6',
      '4/6 + 5/6 − 3/6 = (4 + 5 − 3)/6 = 6/6',
      '6/6 = 1',
    ],
  },
  {
    id: 9,
    type: 'compute',
    statement: 'Aplica la propiedad de simplificación: 48/108',
    ansNum: 4,
    ansDen: 9,
    steps: [
      'Propiedad: (a·d)/(b·d) = a/b, con b∧d ≠ 0',
      '48 = 2⁴ · 3,  108 = 2² · 3³',
      'Factor común: 2² · 3 = 12',
      '48 ÷ 12 = 4  y  108 ÷ 12 = 9',
      '48/108 = 4/9',
    ],
  },
  {
    id: 10,
    type: 'compute',
    statement: 'Evalúa aplicando suma y resta de fraccionarios: −5/6 + (−1/4) − (−2/3)',
    ansNum: -5,
    ansDen: 12,
    steps: [
      'mcm(6, 4, 3) = 12',
      '−5/6 = −10/12,  −1/4 = −3/12,  −(−2/3) = +2/3 = +8/12',
      '−10/12 − 3/12 + 8/12 = (−10 − 3 + 8)/12',
      '= −5/12',
    ],
  },
]

// ---- Parte III · Tipos de Fracciones ----
export const TIPOS_CLASIFICA: FracClassifyExercise[] = [
  {
    id: 11,
    type: 'classify',
    statement: '77/9',
    kind: 'impropia',
    explain: 'El numerador (77) es mayor que el denominador (9): es impropia. Como fracción mixta equivale a 8 5/9.',
  },
  {
    id: 12,
    type: 'classify',
    statement: '11/15',
    kind: 'propia',
    explain: 'El numerador (11) es menor que el denominador (15): es propia, su valor está entre 0 y 1.',
  },
]

export const TIPOS_COMPUTE: FracComputeExercise[] = [
  {
    id: 13,
    type: 'compute',
    statement: 'Convierte 137/12 a fracción mixta: ingresa la parte entera (denominador = 1)',
    ansNum: 11,
    ansDen: 1,
    steps: [
      'Se divide el numerador entre el denominador: 137 ÷ 12',
      '137 = 12 · 11 + 5',
      'El cociente (11) es la parte entera.',
      'El residuo (5) es el numerador de la parte fraccionaria: 137/12 = 11 5/12',
    ],
  },
  {
    id: 14,
    type: 'compute',
    statement: 'Convierte 137/12 a fracción mixta: ingresa el numerador de la parte fraccionaria (con denominador 12)',
    ansNum: 5,
    ansDen: 12,
    steps: [
      '137 ÷ 12 = 11, con residuo 137 − 12·11 = 5',
      'El residuo (5) es el numerador de la parte fraccionaria, que conserva el denominador original.',
      '137/12 = 11 5/12',
    ],
  },
  {
    id: 15,
    type: 'compute',
    statement: 'Convierte la fracción mixta 9 4/15 a fracción impropia (denominador 15)',
    ansNum: 139,
    ansDen: 15,
    steps: [
      'Se deja el mismo denominador (15).',
      'El numerador se obtiene de: (entero × denominador) + numerador',
      '(9 × 15) + 4 = 135 + 4 = 139',
      '9 4/15 = 139/15',
    ],
  },
  {
    id: 16,
    type: 'compute',
    statement:
      'Sin usar calculadora: ¿cuál fracción es mayor, 47/6 u 85/11? Exprésalas con el denominador común 66 e ingresa el numerador que resulta de 47/6 con ese denominador.',
    ansNum: 517,
    ansDen: 66,
    steps: [
      'mcm(6, 11) = 66 (6 y 11 no comparten factores, así que el mcm es 6 · 11).',
      '47/6 = (47 · 11)/66 = 517/66',
      '85/11 = (85 · 6)/66 = 510/66',
      'Comparando numeradores con igual denominador: 517 > 510, así que 47/6 es la fracción mayor.',
    ],
  },
]

// ---- Parte IV · Suma y Resta de Fraccionarios ----
export const SUMA_RESTA: FracComputeExercise[] = [
  {
    id: 17,
    type: 'compute',
    statement: 'Resuelve (fracciones homogéneas): 5/9 + 7/9 − 4/9',
    ansNum: 8,
    ansDen: 9,
    steps: [
      'Con el mismo denominador, se suman o restan solo los numeradores.',
      '(5 + 7 − 4)/9 = 8/9',
    ],
  },
  {
    id: 18,
    type: 'compute',
    statement: 'Resuelve (denominadores pequeños): 3/4 − 5/6 + 7/12',
    ansNum: 1,
    ansDen: 2,
    steps: [
      'mcm(4, 6, 12) = 12',
      '3/4 = 9/12,  5/6 = 10/12,  7/12 = 7/12',
      '9/12 − 10/12 + 7/12 = (9 − 10 + 7)/12 = 6/12',
      'Simplificando: 6/12 = 1/2',
    ],
  },
  {
    id: 19,
    type: 'compute',
    statement: 'Resuelve (heterogéneas): 2/5 + 3/7 − 1/2',
    ansNum: 23,
    ansDen: 70,
    steps: [
      'mcm(5, 7, 2) = 70',
      '2/5 = 28/70,  3/7 = 30/70,  1/2 = 35/70',
      '28/70 + 30/70 − 35/70 = (28 + 30 − 35)/70',
      '= 23/70 (ya está en su mínima expresión)',
    ],
  },
  {
    id: 20,
    type: 'compute',
    statement: 'Resuelve (fracciones mixtas): 5 2/3 + 2 3/4. Ingresa el resultado como fracción impropia.',
    ansNum: 101,
    ansDen: 12,
    steps: [
      'Se convierten a fracciones impropias: 5 2/3 = 17/3,  2 3/4 = 11/4',
      'mcm(3, 4) = 12',
      '17/3 = 68/12,  11/4 = 33/12',
      '68/12 + 33/12 = 101/12 (= 8 5/12)',
    ],
  },
  {
    id: 21,
    type: 'compute',
    statement: 'Resuelve (fracciones mixtas): 8 1/6 − 3 5/9. Ingresa el resultado como fracción impropia.',
    ansNum: 83,
    ansDen: 18,
    steps: [
      'Se convierten a fracciones impropias: 8 1/6 = 49/6,  3 5/9 = 32/9',
      'mcm(6, 9) = 18',
      '49/6 = 147/18,  32/9 = 64/18',
      '147/18 − 64/18 = 83/18 (= 4 11/18)',
    ],
  },
  {
    id: 22,
    type: 'compute',
    statement: 'Resuelve (heterogéneas con negativos): −7/10 + 3/5 − (−9/20)',
    ansNum: 7,
    ansDen: 20,
    steps: [
      'mcm(10, 5, 20) = 20',
      '−7/10 = −14/20,  3/5 = 12/20,  −(−9/20) = +9/20',
      '−14/20 + 12/20 + 9/20 = (−14 + 12 + 9)/20',
      '= 7/20',
    ],
  },
  {
    id: 23,
    type: 'compute',
    statement: 'Resuelve (cuatro términos heterogéneos): 1/2 + 1/3 + 1/4 − 1/6',
    ansNum: 11,
    ansDen: 12,
    steps: [
      'mcm(2, 3, 4, 6) = 12',
      '1/2 = 6/12,  1/3 = 4/12,  1/4 = 3/12,  1/6 = 2/12',
      '6/12 + 4/12 + 3/12 − 2/12 = (6 + 4 + 3 − 2)/12',
      '= 11/12',
    ],
  },
]

// ---- Parte V · Producto de Fraccionarios ----
export const PRODUCTO: FracComputeExercise[] = [
  {
    id: 24,
    type: 'compute',
    statement: 'Resuelve el producto encadenado: (2/3) · (9/14) · (7/15)',
    ansNum: 1,
    ansDen: 5,
    steps: [
      'Se multiplican todos los numeradores y todos los denominadores.',
      '(2 · 9 · 7)/(3 · 14 · 15) = 126/630',
      'mcd(126, 630) = 126',
      '126/630 = 1/5',
    ],
  },
  {
    id: 25,
    type: 'compute',
    statement: 'Resuelve: (−5/8) · (4/15) · (−3/2)',
    ansNum: 1,
    ansDen: 4,
    steps: [
      'Negativo por negativo por positivo: el resultado es positivo.',
      '(5 · 4 · 3)/(8 · 15 · 2) = 60/240',
      'mcd(60, 240) = 60',
      '60/240 = 1/4',
    ],
  },
  {
    id: 26,
    type: 'compute',
    statement: 'Resuelve: (7/9) · (3 3/7). Primero convierte la fracción mixta a impropia.',
    ansNum: 8,
    ansDen: 3,
    steps: [
      '3 3/7 = (3 · 7 + 3)/7 = 24/7',
      '(7/9) · (24/7) = (7 · 24)/(9 · 7) = 168/63',
      'Simplificando: mcd(168, 63) = 21 → 168/63 = 8/3',
    ],
  },
  {
    id: 27,
    type: 'compute',
    statement:
      'Un tanque contiene 3/4 de su capacidad en agua. Se usan 2/5 de esa agua para riego. ¿Qué fracción de la capacidad total del tanque se usó en riego?',
    ansNum: 3,
    ansDen: 10,
    steps: [
      'La fracción usada en riego es 2/5 de lo que había, que a su vez era 3/4 del total.',
      'Fracción del total = (2/5) · (3/4)',
      '= (2 · 3)/(5 · 4) = 6/20',
      'Simplificando entre 2: 6/20 = 3/10',
    ],
  },
  {
    id: 28,
    type: 'compute',
    statement: 'Resuelve el producto encadenado: (12/25) · (35/48) · (10/21)',
    ansNum: 1,
    ansDen: 6,
    steps: [
      '(12 · 35 · 10)/(25 · 48 · 21) = 4200/25200',
      'mcd(4200, 25200) = 4200',
      '4200/25200 = 1/6',
    ],
  },
]

export const WORKSHOP2_TOTAL_ITEMS =
  EQUIVALENTES.length +
  PROPIEDADES.length +
  TIPOS_CLASIFICA.length +
  TIPOS_COMPUTE.length +
  SUMA_RESTA.length +
  PRODUCTO.length
