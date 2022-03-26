const instrumentos = ['Guitarra','Baixo','Violão'];
const precos = [49,99,69,89];

const dados = [new String('Tipo 1'), ['Carro','Portas',{cor:'Azul',preco:2000}], function andar(nome) {console.log(nome)}];

const carros = new Array ('Ford','Fiat','BMW')

//adiciona o 'Kia' no espaço 20 do array e até chegar em 20, deixa espaços vazios na array
// carros[20] = 'Kia'

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li)

//--------------------------------------------------------- isArray()
// Retorna se é uma array
Array.isArray(arrayLi) //true

//--------------------------------------------------------- sort()
//Organiza em ordem alfabética a array
instrumentos.sort(); // ['Baixo','Guitarra','Violão']

//--------------------------------------------------------- unshift()
//Adiciona elemento ao início do array
carros.unshift('Ferrari'); //['Ferrari','Ford','Fiat','BMW']

//--------------------------------------------------------- push()
//Adiciona elemento ao último item do array
carros.push('Gol'); //['Ferrari','Ford','Fiat','BMW','Gol']

//--------------------------------------------------------- shift()
//Remove o primeiro elemento do array
carros.shift(); //['Ford','Fiat','BMW','Gol']

//--------------------------------------------------------- pop()
//Remove o último elemento do array
carros.pop(); //['Ford','Fiat','BMW']

//--------------------------------------------------------- reverse()
//Inverte a ordem da array
carros.reverse(); //['BMW','Fiat','Ford']

//--------------------------------------------------------- splice()
// splice(a partir do primeiro item, quantos itens quero remover, 'quantos itens a ser adicionados ...')
carros.splice(1, 0, 'Mercedez', 'Chevrolet'); //['BMW','Mercedez','Chevrolet','Fiat','Ford']
carros.splice(3, 2, 'Golf') //['BMW','Mercedez','Chevrolet','Golf']

//--------------------------------------------------------- fill()
// Preenche tudo com o valor desejado
// fill('valor', a partir, pare em)
let bananao = ['item1','item2','item3','item4','item5'].fill('Banana'); //['Banana','Banana','Banana','Banana','Banana']
bananao = ['item1','item2','item3','item4','item5'].fill('Banana', 3, 5); //['item1','item2','item3','Banana','Banana']

// ---------------------Métodos de verificação (não altera a array)---------------------
//--------------------------------------------------------- concat()
// Concatena as arrays
const concatCarros = ['lala'].concat(carros,precos, 'oi'); //["lala","BMW", "Mercedez", "Chevrolet", "Golf", 49, 99, 69, 89, "oi"]

//--------------------------------------------------------- includes()
// Procura um elemento na array
const linguagens = ['js','css','python','node','html','js','sass']
linguagens.includes('js') //true

//--------------------------------------------------------- indexOf()
// Mostra qual a posição do item na array
linguagens.indexOf('js') //0
linguagens.lastIndexOf('js') //5
linguagens.lastIndexOf('ruby') //-1 (não existe)

//--------------------------------------------------------- join()
// Junta a array e separa com o valor pedido
linguagens.join('') //jscsspythonnodehtmljssass
linguagens.join(' ') //js css python node html js sass
linguagens.join(' -|- ') //js -|- css -|- python -|- node -|- html -|- js -|- sass

let htmlString = '<h2>Titulo Principal</h2>'
htmlString = htmlString.split('h2').join('a')

//--------------------------------------------------------- slice(após o, antes do)
// Clona array - slice()
const cloneLinguagens = linguagens.slice(1,3) //['css','python']

