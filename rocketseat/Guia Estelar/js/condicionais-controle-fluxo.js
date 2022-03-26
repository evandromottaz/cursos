// "if" e "else"

let temperature = 39.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudavel')
}

// switch
function calculate(number1, operator, number2){
    let resultado

    switch(operator) {
        case '+':
            resultado = number1 + number2
            break
        case '-':
            resultado = number1 - number2
            break
        case '/':
            resultado = number1 / number2
            break
        case '*':
            resultado = number1 * number2
            break

        default:
        console.log('não implementado')
            break
    }

    return resultado
}

console.log(calculate(2,'+',3))


//throw
function sayMyName(name = '') {
    if (name ==='') {
        throw 'Nome necessário'
    }

    console.log('depois do erro')
}


//try... catch - ele pega o erro e mostra na tela
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após o try/catch')