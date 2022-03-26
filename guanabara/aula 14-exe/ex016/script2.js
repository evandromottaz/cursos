function contar() {
    const inicio = document.querySelector('[data-numero="inicio"]').value
    const final = document.querySelector('[data-numero="final"]').value
    const contador = document.querySelector('[data-numero="multiplicador"]').value
    const p = document.querySelector('section p:last-child')
    if(inicio.length === 0 || final.length === 0) {
        p.innerText = '[ERRO] Verifique se colocou valor no INICIO e FIM e tente novamente.'
    }
    else{
        p.innerHTML = ''
        let i = Number(inicio)
        let f = Number(final)
        if(contador.length <= 0) {
            p.innerHTML = 'Valor do passo não inserido<br>'
            let passo = 1
            
            console.log(i, f, passo)
            if(i < f) {
                for(let c = i; c <= f; c += passo) {
                    p.innerHTML += `${c} \u{1F449}`
                }
            } else {
                for(let c = i; c >= f; c -= passo) {
                    p.innerHTML += `${c} \u{1F449}`
                }
            }
        } else {
            let passo = Number(contador)

            console.log(i, f, passo)
            if(i < f) {
                for(let c = i; c <= f; c += passo) {
                    p.innerHTML += `${c} \u{1F449}`
                }
            } else {
                for(let c = i; c >= f; c -= passo) {
                    p.innerHTML += `${c} \u{1F449}`
                }
            }
        }
        p.innerHTML += ` \u{1F3C1}`
    }
}