const num = document.querySelector('input#numero')
const lista = document.querySelector('select')
const res = document.querySelector('.txtarea')
let array = []

function isNumero(n) {
    //se o numero recebido for maior que 1 e menor que 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n,array) {
    /*
    se o indexOf (metodo que procura numero)
    NÃO receber -1 (não existe na lista)
    */
    if(array.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar(){
    /*
    chama as duas funções criadas acima
    Se o número for > 1 e <= 100 ou "!" NÃO está na lista
    */
    if(isNumero(num.value) && !inList(num.value,array)) {
        lista.setAttribute('style','display:block')
        array.push(Number(num.value))
        const criarOption = document.createElement('option')
        criarOption.text = `Valor ${num.value} adicionado.`
        lista.appendChild(criarOption)

    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    //limpa a seleção e deixa com o cursor focado no lugar
    num.value = ''
    num.focus()
}

function validar() {
    if(array.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let arrayLenght = array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        for(let index in array) {
            soma += array[index]
            if(array[index] > maior) {
                maior = array[index]
            }
            if(array[index] < menor) {
                menor = array[index]
            }
        }
        let media = soma / arrayLenght
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${arrayLenght} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}