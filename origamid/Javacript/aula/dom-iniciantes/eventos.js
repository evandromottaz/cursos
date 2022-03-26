// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');
// const linksInternos2 = document.getElementsByTagName('a');

function handleClick(event) {
    event.preventDefault();

    linksInternos.forEach(link => {
        link.classList.remove('ativo')
    })

    this.classList.add('ativo');
}

linksInternos.forEach(link => {
    link.addEventListener('click', handleClick)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body2 = document.querySelector('body')

function mostreElemento(event) {
    console.log(event.target);
}

body2.addEventListener('click', mostreElemento)
// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function deleteElemento(event) {
    // event.target.remove()
}

body2.addEventListener('click', deleteElemento)

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function keyT(event) {
    if(event.key == 't') {
        document.documentElement.setAttribute('style', 'font-size:200%')
    } else {
        document.documentElement.removeAttribute('style')
    }
}

body2.addEventListener('keypress', keyT)