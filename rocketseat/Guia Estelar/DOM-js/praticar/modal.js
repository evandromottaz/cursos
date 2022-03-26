const ctaJs = document.querySelector('button')
const bodyJs = document.querySelector('body')

function hideCta() {
    ctaJs.innerText = 'Tecle ESC para fechar'
    ctaJs.classList.add('invisible')
    bodyJs.style.backgroundColor = '#ccc'
}

ctaJs.onclick = hideCta

bodyJs.addEventListener('keydown', function(event) {
    if(event.key === 'Escape'){
        bodyJs.style.backgroundColor = '#fff'
        ctaJs.classList.remove('invisible')
        ctaJs.innerText = 'Abrir Janela'
    }
})


/*

Metodo professor

const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.querySelector('.cta')

buttonOpenModal.onlick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})

*/