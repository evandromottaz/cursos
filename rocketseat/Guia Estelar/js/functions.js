// criar frases motivacionais

//declaração da função
//function statement
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')

}

//executar a função
//rodar, chamar, invocar
//execute, run, call, invoke

createPhrases()


console.log('fim do programa')

    /* 
    AULA 2
    function expression
    function anonymous*/

//parâmetros
const sum = function(number1, number2){
    let total = number1 + number2
    return total;

}

let number1 = 34;
let number2 = 25;
console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
sum(2,3) //arguments - argumentos

//Exemplo de uma função explicativa - função de um liquidificador
function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)
//R. bananamaçã


//arrow function

const sayMyName = () => {
    console.log('Evandro')
}

sayMyName()

//callback function

function sayMyname2(name) {
    console.log('antes de executar a funcao callback')

    name()

    console.log('depois de executar a callback')
}

sayMyname2(
    () => {
        console.log('estou em uma callback')
    }
)

// funções construtoras

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const evandro = new Person('Evandro')
const joao = new Person('João')
console.log(evandro.walk())
console.log(joao.walk())

