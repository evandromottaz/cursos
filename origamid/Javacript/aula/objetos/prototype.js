// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomeCompleto = function(nome, sobrenome) {
    return `${this.nome} ${this.sobrenome}`
} 

const joao = new Pessoas('João', 'Silva', 23)

console.log(joao.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //underfined

console.log(li.offsetLeft.constructor.name)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String = retorna a PALAVRA 'Boolean' que é do construtor String
