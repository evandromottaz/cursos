// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
  name: 'Evandro',
  surname: 'Motta',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nameComplete = `${dadosPessoais.name} ${dadosPessoais.surname}`

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  race: 'labrador',
  color: 'preto',
  age: '10 anos',
  latido(pessoa) {
    
    if(latido.pessoa.toString() === 'homem') {
      return 'latindo'
    } else {
      return pessoa
    }
  }
}

// nomeie 3 propriedades ou métodos de strings
let propriedades = {
  nome: 'Evandro',
  idade: 30,
  peso: 20,
  transformaString() {
    return this.peso.toString();
  }
}




// nomeie 5 propriedades ou métodos de elementos do DOM

let pop = document.querySelector('#pop');
let push = document.querySelector('#push');
let lenght = document.querySelector('#lenght');
let btn = document.querySelector('button');
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copyText() {
  let copiedText = document.getElementById("input");
  console.log(copiedText.select())
  console.log(("Origamid: " + copiedText.value))
}