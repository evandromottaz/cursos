//Expressões e Operadores -----

//Expressions ex:
let number = 1

//Operators ex:
//Binario
number + 1

// Unário
console.log(++number)
console.log(--number)

//Ternário
console.log(false ? 'alo' : 'nada')


// criar novo objeto

let name =  new String('Evandro')
name.surName = 'Motta'
let age = new Number(29)
console.log(name.surName, age)


//Deletar um objeto
const person = {
    name: 'Evandro',
    age: 29
}
delete person.age
console.log(person)


//resto da divisão %
let sobra = 5 % 2 //resto 1

//incremento ++
let increment = 0
increment++

//decremento --
let decrement = 0
decrement--

//exponencial **
3 ** 3 // 3³


//Operadores de Comparação -----
let one = 1
let two = 2

    // ==      igual
    // console.log(one == 1)
    // console.log(one == '1')

    // !=      diferente
    // console.log(one != 2)
    
    // ===     estritamente igual
    // console.log(one === '1')

    // !==     estritamente diferente
    // console.log(one !== 1)
    
    // >       maior
    // console.log(one > two)

    // >=      maior igual
    // console.log(one >= 1)
    // console.log(two >= 1)

    // <       menor
    // console.log(one < two)

    // <=      menor igual
    // console.log(one <= 0)

// Operadores de atribuição -----
x = 1

// Adition assigment
// x = x + 2
x += 2

// Subtraction assigment
// x = x - 1
x -= 1

// Multiplication assigment
// x = x * 2
x *= 2

// Division assigment
// x = x / 2
x /= 2
console.log(x)

// remainder, exponetiation
// x %= 2
x **= 2

// Operadores Lógicos -----

// 2 valores booleanos, quando verificados
// resultará em verdadeiro ou falso

let pao = true
let queijo = false

//AND && - os dois valores precisam ser verdadeiros
// console.log(pao && queijo)

// OR || - qualquer um que seja verdadeiro 
// console.log(pao || queijo)

// NOT ! - troca o valor dela
// console.log(!pao)

//Operador Condicional (Ternário) -----
// Depende da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//condition ? value1 : value2

//Exemplos
//Café da manhã top
const niceBreakFast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakFast)

// Maior de 18
age = 15
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


// Operador de String (String operator) -----

//comparison (comparação)


//concatenation (concatenação)
//Retorna a união de duas Strings
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')


// Condicionais e loops -----
/* 
    false
    0
    -0
    ""
    null
    underfined
    NaN
*/ 

// console.log( 0 ? 'verdadeiro' : 'falso')

/* 
    true
    {}
    []
    1
    3.21
    "0"     // string
    "false" // string
    -1
    infinity
    -infinity
*/ 

// console.log( "false" ? 'verdadeiro' : 'falso')


// Operator precedence
// * Precedência de operadores
// true == 1 |  false == 0

// *grouping                   ()
console.log(2 + 5 * 10)

// *negação e incremento       ! ++ --
// *relacional                 < <= > >=
// *igualdade                  == != === !==
// *AND                        &&
// *OR                         ||
// *condicional                ?:
// *assignment (atribuição)    = += -= *=


