// Eventos
// interage com o atributo "onmouseover" do html rodando a função
function print() {
    console.log('print')    
}

// ----

//executa a função a partir do usuário teclar
const input = document.querySelector('input')
input.onkeydown = function() {
    console.log('rodei')
}

// ----

//executa a função "print" quando o evento "click" acontecer
const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

// ----

//argumento event
input.onkeypress = function(event) {
    //pegando cada letra digitada uma por uma
    console.log(event.key)

    //pegando todas as letras digitadas
    console.log(event.currentTarget.value)
}