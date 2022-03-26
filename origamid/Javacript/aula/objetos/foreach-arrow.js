//Transformar elementos do HTML em Arry like
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

// console.log(titulosArray)

//Arrow Function
const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item) => {
    // console.log(item)
});

//Abreviação
// imgs1.forEach(item => console.log(item))
// ----------------

// Mostre no console cada parágrado do site
const allP = document.querySelectorAll('p')
allP.forEach(p => console.log(p))
// Mostre o texto dos parágrafos no console
allP.forEach(p => console.log(p.innerText))


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);