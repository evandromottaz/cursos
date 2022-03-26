function saudacoes(){
    const
        txt = document.querySelector('.txt'),
        img = document.querySelector('.img'),
        bg = document.querySelector('body')
    const data = new Date()
    const hora = data.getHours();

    if(hora < 12) {
        txt.innerText = 'Bom dia'
        img.src = 'manha.jpeg'
        bg.style.background = '#f5cdb1'
    } else if(hora >= 12 && hora < 18) {
        txt.innerText = 'Boa tarde'
        img.src = 'tarde.jpeg'
        bg.style.background = '#fe7301'
    } else {
        txt.innerText = 'Boa noite'
        img.src = 'noite.jpeg'
        bg.style.background = '#1b4e77'
    }
}