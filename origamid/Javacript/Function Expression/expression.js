const somar = (a,b) => {
    return a + b
} 

console.log(somar(4,5))

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function(){
    const oi = 'código isolado'
    console.log(oi)
})()

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
