function contar() {
    let inicio = Number(document.querySelector('[data-numero="inicio"]').value)
    let final = Number(document.querySelector('[data-numero="final"]').value)
    let multiplicador = Number(document.querySelector('[data-numero="multiplicador"]').value)

    const span = document.querySelector('span')
    if(inicio === 0 || final === 0) {
        span.innerText = '[ERRO] Verifique se colocou valor no INICIO e FIM e tente novamente.'
    }
    else {
        
        if(multiplicador == 0) {
            while(inicio <= final){
                const criarSpan = document.createElement('span')
                criarSpan.innerText = `${inicio} 👉`
                span.appendChild(criarSpan)
                inicio++
            }
            const criarSpan = document.createElement('span')
            criarSpan.innerText = `🏁`
            span.appendChild(criarSpan)
        }

        else {
            while(inicio <= final){
                const criarSpan = document.createElement('span')
                criarSpan.innerText = `${inicio} 👉`
                span.appendChild(criarSpan)
                inicio = inicio + multiplicador
            }
            const criarSpan = document.createElement('span')
            span.appendChild(criarSpan)
            criarSpan.innerText = `🏁`
        }
    }
}