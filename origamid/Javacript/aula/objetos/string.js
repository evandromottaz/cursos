const fruta = 'banana, maçã, laranja';
const pessoa = 'João comendo ';

//--------------------------------------------------------- concat

//concatena a frase a partir do 'concat'
const fraseCompleta = pessoa.concat(fruta);

//--------------------------------------------------------- includes

//verificar se tem a palavra 'banana'
fruta.includes('banana'); //true

//--------------------------------------------------------- startsWith

//verificar se tem palavras que começam com 'ban'
fruta.startsWith('ban') //true

//--------------------------------------------------------- slice

//corta do primeiro caracter ao 10 caracter
fruta.slice(0, 10) // banana, ma

//corta os últimos 5 caracteres da string
fruta.slice(-5) //ranja

//corta a partir do 8 caracter
fruta.slice(8) //maçã, laranja

//--------------------------------------------------------- indexOf e lastIndexOf

//procura onde está o primeiro caracter na string
fruta.indexOf('a') //1

//procura onde está o último caracter na string
fruta.lastIndexOf('a') //20

//--------------------------------------------------------- padStart e padEnd

//Aumenta o tamanho da string para o valor de x.
//O preenchimento é feito com espaços,
//caso não seja declarado o segundo argumento.
//Serve para alinhar uma lista

const listaPrecos = ['R$ 99','R$ 199','R$ 1199']

listaPrecos.forEach(preco => {
    preco.padStart(10, '.');
    //.....R$ 99
    //....R$ 199
    //...R$ 1199

    preco.padEnd(10, '.');
    //R$ 99.....
    //R$ 199....
    //R$ 1199...
});

//--------------------------------------------------------- repeat

//repete a string quantas vezes declarada
fruta.repeat(2) //"banana, maçã, laranjabanana, maçã, laranja"

//--------------------------------------------------------- replace

//localizar e substituir alguma palavra
let frutaTrocada = 'banana, maçã, maça';
frutaTrocada = frutaTrocada.replace('maçã', 'pêra'); //banana, pêra, maçã

//--------------------------------------------------------- split

//dividir cada letra da string
const frutaDividida = frutaTrocada.split(', ')

//Trocar div por section
const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlDivide = htmlText.split('div'); 
const htmlSection = htmlDivide.join('section'); //adiciona a palavra 'section' ao final de cada array de htmlText

//--------------------------------------------------------- toLowerCase e toUpperCase

//deixar string em letra MAIÚSCULA e MINÚSCULA
frutaPequena = frutaTrocada.toLowerCase(); //banana, pêra, maça
frutaGrande = frutaTrocada.toUpperCase(); //BANANA, PÊRA, MAÇA

// Fazendo verificação
frutaVerificada = frutaTrocada.toLowerCase() === 'banana, pêra, maça' //true

// console.log(frutaVerificada);

//--------------------------------------------------------- Trim
const valorr = '              R$ 23.00'

//Trim retira os espaços vazios
valorr.trim(); // 'R$ 23.00'

