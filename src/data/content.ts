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
  | 'semana4'
  | 'expresionesAlgebraicas'
  | 'propiedadesAlgebra'
  | 'operacionesPolinomios'
  | 'productosNotables'
  | 'aplicacionesAlgebra'
  | 'semana5'
  | 'divisionPolinomios'
  | 'factorComun'
  | 'trinomioSimple'
  | 'trinomioGeneral'
  | 'aplicacionesFactorizacion'
  | 'semana6'
  | 'trinomioCuadradoPerfecto'
  | 'diferenciaCuadrados'
  | 'tcpAdicionSustraccion'
  | 'repasoFactorizacion'
  | 'aplicacionesGeometricas'
  | 'semana7'
  | 'teoremaResiduo'
  | 'teoremaFactor'
  | 'operacionesRacionales'
  | 'racionalizacion'
  | 'aplicacionesFactorRacional'

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

export const MODULES_SEMANA4: { id: SectionId; short: string; title: string }[] = [
  { id: 'expresionesAlgebraicas', short: '01', title: 'Expresiones Algebraicas' },
  { id: 'propiedadesAlgebra', short: '02', title: 'Propiedades de las Expresiones Algebraicas' },
  { id: 'operacionesPolinomios', short: '03', title: 'Operaciones con Polinomios' },
  { id: 'productosNotables', short: '04', title: 'Productos Notables' },
  { id: 'aplicacionesAlgebra', short: '05', title: 'Aplicaciones con Expresiones Algebraicas' },
]

export const MODULES_SEMANA5: { id: SectionId; short: string; title: string }[] = [
  { id: 'divisionPolinomios', short: '01', title: 'División de Polinomios' },
  { id: 'factorComun', short: '02', title: 'Factor Común y Agrupación' },
  { id: 'trinomioSimple', short: '03', title: 'Trinomio x² + bx + c' },
  { id: 'trinomioGeneral', short: '04', title: 'Trinomio ax² + bx + c' },
  { id: 'aplicacionesFactorizacion', short: '05', title: 'Aplicaciones: División y Factorización' },
]

export const MODULES_SEMANA6: { id: SectionId; short: string; title: string }[] = [
  { id: 'trinomioCuadradoPerfecto', short: '01', title: 'Trinomio Cuadrado Perfecto' },
  { id: 'diferenciaCuadrados', short: '02', title: 'Diferencia de Cuadrados' },
  { id: 'tcpAdicionSustraccion', short: '03', title: 'TCP por Adición y Sustracción' },
  { id: 'repasoFactorizacion', short: '04', title: 'Repaso: Todos los Métodos' },
  { id: 'aplicacionesGeometricas', short: '05', title: 'Aplicaciones Geométricas' },
]

export const MODULES_SEMANA7: { id: SectionId; short: string; title: string }[] = [
  { id: 'teoremaResiduo', short: '01', title: 'Teorema del Residuo' },
  { id: 'teoremaFactor', short: '02', title: 'Teorema del Factor' },
  { id: 'operacionesRacionales', short: '03', title: 'Operaciones con Expresiones Racionales' },
  { id: 'racionalizacion', short: '04', title: 'Racionalización' },
  { id: 'aplicacionesFactorRacional', short: '05', title: 'Aplicaciones' },
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

// =====================================================================
// SEMANA 4 — Expresiones algebraicas, propiedades, operaciones con
// polinomios y productos notables (basado en Guia_Algebra.pdf, pp. 4-25)
// =====================================================================

// ---- Módulo 1 (Semana 4): Expresiones algebraicas ----
export type AlgebraKind = 'monomio' | 'binomio' | 'trinomio' | 'polinomio'

export interface AlgebraClassifyItem {
  display: string
  kind: AlgebraKind
  explain: string
}

export const ALGEBRA_CLASSIFY_ITEMS: AlgebraClassifyItem[] = [
  { display: '5', kind: 'monomio', explain: 'Un solo término, sin variable (grado 0): es un monomio.' },
  { display: '4x³', kind: 'monomio', explain: 'Un solo término (ax^k): es un monomio de grado 3.' },
  { display: '3x + 4', kind: 'binomio', explain: 'Dos términos: es un binomio de grado 1.' },
  { display: '7x² − 1', kind: 'binomio', explain: 'Dos términos: es un binomio de grado 2.' },
  { display: '2x² − 3x + 4', kind: 'trinomio', explain: 'Tres términos: es un trinomio de grado 2.' },
  { display: 'x⁴ − 2x³ + 4x² − 3x + 1', kind: 'polinomio', explain: 'Cinco términos: se le llama polinomio, de grado 4 (el mayor exponente).' },
]

export const ALGEBRA_KIND_LABELS: Record<AlgebraKind, string> = {
  monomio: 'Monomio',
  binomio: 'Binomio',
  trinomio: 'Trinomio',
  polinomio: 'Polinomio',
}

/** Anatomía de un monomio, para el diagrama etiquetado del Módulo 1. */
export const MONOMIAL_ANATOMY = { term: '4x³', coefficient: '4', variable: 'x', exponent: '3' }

/** Ejemplo destacado (guía, Ejemplo 3): traducir un enunciado a expresión algebraica, paso a paso. */
export const RECTANGLE_PERIMETER_STEPS: AlgebraStep[] = [
  { label: 'Paso 1 — Define la variable', expr: 'x = ancho del rectángulo' },
  { label: 'Paso 2 — Expresa el largo en términos de x', expr: 'largo = 2x + 3' },
  { label: 'Paso 3 — Fórmula del perímetro', expr: 'P = 2(largo + ancho)' },
  { label: 'Paso 4 — Sustituye', expr: 'P = 2[x + (2x + 3)]' },
  { label: 'Paso 5 — Simplifica', expr: 'P = 2(3x + 3) = 6x + 6' },
]

export const ALGEBRA_INTRO_PROBLEMS: WordProblem[] = [
  {
    prompt: 'Un rectángulo tiene un largo que es 3 unidades más que el doble de su ancho. Expresa el perímetro del rectángulo en términos del ancho x.',
    options: ['6x + 6', '6x + 7', '8x + 6', '8x + 8'],
    answerIndex: 0,
    solution: 'Largo = 2x + 3. P = 2(largo + ancho) = 2[x + (2x + 3)] = 2(3x + 3) = 6x + 6.',
  },
  {
    prompt: 'Un taxi cobra una tarifa base de $2.50 más $0.75 por kilómetro recorrido. Expresa el costo en términos de los kilómetros x. Si recorrieron 12.5 km, ¿cuánto cobra?',
    options: ['2.50 + 0.75x y $11.9 aprox.', '2.50 + 0.25x y $11.9 aprox.', '2.50 + 0.75x y $12.9 aprox.', '2.50 + 0.75x y $13.9 aprox.'],
    answerIndex: 0,
    solution: 'Costo total = 2.50 + 0.75x. Con x = 12.5: 2.50 + 0.75(12.5) = $11.9 aprox.',
  },
  {
    prompt: 'Un triángulo isósceles tiene un perímetro de 20 cm. Si la base es 2 cm más corta que uno de los lados iguales x, expresa la base y el perímetro en términos de x.',
    options: ['x − 2 y 3x − 2', 'x + 2 y 3x − 2', 'x − 2 y 3x + 2', 'Ninguna de las anteriores'],
    answerIndex: 0,
    solution: 'Base = x − 2. Perímetro = x + x + (x − 2) = 3x − 2.',
  },
  {
    prompt: 'Un restaurante vende hamburguesas a $8 cada una, con costos fijos diarios de $200 y costo de producción de $3 por hamburguesa. Expresa la ganancia diaria G(x) en función de x hamburguesas vendidas.',
    options: ['G(x) = 5x − 200', 'G(x) = 8x − 200', 'G(x) = 5x + 200', 'G(x) = 8x + 200'],
    answerIndex: 0,
    solution: 'Ingresos = 8x, Costos = 200 + 3x. G(x) = 8x − (200 + 3x) = 5x − 200.',
  },
]

// ---- Módulo 2 (Semana 4): Propiedades de las expresiones algebraicas ----
export interface AlgebraStep {
  label: string
  expr: string
}

export const ALGEBRA_PROPERTY_LIST = [
  { name: 'Asociativa', example: '5x + (6y + 7) = (5x + 6y) + 7' },
  { name: 'Conmutativa', example: '5x · 6y = 6y · 5x' },
  { name: 'Elemento Neutro', example: '5x + 0 = 5x' },
  { name: 'Inverso', example: '5x + (−5x) = 0' },
  { name: 'Distributiva', example: '7 · (5x + 6y) = 35x + 42y' },
]

/** Analogía cotidiana para cada propiedad — el "por qué" antes del "cómo". */
export const ALGEBRA_PROPERTY_ANALOGIES: Record<string, string> = {
  Asociativa:
    'Como agrupar mercado en dos bolsas o en tres: el orden en que agrupas los paquetes no cambia cuánto llevas en total.',
  Conmutativa:
    'Como sumar el precio de un café y un pan: da igual si primero cobras el café o el pan, el total es el mismo.',
  'Elemento Neutro':
    'Sumar 0 o multiplicar por 1 es como no hacer nada: la cantidad se queda exactamente igual.',
  Inverso:
    'Un préstamo de $5x se cancela con un pago de −5x: al sumarlos, la deuda queda en 0.',
  Distributiva:
    'Repartir un descuento del 7% entre dos productos (5x y 6y) es igual a aplicarlo a cada uno por separado y sumar.',
}

/** Desarrollo paso a paso de cada propiedad con el ejemplo 5x, 6y, 7 de la guía. */
export const ALGEBRA_PROPERTY_STEPS: Record<string, AlgebraStep[]> = {
  Asociativa: [
    { label: 'Regla general', expr: 'a + (b + c) = (a + b) + c' },
    { label: 'Sustituye a = 5x, b = 6y, c = 7', expr: '5x + (6y + 7) = (5x + 6y) + 7' },
    { label: 'Ambos lados valen lo mismo', expr: '5x + 6y + 7 = 5x + 6y + 7 ✓' },
  ],
  Conmutativa: [
    { label: 'Regla general', expr: 'a · b = b · a' },
    { label: 'Sustituye a = 5x, b = 6y', expr: '5x · 6y = 6y · 5x' },
    { label: 'Se verifica multiplicando', expr: '30xy = 30xy ✓' },
  ],
  'Elemento Neutro': [
    { label: 'Regla general', expr: 'a + 0 = a' },
    { label: 'Sustituye a = 5x', expr: '5x + 0 = 5x' },
  ],
  Inverso: [
    { label: 'Regla general', expr: 'a + (−a) = 0' },
    { label: 'Sustituye a = 5x', expr: '5x + (−5x) = 0' },
  ],
  Distributiva: [
    { label: 'Regla general', expr: 'c · (a + b) = c · a + c · b' },
    { label: 'Sustituye a = 5x, b = 6y, c = 7', expr: '7 · (5x + 6y) = 7 · 5x + 7 · 6y' },
    { label: 'Simplifica cada producto', expr: '= 35x + 42y' },
  ],
}

export const ALGEBRA_PROPERTY_QUIZ: PropertyQuestion[] = [
  { expression: '5x + 6y = 6y + 5x', answer: 'Conmutativa' },
  { expression: '5x · (6y · 7) = (5x · 6y) · 7', answer: 'Asociativa' },
  { expression: '5x · 1 = 5x', answer: 'Elemento Neutro' },
  { expression: '5x · (1/5x) = 1, si x ≠ 0', answer: 'Inverso' },
  { expression: '7 · (5x + 6y) = 35x + 42y', answer: 'Distributiva' },
  { expression: '5x + (6y + 7) = (5x + 6y) + 7', answer: 'Asociativa' },
]

// ---- Módulo 3 (Semana 4): Operaciones con polinomios ----
export const POLY_ADD_STEPS = [
  { label: 'Expresión original', expr: '(x³ − 6x² + 2x + 4) + (6x² + 2x + 4)' },
  { label: 'Paso 1 — Se agrupan los términos semejantes', expr: '(x³) + (−6x² + 6x²) + (2x + 2x) + (4 + 4)' },
  { label: 'Paso 2 — Resultado', expr: 'x³ + 4x + 8' },
]

export const POLY_SUB_STEPS = [
  { label: 'Expresión original', expr: '(x³ − 6x² + 2x + 4) − (6x² + 2x + 4)' },
  { label: 'Paso 1 — Se cambia el signo de Q(x) y se agrupa', expr: '(x³) + (−6x² − 6x²) + (2x − 2x) + (4 − 4)' },
  { label: 'Paso 2 — Resultado', expr: 'x³ − 12x²' },
]

export const POLY_PRODUCT_STEPS = [
  { label: 'Expresión original', expr: '(x³ − 6x² + 2x + 4) · (6x² + 2x + 4)' },
  { label: 'Paso 1 — Se multiplica cada término de P(x) por Q(x)', expr: '6x⁵ + 2x⁴ + 4x³ − 36x⁴ − 12x³ − 24x² + 12x³ + 4x² + 8x + 24x² + 8x + 16' },
  { label: 'Paso 2 — Se agrupan los términos semejantes', expr: '6x⁵ − 34x⁴ + 4x³ + 4x² + 16x + 16' },
]

export const POLY_WORD_PROBLEMS: WordProblem[] = [
  {
    prompt: 'Simplifica la expresión: (3x² − 2x + 1) + (2x² + 5x − 3) − (x² − 3x + 2)',
    options: ['4x² + 6x − 4', '4x² − 6x − 4', '4x² + 6x + 4', 'Ninguna de las anteriores'],
    answerIndex: 0,
    solution: 'Agrupando términos semejantes: (3x² + 2x² − x²) + (−2x + 5x + 3x) + (1 − 3 − 2) = 4x² + 6x − 4.',
  },
  {
    prompt: 'Divide (6x³ − 15x² + 9x − 12) ÷ (2x − 3) para calcular el cociente y el residuo.',
    options: ['Cociente: 3x² − 3x, Residuo: −12', 'Cociente: 3x² + 3x, Residuo: 12', 'Cociente: 6x² − 3x, Residuo: −12', 'Cociente: 3x² − 3x, Residuo: −14'],
    answerIndex: 0,
    solution: 'Usando división larga: cociente 3x² − 3x, residuo −12.',
  },
  {
    prompt: 'Simplifica: (x² + 2x − 3) − (2x² − 5x + 1) + (3x² + 4x − 2)',
    options: ['6x² + x − 4', '6x² + x + 4', '6x² − x + 4', '6x² + x + 4'],
    answerIndex: 0,
    solution: 'Agrupando: (x² − 2x² + 3x²) + (2x + 5x + 4x) + (−3 − 1 − 2) = 6x² + x − 4.',
  },
  {
    prompt: 'Una empresa tiene ingresos I(x) = 2x² + 500x y costos C(x) = x² + 300x + 10000. Encuentra la función de beneficio B(x) = I(x) − C(x).',
    options: ['B(x) = x² + 200x − 10000', 'B(x) = x² − 200x − 10000', 'B(x) = x² + 200x + 10000', 'B(x) = x² − 200x + 10000'],
    answerIndex: 0,
    solution: 'B(x) = (2x² + 500x) − (x² + 300x + 10000) = x² + 200x − 10000.',
  },
  {
    prompt: 'La producción diaria (en cientos de unidades) es P(t) = −t² + 6t + 8 y el costo es C(t) = 2t² + 5t + 100. Expresa el beneficio B(t) = P(t) − C(t).',
    options: ['B(t) = −3t² + t − 92', 'B(t) = 3t² + t − 92', 'B(t) = −3t² − t − 92', 'B(t) = −3t² + t + 92'],
    answerIndex: 0,
    solution: 'B(t) = (−t² + 6t + 8) − (2t² + 5t + 100) = −3t² + t − 92.',
  },
]

// ---- Módulo 4 (Semana 4): Productos notables ----
export const NOTABLE_PRODUCTS_LIST = [
  { name: 'Producto de dos binomios', example: '(x+a)(x+b) = x² + (a+b)x + ab' },
  { name: 'Cuadrado de un binomio', example: '(a ± b)² = a² ± 2ab + b²' },
  { name: 'Suma por diferencia', example: '(a + b)(a − b) = a² − b²' },
  { name: 'Cubo de un binomio', example: '(a ± b)³ = a³ ± 3a²b + 3ab² ± b³' },
  { name: 'Trinomio cuadrado', example: '(x + y + c)² = x² + 2xy + y² + 2yc + 2xc + c²' },
  { name: 'Suma de cubos', example: 'a³ + b³ = (a + b)(a² − ab + b²)' },
  { name: 'Diferencia de cubos', example: 'a³ − b³ = (a − b)(a² + ab + b²)' },
]

/** Desarrollo paso a paso, verificado, de los productos notables clave (ejemplos de la guía). */
export const SQUARE_BINOMIAL_STEPS: AlgebraStep[] = [
  { label: 'Fórmula', expr: '(a + b)² = a² + 2ab + b²' },
  { label: 'Sustituye a = x, b = 5', expr: '(x + 5)² = x² + 2(x)(5) + 5²' },
  { label: 'Simplifica', expr: '= x² + 10x + 25' },
]

export const DIFFERENCE_SQUARES_STEPS: AlgebraStep[] = [
  { label: 'Fórmula', expr: '(a + b)(a − b) = a² − b²' },
  { label: 'Ejemplo numérico: a = 5, b = 3', expr: '(5 + 3)(5 − 3) = 8 · 2 = 16' },
  { label: 'Comprobación con la fórmula', expr: '5² − 3² = 25 − 9 = 16 ✓' },
]

export const CUBE_BINOMIAL_STEPS: AlgebraStep[] = [
  { label: 'Fórmula', expr: '(a − b)³ = a³ − 3a²b + 3ab² − b³' },
  { label: 'Sustituye a = 2x, b = 1', expr: '(2x − 1)³ = (2x)³ − 3(2x)²(1) + 3(2x)(1)² − 1³' },
  { label: 'Simplifica cada término', expr: '= 8x³ − 12x² + 6x − 1' },
]

export const TRINOMIAL_SQUARE_STEPS: AlgebraStep[] = [
  { label: 'Fórmula', expr: '(x + y + c)² = x² + 2xy + y² + 2yc + 2xc + c²' },
  { label: 'Sustituye c = 9', expr: '(x + y + 9)² = x² + 2xy + y² + 2y(9) + 2x(9) + 9²' },
  { label: 'Simplifica', expr: '= x² + 2xy + y² + 18y + 18x + 81' },
]

export const SUM_CUBES_STEPS: AlgebraStep[] = [
  { label: 'Fórmula', expr: 'a³ + b³ = (a + b)(a² − ab + b²)' },
  { label: 'Identifica a y b en 8x³ + 27y³', expr: '8x³ = (2x)³, 27y³ = (3y)³ → a = 2x, b = 3y' },
  { label: 'Sustituye en la fórmula', expr: '8x³ + 27y³ = (2x + 3y)(4x² − 6xy + 9y²)' },
]

export const DIFF_CUBES_STEPS: AlgebraStep[] = [
  { label: 'Fórmula', expr: 'a³ − b³ = (a − b)(a² + ab + b²)' },
  { label: 'Identifica a y b en 8x³ − 27y³', expr: '8x³ = (2x)³, 27y³ = (3y)³ → a = 2x, b = 3y' },
  { label: 'Sustituye en la fórmula', expr: '8x³ − 27y³ = (2x − 3y)(4x² + 6xy + 9y²)' },
]

/** Reto integrador (ejemplo 16 de la guía): diagonal x, largo = ancho + 2. */
export const DIAGONAL_AREA_STEPS: AlgebraStep[] = [
  { label: 'Datos', expr: 'x = diagonal, y = ancho, largo = y + 2' },
  { label: 'Teorema de Pitágoras', expr: 'x² = y² + (y + 2)²' },
  { label: 'Desarrolla el cuadrado de binomio', expr: 'x² = y² + (y² + 4y + 4) = 2y² + 4y + 4' },
  { label: 'Despeja y²', expr: 'y² = (x² − 4y − 4) / 2' },
  { label: 'Área del rectángulo', expr: 'A = y(y + 2) = y² + 2y' },
  { label: 'Sustituye y² y simplifica', expr: 'A = (x² − 4y − 4)/2 + 2y = (x² − 4)/2' },
]

export const NOTABLE_PRODUCTS_QUIZ: WordProblem[] = [
  {
    prompt: 'Desarrolla y selecciona la opción correcta: (x + 5)²',
    options: ['x² + 10x + 25', 'x² − 10x + 25', 'x² + 10x − 25', 'x² − 10x − 25'],
    answerIndex: 0,
    solution: '(a+b)² = a² + 2ab + b². Con a=x, b=5: x² + 2(x)(5) + 5² = x² + 10x + 25.',
  },
  {
    prompt: 'Expande y elige la opción correcta: (2x − 1)³',
    options: ['8x³ − 12x² + 6x − 1', '8x³ + 12x² + 6x − 1', '8x³ − 12x² − 6x − 1', '8x³ + 12x² + 6x + 1'],
    answerIndex: 0,
    solution: '(a−b)³ = a³ − 3a²b + 3ab² − b³. Con a=2x, b=1: 8x³ − 12x² + 6x − 1.',
  },
  {
    prompt: 'Calcula y elige la opción correcta: (√x + √y)(√x − √y)',
    options: ['x − y', 'x + y', 'x² − y²', 'x² + y²'],
    answerIndex: 0,
    solution: 'Es suma por diferencia: a² − b² = (√x)² − (√y)² = x − y.',
  },
  {
    prompt: 'Calcula y elige la opción correcta: (3x − 2y)(3x + 2y)',
    options: ['9x² − 4y²', '9x² + 4y²', '9x² − 6xy + 4y²', '9x² − 6xy − 4y²'],
    answerIndex: 0,
    solution: 'Suma por diferencia: (3x)² − (2y)² = 9x² − 4y².',
  },
  {
    prompt: 'Desarrolla y elige la opción correcta: (x + y + z)²',
    options: ['x² + y² + z² + 2xy + 2yz + 2xz', 'x² − y² + z² + 2xy + 2yz + 2xz', 'x² + y² − z² + 2xy + 2yz + 2xz', 'x² + y² + z² − 2xy + 2yz + 2xz'],
    answerIndex: 0,
    solution: 'Trinomio cuadrado: cada término al cuadrado más el doble producto de cada par: x² + y² + z² + 2xy + 2yz + 2xz.',
  },
  {
    prompt: 'La diferencia entre el cuadrado de un número y el cuadrado del número anterior es 15. Plantea x² − (x−1)² = 15 y resuelve.',
    options: ['x = 8', 'x = 7', 'x = 6', 'x = 5'],
    answerIndex: 0,
    solution: 'x² − (x² − 2x + 1) = 15 → 2x − 1 = 15 → 2x = 16 → x = 8.',
  },
]

// ---- Módulo 5 (Semana 4): Aplicaciones con expresiones algebraicas ----
export const ALGEBRA_APPLICATION_PROBLEMS: WordProblem[] = [
  {
    prompt: 'Un vendedor recibe un salario base de $1000 al mes, más una comisión del 5% sobre las ventas x. Expresa el salario mensual S(x).',
    options: ['S(x) = 1000 + 0.05x', 'S(x) = 1000 − 0.05x', 'S(x) = 1000 + 0.5x', 'S(x) = 1000 − 0.5x'],
    answerIndex: 0,
    solution: 'Salario = salario base + comisión = 1000 + 0.05x.',
  },
  {
    prompt: 'La suma de tres números consecutivos es 51. Expresa el mayor de estos números en términos del menor x y halla el primer número.',
    options: ['x + 2, 16', 'x + 3, 15', 'x + 2, 15', 'x + 3, 16'],
    answerIndex: 0,
    solution: 'x + (x+1) + (x+2) = 51 → 3x + 3 = 51 → x = 16. El mayor es x + 2, y el primero (menor) es 16.',
  },
  {
    prompt: 'La edad de María es el triple de la edad de su hijo más 5 años. Expresa la edad de María en términos de la edad del hijo x. Si el hijo tiene 15 años, ¿cuál es la edad de María?',
    options: ['Edad de María = 3x + 5 y 50 años', 'Edad de María = 3x + 5 y 45 años', 'Edad de María = 3(x + 5) y 50 años', 'Edad de María = 3x − 5 y 45 años'],
    answerIndex: 0,
    solution: 'Edad de María = 3x + 5. Con x=15: 3(15) + 5 = 50 años.',
  },
  {
    prompt: 'Una compañía de taxis cobra una tarifa base de $5 más $0.75 por kilómetro recorrido x. Expresa el costo de un viaje en función de los kilómetros recorridos.',
    options: ['C(x) = 5 + 0.75x', 'C(x) = 5 + 5(0.75x)', 'C(x) = 5 − 0.75x', 'C(x) = 5 + 0.25x'],
    answerIndex: 0,
    solution: 'Costo total = tarifa base + tarifa por km = 5 + 0.75x.',
  },
  {
    prompt: 'Una piscina rectangular tiene un largo que es 5 metros más que el doble de su ancho x. Expresa el perímetro de la piscina en términos de su ancho.',
    options: ['P(x) = 6x + 10', 'P(x) = 8x + 10', 'P(x) = 6x + 12', 'P(x) = 8x + 12'],
    answerIndex: 0,
    solution: 'Largo = 2x + 5. P = 2(largo + ancho) = 2[(2x+5) + x] = 2(3x + 5) = 6x + 10.',
  },
  {
    prompt: 'Una fábrica produce x unidades al día. El costo de producción por unidad disminuye en $0.05 por cada 100 unidades producidas, partiendo de un costo inicial de $10 por unidad. Expresa el costo total de producción en función de x.',
    options: ['C(x) = 10x − 0.0005x²', 'C(x) = 10x − 0.005x²', 'C(x) = 10x + 0.0005x²', 'C(x) = 10x − 0.05x²'],
    answerIndex: 0,
    solution: 'El costo por unidad es 10 − 0.05(x/100) = 10 − 0.0005x. Costo total = x·(10 − 0.0005x) = 10x − 0.0005x².',
  },
]

// =====================================================================
// SEMANA 5 — División de polinomios y factorización (factor común,
// agrupación, trinomio x²+bx+c y ax²+bx+c). Basado en Guia_Algebra.pdf,
// pp. 26-35. Todas las identidades verificadas con sympy.
// =====================================================================

// ---- Módulo 1 (Semana 5): División de polinomios ----
export const DIVISION_TERMS = { dividendo: 'D', divisor: 'd', cociente: 'C', residuo: 'R' }

/** Ejemplo 18 de la guía: prueba de la división 17 ÷ 5. */
export const DIVISION_PROOF_STEPS: AlgebraStep[] = [
  { label: 'Datos', expr: 'Dividendo D = 17, Divisor d = 5' },
  { label: 'Divide', expr: 'C = 3 (el múltiplo de 5 más cercano a 17 sin pasarse), R = 2' },
  { label: 'Prueba: (C · d) + R = D', expr: '(3 · 5) + 2 = 15 + 2 = 17 ✓' },
]

/** Ejemplo 19 (verificado con sympy): (−9x⁴+9x³−14x²+8x) ÷ (3x²−2x). */
export const LONG_DIVISION_STEPS: AlgebraStep[] = [
  { label: 'Ordena dividendo y divisor de mayor a menor grado', expr: '(−9x⁴ + 9x³ − 14x² + 8x) ÷ (3x² − 2x)' },
  { label: 'Divide los primeros términos', expr: '−9x⁴ ÷ 3x² = −3x²' },
  { label: 'Multiplica y resta', expr: '−3x²(3x² − 2x) = −9x⁴ + 6x³ → queda 3x³ − 14x² + 8x' },
  { label: 'Repite: divide, multiplica y resta', expr: '3x³ ÷ 3x² = x → x(3x² − 2x) = 3x³ − 2x² → queda −12x² + 8x' },
  { label: 'Repite una vez más', expr: '−12x² ÷ 3x² = −4 → −4(3x² − 2x) = −12x² + 8x → queda 0' },
  { label: 'Resultado', expr: 'Cociente = −3x² + x − 4, Residuo = 0' },
]

/** Ejemplo 21 (verificado con sympy): (3x³ − 7x + 5) ÷ (x − 2) por Ruffini. */
export const SYNTHETIC_DIVISION_STEPS: AlgebraStep[] = [
  { label: 'Ordena coeficientes (con 0 en el término que falta) y toma la raíz de x − 2', expr: '3   0   −7   5   |   raíz = 2' },
  { label: 'Baja el primer coeficiente', expr: '3' },
  { label: 'Multiplica 3 × 2 = 6 y súmalo al siguiente', expr: '0 + 6 = 6' },
  { label: 'Multiplica 6 × 2 = 12 y súmalo al siguiente', expr: '−7 + 12 = 5' },
  { label: 'Multiplica 5 × 2 = 10 y súmalo al último (residuo)', expr: '5 + 10 = 15' },
  { label: 'Resultado', expr: 'Cociente = 3x² + 6x + 5, Residuo = 15' },
]

export const DIVISION_QUIZ: WordProblem[] = [
  {
    prompt: 'Divide (6x² − 26x + 12) ÷ (x − 4) y halla cociente y residuo.',
    options: ['Cociente: 6x − 2, Residuo: 4', 'Cociente: 6x + 2, Residuo: 4', 'Cociente: 6x − 2, Residuo: −4', 'Cociente: 6x − 4, Residuo: 2'],
    answerIndex: 0,
    solution: 'Por división larga: cociente 6x − 2, residuo 4. Comprueba: (6x−2)(x−4)+4 = 6x²−26x+8+4 = 6x²−26x+12.',
  },
  {
    prompt: 'Divide (x³ + 2x² − 4x + 5) ÷ (x + 3) y halla cociente y residuo.',
    options: ['Cociente: x² − x − 1, Residuo: 8', 'Cociente: x² + x − 1, Residuo: 8', 'Cociente: x² − x + 1, Residuo: 8', 'Cociente: x² − x − 1, Residuo: −8'],
    answerIndex: 0,
    solution: 'Por Ruffini con raíz −3: cociente x² − x − 1, residuo 8.',
  },
  {
    prompt: 'Divide (4x³ + 6x² + 5x + 6) ÷ (2x² + x + 3) y halla cociente y residuo.',
    options: ['Cociente: 2x + 2, Residuo: −3x', 'Cociente: 2x + 2, Residuo: 3x', 'Cociente: 2x − 2, Residuo: −3x', 'Cociente: 2x + 2, Residuo: −3x + 6'],
    answerIndex: 0,
    solution: 'Por división larga (el divisor es de grado 2, no se puede usar Ruffini): cociente 2x + 2, residuo −3x.',
  },
  {
    prompt: 'La prueba de la división dice que (C·d) + R = D. Si C = −x − 1, d = −x² − 2x + 7 y R = −x + 11, ¿cuál es el dividendo D?',
    options: ['x³ + 3x² − 6x + 4', 'x³ − 3x² − 6x + 4', 'x³ + 3x² + 6x + 4', 'x³ + 3x² − 6x − 4'],
    answerIndex: 0,
    solution: '(−x−1)(−x²−2x+7) + (−x+11) = x³ + 3x² − 6x − 7 + (−x + 11) = x³ + 3x² − 6x + 4.',
  },
]

// ---- Módulo 2 (Semana 5): Factor común y agrupación ----
/** Ejemplo 22 de la guía: 3x² − 6x = 3x(x − 2). */
export const FACTOR_COMUN_STEPS: AlgebraStep[] = [
  { label: 'Identifica el factor común', expr: '3x² − 6x → el factor común es 3x' },
  { label: 'Divide cada término entre el factor común', expr: '3x²/3x = x,   −6x/3x = −2' },
  { label: 'Escribe el resultado', expr: '3x² − 6x = 3x(x − 2)' },
]

/** Ejemplo 23 de la guía: a² + ab + ax + bx = (a + b)(a + x). */
export const FACTOR_GROUP_STEPS: AlgebraStep[] = [
  { label: 'Agrupa de dos en dos', expr: '(a² + ab) + (ax + bx)' },
  { label: 'Saca el factor común de cada grupo', expr: 'a(a + b) + x(a + b)' },
  { label: 'El factor común ahora es el binomio (a + b)', expr: '(a + b)(a + x)' },
]

export const FACTOR_COMUN_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza completamente: 2x³ − 18x',
    options: ['2x(x − 3)(x + 3)', '2x(x − 3)²', '2x(x + 3)²', '2x(x² − 9x)'],
    answerIndex: 0,
    solution: 'Factor común: 2x(x² − 9). Luego x² − 9 es diferencia de cuadrados: (x−3)(x+3). Resultado: 2x(x−3)(x+3).',
  },
  {
    prompt: 'Factoriza por agrupación: x³ + 2x² + 3x + 6',
    options: ['(x + 2)(x² + 3)', '(x − 2)(x² + 3)', '(x + 2)(x² − 3)', '(x + 3)(x² + 2)'],
    answerIndex: 0,
    solution: 'Agrupa: (x³ + 2x²) + (3x + 6) = x²(x + 2) + 3(x + 2) = (x + 2)(x² + 3).',
  },
  {
    prompt: 'Factoriza por agrupación: am + an + bm + bn',
    options: ['(a + b)(m + n)', '(a − b)(m + n)', '(a + b)(m − n)', '(a + m)(b + n)'],
    answerIndex: 0,
    solution: 'Agrupa: (am + an) + (bm + bn) = a(m + n) + b(m + n) = (a + b)(m + n).',
  },
]

// ---- Módulo 3 (Semana 5): Trinomio de la forma x² + bx + c ----
/** Ejemplo 24 de la guía: x² + 7x + 12 = (x + 4)(x + 3). */
export const TRINOMIO_SIMPLE_STEPS: AlgebraStep[] = [
  { label: 'Identifica b y c', expr: 'x² + 7x + 12 → b = 7, c = 12' },
  { label: 'Busca dos números que multiplicados den c y sumados den b', expr: '4 × 3 = 12  y  4 + 3 = 7' },
  { label: 'Escribe los dos binomios', expr: '(x + 4)(x + 3)' },
  { label: 'Verifica expandiendo', expr: '(x+4)(x+3) = x² + 7x + 12 ✓' },
]

export const TRINOMIO_SIMPLE_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza: x² − 2x − 15',
    options: ['(x − 5)(x + 3)', '(x + 5)(x − 3)', '(x − 5)(x − 3)', '(x + 5)(x + 3)'],
    answerIndex: 0,
    solution: 'Busca dos números que multiplicados den −15 y sumados den −2: −5 y 3. (x − 5)(x + 3).',
  },
  {
    prompt: 'Factoriza: x² + x − 12',
    options: ['(x + 4)(x − 3)', '(x − 4)(x + 3)', '(x + 4)(x + 3)', '(x − 4)(x − 3)'],
    answerIndex: 0,
    solution: 'Dos números que multiplicados den −12 y sumados den 1: 4 y −3. (x + 4)(x − 3).',
  },
  {
    prompt: 'Factoriza: y² + 5y − 24',
    options: ['(y + 8)(y − 3)', '(y − 8)(y + 3)', '(y + 8)(y + 3)', '(y − 8)(y − 3)'],
    answerIndex: 0,
    solution: 'Dos números que multiplicados den −24 y sumados den 5: 8 y −3. (y + 8)(y − 3).',
  },
  {
    prompt: 'Factoriza: x² − 17x − 60',
    options: ['(x − 20)(x + 3)', '(x + 20)(x − 3)', '(x − 20)(x − 3)', '(x + 20)(x + 3)'],
    answerIndex: 0,
    solution: 'Dos números que multiplicados den −60 y sumados den −17: −20 y 3. (x − 20)(x + 3).',
  },
]

// ---- Módulo 4 (Semana 5): Trinomio de la forma ax² + bx + c ----
/** Ejemplo 25 de la guía: 6x² + 7x − 5 = (3x + 5)(2x − 1). */
export const TRINOMIO_GENERAL_STEPS: AlgebraStep[] = [
  { label: 'Identifica a, b y c', expr: '6x² + 7x − 5 → a = 6, b = 7, c = −5' },
  { label: 'Descompón a en dos factores y prueba combinaciones', expr: '6 = 3 × 2   →   prueba (3x ± __)(2x ± __)' },
  { label: 'Verifica que el producto cruzado sume b', expr: '(3x + 5)(2x − 1): 3x·(−1) + 5·2x = −3x + 10x = 7x ✓' },
  { label: 'Verifica el término independiente', expr: '5 · (−1) = −5 ✓' },
  { label: 'Resultado', expr: '6x² + 7x − 5 = (3x + 5)(2x − 1)' },
]

export const TRINOMIO_GENERAL_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza: 2x² + 5x − 3',
    options: ['(2x − 1)(x + 3)', '(2x + 1)(x − 3)', '(2x − 1)(x − 3)', '(2x + 1)(x + 3)'],
    answerIndex: 0,
    solution: 'Prueba (2x − 1)(x + 3): 2x·x=2x², 2x·3 + (−1)·x = 6x − x = 5x, (−1)·3 = −3. Coincide.',
  },
  {
    prompt: 'Factoriza: 6x² − x − 2',
    options: ['(3x − 2)(2x + 1)', '(3x + 2)(2x − 1)', '(3x − 2)(2x − 1)', '(3x + 2)(2x + 1)'],
    answerIndex: 0,
    solution: 'Prueba (3x − 2)(2x + 1): 3x·2x=6x², 3x·1 + (−2)·2x = 3x − 4x = −x, (−2)·1 = −2. Coincide.',
  },
  {
    prompt: 'Factoriza: 4x² + 4x − 3',
    options: ['(2x + 3)(2x − 1)', '(2x − 3)(2x + 1)', '(2x + 3)(2x + 1)', '(2x − 3)(2x − 1)'],
    answerIndex: 0,
    solution: 'Prueba (2x + 3)(2x − 1): 4x², 2x·(−1) + 3·2x = −2x + 6x = 4x, 3·(−1) = −3. Coincide.',
  },
]

// ---- Módulo 5 (Semana 5): Aplicaciones — división y factorización ----
export const FACTORING_METHOD_GUIDE = [
  { situation: 'Siempre primero', method: 'Busca factor común', example: '6x² − 12x = 6x(x − 2)' },
  { situation: '2 términos', method: 'Diferencia de cuadrados o de cubos (Semana 4)', example: 'x² − 9 = (x+3)(x−3)' },
  { situation: '3 términos', method: 'Trinomio x²+bx+c o ax²+bx+c', example: 'x²+7x+12 = (x+4)(x+3)' },
  { situation: '4 términos', method: 'Agrupación de a dos', example: 'a²+ab+ax+bx = (a+b)(a+x)' },
]

export const FACTORING_APPLICATION_QUIZ: WordProblem[] = [
  {
    prompt: 'Un terreno rectangular tiene un área de (x² + 7x + 12) m². Si el ancho es (x + 3) m, ¿cuánto mide el largo?',
    options: ['x + 4', 'x + 3', 'x + 5', 'x − 4'],
    answerIndex: 0,
    solution: 'x² + 7x + 12 = (x + 4)(x + 3). Con ancho (x+3), el largo es (x+4).',
  },
  {
    prompt: 'Divide (8x⁴ + 6x² − 3x + 1) ÷ (2x² − x + 2) para hallar cociente y residuo.',
    options: ['Cociente: 4x² + 2x, Residuo: −7x + 1', 'Cociente: 4x² − 2x, Residuo: 7x + 1', 'Cociente: 4x² + 2x, Residuo: 7x − 1', 'Cociente: 4x² + 2x, Residuo: −7x − 1'],
    answerIndex: 0,
    solution: 'Por división larga: cociente 4x² + 2x, residuo −7x + 1.',
  },
  {
    prompt: 'Factoriza completamente: 2x³ − 18x (pista: primero factor común, luego diferencia de cuadrados)',
    options: ['2x(x − 3)(x + 3)', '2x(x − 9)', '2(x − 3)(x + 3)', 'x(2x − 3)(2x + 3)'],
    answerIndex: 0,
    solution: 'Factor común 2x: 2x(x² − 9). Diferencia de cuadrados: 2x(x − 3)(x + 3).',
  },
  {
    prompt: 'Un cultivo rectangular tiene área (6x² + 7x − 5) m² y uno de sus lados mide (2x − 1) m. ¿Cuál es el otro lado?',
    options: ['3x + 5', '3x − 5', '2x + 5', '3x + 1'],
    answerIndex: 0,
    solution: '6x² + 7x − 5 = (3x + 5)(2x − 1). El otro lado es (3x + 5).',
  },
]

// =====================================================================
// SEMANA 6 — Trinomio cuadrado perfecto, diferencia de cuadrados, TCP por
// adición y sustracción, y repaso general de factorización. Basado en
// Guia_Algebra.pdf pp. 35-41. Todas las identidades verificadas con sympy.
// =====================================================================

// ---- Módulo 1 (Semana 6): Trinomio Cuadrado Perfecto ----
export const TCP_CONDITIONS = [
  'El primer y el último término deben ser cuadrados perfectos (tienen raíz cuadrada exacta).',
  'El término del medio debe ser el doble producto de esas dos raíces cuadradas.',
  'Si ambas condiciones se cumplen, es un Trinomio Cuadrado Perfecto (TCP).',
  'El resultado es un binomio al cuadrado: se pone el signo del término medio y se eleva todo al cuadrado.',
]

/** Ejemplo 26a de la guía: x² + 6x + 9 = (x + 3)². */
export const TCP_STEPS: AlgebraStep[] = [
  { label: 'Saca raíz cuadrada al primer y último término', expr: '√x² = x,   √9 = 3' },
  { label: 'Verifica el término del medio (doble producto)', expr: '2 · x · 3 = 6x ✓ (coincide con el término medio)' },
  { label: 'Escribe el binomio con el signo del término medio', expr: 'x² + 6x + 9 = (x + 3)²' },
]

/** Ejemplo 26b de la guía: 4x² − 4xy + y² = (2x − y)². */
export const TCP_STEPS_2: AlgebraStep[] = [
  { label: 'Saca raíz cuadrada al primer y último término', expr: '√4x² = 2x,   √y² = y' },
  { label: 'Verifica el término del medio', expr: '2 · 2x · y = 4xy ✓ (coincide, con signo negativo)' },
  { label: 'Escribe el binomio', expr: '4x² − 4xy + y² = (2x − y)²' },
]

export const TCP_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza (si es TCP): 9x² + 30x + 25',
    options: ['(3x + 5)²', '(3x − 5)²', '(9x + 5)²', 'No es TCP'],
    answerIndex: 0,
    solution: '√9x² = 3x, √25 = 5, doble producto 2(3x)(5) = 30x ✓. Es (3x + 5)².',
  },
  {
    prompt: 'Factoriza (si es TCP): x² − 14x + 49',
    options: ['(x − 7)²', '(x + 7)²', '(x − 14)²', 'No es TCP'],
    answerIndex: 0,
    solution: '√x² = x, √49 = 7, doble producto 2(x)(7) = 14x ✓. Es (x − 7)².',
  },
  {
    prompt: 'Factoriza (si es TCP): 16x² − 24xy + 9y²',
    options: ['(4x − 3y)²', '(4x + 3y)²', '(16x − 9y)²', 'No es TCP'],
    answerIndex: 0,
    solution: '√16x² = 4x, √9y² = 3y, doble producto 2(4x)(3y) = 24xy ✓. Es (4x − 3y)².',
  },
  {
    prompt: '¿Es 4x² + 10x + 25 un Trinomio Cuadrado Perfecto?',
    options: ['No, porque 2(2x)(5) = 20x ≠ 10x', 'Sí, es (2x + 5)²', 'Sí, es (2x − 5)²', 'No, porque 25 no es cuadrado perfecto'],
    answerIndex: 0,
    solution: 'Las raíces son 2x y 5, pero el doble producto 2(2x)(5) = 20x no coincide con el término medio 10x. No es TCP.',
  },
]

// ---- Módulo 2 (Semana 6): Diferencia de cuadrados ----
/** Ejemplo 27 de la guía: 4x² − 9y² = (2x + 3y)(2x − 3y). */
export const DIFF_SQ_STEPS: AlgebraStep[] = [
  { label: 'Identifica las raíces cuadradas', expr: '√4x² = 2x,   √9y² = 3y' },
  { label: 'Escribe la suma por la diferencia de esas raíces', expr: '4x² − 9y² = (2x + 3y)(2x − 3y)' },
]

/** Ejemplo 27 de la guía: 36m² − 25n² = (6m + 5n)(6m − 5n). */
export const DIFF_SQ_STEPS_2: AlgebraStep[] = [
  { label: 'Identifica las raíces cuadradas', expr: '√36m² = 6m,   √25n² = 5n' },
  { label: 'Escribe la suma por la diferencia de esas raíces', expr: '36m² − 25n² = (6m + 5n)(6m − 5n)' },
]

export const DIFF_SQ_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza: 49a² − 16b²',
    options: ['(7a + 4b)(7a − 4b)', '(7a − 4b)²', '(7a + 4b)²', '(49a + 16b)(a − b)'],
    answerIndex: 0,
    solution: '√49a² = 7a, √16b² = 4b. Es diferencia de cuadrados: (7a + 4b)(7a − 4b).',
  },
  {
    prompt: 'Factoriza: 100x² − 1',
    options: ['(10x + 1)(10x − 1)', '(10x − 1)²', '(100x + 1)(x − 1)', '(10x + 1)²'],
    answerIndex: 0,
    solution: '√100x² = 10x, √1 = 1. Es diferencia de cuadrados: (10x + 1)(10x − 1).',
  },
  {
    prompt: 'Factoriza completamente: x⁴ − 16 (pista: la diferencia de cuadrados se puede aplicar dos veces)',
    options: ['(x² + 4)(x + 2)(x − 2)', '(x² − 4)(x² + 4)', '(x² + 4)²', '(x + 2)²(x − 2)²'],
    answerIndex: 0,
    solution: 'x⁴ − 16 = (x² + 4)(x² − 4). Como x² − 4 también es diferencia de cuadrados: (x² + 4)(x + 2)(x − 2).',
  },
]

// ---- Módulo 3 (Semana 6): TCP por adición y sustracción (caso especial) ----
/** Ejemplo 28 de la guía: a⁴ + a² + 1 = (a² + a + 1)(a² − a + 1). */
export const TCPAS_STEPS: AlgebraStep[] = [
  { label: 'Identifica las raíces del primer y último término', expr: 'a⁴ + a² + 1 → √a⁴ = a², √1 = 1' },
  { label: 'El doble producto esperado sería 2a², pero el término medio es solo a²', expr: 'Falta a² para completar el TCP' },
  { label: 'Suma y resta ese a² que falta', expr: '(a⁴ + 2a² + 1) − a² = (a² + 1)² − a²' },
  { label: 'Ahora es una diferencia de cuadrados', expr: '[(a² + 1) + a][(a² + 1) − a]' },
  { label: 'Resultado', expr: '= (a² + a + 1)(a² − a + 1)' },
]

export const TCPAS_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza usando TCP por adición y sustracción: x⁴ + x² + 1',
    options: ['(x² + x + 1)(x² − x + 1)', '(x² + 1)²', '(x² + x − 1)(x² − x − 1)', 'No se puede factorizar'],
    answerIndex: 0,
    solution: 'Igual que a⁴+a²+1: suma y resta x² → (x²+1)² − x² = (x²+x+1)(x²−x+1).',
  },
  {
    prompt: 'Factoriza usando TCP por adición y sustracción: x⁴ + 4',
    options: ['(x² + 2x + 2)(x² − 2x + 2)', '(x² + 2)²', '(x² + 2x − 2)(x² − 2x − 2)', 'No se puede factorizar'],
    answerIndex: 0,
    solution: 'Suma y resta 4x²: (x⁴+4x²+4) − 4x² = (x²+2)² − (2x)² = (x²+2x+2)(x²−2x+2).',
  },
]

// ---- Módulo 4 (Semana 6): Repaso — todos los métodos de factorización ----
export const REPASO_FACTORIZACION_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza: a² − 14a + 33',
    options: ['(a − 11)(a − 3)', '(a + 11)(a − 3)', '(a − 11)(a + 3)', '(a + 11)(a + 3)'],
    answerIndex: 0,
    solution: 'Trinomio x²+bx+c: dos números que multiplicados den 33 y sumados −14: −11 y −3.',
  },
  {
    prompt: 'Factoriza: 30x² + 13x − 10',
    options: ['(6x + 5)(5x − 2)', '(6x − 5)(5x + 2)', '(6x + 5)(5x + 2)', '(6x − 5)(5x − 2)'],
    answerIndex: 0,
    solution: 'Trinomio ax²+bx+c: (6x+5)(5x−2) da 30x², 6x·(−2)+5·5x=−12x+25x=13x, 5·(−2)=−10. Coincide.',
  },
  {
    prompt: 'Factoriza: 9x² + 37x + 4',
    options: ['(9x + 1)(x + 4)', '(9x + 4)(x + 1)', '(9x − 1)(x − 4)', '(3x + 1)(3x + 4)'],
    answerIndex: 0,
    solution: '(9x+1)(x+4): 9x², 9x·4+1·x=36x+x=37x, 1·4=4. Coincide.',
  },
  {
    prompt: 'Factoriza completamente: 8x⁴y² + 6x³y³ − 2xy⁴',
    options: ['2xy²(4x³ + 3x²y − y²)', '2xy(4x³y + 3x²y² − y³)', 'xy²(8x³ + 6x²y − 2y²)', '2x(4x³y² + 3x²y³ − y⁴)'],
    answerIndex: 0,
    solution: 'Factor común: coeficientes (2), potencias mínimas de x (x) y de y (y²): 2xy²(4x³ + 3x²y − y²).',
  },
  {
    prompt: 'Factoriza por agrupación: ax − 2bx − 2ay + 4by',
    options: ['(a − 2b)(x − 2y)', '(a + 2b)(x − 2y)', '(a − 2b)(x + 2y)', '(a − 2y)(x − 2b)'],
    answerIndex: 0,
    solution: 'Agrupa: (ax − 2bx) + (−2ay + 4by) = x(a − 2b) − 2y(a − 2b) = (a − 2b)(x − 2y).',
  },
  {
    prompt: 'Factoriza: a²/4 − ab + b²',
    options: ['(a/2 − b)²', '(a/2 + b)²', '(a − b/2)²', 'No es TCP'],
    answerIndex: 0,
    solution: '√(a²/4) = a/2, √b² = b, doble producto 2(a/2)(b) = ab ✓. Es (a/2 − b)².',
  },
]

// ---- Módulo 5 (Semana 6): Aplicaciones geométricas ----
export const GEOMETRIC_APPLICATION_QUIZ: WordProblem[] = [
  {
    prompt: 'Un lado de un triángulo rectángulo es 3 unidades más largo que el otro (x y x+3), y la hipotenusa mide 15. Encuentra los catetos.',
    options: ['9 y 12', '8 y 11', '9 y 11', '10 y 13'],
    answerIndex: 0,
    solution: 'Pitágoras: 15² = x² + (x+3)² → 2x² + 6x + 9 = 225 → x² + 3x − 108 = 0 → (x+12)(x−9)=0 → x=9. Catetos: 9 y 12.',
  },
  {
    prompt: 'Un rectángulo tiene lados (x + 5) y (x − 3). Si su área es 48, ¿cuáles son las dimensiones?',
    options: ['4 y 12', '3 y 16', '6 y 8', '5 y 10'],
    answerIndex: 0,
    solution: '(x+5)(x−3) = 48 → x² + 2x − 63 = 0 → (x+9)(x−7) = 0 → x = 7. Lados: x+5=12, x−3=4.',
  },
  {
    prompt: 'El mismo rectángulo de lados (x + 5) y (x − 3), pero ahora con área 20. ¿Cuáles son las dimensiones?',
    options: ['2 y 10', '1 y 20', '4 y 5', '2 y 12'],
    answerIndex: 0,
    solution: '(x+5)(x−3) = 20 → x² + 2x − 35 = 0 → (x+7)(x−5) = 0 → x = 5. Lados: x+5=10, x−3=2.',
  },
  {
    prompt: 'Demuestra algebraicamente: (a + b)² − 2ab = a² + b². ¿Qué producto notable se usó?',
    options: ['Cuadrado de un binomio', 'Suma por diferencia', 'Cubo de un binomio', 'Trinomio cuadrado'],
    answerIndex: 0,
    solution: '(a+b)² = a² + 2ab + b². Al restar 2ab queda a² + b². Se usó el cuadrado de un binomio.',
  },
]

// =====================================================================
// SEMANA 7 — Teorema del residuo, teorema del factor, operaciones con
// expresiones racionales y racionalización. Basado en Guia_Algebra.pdf
// pp. 42-59. Todas las identidades verificadas con sympy.
// =====================================================================

// ---- Módulo 1 (Semana 7): Teorema del residuo ----
/** Ejemplo 29a: (12x³+13x²-59x+30) ÷ (x-5), residuo por evaluación. */
export const RESIDUE_THEOREM_STEPS: AlgebraStep[] = [
  { label: 'Iguala el divisor a cero', expr: 'x − 5 = 0 → x = 5' },
  { label: 'Evalúa el polinomio en ese valor', expr: '12(5)³ + 13(5)² − 59(5) + 30' },
  { label: 'Simplifica', expr: '1500 + 325 − 295 + 30 = 1560' },
  { label: 'Resultado', expr: 'El residuo de la división es 1560 (sin necesidad de dividir)' },
]

/** Ejemplo 29b: (6x³-7x²-5) ÷ (3x+1), residuo por evaluación con raíz fraccionaria. */
export const RESIDUE_THEOREM_STEPS_2: AlgebraStep[] = [
  { label: 'Iguala el divisor a cero', expr: '3x + 1 = 0 → x = −1/3' },
  { label: 'Evalúa el polinomio en ese valor', expr: '6(−1/3)³ − 7(−1/3)² − 5' },
  { label: 'Simplifica cada término', expr: '−6/27 − 7/9 − 5 = −2/9 − 7/9 − 5 = −1 − 5' },
  { label: 'Resultado', expr: 'Residuo = −6' },
]

export const RESIDUE_QUIZ: WordProblem[] = [
  {
    prompt: 'Usa el teorema del residuo para hallar el residuo de (x³ − 2x² + 4x − 8) ÷ (x − 2), sin dividir.',
    options: ['0', '8', '−8', '4'],
    answerIndex: 0,
    solution: 'x=2: (2)³ − 2(2)² + 4(2) − 8 = 8 − 8 + 8 − 8 = 0. Como el residuo es 0, (x−2) es factor exacto.',
  },
  {
    prompt: 'Usa el teorema del residuo para hallar el residuo de (3x³ − 4x² + x − 2) ÷ (x − 1).',
    options: ['−2', '2', '0', '−6'],
    answerIndex: 0,
    solution: 'x=1: 3(1)³ − 4(1)² + 1 − 2 = 3 − 4 + 1 − 2 = −2.',
  },
]

// ---- Módulo 2 (Semana 7): Teorema del factor ----
export const FACTOR_THEOREM_INTRO = '(x − a) es un factor de un polinomio P(x) si y solo si al evaluar P(a) = 0. Combinado con el teorema de la raíz racional, esto permite factorizar polinomios de grado 3 o más.'

/** Ejemplo 30: P(x) = 2x³+x²−13x+6, factorización completa por evaluación + Ruffini. */
export const FACTOR_THEOREM_STEPS: AlgebraStep[] = [
  { label: 'Posibles ceros racionales (factores de 6 / factores de 2)', expr: '±1, ±2, ±3, ±6, ±1/2, ±3/2' },
  { label: 'Prueba valores hasta encontrar uno que anule P(x)', expr: 'P(1)=4, P(−1)=18, P(2)=16+4−26+6=0 ✓' },
  { label: '(x − 2) es un factor. Divide por Ruffini', expr: '2x³+x²−13x+6 = (x − 2)(2x² + 5x − 3)' },
  { label: 'Factoriza el cociente cuadrático por ensayo y error', expr: '2x² + 5x − 3 = (2x − 1)(x + 3)' },
  { label: 'Resultado', expr: 'P(x) = (x − 2)(2x − 1)(x + 3)' },
]

export const FACTOR_THEOREM_QUIZ: WordProblem[] = [
  {
    prompt: 'Factoriza completamente usando el teorema del factor: x³ + 8',
    options: ['(x + 2)(x² − 2x + 4)', '(x + 2)(x² + 2x + 4)', '(x + 2)(x² − 2x − 4)', '(x − 2)(x² + 2x + 4)'],
    answerIndex: 0,
    solution: 'Es suma de cubos con a=x, b=2: x³+8 = (x+2)(x²−2x+4).',
  },
  {
    prompt: 'El beneficio de una empresa es P(x) = −2x² + 60x − 400. Factoriza P(x) y determina para qué valores de x hay beneficio (P(x) > 0).',
    options: ['P(x) = −2(x − 10)(x − 20); beneficio para 10 < x < 20', 'P(x) = −2(x + 10)(x + 20); beneficio para x < −20', 'P(x) = −2(x − 10)(x − 20); beneficio para x < 10 o x > 20', 'P(x) = 2(x − 10)(x − 20); beneficio para 10 < x < 20'],
    answerIndex: 0,
    solution: 'Factor común −2: −2(x²−30x+200) = −2(x−10)(x−20). Como abre hacia abajo, P(x)>0 entre las raíces: 10 < x < 20.',
  },
  {
    prompt: '¿Cuáles son los ceros de P(x) = x³ − x² − 14x + 24? (usa el teorema del factor y prueba divisores de 24)',
    options: ['x = −4, 2, 3', 'x = −4, −2, 3', 'x = 4, 2, −3', 'x = −4, 2, −3'],
    answerIndex: 0,
    solution: 'P(2)=0, factoriza (x−2)(x²+x−12)=(x−2)(x+4)(x−3). Ceros: −4, 2, 3.',
  },
]

// ---- Módulo 3 (Semana 7): Operaciones con expresiones racionales ----
/** Ejemplo 36a: adición de expresiones racionales con mismo denominador. */
export const RATIONAL_ADD_STEPS: AlgebraStep[] = [
  { label: 'Expresión original (mismo denominador)', expr: '(x² + 3x)/(x + 1) + (1 − x)/(x + 1)' },
  { label: 'Suma los numeradores', expr: '= (x² + 3x + 1 − x)/(x + 1) = (x² + 2x + 1)/(x + 1)' },
  { label: 'Factoriza el numerador (TCP)', expr: '= (x + 1)²/(x + 1)' },
  { label: 'Simplifica', expr: '= x + 1' },
]

/** Ejemplo 38a: producto de expresiones racionales, factorizando antes de multiplicar. */
export const RATIONAL_MULT_STEPS: AlgebraStep[] = [
  { label: 'Expresión original', expr: 'x/(5x² + 21x + 4) · (25x² + 10x + 1)/(3x² + x)' },
  { label: 'Factoriza cada polinomio', expr: '= x/[(5x+1)(x+4)] · (5x+1)²/[x(3x+1)]' },
  { label: 'Cancela factores comunes', expr: '= (5x+1)/[(x+4)(3x+1)]' },
]

/** Ejemplo 39a: división de expresiones racionales. */
export const RATIONAL_DIV_STEPS: AlgebraStep[] = [
  { label: 'Expresión original', expr: '(x + 2)/(2x − 3) ÷ (x² − 4)/(2x² − 3x)' },
  { label: 'Multiplica por el recíproco y factoriza', expr: '= (x+2)/(2x−3) · x(2x−3)/[(x+2)(x−2)]' },
  { label: 'Cancela factores comunes', expr: '= x/(x − 2)' },
]

export const RATIONAL_OPS_QUIZ: WordProblem[] = [
  {
    prompt: 'Simplifica: (x² − 3)/(x² + 2x + 1) + (x + 3)/(x + 1)',
    options: ['2x(x + 2)/(x + 1)²', '2x/(x + 1)', '(2x + 2)/(x + 1)²', '2x(x + 2)/(x + 1)'],
    answerIndex: 0,
    solution: 'El denominador común es (x+1)². Al sumar y factorizar el numerador queda 2x(x+2)/(x+1)².',
  },
  {
    prompt: 'Simplifica: (x² + 8x + 16)/(x² − 5x) · (x − 5)/(x² − 16)',
    options: ['(x + 4)/[x(x − 4)]', '(x − 4)/[x(x + 4)]', '(x + 4)/(x − 4)', '1/[x(x − 4)]'],
    answerIndex: 0,
    solution: 'Factoriza: (x+4)²/[x(x−5)] · (x−5)/[(x+4)(x−4)] = (x+4)/[x(x−4)].',
  },
]

// ---- Módulo 4 (Semana 7): Racionalización ----
/** Ejemplo 40a: racionalización de numerador con h ≠ 0 (base del cálculo diferencial). */
export const RATIONALIZE_NUM_STEPS: AlgebraStep[] = [
  { label: 'Expresión original', expr: '(√(x+h) − √x) / h' },
  { label: 'Multiplica por la conjugada del numerador', expr: '· (√(x+h) + √x) / (√(x+h) + √x)' },
  { label: 'El numerador se vuelve diferencia de cuadrados', expr: '= [(x+h) − x] / [h(√(x+h) + √x)]' },
  { label: 'Simplifica: h se cancela', expr: '= h / [h(√(x+h) + √x)] = 1 / (√(x+h) + √x)' },
]

/** Ejemplo 41a: racionalización de denominador. */
export const RATIONALIZE_DEN_STEPS: AlgebraStep[] = [
  { label: 'Expresión original', expr: '(3x − 4y − √(xy)) / (3√x − 4√y)' },
  { label: 'Multiplica por la conjugada del denominador', expr: '· (3√x + 4√y) / (3√x + 4√y)' },
  { label: 'El denominador se vuelve diferencia de cuadrados', expr: '= (3√x)² − (4√y)² = 9x − 16y' },
  { label: 'El numerador se factoriza y cancela con (9x − 16y)', expr: '= (√x + √y)(9x − 16y) / (9x − 16y)' },
  { label: 'Resultado', expr: '= √x + √y' },
]

export const RATIONALIZE_QUIZ: WordProblem[] = [
  {
    prompt: 'Racionaliza el numerador de (√(9+h) − 3)/h y simplifica para h ≠ 0.',
    options: ['1/(√(9+h) + 3)', '1/(√(9+h) − 3)', 'h/(√(9+h) + 3)', '(√(9+h) + 3)/h'],
    answerIndex: 0,
    solution: 'Multiplica por la conjugada (√(9+h)+3): numerador queda (9+h)−9=h, que se cancela con el h del denominador.',
  },
  {
    prompt: 'Racionaliza el denominador de 1/(√5 − √3).',
    options: ['(√5 + √3)/2', '(√5 − √3)/2', '√5 + √3', '(√5 + √3)/8'],
    answerIndex: 0,
    solution: 'Multiplica por la conjugada (√5+√3): denominador = 5−3=2. Resultado: (√5+√3)/2.',
  },
]

// ---- Módulo 5 (Semana 7): Aplicaciones ----
export const FACTOR_APPLICATION_QUIZ: WordProblem[] = [
  {
    prompt: 'Un rectángulo tiene un perímetro de 30 m y un área de 56 m². Plantea el sistema y factoriza para hallar las dimensiones.',
    options: ['7 y 8 metros', '4 y 14 metros', '2 y 28 metros', '6 y 9 metros'],
    answerIndex: 0,
    solution: 'x+y=15, xy=56 → x²−15x+56=(x−8)(x−7)=0. Dimensiones: 7 y 8 metros.',
  },
  {
    prompt: 'Un proyectil sigue h(t) = −4.9t² + 40t. Factoriza para hallar cuándo toca el suelo (h=0).',
    options: ['t = 0 o t ≈ 8.16 segundos', 't = 0 o t ≈ 4.9 segundos', 't = 1 o t ≈ 8.16 segundos', 't ≈ 4.08 segundos (único)'],
    answerIndex: 0,
    solution: 't(−4.9t + 40) = 0 → t=0 o t = 40/4.9 ≈ 8.16 segundos.',
  },
  {
    prompt: 'La suma de dos números es 15 y la suma de sus cuadrados es 113. Plantea y factoriza una ecuación para encontrarlos.',
    options: ['7 y 8', '6 y 9', '5 y 10', '4 y 11'],
    answerIndex: 0,
    solution: 'xy = [(x+y)² − (x²+y²)]/2 = (225−113)/2 = 56. Con x+y=15 y xy=56: x²−15x+56=(x−8)(x−7). Números: 7 y 8.',
  },
  {
    prompt: 'La diferencia entre los cuadrados de dos números consecutivos es 39. ¿Cuáles son los números?',
    options: ['19 y 20', '18 y 19', '20 y 21', '17 y 18'],
    answerIndex: 0,
    solution: '(n+1)² − n² = 39 → 2n + 1 = 39 → n = 19. Los números son 19 y 20.',
  },
]
