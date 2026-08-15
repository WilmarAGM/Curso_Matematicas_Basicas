// ---------------------------------------------------------------
// Taller 1: Operaciones Combinadas, Secuencias y M.C.D./M.C.M.
// Contenido migrado de Solucionario_Completo_Final.tex
// ---------------------------------------------------------------

export interface ComputeExercise {
  id: number
  type: 'compute'
  statement: string
  answer: number
  steps: string[]
}

export interface SequenceQuestion {
  prompt: string
  answer: number
}

export interface SequenceExercise {
  id: number
  type: 'sequence'
  sequence: number[]
  patternExplain: string
  questions: SequenceQuestion[]
}

export interface WordExercise {
  id: number
  type: 'word'
  title: string
  statement: string
  numbers: number[]
  mode: 'mcm' | 'mcd'
  targetValue: number
  steps: string[]
  finalAnswer: string
}

export type Workshop1Exercise = ComputeExercise | SequenceExercise | WordExercise

export const COMBINADAS: ComputeExercise[] = [
  {
    id: 1,
    type: 'compute',
    statement: '−(5 + 2) + {−15 + 2 − [−10 + 2 − (5 − 2)] + 10}',
    answer: 1,
    steps: [
      '= −(7) + {−15 + 2 − [−10 + 2 − (3)] + 10}',
      '= −7 + {−15 + 2 − [−10 + 2 − 3] + 10}',
      '= −7 + {−15 + 2 − [−11] + 10}',
      '= −7 + {−15 + 2 + 11 + 10}',
      '= −7 + {8}',
      '= 1',
    ],
  },
  {
    id: 3,
    type: 'compute',
    statement: '{−5 × [(−8 + 12) × (−2) − (−6)] + (−15) ÷ 3} − [−(4 − 9) × (−2)]',
    answer: 15,
    steps: [
      '= {−5 × [4 × (−2) − (−6)] + (−5)} − [−(−5) × (−2)]',
      '= {−5 × [−8 + 6] − 5} − [5 × (−2)]',
      '= {−5 × [−2] − 5} − [−10]',
      '= {10 − 5} + 10',
      '= 5 + 10',
      '= 15',
    ],
  },
  {
    id: 4,
    type: 'compute',
    statement: '15(9 − 2) + 7(6 − 1) − [7(6 + 3) − 4(3 − 1)]',
    answer: 85,
    steps: [
      '= 15(7) + 7(5) − [7(9) − 4(2)]',
      '= 105 + 35 − [63 − 8]',
      '= 140 − [55]',
      '= 85',
    ],
  },
  {
    id: 5,
    type: 'compute',
    statement: '15(12 − 2) − 7(8 − 1)',
    answer: 101,
    steps: ['= 15(10) − 7(7)', '= 150 − 49', '= 101'],
  },
  {
    id: 9,
    type: 'compute',
    statement: '30 − {(2 + 7) + 4 − [2 + (6 + 4) − 6]}',
    answer: 23,
    steps: [
      '= 30 − {(9) + 4 − [2 + (10) − 6]}',
      '= 30 − {9 + 4 − [6]}',
      '= 30 − {13 − 6}',
      '= 30 − {7}',
      '= 23',
    ],
  },
  {
    id: 10,
    type: 'compute',
    statement: '45 ÷ (−5) − 3 × {−2 + [−4 × (5 − 8) + (−12) ÷ (−4)]} + (−20) ÷ 4',
    answer: -53,
    steps: [
      '= −9 − 3 × {−2 + [−4 × (−3) + 3]} + (−5)',
      '= −9 − 3 × {−2 + [12 + 3]} − 5',
      '= −9 − 3 × {−2 + 15} − 5',
      '= −9 − 3 × {13} − 5',
      '= −9 − 39 − 5',
      '= −53',
    ],
  },
  {
    id: 11,
    type: 'compute',
    statement: '−{−[−(−2 + 5) × (−6) ÷ (−9)] + (−4) × [−3 + (−2) × (−5)]}',
    answer: 30,
    steps: [
      '= −{−[−(3) × (−6) ÷ (−9)] + (−4) × [−3 + 10]}',
      '= −{−[−(−18) ÷ (−9)] + (−4) × [7]}',
      '= −{−[−(2)] − 28}',
      '= −{−2 − 28}',
      '= −{−30}',
      '= 30',
    ],
  },
  {
    id: 12,
    type: 'compute',
    statement: '20 − {[23 − 2(5 · 2)] + (15 ÷ 3) − 6}',
    answer: 18,
    steps: [
      '= 20 − {[23 − 2(10)] + (5) − 6}',
      '= 20 − {[23 − 20] + 5 − 6}',
      '= 20 − {3 + 5 − 6}',
      '= 20 − {2}',
      '= 18',
    ],
  },
  {
    id: 13,
    type: 'compute',
    statement: '[48 ÷ (−6) − (−3) × (−4)] × (−2) − {(−5) × 5 − [−7 × (−2) + (−8)]}',
    answer: 71,
    steps: [
      '= [−8 − 12] × (−2) − {−25 − [14 − 8]}',
      '= [−20] × (−2) − {−25 − [6]}',
      '= 40 − {−25 − 6}',
      '= 40 − {−31}',
      '= 40 + 31',
      '= 71',
    ],
  },
]

export const SECUENCIAS: SequenceExercise[] = [
  {
    id: 14,
    type: 'sequence',
    sequence: [1, 3, 7, 15, 31],
    patternExplain:
      'Las diferencias entre términos son 2, 4, 8, 16… El patrón consiste en multiplicar el término anterior por 2 y sumar 1.',
    questions: [
      { prompt: '¿Cuál es el siguiente número (6º término)?', answer: 63 },
      { prompt: '¿Cuál será el 8º término?', answer: 255 },
    ],
  },
  {
    id: 15,
    type: 'sequence',
    sequence: [4, 7, 13, 25, 49],
    patternExplain:
      'Las diferencias son 3, 6, 12, 24… Se suma el doble de la diferencia anterior. Equivale a multiplicar el término anterior por 2 y restar 1.',
    questions: [
      { prompt: '¿Cuál es el siguiente número (6º término)?', answer: 97 },
      { prompt: '¿Cuál será el 7º término?', answer: 193 },
    ],
  },
  {
    id: 16,
    type: 'sequence',
    sequence: [2, 5, 10, 17, 26],
    patternExplain:
      'Las diferencias son 3, 5, 7, 9… (números impares). A cada término se le suma el siguiente número impar.',
    questions: [
      { prompt: '¿Cuál es el siguiente número (6º término)?', answer: 37 },
      { prompt: '¿Qué posición ocupa el número 101 en esta secuencia?', answer: 10 },
    ],
  },
]

export const MCD_MCM_DIRECTO: WordExercise[] = [
  {
    id: 17,
    type: 'word',
    title: 'Cálculo directo',
    statement: 'Calcula el M.C.D. y el M.C.M. de los números: 72, 108 y 60. (Ingresa el M.C.M.)',
    numbers: [72, 108, 60],
    mode: 'mcm',
    targetValue: 1080,
    steps: [
      '72 = 2 · 2 · 2 · 3 · 3',
      '108 = 2 · 2 · 3 · 3 · 3',
      '60 = 2 · 2 · 3 · 5',
      'M.C.D. (factores comunes con la menor cantidad de veces): 2 · 2 · 3 = 12',
      'M.C.M. (factores comunes y no comunes con la mayor cantidad de veces): 2 · 2 · 2 · 3 · 3 · 3 · 5 = 1080',
    ],
    finalAnswer: 'M.C.D. = 12  ·  M.C.M. = 1080',
  },
  {
    id: 18,
    type: 'word',
    title: 'Cálculo directo',
    statement: 'Halla el M.C.D. y el M.C.M. del siguiente conjunto de números: 45, 75 y 105. (Ingresa el M.C.M.)',
    numbers: [45, 75, 105],
    mode: 'mcm',
    targetValue: 1575,
    steps: [
      '45 = 3 · 3 · 5',
      '75 = 3 · 5 · 5',
      '105 = 3 · 5 · 7',
      'M.C.D.: 3 · 5 = 15',
      'M.C.M.: 3 · 3 · 5 · 5 · 7 = 1575',
    ],
    finalAnswer: 'M.C.D. = 15  ·  M.C.M. = 1575',
  },
]

export const MCM_APLICACION: WordExercise[] = [
  {
    id: 19,
    type: 'word',
    title: 'Encuentros cíclicos',
    statement:
      'Tres buses intermunicipales salen de la terminal. El primero sale cada 45 minutos, el segundo cada 60 minutos y el tercero cada 90 minutos. Si los tres iniciaron a las 6:00 a. m., ¿a qué hora volverán a coincidir? (Ingresa el M.C.M. en minutos)',
    numbers: [45, 60, 90],
    mode: 'mcm',
    targetValue: 180,
    steps: [
      '45 = 3 · 3 · 5',
      '60 = 2 · 2 · 3 · 5',
      '90 = 2 · 3 · 3 · 5',
      'M.C.M. = 2 · 2 · 3 · 3 · 5 = 180 minutos (3 horas)',
    ],
    finalAnswer: 'Coinciden cada 180 minutos (3 horas): volverán a salir juntos a las 9:00 a. m.',
  },
  {
    id: 20,
    type: 'word',
    title: 'Alineación de objetos',
    statement:
      'Un bodeguero organiza columnas de cajas de 12 cm, 18 cm y 24 cm de altura. Quiere que las tres columnas alcancen exactamente la misma altura sin sobrar espacio. ¿Cuál es la altura mínima de las columnas? (Ingresa el M.C.M. en cm)',
    numbers: [12, 18, 24],
    mode: 'mcm',
    targetValue: 72,
    steps: [
      '12 = 2 · 2 · 3',
      '18 = 2 · 3 · 3',
      '24 = 2 · 2 · 2 · 3',
      'M.C.M. = 2 · 2 · 2 · 3 · 3 = 72 cm',
    ],
    finalAnswer:
      'Altura mínima: 72 cm. Necesitará 72÷12 = 6 cajas de 12 cm, 72÷18 = 4 cajas de 18 cm y 72÷24 = 3 cajas de 24 cm.',
  },
  {
    id: 21,
    type: 'word',
    title: 'Vueltas en pista',
    statement:
      'Tres corredores dan vueltas a una pista: A tarda 72 s, B tarda 90 s y C tarda 120 s. Si parten juntos, ¿en cuántos minutos volverán a cruzarse los tres en la línea de inicio? (Ingresa el resultado en minutos)',
    numbers: [72, 90, 120],
    mode: 'mcm',
    targetValue: 6,
    steps: [
      '72 = 2 · 2 · 2 · 3 · 3',
      '90 = 2 · 3 · 3 · 5',
      '120 = 2 · 2 · 2 · 3 · 5',
      'M.C.M. = 2 · 2 · 2 · 3 · 3 · 5 = 360 segundos',
      '360 ÷ 60 = 6 minutos',
    ],
    finalAnswer: 'Volverán a coincidir después de 6 minutos.',
  },
]

export const MCD_APLICACION: WordExercise[] = [
  {
    id: 22,
    type: 'word',
    title: 'Cortes exactos',
    statement:
      'Un ebanista tiene tres listones de 120 cm, 150 cm y 180 cm. Quiere cortarlos en trozos iguales, lo más largos posible, sin que sobre madera. ¿Cuánto debe medir cada trozo? (Ingresa el M.C.D. en cm)',
    numbers: [120, 150, 180],
    mode: 'mcd',
    targetValue: 30,
    steps: [
      '120 = 2 · 2 · 2 · 3 · 5',
      '150 = 2 · 3 · 5 · 5',
      '180 = 2 · 2 · 3 · 3 · 5',
      'M.C.D. = 2 · 3 · 5 = 30 cm',
    ],
    finalAnswer:
      'Cada trozo mide 30 cm. Se obtienen 120÷30=4, 150÷30=5 y 180÷30=6 trozos: en total 15 trozos.',
  },
  {
    id: 23,
    type: 'word',
    title: 'Distribución equitativa',
    statement:
      'Para una brigada de salud se recolectaron 240 analgésicos, 360 vitaminas y 480 vendas. Se arman botiquines idénticos con la misma cantidad de cada insumo, sin que sobre nada. ¿Cuántos botiquines se pueden armar? (Ingresa el M.C.D.)',
    numbers: [240, 360, 480],
    mode: 'mcd',
    targetValue: 120,
    steps: [
      '240 = 2 · 2 · 2 · 2 · 3 · 5',
      '360 = 2 · 2 · 2 · 3 · 3 · 5',
      '480 = 2 · 2 · 2 · 2 · 2 · 3 · 5',
      'M.C.D. = 2 · 2 · 2 · 3 · 5 = 120',
    ],
    finalAnswer:
      'Se arman 120 botiquines. Cada uno contiene 240÷120=2 analgésicos, 360÷120=3 vitaminas y 480÷120=4 vendas.',
  },
  {
    id: 24,
    type: 'word',
    title: 'Recubrimiento de áreas',
    statement:
      'Se desea cubrir un salón rectangular de 360 cm × 252 cm con baldosas cuadradas enteras lo más grandes posible. ¿Cuál debe ser el lado de cada baldosa? (Ingresa el M.C.D. en cm)',
    numbers: [360, 252],
    mode: 'mcd',
    targetValue: 36,
    steps: [
      '360 = 2 · 2 · 2 · 3 · 3 · 5',
      '252 = 2 · 2 · 3 · 3 · 7',
      'M.C.D. = 2 · 2 · 3 · 3 = 36 cm',
    ],
    finalAnswer:
      'El lado de cada baldosa mide 36 cm. A lo largo caben 360÷36=10 y a lo ancho 252÷36=7: en total 10×7 = 70 baldosas.',
  },
]

export const WORKSHOP1_TOTAL_ITEMS =
  COMBINADAS.length +
  SECUENCIAS.reduce((acc, s) => acc + s.questions.length, 0) +
  MCD_MCM_DIRECTO.length +
  MCM_APLICACION.length +
  MCD_APLICACION.length
