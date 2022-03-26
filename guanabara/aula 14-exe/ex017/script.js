const botao = document.querySelector('[data-calc="botao"]')
botao.addEventListener('click',calcular)

function calcular() {
    const lis = document.querySelectorAll('li')
    //limpar lista
    lis.forEach(li => {
        li.innerHTML = ''
    })

    let num = document.querySelector('[data-calc="numero"]').value
    if(num === '') {
        alert('Por favor, digite um número')
    } 
    
    else {
        const li = document.querySelector('.txtarea li')
        li.innerText = ''
        num = Number(num)
        for(let i = 0;i <= 10;i++) {
            const criarLi = document.createElement('li')
            const ul = document.querySelector('.txtarea ul')
            ul.appendChild(criarLi)
            criarLi.innerText = `${num} X ${i} = ${num * i}`
        }
        lis.forEach(li1 => {
            li1.addEventListener('click',() => {
                //remover background de todos os li    
                li.forEach(li => {
                    li.classList.remove('grey')
                })
                li1.classList.add('grey')
            })
        })
    }
}


