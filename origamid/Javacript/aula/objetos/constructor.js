function Carro(marcaAtribuido, precoAtribuido) {
    this.marca = marcaAtribuido,
    this.preco = precoAtribuido
}

const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 3000)

function Carro2(marcaAtribuido, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa
    this.marca = marcaAtribuido;
    this.preco = precoFinal;
}

const mazda = new Carro2('Mazda, 5000')

// const Dom = {
//     seletor:'li',
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativar');
//     }
// }

// Função construtora do Dom
function Dom(seletor) {
    this.element = function() {
        return document.querySelector(this.seletor);
    },
    this.ativar = function(classe) {
        this.element().classList.add(classe);
    }
}

const li = new Dom('li');
const ul = new Dom('ul');

const LastLi = new Dom('li:last-child');

//Exercícios


// Transforme o objeto abaixo em uma Constructor Function
    function Pessoa(nomeUp, idadeUp) {
        this.nome = nomeUp;
        this.idade = idadeUp;
        this.andar = function() {
        console.log(this.nome + ' andou');
        }
    }
  
// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

    const joao = new Pessoa('João', 20);
    const maria = new Pessoa('Maria', 25);
    const bruno = new Pessoa('Bruno', 15);
  
  
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Seletor(seletor, classe, addRemove) {
    this.elSelecionado = document.querySelectorAll(seletor)
    this.addClass = this.elSelecionado.forEach(el => {
        if(addRemove == 'add') {
            el.classList.add(classe)
        } else if(addRemove == 'remove') {
            el.classList.remove(classe)
        }
    })
}

// Método do professor
function Dom2(seletor) {
    this.elSelecionado = document.querySelectorAll(seletor)
    this.addClass = function(classe) {
        this.elSelecionado.forEach(element => {
            element.classList.add(classe)
        })
    }
    this.removeClass = function(classe) {
        this.elSelecionado.forEach(element => {
            element.classList.remove(classe)
        })
    }
}
const li3 = new Dom2('li')