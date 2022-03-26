// Sempre que for criar uma nova Array, usar map
// Se não precisar criar uma Array, forEach

const carros = ['Ford', 'Fiat', 'Honda'];
const carros2 = ['Ford', 'Fiat', 'Honda'];

//--------------------------------------------------------- forEach()
// Passa por cada elemento do array | index = posicao do array
// O primeiro valor é o item, o segundo é o index e o terceiro a própria array
carros.forEach((carro, index, array) => {
    array[index] = 'Carro ' + carro;
})

//--------------------------------------------------------- map()
// Passa por cada elemento do array | index = posicao do array
const arrayMap = carros2.map((carro, index, array) => {
    return carro;
})

let numeros = [1, 3, 5, 6, 7]

//shorthand map
const numerosX2 = numeros.map(n => n * 2);

const aulas = [
    {
        nome:'Html 1',
        min: 15
    },
    {
        nome:'Html 2',
        min: 10
    },
    {
        nome:'CSS',
        min: 20
    },
    {
        nome:'JS',
        min: 25
    },
]

const tempoAulas = aulas.map((tempo) => tempo.min)
// console.log(tempoAulas)

function nomeAulas(aula) {
    return aula.nome;
}
//shorthand function + map
const nomeAulas2 = aula => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas2)

//--------------------------------------------------------- reduce()
// Possui o valor de acumulador, que soma com os itens.
const aulas2 = [10, 25, 30];

// Sempre que não se passar valor no acumulador, o primeiro item será um acumulador
const reduceAulas = aulas2.reduce((acumulador, item, index, array) => {
    return acumulador + item; //0 + 10, 10 + 25, 35 + 30
}, 0);

// Reduce para saber maior valor da Array
numeros = [10,25,30,3,54,33,22];
let maiorNumero = numeros.reduce((itemAnterior, itemAtual) => {
    if(itemAnterior > itemAtual) {
        return itemAnterior;
    } else {
        return itemAtual;
    }
})

//shorthand Reduce para saber maior valor da Array
maiorNumero = numeros.reduce((itemAnterior, itemAtual) => itemAnterior > itemAtual ? itemAnterior : itemAtual, 0)

//--------------------------------------------------------- reduceRight()
// Ele começa a verificar os itens da direita para esquerda
frutas = ['Banana',undefined,'Pera','Uva',]
const frutasRight = frutas.reduce((acc, fruta) => acc + '' + fruta) //Uva Pera Banana

//--------------------------------------------------------- some()
// Verifica se tem um item desejado - procura pelo valor verdadeiro
const temUva = frutas.some((fruta) => {
    return fruta === 'Uva'; //Uva, true
})

//--------------------------------------------------------- every()
// Verifica se todos os itens são truthy - procura pelo valor falso
const todosUvas = frutas.every((fruta) => {
    // !!(verifica se é true ou false)
    return fruta; //'Banana', undefined (!!undefined), false - terminou checagem
})

const maiorQue3 = numeros.every((n) => n >= 6)

//--------------------------------------------------------- find e findIndex()
// Procura nos itens e o primeiro Truthy que aparecer ele retorna
numeros = [10,25,30,3,54,33,22];
const buscaMaior45 = numeros.find(x => x > 45); //54

//findIndex retorna o index do valor verdadeiro
frutas = ['Banana','Laranja','Pera','Uva','Pera']
const indexPera = frutas.findIndex(fruta => fruta === 'Pera') //2

//--------------------------------------------------------- filter()
// Retorna uma array com todos os valores verdadeiros
frutas = ['Banana',undefined, 'Laranja','','Pera', null, 'Uva','Pera']
const arrayFrutas = frutas.filter((item) => {
    return item;
})

const aulasMaior15min = aulas.filter((aula) => {
    return aula.min > 15;
})

console.log(aulasMaior15min)

