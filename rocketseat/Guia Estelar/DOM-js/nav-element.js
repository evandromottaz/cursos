                    // Navegando pelos elementos

//parentNode parent Element - Elementos pais
const body = document.querySelector('body')
body.parentElement // qual o pai(nó) do body

// ----

//childNodes childres - Elementos filhos
const elementChild = document.querySelector('body')

//firstChild firstElementChild
elementChild.firstChild // o primeiro filho

//lastChild lastElementChild
elementChild.lastChild // o último filho

// ----

//nextSibiling nextElementSibling
const elementSibling = document.querySelector('body script')
elementSibling.nextElementSibling //pegando irmão sucessor

//previousSibling previusElementSibling
elementSibling.previousElementSibling //pegando irmão antecessor

