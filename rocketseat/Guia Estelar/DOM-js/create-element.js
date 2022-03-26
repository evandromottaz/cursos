// Criando e adicionando elementos

//createElement
const div = document.createElement('div')
div.innerText = 'Olá Devs div'

// append prepend - adicionar alemento
const body = document.querySelector('body')
body.append(div) //adiciona depois de todos os elementos
body.prepend(div) //adiciona antes de todos os elementos

// ----

//insert Before - adicionar antes
const script = body.querySelector('input')
body.insertBefore(div, script)

//insert After
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling) //adiciona abaixo do header