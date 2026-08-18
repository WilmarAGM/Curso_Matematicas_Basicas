// ---------------------------------------------------------------
// Taller 3: División de Fraccionarios, Operaciones Combinadas,
// Aplicaciones, Potenciación y Radicación (Semana 3)
// Todas las respuestas fueron verificadas con aritmética exacta
// (fracciones / sympy) antes de publicarse. Los ejercicios de la
// Parte II y varios de la Parte III están tomados y auditados de
// U1_Guia_ARITMETICA.pdf (Ejercicio 6 y Ejercicio 8).
// ---------------------------------------------------------------

export interface Frac3Exercise {
  id: number
  statement: string
  ansNum: number
  ansDen: number
  steps: string[]
}

// ---- Parte I · División de Fraccionarios ----
export const DIVISION: Frac3Exercise[] = [
  {
    id: 1,
    statement: 'Resuelve: (7/9) ÷ (−14/27)',
    ansNum: -3,
    ansDen: 2,
    steps: [
      'Dividir es multiplicar por el inverso: (7/9) ÷ (−14/27) = (7/9) · (27/−14)',
      '= (7 · 27)/(9 · −14) = 189/(−126)',
      'Positivo entre negativo da negativo. Simplificando: mcd(189,126) = 63',
      '189/126 = 3/2  →  resultado = −3/2',
    ],
  },
  {
    id: 2,
    statement: 'Resuelve: (−5/6) ÷ (−25/18)',
    ansNum: 3,
    ansDen: 5,
    steps: [
      '(−5/6) ÷ (−25/18) = (−5/6) · (18/−25)',
      'Negativo entre negativo da positivo: (5 · 18)/(6 · 25) = 90/150',
      'mcd(90,150) = 30  →  90/150 = 3/5',
    ],
  },
  {
    id: 3,
    statement: 'Resuelve: 4 1/2 ÷ 1 4/5. Ingresa el resultado como fracción.',
    ansNum: 5,
    ansDen: 2,
    steps: [
      'Se convierten a fracciones impropias: 4 1/2 = 9/2,  1 4/5 = 9/5',
      '9/2 ÷ 9/5 = (9/2) · (5/9) = 45/18',
      'Simplificando entre 9: 45/18 = 5/2',
    ],
  },
  {
    id: 4,
    statement: 'Resuelve en orden: (3/8 ÷ 9/16) ÷ 5/6',
    ansNum: 4,
    ansDen: 5,
    steps: [
      'Primero: 3/8 ÷ 9/16 = (3/8) · (16/9) = 48/72 = 2/3',
      'Luego: (2/3) ÷ (5/6) = (2/3) · (6/5) = 12/15',
      'Simplificando entre 3: 12/15 = 4/5',
    ],
  },
  {
    id: 5,
    statement:
      'Se reparte un terreno de 5/6 de hectárea en parcelas de 1/12 de hectárea cada una. ¿Cuántas parcelas se obtienen?',
    ansNum: 10,
    ansDen: 1,
    steps: [
      'El número de parcelas es el total dividido entre el tamaño de cada una.',
      '(5/6) ÷ (1/12) = (5/6) · (12/1) = 60/6',
      '= 10 parcelas',
    ],
  },
]

// ---- Parte II · Operaciones Combinadas con Fraccionarios (nivel altísimo) ----
// Tomados y auditados de U1_Guia_ARITMETICA.pdf, "Ejercicio 8" (p. 29).
export const COMBINADAS: Frac3Exercise[] = [
  {
    id: 6,
    statement: '2/3 ÷ [5 ÷ (2/4 + 1) − 3(1/2 − 1/4)]',
    ansNum: 8,
    ansDen: 31,
    steps: [
      '2/4 + 1 = 1/2 + 1 = 3/2',
      '5 ÷ (3/2) = 5 · 2/3 = 10/3',
      '1/2 − 1/4 = 1/4  →  3 · (1/4) = 3/4',
      'Corchete: 10/3 − 3/4 = 40/12 − 9/12 = 31/12',
      '2/3 ÷ (31/12) = (2/3) · (12/31) = 24/93 = 8/31',
    ],
  },
  {
    id: 7,
    statement: '2 1/3 + 3/15 − 3 1/6',
    ansNum: -19,
    ansDen: 30,
    steps: [
      'Se convierten a fracciones impropias: 2 1/3 = 7/3,  3 1/6 = 19/6',
      'mcm(3, 15, 6) = 30',
      '7/3 = 70/30,  3/15 = 6/30,  19/6 = 95/30',
      '70/30 + 6/30 − 95/30 = (70 + 6 − 95)/30 = −19/30',
    ],
  },
  {
    id: 8,
    statement: '−1/2 + [1/9 + 5/2 − (2/3)(−3/4 − 1 + 3) − 1/6]',
    ansNum: 10,
    ansDen: 9,
    steps: [
      'Paréntesis interno: −3/4 − 1 + 3 = −3/4 + 2 = 5/4',
      '(2/3)(5/4) = 10/12 = 5/6',
      'Corchete con mcm(9,2,6) = 18: 1/9=2/18, 5/2=45/18, 5/6=15/18, 1/6=3/18',
      'Corchete = 2/18 + 45/18 − 15/18 − 3/18 = 29/18',
      '−1/2 + 29/18 = −9/18 + 29/18 = 20/18 = 10/9',
    ],
  },
  {
    id: 9,
    statement: '2 1/4 − 3 1/6',
    ansNum: -11,
    ansDen: 12,
    steps: [
      '2 1/4 = 9/4,  3 1/6 = 19/6',
      'mcm(4,6) = 12  →  9/4 = 27/12,  19/6 = 38/12',
      '27/12 − 38/12 = −11/12',
    ],
  },
  {
    id: 10,
    statement: '1 − (8/3)(−3/4) − {2 − [3/4 − 1 + (2/5)(−10 + 15/4) − 1]}',
    ansNum: -11,
    ansDen: 4,
    steps: [
      'Dentro del paréntesis: −10 + 15/4 = −40/4 + 15/4 = −25/4',
      '(2/5)(−25/4) = −50/20 = −5/2',
      'Corchete: 3/4 − 1 − 5/2 − 1 = 3/4 − 4/4 − 10/4 − 4/4 = −15/4',
      'Llave: 2 − (−15/4) = 2 + 15/4 = 23/4',
      '(8/3)(−3/4) = −2',
      '1 − (−2) − 23/4 = 3 − 23/4 = 12/4 − 23/4 = −11/4',
    ],
  },
  {
    id: 11,
    statement: '2 2/3 · 25/40 ÷ 2 4/8',
    ansNum: 2,
    ansDen: 3,
    steps: [
      '2 2/3 = 8/3,  25/40 = 5/8,  2 4/8 = 5/2',
      'Multiplicación y división de izquierda a derecha:',
      '(8/3) · (5/8) = 40/24 = 5/3',
      '(5/3) ÷ (5/2) = (5/3) · (2/5) = 10/15 = 2/3',
    ],
  },
  {
    id: 12,
    statement: '[(2 − 3/2 − 4)(5 + 1/3 + 4)] ÷ [(5/4 − 3)(2/3 + 1)]',
    ansNum: 56,
    ansDen: 5,
    steps: [
      'Primer factor del numerador: 2 − 3/2 − 4 = −2 − 3/2 = −7/2',
      'Segundo factor del numerador: 5 + 1/3 + 4 = 9 + 1/3 = 28/3',
      'Numerador: (−7/2)(28/3) = −196/6 = −98/3',
      'Primer factor del denominador: 5/4 − 3 = −7/4',
      'Segundo factor del denominador: 2/3 + 1 = 5/3',
      'Denominador: (−7/4)(5/3) = −35/12',
      '(−98/3) ÷ (−35/12) = (−98/3)(−12/35) = 1176/105 = 56/5',
    ],
  },
  {
    id: 13,
    statement: '3 6/7 · 7/8 · 8/27',
    ansNum: 1,
    ansDen: 1,
    steps: [
      '3 6/7 = 27/7',
      '(27/7) · (7/8) · (8/27)',
      'El 7 del denominador se cancela con el 7 del numerador, y el 8 y el 27 también se cancelan en cadena.',
      'Resultado = 1',
    ],
  },
]

// ---- Parte III · Problemas de Aplicación (fraccionarios y porcentajes) ----
// Auditados de U1_Guia_ARITMETICA.pdf, "Ejercicio 6" (p. 28) y "Ejercicio 8 - Aplicación" (p. 29).
export const APLICACION: Frac3Exercise[] = [
  {
    id: 14,
    statement:
      'La población de un pueblo disminuyó de 1750 a 1700 habitantes. ¿Qué fracción de la población original representa la disminución? (simplifica)',
    ansNum: 1,
    ansDen: 35,
    steps: [
      'Disminución = 1750 − 1700 = 50 habitantes',
      'Fracción = 50/1750',
      'mcd(50,1750) = 50  →  50/1750 = 1/35',
      'Como porcentaje, 1/35 ≈ 2.86 %, que coincide con el decrecimiento reportado.',
    ],
  },
  {
    id: 15,
    statement:
      'El salario por hora de un estudiante subió de $5.25 a $5.75. ¿Qué fracción del salario original representa el incremento? (simplifica)',
    ansNum: 2,
    ansDen: 21,
    steps: [
      'Incremento = 5.75 − 5.25 = 0.50 = 1/2',
      'Salario original = 5.25 = 21/4',
      'Fracción = (1/2) ÷ (21/4) = (1/2) · (4/21) = 4/42 = 2/21',
      'Como porcentaje, 2/21 ≈ 9.52 %, que coincide con el incremento reportado.',
    ],
  },
  {
    id: 16,
    statement:
      'Un balón de voleibol cuesta $28.60 y tiene un 25 % de descuento. Ingresa el descuento en dólares con dos decimales, en formato num/100 (por ejemplo, $7.15 se ingresa como 715/100).',
    ansNum: 715,
    ansDen: 100,
    steps: [
      'Precio normal: $28.60 = 143/5',
      'Descuento = 25 % del precio = (1/4)(143/5) = 143/20',
      '143/20 = 7.15  →  como centésimas: 715/100',
    ],
  },
  {
    id: 17,
    statement:
      'Con el mismo balón de voleibol ($28.60, 25 % de descuento), ingresa el precio de oferta en dólares con dos decimales, en formato num/100.',
    ansNum: 2145,
    ansDen: 100,
    steps: [
      'Precio de oferta = precio normal − descuento = 143/5 − 143/20',
      '= 572/20 − 143/20 = 429/20',
      '429/20 = 21.45  →  como centésimas: 2145/100',
    ],
  },
  {
    id: 18,
    statement:
      'En una fábrica, 3/5 de la producción es de alta calidad, 1/4 de calidad media y el resto de baja calidad. ¿Qué fracción de la producción es de baja calidad? (simplifica)',
    ansNum: 3,
    ansDen: 20,
    steps: [
      'Fracción de baja calidad = 1 − 3/5 − 1/4',
      'mcm(1,5,4) = 20  →  1 = 20/20,  3/5 = 12/20,  1/4 = 5/20',
      '20/20 − 12/20 − 5/20 = 3/20',
    ],
  },
  {
    id: 19,
    statement: 'Con la misma fábrica, si se producen 1200 unidades al día, ¿cuántas son de baja calidad?',
    ansNum: 180,
    ansDen: 1,
    steps: [
      'Baja calidad = (3/20) · 1200',
      '= 3600/20 = 180 unidades',
      '(Verificación: alta = 3/5·1200=720, media = 1/4·1200=300, baja=180; 720+300+180=1200 ✓)',
    ],
  },
  {
    id: 20,
    statement: 'Elena va de compras con $18 000. Se gasta 3/5 de esa cantidad. ¿Cuánto le queda?',
    ansNum: 7200,
    ansDen: 1,
    steps: [
      'Le queda 1 − 3/5 = 2/5 del dinero.',
      '(2/5) · 18000 = 36000/5 = 7200',
    ],
  },
  {
    id: 21,
    statement: 'Un hombre vende 1/3 de su finca, alquila 1/8 y el resto lo cultiva. ¿Qué porción de la finca cultiva? (simplifica)',
    ansNum: 13,
    ansDen: 24,
    steps: [
      'Porción cultivada = 1 − 1/3 − 1/8',
      'mcm(1,3,8) = 24  →  1 = 24/24,  1/3 = 8/24,  1/8 = 3/24',
      '24/24 − 8/24 − 3/24 = 13/24',
    ],
  },
]

// ---- Parte IV · Potenciación ----
export const POTENCIACION: Frac3Exercise[] = [
  {
    id: 22,
    statement: 'Simplifica aplicando propiedades de la potenciación: 2⁵ · 2⁻³',
    ansNum: 4,
    ansDen: 1,
    steps: [
      'Producto de potencias de igual base: aᵐ · aⁿ = aᵐ⁺ⁿ',
      '2⁵ · 2⁻³ = 2⁵⁻³ = 2²',
      '2² = 4',
    ],
  },
  {
    id: 23,
    statement: 'Simplifica: (3⁴)² ÷ 3⁵',
    ansNum: 27,
    ansDen: 1,
    steps: [
      'Potencia de potencia: (aᵐ)ⁿ = aᵐ·ⁿ  →  (3⁴)² = 3⁸',
      'Cociente de potencias: 3⁸ ÷ 3⁵ = 3⁸⁻⁵ = 3³',
      '3³ = 27',
    ],
  },
  {
    id: 24,
    statement: 'Simplifica: (2/5)⁻²',
    ansNum: 25,
    ansDen: 4,
    steps: [
      'Propiedad de potencia negativa de una fracción: (a/b)⁻ⁿ = (b/a)ⁿ',
      '(2/5)⁻² = (5/2)²',
      '(5/2)² = 25/4',
    ],
  },
  {
    id: 25,
    statement:
      'Una colonia de bacterias se triplica cada hora. Si inicialmente hay 50 bacterias, ¿cuántas habrá después de 4 horas?',
    ansNum: 4050,
    ansDen: 1,
    steps: [
      'La población después de n horas es: 50 · 3ⁿ',
      'Con n = 4: 50 · 3⁴ = 50 · 81',
      '= 4050 bacterias',
    ],
  },
  {
    id: 26,
    statement: 'Un capital de $5000 se invierte al 10 % de interés compuesto anual. ¿Cuánto habrá después de 2 años?',
    ansNum: 6050,
    ansDen: 1,
    steps: [
      'Fórmula de interés compuesto: VF = VP(1 + r)ᵗ',
      'VF = 5000(1 + 0.10)² = 5000(1.1)²',
      '= 5000 · 1.21 = 6050',
    ],
  },
]

// ---- Parte V · Radicación ----
export const RADICACION: Frac3Exercise[] = [
  {
    id: 27,
    statement: 'Simplifica √200 y expresa como k√2. Ingresa el valor de k.',
    ansNum: 10,
    ansDen: 1,
    steps: [
      '200 = 100 · 2 = 10² · 2',
      '√200 = √(10² · 2) = 10√2',
      'k = 10',
    ],
  },
  {
    id: 28,
    statement: 'Simplifica: ∛(−64)',
    ansNum: -4,
    ansDen: 1,
    steps: [
      'Con índice impar, la raíz de un número negativo también es negativa.',
      '−64 = (−4)³',
      '∛(−64) = −4',
    ],
  },
  {
    id: 29,
    statement: 'Convierte el radical a exponente racional y evalúa: 16^(3/4)',
    ansNum: 8,
    ansDen: 1,
    steps: [
      '16 = 2⁴',
      '16^(3/4) = (2⁴)^(3/4) = 2^(4·3/4) = 2³',
      '2³ = 8',
    ],
  },
  {
    id: 30,
    statement: 'El volumen de un cubo es 512 cm³. ¿Cuál es la longitud de su arista? (V = L³)',
    ansNum: 8,
    ansDen: 1,
    steps: [
      '512 = L³',
      'L = ∛512',
      '512 = 8³  →  L = 8 cm',
    ],
  },
  {
    id: 31,
    statement: 'Si √x = 7, ¿cuál es el valor de √(4x)?',
    ansNum: 14,
    ansDen: 1,
    steps: [
      '√(4x) = √4 · √x',
      '√4 = 2',
      '√(4x) = 2 · √x = 2 · 7 = 14',
    ],
  },
]

export const WORKSHOP3_TOTAL_ITEMS =
  DIVISION.length + COMBINADAS.length + APLICACION.length + POTENCIACION.length + RADICACION.length
