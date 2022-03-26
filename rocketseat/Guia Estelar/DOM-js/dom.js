                    // Manipular conteudo

//textContent
const textChange = document.querySelector('h1')
textChange.textContent = 'Olá Devs' // Meu Blog -> Olá Devs
textChange.textContent += ' Olá Devs com concatenar' // Meu Blog Olá Devs

// ----

//innerText
const textChange2 = document.querySelector('h1')
textChange2.innerText = 'Olá Devs com innerText'

//innerHTML
const textChange3 = document.querySelector('h1')
textChange3.innerHTML = 'Olá Devs <b>com innerHTML</b>'

// ----

//value
const valueChange = document.querySelector('input')
valueChange.value = 'Valor que eu quiser'

// ----

//atributos
const atributosHeader = document.querySelector('header')
atributosHeader.setAttribute('id', 'header') //adicioando o atributo "id" a tag header
atributosHeader.setAttribute('class', 'jsNa veia') //adicionar nome da classe no atributo classe

const headerId = document.querySelector('#header')
headerId.getAttribute('class') //pegando o nome da classe no atributo do id=header
atributosHeader.removeAttribute('id') //removendo atributo

// ----

//alterar estilos
const alterBody = document.querySelector('body')
alterBody.style.backgroundColor = '#ff7020' //troca cor do fundo

//classList
const alterClassBody = document.querySelector('body')
alterClassBody.classList.add('active') //adiciona classe
alterClassBody.classList.remove('active') //remove classe
alterClassBody.classList.toggle('active') //se tiver a classe 'active' ele tira, se não, adiciona