// ---------------------------------------------------------------
// Contenido del curso. Los "avisos" son datos de ejemplo (placeholder):
// edita el arreglo NEWS de más abajo con las fechas reales del curso.
// ---------------------------------------------------------------

export type SectionId =
  | 'inicio'
  | 'semana1'
  | 'historia'
  | 'conjuntos'
  | 'propiedades'
  | 'pemdas'
  | 'patrones'
  | 'mcmMcd'
  | 'semana2'
  | 'equivalentes'
  | 'propiedadesFracciones'
  | 'tiposFracciones'
  | 'sumaResta'
  | 'producto'
  | 'semana3'
  | 'division'
  | 'aplicacionFracciones'
  | 'potenciacion'
  | 'problemasPotenciacion'
  | 'radicacion'

export const MODULES: { id: SectionId; short: string; title: string }[] = [
  { id: 'conjuntos', short: '01', title: 'Conjuntos Numéricos' },
  { id: 'propiedades', short: '02', title: 'Propiedades de las Operaciones' },
  { id: 'pemdas', short: '03', title: 'Jerarquía de Operaciones' },
  { id: 'patrones', short: '04', title: 'Patrones Numéricos' },
  { id: 'mcmMcd', short: '05', title: 'MCM y MCD' },
]

export const MODULES_SEMANA2: { id: SectionId; short: string; title: string }[] = [
  { id: 'equivalentes', short: '01', title: 'Fracciones Equivalentes' },
  { id: 'propiedadesFracciones', short: '02', title: 'Propiedades de las Fracciones' },
  { id: 'tiposFracciones', short: '03', title: 'Tipos de Fracciones' },
  { id: 'sumaResta', short: '04', title: 'Suma y Resta de Fraccionarios' },
  { id: 'producto', short: '05', title: 'Producto de Fraccionarios' },
]

export const MODULES_SEMANA3: { id: SectionId; short: string; title: string }[] = [
  { id: 'division', short: '01', title: 'División de Fraccionarios' },
  { id: 'aplicacionFracciones', short: '02', title: 'Problemas con Fraccionarios' },
  { id: 'potenciacion', short: '03', title: 'Potenciación' },
  { id: 'problemasPotenciacion', short: '04', title: 'Problemas de Potenciación' },
  { id: 'radicacion', short: '05', title: 'Radicación' },
]

// ---- PLACEHOLDER: reemplaza estos avisos por los reales del semestre ----
export interface NewsItem {
  kind: 'evaluacion' | 'taller' | 'aviso'
  title: string
  date: string
  detail: string
}

export const NEWS: NewsItem[] = [
  {
    kind: 'taller',
    title: 'Taller 1 — Conjuntos Numéricos y Propiedades',
    date: 'Fecha por confirmar · Semana 2',
    detail: 'Trabajo independiente sobre clasificación de números y propiedades de las operaciones.',
  },
  {
    kind: 'evaluacion',
    title: 'Evaluación Unidad 1 — Aritmética',
    date: 'Fecha por confirmar · Semana 4',
    detail: 'Cubre los cinco módulos: conjuntos, propiedades, jerarquía, patrones y MCM/MCD.',
  },
]
// ---- FIN PLACEHOLDER ----

// ---- Fechas evaluativas por grupo (semestre 2026-II) ----
export interface CorteSchedule {
  corte: number
  actividad: string
  simulacro: string
  parcial?: string
}

export interface GroupSchedule {
  group: string
  schedule: string
  cortes: CorteSchedule[]
}

export const GROUP_SCHEDULES: GroupSchedule[] = [
  {
    group: 'Grupo 078',
    schedule: 'Lunes y miércoles · 4:00 p. m. – 6:00 p. m.',
    cortes: [
      { corte: 1, actividad: '31 de agosto', simulacro: '2 de septiembre', parcial: '7 de septiembre' },
      { corte: 2, actividad: '30 de septiembre', simulacro: '5 de octubre', parcial: '7 de octubre' },
      { corte: 3, actividad: '9 de noviembre', simulacro: '18 de noviembre', parcial: '23 de noviembre' },
    ],
  },
  {
    group: 'Grupo 052',
    schedule: 'Martes y jueves · 6:00 a. m. – 8:00 a. m.',
    cortes: [
      { corte: 1, actividad: '1 de septiembre', simulacro: '8 de septiembre', parcial: '10 de septiembre' },
      { corte: 2, actividad: '29 de septiembre', simulacro: '6 de octubre', parcial: '8 de octubre' },
      { corte: 3, actividad: '10 de noviembre', simulacro: '19 de noviembre' },
    ],
  },
  {
    group: 'Grupo 811',
    schedule: 'Viernes · 10:00 a. m. – 2:00 p. m.',
    cortes: [
      { corte: 1, actividad: '28 de agosto', simulacro: '4 de septiembre', parcial: '11 de septiembre' },
      { corte: 2, actividad: '25 de septiembre', simulacro: '2 de octubre', parcial: '9 de octubre' },
      { corte: 3, actividad: '6 de noviembre', simulacro: '20 de noviembre', parcial: '27 de noviembre' },
    ],
  },
]
// ---- FIN fechas evaluativas por grupo ----

export interface SupportMaterial {
  title: string
  description: string
  file: string
}

export const SUPPORT_MATERIALS: SupportMaterial[] = [
  {
    title: 'Programación semanal — Matemáticas Operativas',
    description: 'Cronograma oficial del curso: elementos de competencia, temáticas y eventos evaluativos semana a semana.',
    file: '/docs/Programacion_Semanal.pdf',
  },
  {
    title: 'Guía Unidad 1 — Aritmética',
    description: 'Conjuntos numéricos, propiedades de las operaciones, números primos, MCM, MCD y fraccionarios.',
    file: '/docs/U1_Guia_Aritmetica.pdf',
  },
  {
    title: 'Guía — Álgebra',
    description: 'Expresiones algebraicas, operaciones con polinomios, factorización, ecuaciones y sistemas de ecuaciones.',
    file: '/docs/Guia_Algebra.pdf',
  },
  {
    title: 'Guía Unidad 3 — Trigonometría',
    description: 'Ángulos, teorema de Pitágoras, razones trigonométricas, ley del seno y coseno, identidades y ecuaciones trigonométricas.',
    file: '/docs/Guia_Trigonometria_Unidad3.pdf',
  },
]

export interface TimelineEntry {
  era: string
  title: string
  text: string
  fact: string
}

export const TIMELINE: TimelineEntry[] = [
  {
    era: '≈ 20 000 a.C.',
    title: 'Marcas, piedras y huesos',
    text: 'Antes de que existiera un solo símbolo numérico, las comunidades llevaban la cuenta tallando muescas en huesos o alineando piedras: una marca por cada oveja, cada día, cada objeto contado.',
    fact: 'El hueso de Ishango, hallado en el Congo, tiene series de muescas que algunos investigadores interpretan como un registro de conteo de hace veinte mil años.',
  },
  {
    era: '≈ 3000 a.C.',
    title: 'Nacen los sistemas de numeración',
    text: 'Babilonia desarrolló un sistema posicional en base 60 —el mismo que hoy divide la hora en 60 minutos— y Egipto uno jeroglífico en base 10. Contar objetos discretos, uno por uno, da origen a los Naturales.',
    fact: 'Todavía usamos la base 60 babilónica cada vez que miramos un reloj o un transportador.',
  },
  {
    era: '≈ siglo VII',
    title: 'El cero deja de ser un espacio vacío',
    text: 'En la India, el matemático Brahmagupta trató al cero como un número con reglas propias —no solo como un lugar vacío en la notación— y estableció cómo operar con él.',
    fact: 'Brahmagupta también fue de los primeros en escribir reglas explícitas para sumar y multiplicar con números negativos.',
  },
  {
    era: '≈ siglo VII–XII',
    title: 'Deudas que se vuelven números',
    text: 'En China, los matemáticos usaban varillas de conteo rojas para cantidades positivas y negras para negativas. Más tarde, en la India, los negativos se formalizaron para representar deudas frente a haberes. Así nacen los Enteros.',
    fact: 'La idea de "menos que nada" incomodó a los matemáticos europeos durante siglos: muchos los llamaron números "absurdos" o "ficticios" hasta el siglo XVII.',
  },
  {
    era: '≈ 1800 a.C.',
    title: 'Repartir sin dejar sobras',
    text: 'Egipcios y babilonios necesitaban dividir tierras, granos y herencias en partes exactas. Para eso crearon las fracciones: cocientes de enteros que expresan una parte de un todo. Así nacen los Racionales.',
    fact: 'Los egipcios casi siempre escribían las fracciones como suma de fracciones unitarias distintas, como 1/2 + 1/6 en vez de 2/3.',
  },
  {
    era: '≈ siglo V a.C.',
    title: 'El escándalo pitagórico',
    text: 'Los pitagóricos creían que todo en el universo podía expresarse como razón de enteros. Pero al medir la diagonal de un cuadrado de lado 1, encontraron √2: un número que no puede escribirse como fracción. Así nacen los Irracionales.',
    fact: 'La leyenda cuenta que Hipaso de Metaponto reveló este secreto y fue arrojado al mar por sus propios compañeros pitagóricos.',
  },
  {
    era: 'siglo XIX',
    title: 'Los Números Reales, por fin completos',
    text: 'Matemáticos como Dedekind y Cauchy dieron una base rigurosa a los números reales, uniendo racionales e irracionales en un solo continuo sin huecos: el conjunto ℝ que usamos hoy para contar, medir y calcular cualquier cantidad.',
    fact: 'La "cortadura de Dedekind" define cada número real como una forma de partir en dos a todos los racionales — una idea abstracta que cerró dos mil años de preguntas.',
  },
]

// ---- Módulo 1: Conjuntos Numéricos ----
export type NumberSet = 'N' | 'Z' | 'Q' | "Q'"

export interface ClassifyItem {
  display: string
  value: number | string
  set: NumberSet
  explain: string
}

export const CLASSIFY_ITEMS: ClassifyItem[] = [
  { display: '7', value: 7, set: 'N', explain: 'Es un entero positivo usado para contar: pertenece a los Naturales (y también a ℤ y ℚ, pero ℕ es su conjunto más específico).' },
  { display: '-4', value: -4, set: 'Z', explain: 'Es negativo, así que no es Natural, pero sí un número entero: pertenece a ℤ.' },
  { display: '10/2', value: '10/2', set: 'N', explain: '10/2 = 5, un cociente exacto que da un entero positivo: es Natural.' },
  { display: '30/8', value: '30/8', set: 'Q', explain: '30/8 = 3.75, un cociente de enteros que no es entero: es Racional.' },
  { display: '√3', value: Math.sqrt(3), set: "Q'", explain: '√3 ≈ 1.732... no es exacta ni periódica: es Irracional.' },
  { display: 'π', value: Math.PI, set: "Q'", explain: 'π tiene infinitas cifras decimales sin patrón que se repita: es Irracional.' },
  { display: '0', value: 0, set: 'N', explain: 'El cero pertenece a los Naturales según la definición del curso: ℕ = {0, 1, 2, 3, ...}.' },
  { display: '-3/4', value: '-3/4', set: 'Q', explain: 'Es un cociente de enteros negativo, no es entero: pertenece a ℚ.' },
  { display: '√9', value: 3, set: 'N', explain: '√9 = 3 exactamente, un entero positivo: es Natural, aunque venga escrito como raíz.' },
  { display: '-12', value: -12, set: 'Z', explain: 'Entero negativo: pertenece a ℤ pero no a ℕ.' },
]

export const SET_LABELS: Record<NumberSet, string> = {
  N: 'Naturales (ℕ)',
  Z: 'Enteros (ℤ)',
  Q: 'Racionales (ℚ)',
  "Q'": "Irracionales (ℚ')",
}

// ---- Módulo 2: Propiedades ----
export interface PropertyQuestion {
  expression: string
  answer: 'Asociativa' | 'Conmutativa' | 'Elemento Neutro' | 'Inverso' | 'Distributiva'
}

export const PROPERTY_LIST = [
  { name: 'Asociativa', example: '5 + (6 + 7) = (5 + 6) + 7' },
  { name: 'Conmutativa', example: '5 · 6 = 6 · 5' },
  { name: 'Elemento Neutro', example: '5 + 0 = 5   y   5 · 1 = 5' },
  { name: 'Inverso', example: '5 + (−5) = 0   y   5 · 1/5 = 1' },
  { name: 'Distributiva', example: '7 · (5 + 6) = 7·5 + 7·6' },
]

export const PROPERTY_QUIZ: PropertyQuestion[] = [
  { expression: '9 · (3 + 4) = 9·3 + 9·4', answer: 'Distributiva' },
  { expression: '8 + 3 = 3 + 8', answer: 'Conmutativa' },
  { expression: '(2 + 9) + 5 = 2 + (9 + 5)', answer: 'Asociativa' },
  { expression: '6 · 1 = 6', answer: 'Elemento Neutro' },
  { expression: '4 · (1/4) = 1', answer: 'Inverso' },
  { expression: '(3 · 7) · 2 = 3 · (7 · 2)', answer: 'Asociativa' },
]

// ---- Módulo 3: PEMDAS ----
export const PEMDAS_RULES = [
  'Paréntesis (y otros signos de agrupación, de adentro hacia afuera: ( ), [ ], { }).',
  'Exponentes y Raíces.',
  'Multiplicaciones y Divisiones (de izquierda a derecha).',
  'Sumas y Restas (de izquierda a derecha).',
]

export const PEMDAS_WORKED_STEPS = [
  { label: 'Expresión original', expr: '13 − { 2 + [ 6 + 3 − (8 + 7) ] }' },
  { label: 'Paso 1 — Paréntesis', expr: '13 − { 2 + [ 6 + 3 − (15) ] }' },
  { label: 'Paso 2 — Dentro del corchete', expr: '13 − { 2 + [ 9 − 15 ] } = 13 − { 2 + [ −6 ] }' },
  { label: 'Paso 3 — Eliminar corchete', expr: '13 − { 2 − 6 }' },
  { label: 'Paso 4 — Dentro de las llaves', expr: '13 − { −4 }' },
  { label: 'Paso 5 — Resultado final', expr: '13 + 4 = 17' },
]

export interface PemdasPractice {
  expr: string
  answer: number
}

export const PEMDAS_PRACTICE: PemdasPractice[] = [
  { expr: '20 − { 3 + [ 5 − (2 + 1) ] }', answer: 15 },
  { expr: '4 + { 10 − [ 2 + (3 − 5) ] }', answer: 14 },
]

// ---- Módulo 4: Patrones ----
export const PATTERN_MAIN = {
  sequence: [3, 6, 11, 18, 27],
  diffs: [3, 5, 7, 9],
  next: 38,
}

export interface PatternPractice {
  sequence: number[]
  next: number
  hint: string
}

export const PATTERN_PRACTICE: PatternPractice[] = [
  { sequence: [2, 4, 8, 16, 32], next: 64, hint: 'Compara cada término con el anterior usando una multiplicación, no una resta.' },
  { sequence: [1, 4, 9, 16, 25], next: 36, hint: 'Cada término es el resultado de elevar un número consecutivo al cuadrado.' },
]

// ---- Módulo 5: MCM / MCD ----
export const FACTOR_CHOICES = [3600, 60, 84, 120, 150]

export function factorize(n: number): Record<number, number> {
  const factors: Record<number, number> = {}
  let x = n
  for (let p = 2; p * p <= x; p++) {
    while (x % p === 0) {
      factors[p] = (factors[p] ?? 0) + 1
      x /= p
    }
  }
  if (x > 1) factors[x] = (factors[x] ?? 0) + 1
  return factors
}

export const MACHINE_PROBLEM = {
  machines: [
    { name: 'A', minutes: 8, factorStr: '2³' },
    { name: 'B', minutes: 12, factorStr: '2² · 3' },
    { name: 'C', minutes: 18, factorStr: '2 · 3²' },
  ],
  lcm: 72,
  resultTime: '9:12 AM',
}

// =====================================================================
// SEMANA 2 — Fraccionarios (basado en U1_Guia_ARITMETICA.pdf, pp. 17-24)
// =====================================================================

export function gcd(a: number, b: number): number {
  let x = Math.abs(a)
  let y = Math.abs(b)
  while (y) [x, y] = [y, x % y]
  return x
}

export function simplifyFraction(num: number, den: number): [number, number] {
  const d = gcd(num, den) || 1
  const sign = den < 0 ? -1 : 1
  return [(sign * num) / d, (sign * den) / d]
}

// ---- Módulo 1 (Semana 2): Fracciones equivalentes ----
export interface SimplifyItem {
  num: number
  den: number
  ansNum: number
  ansDen: number
}

export const SIMPLIFY_ITEMS: SimplifyItem[] = [
  { num: 98, den: 147, ansNum: 2, ansDen: 3 },
  { num: 273, den: 637, ansNum: 3, ansDen: 7 },
  { num: 332, den: 415, ansNum: 4, ansDen: 5 },
  { num: 285, den: 513, ansNum: 5, ansDen: 9 },
  { num: 252, den: 441, ansNum: 4, ansDen: 7 },
  { num: 623, den: 979, ansNum: 7, ansDen: 11 },
  { num: 370, den: 444, ansNum: 5, ansDen: 6 },
  { num: 2002, den: 5005, ansNum: 2, ansDen: 5 },
]

// ---- Módulo 2 (Semana 2): Propiedades de las fracciones ----
export interface FracPropertyQuestion {
  expression: string
  answer: 'Igualdad' | 'Fracción negativa' | 'Multiplicación' | 'Simplificación' | 'Suma y resta' | 'División'
}

export const FRAC_PROPERTY_LIST = [
  { name: 'Igualdad', example: 'a/b = c/d, si a·d = b·c' },
  { name: 'Fracción negativa', example: 'a/(−b) = (−a)/b = −(a/b)' },
  { name: 'Multiplicación', example: '(a/b) · (c/d) = (a·c)/(b·d)' },
  { name: 'Simplificación', example: '(a·d)/(b·d) = a/b, con b∧d ≠ 0' },
  { name: 'Suma y resta', example: '(a/b) ± (c/d) = (a·d ± b·c)/(b·d)' },
  { name: 'División', example: '(a/b) ÷ (c/d) = (a·d)/(b·c)' },
]

export const FRAC_PROPERTY_QUIZ: FracPropertyQuestion[] = [
  { expression: '5/3 = 5/3, dado 5·3 = 3·5', answer: 'Igualdad' },
  { expression: '5/(−3) = (−5)/3 = −5/3', answer: 'Fracción negativa' },
  { expression: '(5/3) · (2/7) = 10/21', answer: 'Multiplicación' },
  { expression: '(5a)/(5b) = a/b', answer: 'Simplificación' },
  { expression: '(7/5) + (3/7) = (7·7 + 5·3)/(5·7)', answer: 'Suma y resta' },
  { expression: '(5/3) ÷ (2/7) = (5·7)/(3·2)', answer: 'División' },
]

// ---- Módulo 3 (Semana 2): Tipos de fracciones ----
export type FractionKind = 'propia' | 'impropia' | 'mixta'

export interface FractionClassifyItem {
  display: string
  kind: FractionKind
  explain: string
}

export const FRACTION_CLASSIFY_ITEMS: FractionClassifyItem[] = [
  { display: '2/5', kind: 'propia', explain: 'El numerador (2) es menor que el denominador (5): su valor está entre 0 y 1.' },
  { display: '3/7', kind: 'propia', explain: 'El numerador (3) es menor que el denominador (7): es una fracción propia.' },
  { display: '9/11', kind: 'propia', explain: 'El numerador (9) es menor que el denominador (11): es propia.' },
  { display: '5/2', kind: 'impropia', explain: 'El numerador (5) es mayor que el denominador (2): su valor es mayor que 1.' },
  { display: '11/9', kind: 'impropia', explain: 'El numerador (11) es mayor que el denominador (9): es impropia.' },
  { display: '5/5', kind: 'impropia', explain: 'El numerador es igual al denominador: por definición también es impropia.' },
  { display: '3 2/5', kind: 'mixta', explain: 'Tiene una parte entera (3) y una parte fraccionaria (2/5): es una fracción mixta.' },
  { display: '1 3/7', kind: 'mixta', explain: 'Combina un entero (1) con una fracción propia (3/7): es mixta.' },
  { display: '5 9/11', kind: 'mixta', explain: 'Parte entera (5) más parte fraccionaria (9/11): es mixta.' },
]

export const FRACTION_KIND_LABELS: Record<FractionKind, string> = {
  propia: 'Propia',
  impropia: 'Impropia',
  mixta: 'Mixta',
}

// ---- Conversión mixta → impropia (Módulo 3) ----
export interface MixedConvertItem {
  whole: number
  num: number
  den: number
  ansNum: number
}

export const MIXED_CONVERT_ITEMS: MixedConvertItem[] = [
  { whole: 3, num: 2, den: 5, ansNum: 17 },
  { whole: 1, num: 3, den: 7, ansNum: 10 },
  { whole: 5, num: 9, den: 11, ansNum: 64 },
]

// ---- Módulo 4 (Semana 2): Suma y resta de fraccionarios ----
export const HOMOGENEAS_STEPS = [
  { label: 'Expresión original', expr: '11/15 + 16/15' },
  { label: 'Paso 1 — Mismo denominador: sumamos numeradores', expr: '(11 + 16)/15' },
  { label: 'Paso 2 — Resultado', expr: '27/15' },
  { label: 'Paso 3 — Simplificamos', expr: '9/5' },
]

export interface FracPractice {
  label: string
  aNum: number
  aDen: number
  bNum: number
  bDen: number
  op: '+' | '-'
  ansNum: number
  ansDen: number
}

export const HOMOGENEAS_PRACTICE: FracPractice[] = [
  { label: '3/10 + 4/10', aNum: 3, aDen: 10, bNum: 4, bDen: 10, op: '+', ansNum: 7, ansDen: 10 },
  { label: '10/15 − 7/15', aNum: 10, aDen: 15, bNum: 7, bDen: 15, op: '-', ansNum: 3, ansDen: 15 },
]

export const HETEROGENEAS_STEPS = [
  { label: 'Expresión original', expr: '7/12 + 1/6 − 5/24' },
  { label: 'Paso 1 — mcm(12, 6, 24) = 24', expr: '(2·7 + 4·1 − 1·5)/24' },
  { label: 'Paso 2 — Resolvemos el numerador', expr: '(14 + 4 − 5)/24' },
  { label: 'Paso 3 — Resultado', expr: '13/24' },
]

export const HETEROGENEAS_PRACTICE: FracPractice[] = [
  { label: '5/3 + 4/5', aNum: 5, aDen: 3, bNum: 4, bDen: 5, op: '+', ansNum: 37, ansDen: 15 },
  { label: '3/4 − 7/5', aNum: 3, aDen: 4, bNum: 7, bDen: 5, op: '-', ansNum: -13, ansDen: 20 },
]

// ---- Módulo 5 (Semana 2): Producto de fraccionarios ----
export interface ProductPractice {
  aNum: number
  aDen: number
  bNum: number
  bDen: number
  ansNum: number
  ansDen: number
}

export const PRODUCT_WORKED = { aNum: 7, aDen: 12, bNum: 5, bDen: 6, ansNum: 35, ansDen: 72 }

export const PRODUCT_PRACTICE: ProductPractice[] = [
  { aNum: 5, aDen: 3, bNum: 2, bDen: 7, ansNum: 10, ansDen: 21 },
  { aNum: 2, aDen: 5, bNum: 3, bDen: 4, ansNum: 6, ansDen: 20 },
  { aNum: 3, aDen: 8, bNum: 4, bDen: 9, ansNum: 12, ansDen: 72 },
]

// =====================================================================
// SEMANA 3 — División de fraccionarios, aplicaciones, potenciación
// y radicación (basado en U1_Guia_ARITMETICA.pdf, pp. 25-37)
// =====================================================================

// ---- Módulo 1 (Semana 3): División de fraccionarios ----
export const DIVISION_WORKED = { aNum: 7, aDen: 12, bNum: 5, bDen: 6, ansNum: 7, ansDen: 10 }

export const DIVISION_PRACTICE: ProductPractice[] = [
  { aNum: 2, aDen: 3, bNum: 5, bDen: 4, ansNum: 8, ansDen: 15 },
  { aNum: 5, aDen: 6, bNum: 2, bDen: 3, ansNum: 15, ansDen: 12 },
  { aNum: 3, aDen: 5, bNum: 7, bDen: 2, ansNum: 6, ansDen: 35 },
]

// ---- Módulo 2 (Semana 3): Problemas de aplicación con fraccionarios ----
export interface WordProblem {
  prompt: string
  options: string[]
  answerIndex: number
  solution: string
}

export const FRACTION_WORD_PROBLEMS: WordProblem[] = [
  {
    prompt:
      'En una fábrica de chocolates, 3/5 de la producción total se destina a barras de chocolate negro. De estas barras, 2/7 se envasan en cajas de 100 gramos. Si la fábrica produce 10 000 kg de chocolate al día, ¿cuántas cajas de 100 gramos de chocolate negro se pueden llenar diariamente?',
    options: ['1714', '17143', '8571', '857'],
    answerIndex: 1,
    solution:
      '3/5 · 10 000 = 6000 kg de chocolate negro. 2/7 · 6000 ≈ 1714.29 kg = 1 714 290 g. 1 714 290 ÷ 100 ≈ 17 143 cajas.',
  },
  {
    prompt:
      'Un tanque de agua se llena en 3 horas cuando se usan simultáneamente tres llaves. La primera llave puede llenar 2/5 del tanque en una hora, la segunda puede llenar 1/4 del tanque en una hora. ¿Qué fracción del tanque llena la tercera llave en una hora?',
    options: ['1/12', '1/6', '7/60', '7/20'],
    answerIndex: 3,
    solution: '2/5 + 1/4 = 13/20 del tanque entre las dos llaves. La tercera llena 1 − 13/20 = 7/20.',
  },
  {
    prompt:
      'Un tanque de leche está lleno hasta los tres décimos de su capacidad; luego se le echan 120 galones y queda lleno hasta siete décimos de su capacidad. ¿Cuántos galones llena el tanque si está vacío?',
    options: ['120 galones', '240 galones', '300 galones', '420 galones'],
    answerIndex: 2,
    solution: '120 galones equivalen a 7/10 − 3/10 = 4/10 de la capacidad. Por tanto, la capacidad total es 120 ÷ (4/10) = 300 galones.',
  },
  {
    prompt: 'Elena va de compras con $18 000. Se gasta 3/5 de esa cantidad. ¿Cuánto le queda?',
    options: ['$10 800', '$7 200', '$5 400', '$12 600'],
    answerIndex: 1,
    solution: 'Le queda 2/5 de $18 000 = $7 200.',
  },
  {
    prompt: 'Un hombre vende 1/3 de su finca, alquila 1/8 y el resto lo cultiva. ¿Qué porción de la finca cultiva?',
    options: ['11/24', '13/24', '5/24', '17/24'],
    answerIndex: 1,
    solution: '1/3 + 1/8 = 11/24 vendida o alquilada. Cultiva 1 − 11/24 = 13/24.',
  },
]

// ---- Módulo 3 (Semana 3): Propiedades de la potenciación ----
export interface PowerPropertyQuestion {
  expression: string
  answer: string
}

export const POWER_PROPERTY_LIST = [
  { name: 'Producto de potencias', example: 'aᵐ · aⁿ = aᵐ⁺ⁿ,  3² · 3⁵ = 3⁷' },
  { name: 'Cociente de potencias', example: 'aᵐ / aⁿ = aᵐ⁻ⁿ,  3⁵ / 3³ = 3²' },
  { name: 'Exponente cero', example: 'a⁰ = 1,  5⁰ = 1' },
  { name: 'Potencia de potencia', example: '(aᵐ)ⁿ = aᵐ·ⁿ,  (3²)⁵ = 3¹⁰' },
  { name: 'Potencia de un producto', example: '(a·b)ⁿ = aⁿ·bⁿ,  (3·4)² = 3²·4²' },
  { name: 'Potencia de un cociente', example: '(a/b)ⁿ = aⁿ/bⁿ,  (3/4)² = 3²/4²' },
  { name: 'Potencia negativa de una fracción', example: '(a/b)⁻ⁿ = (b/a)ⁿ,  (3/4)⁻² = (4/3)²' },
  { name: 'Cambio de exponente negativo', example: 'a⁻ⁿ/b⁻ᵐ = bᵐ/aⁿ,  3⁻²/4⁻⁵ = 4⁵/3²' },
]

export const POWER_PROPERTY_QUIZ: PowerPropertyQuestion[] = [
  { expression: '3² · 3⁵ = 3⁷', answer: 'Producto de potencias' },
  { expression: '3⁵ / 3³ = 3²', answer: 'Cociente de potencias' },
  { expression: '5⁰ = 1', answer: 'Exponente cero' },
  { expression: '(3²)⁵ = 3¹⁰', answer: 'Potencia de potencia' },
  { expression: '(3 · 4)² = 3² · 4²', answer: 'Potencia de un producto' },
  { expression: '(3/4)² = 3²/4²', answer: 'Potencia de un cociente' },
]

// ---- Módulo 4 (Semana 3): Problemas de razonamiento con potenciación ----
export const POWER_WORD_PROBLEMS: WordProblem[] = [
  {
    prompt: 'Una bacteria se reproduce por bipartición cada hora. Si inicialmente hay 100 bacterias, ¿cuántas habrá después de 5 horas?',
    options: ['3200', '1600', '3600', '6400'],
    answerIndex: 0,
    solution: 'La población se duplica cada hora: 100 · 2⁵ = 100 · 32 = 3200.',
  },
  {
    prompt: 'Un cubo tiene una arista de 3 cm. Si se triplica la longitud de la arista, ¿en qué factor aumentará su volumen?',
    options: ['9', '18', '27', '81'],
    answerIndex: 2,
    solution: 'Volumen inicial = 3³ = 27 cm³. Nuevo volumen = 9³ = 729 cm³. Factor = 729/27 = 27.',
  },
  {
    prompt: 'En una progresión geométrica, el primer término es 2 y el cuarto término es 54. ¿Cuál es la razón de la progresión?',
    options: ['3', '2', '1.5', '2.5'],
    answerIndex: 0,
    solution: '54 = 2·r³ → 27 = r³ → r = ∛27 = 3.',
  },
  {
    prompt: 'Un capital de $10 000 se invierte a una tasa de interés compuesto del 8% anual. ¿Cuánto dinero habrá después de 3 años?',
    options: ['$12 597,12', '$12 800', '$13 000', '$12 400'],
    answerIndex: 0,
    solution: 'VF = 10 000(1 + 0.08)³ = 10 000 · 1.259712 = $12 597,12.',
  },
]

// ---- Módulo 5 (Semana 3): Radicación ----
export interface RadicalItem {
  display: string
  ansNum: number
  ansDen: number
  explain: string
}

export const RADICAL_EXAMPLES: RadicalItem[] = [
  { display: '√125 = √(5²·5)', ansNum: 5, ansDen: 1, explain: '√125 = 5√5 (aquí se pide solo el coeficiente entero: 5).' },
  { display: '∛125 = ∛5³', ansNum: 5, ansDen: 1, explain: '∛125 = ∛5³ = 5.' },
  { display: '⁵√(−32) = ⁵√(−2⁵)', ansNum: -2, ansDen: 1, explain: 'Con índice impar, la raíz de un negativo es negativa: ⁵√(−32) = −2.' },
]

export const RADICAL_WORD_PROBLEMS: WordProblem[] = [
  {
    prompt: 'El volumen de una esfera es 288π cm³. ¿Cuál es su radio? (V = 4/3 · π · r³)',
    options: ['4 cm', '6 cm', '8 cm', '12 cm'],
    answerIndex: 1,
    solution: '288 = (4/3)r³ → r³ = 216 → r = ∛216 = 6 cm.',
  },
  {
    prompt: 'Un cuadrado tiene un área de 169 cm². ¿Cuál es la longitud de su lado? (Área = L²)',
    options: ['12', '13', '14', '15'],
    answerIndex: 1,
    solution: '169 = L² → L = √169 = 13.',
  },
  {
    prompt: 'Si ∛x = 5, ¿cuál es el valor de ∛(8x)?',
    options: ['10', '20', '15', '40'],
    answerIndex: 0,
    solution: '∛(8x) = ∛8 · ∛x = 2 · 5 = 10.',
  },
]
