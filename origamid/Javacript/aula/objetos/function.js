//---------------------------------------------call()
// Serve para passar parâmetros para uma função direto
// utilizar métodos de array em nodeList
function descricaoCarro(velocidade) {
    console.log(this.marca + ' ' + this.ano + ' ' + velocidade+'km')
}
descricaoCarro.call({marca:'Honda', ano:2015}, 100)


const li = document.querySelectorAll('li')
const filtro = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains('ativo')
})

console.log(filtro)

//---------------------------------------------apply()
// A mesma coisa do call só que ele consegue pegar um array

const numeros = [1, 2,6, 22, 10, 40, 50];

Math.max.call(null, numeros) //NaN
console.log(Math.max.apply(null, numeros));

//---------------------------------------------bind()
// Cria uma estrutura de função não executada
const $ = document.querySelectorAll.bind(document);
$('li'); //retorna li

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20))

function imc(altura, peso) {
    return peso / (altura + altura);
}

// deixando altura fixa a 1.80
const imc180 = imc.bind(null, 1.80);

// passando argumento apenas do peso
imc(70); //