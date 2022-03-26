// Crie uma função para verificar se um valor é Truthy
function isTrue(valor) {
   return !!valor
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function lado4(lado) {
    lado * 4
    return lado
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function Surname(name, surname) {
    console.log(name, surname)
}
// Surname('evandro', 'motta');


// Crie uma função que verifica se um número é par
function isPar(numero) {
    if(numero%2 == 0) {
        console.log(numero + ' é par')
    } else {
        console.log(numero + ' é impar')
    }
}
// isPar(4)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function Typeoff(dado) {
    console.log(typeof(dado))
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', name =>  { console.log('evandro')})


// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  }
  precisoVisitar(20);
  jaVisitei(20);


