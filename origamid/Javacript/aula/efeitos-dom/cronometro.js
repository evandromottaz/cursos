// Mude a cor da tela para azul e depois para vermelho a cada 2s.

function mudarClasse() {
    document.body.classList.toggle('active');
}

// setInterval(mudarClasse, 2000)

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');

start.addEventListener('click', iniciar);
pause.addEventListener('click', pausar);
pause.addEventListener('dblclick', resetar);

let timer;
let i = 0;
const span = document.querySelector('span');



function iniciar() {
    timer = setInterval(() => {
        start.setAttribute('disabled','')
        span.innerText = i;
        i++
    },1000)
}

function pausar() {
    clearInterval(timer);
    start.removeAttribute('disabled');
}

function resetar() {
    span.innerText = 0
    i = 0;
}