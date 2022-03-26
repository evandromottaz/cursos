/*
    Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver desafios e avançar para o próximo
*/

/*
    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

// function transform() {
//     let degree = '20f'

//     switch(degree){
//         case degree.includes('c'):
//             degree = degree.Number()
//             break;

//         case degree.includes('f'):
//             degree = degree.Number()
//             break;
//     }

//     return degree
// }

// CORREÇÃO

//transformDegree('50F')
function transformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    // fluxo de erro - se celsius e farenheit não tiver nem 'C' nem 'F'
    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau não identificado')
    }

                        // fluxo ideal, F -> C - Number função que transforma String em número
    let updateDegree = Number(degree.toUpperCase().replace('F',''))

    //formula é uma arrow function
    let formula = (farenheit) => (farenheit - 32) * 5/9

    //inserindop 'C' ao número
    let depreeSign = 'C'

                        // fluxo alternativo C -> F
    if(celsiusExist) {
        updateDegree = Number(degree.toUpperCase().replace('C',''))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
    }
    
    return formula(updateDegree) + depreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))
} catch (error) {
    console.log(error.message)
}