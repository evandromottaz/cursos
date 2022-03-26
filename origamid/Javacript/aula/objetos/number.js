//---------------------------------------------isNan()
// Verifica se é not a number
Number.isNaN(5) //false

//---------------------------------------------isInteger()
//verifica se é um número inteiro
Number.isInteger(23.5) //false

//---------------------------------------------parseFloat()/parseInt()
//retorna um número decimal ou inteiro
Number.parseFloat('2222.31') //2222.31
Number.parseInt(23.2) //23

//---------------------------------------------toFixed()
//arrendonda o número com base nas casas decimais
let preco = 2.99;
preco.toFixed(); //3

const preco2 = 10.2323;
preco.toFixed(1) //10.2 

//---------------------------------------------toLocaleString(lang, options)
//transforma um número em moeda
let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style:'currency',currency:'BRL'}) // R$ 48,49

//---------------------------------------------Math
//traz valores matemáticos prontos

//-----------abs transforma o valor em positivo
Math.abs(3 - 7) //4

//-----------ceil arredonda pra cima
Math.ceil(4.1) //5

//-----------floor arredonda pra baixo
Math.floor(4.9) //4

//-----------round arredonda de acordo com o valor decimal
Math.floor(4.3) //4
Math.floor(4.6) //5

//-----------max mostra o valor máximo
Math.max(30,2,8,7) //30

//-----------min mostra o valor mínimo
Math.min(30,2,8,7) //2

//-----------random retorna um valor aleatório
let aleatorio = Math.random() * 10 //0,.. a 10
aleatorio = Math.floor(Math.random() * 50) //0 a 50

//retorna um número aleatóro mínimo
// Math.floor(Math.random() * (max - min +1)) + min;
aleatorio = Math.floor(Math.random() * (40 - 20 +1)) + 20;
console.log(aleatorio)

