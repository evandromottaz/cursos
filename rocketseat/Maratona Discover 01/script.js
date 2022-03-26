// const Modal = {
//     open() {
//         document
//             .querySelector('.modal-overlay')
//             .classList
//             .add('active')
//     },
//     close() {
//         document
//             .querySelector('.modal-overlay')
//             .classList
//             .remove('active')
//     }
// }

const Modal = {
    OpenClose() {
        document.querySelector('.modal-overlay').classList.toggle('active')
        
    },
    Save() {

    }
}
    
//operaações de soma, dividir..
const Transaction = {
    all: [
        {
    
            description: 'Luz',
            amount: -50000,
            date:'23/01/2021',
        },
        {
    
            description: 'Website',
            amount: 500000,
            date:'21/01/2021',
        },
        {
            description: 'Internet',
            amount: -20000,
            date:'15/01/2021',
        }
    ],

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },
    remove(index){
        //splice serve para remover uma linha do array, "1" indica quantos array serão removidos
        Transaction.all.splice(index, 1)

        App.reload()
    },
    //somar entradas
    incomes() {
        let income = 0;
        // pegar todas as transações
        // para cada transação,
        Transaction.all.forEach(transaction => {
            // se for maior que zero
            if(transaction.amount > 0){
                // somar a uma variável e retornar a variável
                income += transaction.amount
            }
        })
        return income
    },
    //somar saúdas
    expenses() {
        let expense = 0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount < 0){
                expense += transaction.amount
            }
        })
        return expense

    },
    //somar total
    total() {
        return Transaction.incomes() + Transaction.expenses()
    }
}

//Substituir os dados do HTML com os dados do JS
const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    //transactionArray - qual array?
    //index - qual local?

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        //appenChild pegar filhos
        DOM.transactionsContainer.appendChild(tr)

    },
    innerHTMLTransaction(transaction) {

        //qual classe ele vai pegar? Se for maior que zero "incomes" senão "expense"
        const CSSclass = transaction.amount > 0 ? "incomes" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td>${transaction.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover transação"></td>  
        `

        //para usar elementos da função é preciso usar o return
        return html
    },
    updateBalance() {
        document
        .getElementById('incomeDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.incomes())

        document
        .getElementById('expenseDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.expenses())

        document
        .getElementById('totalDisplay')
        .innerHTML = Utils.formatCurrency(Transaction.total())
    },
    clearTransactions(){
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    //limpar valores de caracteres
    formatAmount(value) {
        value = Number(value.replace(/\,\./g, "")) * 100
        return value
    },

    formatDate(date){
        const splittedDate = date.split("-") //split separa os dados pelo "-"
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
        console.log(date)
    },

    //colocar números em formato de moeda
    formatCurrency(value){
        const signal = Number(value) < 0 ? "- " : ""

        /*
            replace /\D/ -expressão regular
            \D - ache apenas números
            "g" - pesquisa global
        */

        value = String(value).replace(/\D/g,'')

        value = Number(value) / 100

        //transformar para moeda real
        value = value.toLocaleString("pt-BR", {
            style:'currency',
            currency: "BRL"
        })

        return (signal + value)
    }
}

// pegando o array transactions e contando os elementos

const Form = {
    description:document.querySelector('input#description'),

    amount:document.querySelector('input#amount'),

    date:document.querySelector('input#date'),

    validateFields() {
        const { description, amount, date } = Form.getValues()

        //trim limpa espaços vazios da String
        if(description.trim() === "" || amount.trim() === "" || date.trim() === "") {
            throw new Error("Preencha todos os campos")
        }

    },

    getValues() {
        return {
            description:Form.description.value,
            amount:Form.amount.value,
            date: Form.date.value
        }
    },

    formatValues() {
        let { description, amount, date } = Form.getValues()

        amount = Utils.formatAmount(amount)

        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date
        }
    },

    clearFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    submit(event) {
        //não deixar o navegador atualizar a página
        event.preventDefault()

        try {
            //veririfar se todas as infos foram preenchidas
            Form.validateFields()
            
            //formatar os dados para salvar
            const transaction = Form.formatValues()

            //Salvar
            Transaction.add(transaction)

            //apagar os dados do formulário
            Form.clearFields()

            //modal feche
            Modal.OpenClose()

        } catch (error){
            alert(error.message)
        }
        
    }
}

const App = {
    init(){
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })

        DOM.updateBalance()

    },
    reload(){
        DOM.clearTransactions()
        App.init()

    },
}

App.init()


