/*
    Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver desafios e avançar para o próximo
*/

/*
    Trannsformar notas escolares

    Crie um algoritimo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    de 90 para cima -   A
    entre 80 - 89 -     B
    entre 70 - 79 -     C
    entre 60 - 69 -     D
    menor que 60 -      F
*/

let notaFinal = 70

if(notaFinal >= 90) {
    console.log('A')
} else if(notaFinal >= 80 && notaFinal <= 89){
    console.log('B')
} else if(notaFinal >= 70 && notaFinal <= 79){
    console.log('C')
} else if(notaFinal >= 60 && notaFinal <= 69){
    console.log('D')
} else {
    console.log('F')
} 