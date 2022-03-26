const botao = document.querySelector('[data-calc="botao"]')
botao.addEventListener('click',calcular)

function calcular() {
    const numero = document.querySelector('[data-calc="numero"]')
    const p = document.querySelector('.txtarea p')
    p.innerText = ''
    if(numero.value.length == '') {
        alert('Erro, coloque um número!')

    } else {
        const txtarea = document.querySelector('.txtarea')
        const select = document.querySelector('select')
        select.innerText = ''
    
        let num = Number(numero.value)
        for(let x = 1; x <= 10; x++){
            const criarOption = document.createElement('option')
            select.appendChild(criarOption)
            criarOption.innerText += `${num} x ${x} = ${num * x}`
        }
    }
}


