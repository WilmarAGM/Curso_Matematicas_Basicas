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

export const MODULES: { id: SectionId; short: string; title: string }[] = [
  { id: 'conjuntos', short: '01', title: 'Conjuntos Numéricos' },
  { id: 'propiedades', short: '02', title: 'Propiedades de las Operaciones' },
  { id: 'pemdas', short: '03', title: 'Jerarquía de Operaciones' },
  { id: 'patrones', short: '04', title: 'Patrones Numéricos' },
  { id: 'mcmMcd', short: '05', title: 'MCM y MCD' },
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
  { expr: '4 + { 10 − [ 2 + (3 − 5) ] }', answer: 4 },
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
