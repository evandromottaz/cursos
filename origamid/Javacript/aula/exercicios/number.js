// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)


// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ');

//"..." serve como um forEach, ele passa por cada elemento como um forEach
numeros = Math.max(...numeros);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPrecos(preco) {
    preco = +preco.toLowerCase().replace('r$','').trim().replace(',','.');
    preco = +preco.toFixed(2);
    return preco;
}

//Primeiro executa isso
let somaTotal = 0
listaPrecos.forEach(preco => {
    somaTotal += limparPrecos(preco);
})

console.log(somaTotal.toLocaleString('pt-BR', {style:'currency',currency:'BRL'}))

