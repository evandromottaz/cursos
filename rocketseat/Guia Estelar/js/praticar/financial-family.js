/*
    Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver desafios e avançar para o próximo
*/

/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        receitas: []
        despesas: []

    Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo
*/
let restante

function gastos(restante) {
    let entrada
    restante = [
        entrada = {
            leticia:2800,
            evandro:2300
        },
        
        saida = {
            agua:20,
            luz:120,
            comida: 900,
            outrasDespesas: 1500,
            aluguel: 720
        }
    ]

    entrada = entrada.leticia + entrada.evandro
    saida = saida.agua + saida.luz + saida.comida + saida.outrasDespesas + saida.aluguel
    restante = entrada - saida
    
    console.log(`No mês de abril o restante foi de: ' + ${restante}`)
}

// CORREÇÃO
let family = {
    incomes: [2800,2300],
    expenses: [20,120,900,1500,720]
}

function sum(array) {
    let total = 0
    //calculo de soma de array
    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    let calculateIncomes = sum(family.incomes)
    let calculateExpenses = sum(family.expenses)

    let total = calculateIncomes - calculateExpenses

    let balanceText = 'negativo'
    if(total >= 0){
        balanceText = 'positivo'
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}