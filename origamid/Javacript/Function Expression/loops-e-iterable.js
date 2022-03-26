const frase = 'Isso é JavaScript'

for(const char of frase) {
    console.log(char)
    const p = document.createElement('p')
}

const carro = {
    marca: 'Honda',
    ano: 2019
}

for(const info in carro) {
    console.log(info, carro[info]) //marca Honda - ano 2019
}

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lis = document.querySelectorAll('li')
for(const li of lis) {
    li.classList.add('classeLi')
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(propriedade in window) {
    console.log(propriedade,window[propriedade])
}