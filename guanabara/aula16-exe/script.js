let numeros = []
const select = document.querySelector('select')

//função para receber valor e enviar valor inserido no array
function adicionar() {
    //pega o valor depois de clicar no botão
    const num = Number(document.querySelector('#numero').value)

    if(num <= 0 || num > 100) {
        alert('Digite um número válido!')
    } else if(numeros.indexOf(num) >= 0) {
        alert('Digite outro número')
    }
     else {
        const criarOption = document.createElement('option')
        select.setAttribute('style','display:block')
        numeros.push(num) //adicionado 5
        numeros.sort()
        select.appendChild(criarOption)
        criarOption.innerText += `o valor ${numeros[numeros.indexOf(num)]} foi adicionado`
        select.setAttribute('size',numeros.length +1)
    }
    return numeros
}
// função que pega o valor da array para imprimir na tela
function validar() {

    const num = Number(document.querySelector('#numero').value)
    if(num <= 0 || num > 100) {
        alert('Digite um número válido!')
    } 
    else {
        const info = document.createElement('p')
        const txtArea = document.querySelector('.txtarea')
        txtArea.appendChild(info)
        let somaArray = Number(0)
        for(let x = 0;x < numeros.length;x++){
            somaArray += numeros[x]
        }
        info.innerHTML = 
            `Ao todo, temos ${numeros.length} números cadastrados.
            <br><br>
            O maior valor informado foi ${numeros[numeros.length -1]}.
            <br><br>
            O menor valor informado foi ${numeros[0]}.
            <br><br>
            Somando todos os valores, temos ${somaArray}.
            <br><br>
            A média dos valores digitados é ${parseInt(somaArray/numeros.length)}`
    }
    
}

/* 
    pegar os numeros
    colocar eles no array
    imprimir na tela
 */