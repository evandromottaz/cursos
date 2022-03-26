/*
    Prototype

    prototype-based language
    prototype chain
    __proto__

    "x.__proto__" acessa vários parametros já pré-criados
*/

/*
    Type conversion (typecasting) vs Type coersin
    * Alteração de um tipo de dado para outro tipo
*/

//type coersion
console.log('9'+5)
//transformou o 5 em uma string

//type conversion
console.log(Number('9')+5)

//Manipulando Strings e Números -------------

let string = '123'
Number (string)
console.log(string)

//Transformar String em Número e Número em String
let number = 321
console.log(String(number)) 

//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = 'Paralelepipedo'
console.log(word.length)

let number1 = 1234
console.log(String(number1).length)

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number2 = 23.323123123

console.log(number2.toFixed(2).replace('.', ','))

//Transformar letras minúsculas em maiúsculas. Faça o contrário disso também
let word2 = 'Programar É muito bom'
console.log(word2.toLowerCase())
console.log(word2.toUpperCase())

//Verificar se o texto contém a palavra Amor
let phrase = 'Eu quero Viver!'
console.log(phrase.includes("Viver")) //case sensitive

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let textSpace = 'eu estou programando em javascript'
let myArray = textSpace.split(' ') //split separa por 'x'
let phraseWithUnderscore = myArray.join("_") //join junta uma string
console.log(phraseWithUnderscore.toLowerCase())





                                    //Manipulado Arrays -------------

//Criar Array com construtor
let myArray2 = new Array('a','b','c')
console.log(myArray2)

//Contar elementos de um array
console.log(['a','b','c'].length)

//Transformar em uma cadeia de caracteres em elementos de um array
let word3 = 'manipulação'
console.log(Array.from(word3))


let techs = ["html","css","js"]
//adicionar um item no fim
techs.push("nodejs")

//adicionar no começo
techs.unshift("sql")

//remove do fim
techs.pop()

//remover do começo
techs.shift()

//pegar somente alguns elementos do array slice(posição-do-array)
techs.slice(1,3) //css, js

//remover 1 ou mais items em qualquwer posição do array
techs.splice(1,1) // html, js

//encontrar a posição de um elemento no array
let positionArray = techs.indexOf('js')

techs.splice(positionArray,1)
console.log(techs)
