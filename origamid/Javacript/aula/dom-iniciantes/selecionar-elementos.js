// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img')

// Retorne no console apenas as imagens que começaram com a palavra imagem
let palavraImagem = document.querySelectorAll('[src^="img/imagem"]')
palavraImagem.forEach((img)=> {
        console.log(img)
})

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')

// Selecione o primeiro h2 dentro de .animais-descricao
const animais = document.querySelector('.animais-descricao')
const primeiroH2 = animais.querySelector('h2')
console.log(primeiroH2)

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p')
console.log(ultimoP[ultimoP.length - 1])