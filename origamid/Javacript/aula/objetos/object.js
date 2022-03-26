//---------------------------------------------Object.create(obj, definaPropriedades)
// retorna um novo objeto como protótipo
let carro = {
    init(valor) {
        this.marca = valor;
        return this;
    },
    rodas:4,
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou'
    }
}

const honda = Object.create(carro);
honda.init('Honda');

//---------------------------------------------Object.assing()
// Adiciona ao alvo as propriedades e métodos dos demais objetos (subscreve as propriedades iguais)
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    capacete:true,
}

Object.assign(moto, funcaoAutomovel)

//---------------------------------------------Object.defineProperties()
// Cria uma propriedade de objeto que não pode ser alterada

Object.defineProperties(moto, {
    rodas: {
        value:2,
        configurable: false, //não pode ser deletado ou mudar valor - default é false
        writable: true, //pode ser subscrito - default é false
        get() { //muda o valor do método this.rodas
            return this.rodas
        },
        set(valor) { //muda o valor do resultado depois do valor this.rodas = "2" -> valor
            this._rodas = valor * 4 + ' Total rodas';
        },
    }
})

//---------------------------------------------Object.getOwnPropertyDescriptors(obj)/.getOwnPropertyDescriptors(obj, 'innerHeight')
// Serve para saber as propriedades e métodos do objeto no console.log

//---------------------------------------------Object.keys/.values/.entries
// Object.keys() - Mostra as chaves que podem ser numeradas do objeto "Object.keys(moto)" -> "capacete"
// Object.values() - Mostra os valores que podem ser numeradas do objeto "Object.values(moto)" -> "true"
// Object.entries() - Mostra uma array com todas as propriedades e métodos que podem ser numeradas

//---------------------------------------------Object.getOwnPropertyNames
// Mostra uma array com todas as propriedades e métodos independente se podem ou não ser numeradas

//---------------------------------------------Object.getPrototypeOf/.is
// Object.getPrototypeOf() - Mostra qual o protótipo do objeto
// Object.is() - Verifica se são os mesmos objetos

//---------------------------------------------Object.freeze/.seal/.preventExtensions
// Object.freeze() - impede qualquer mudança nas propriedades. -> .isFrozen(verificação)
// Object.seal() - impede adição de novas propriedades, impede que as atuais sejam deletadas mas pode modificar  -> .isSealed(verificação)
// Object.preventExtensions() - impede adição de novas propriedades, pode deletar antigas -> .isExtensible
carro = {
    marca: 'Ford',
    ano: 2018,
}

// Object.freeze(carro) -> .isFrozen //true
// Object.seal(carro) -> .isSealed //true
// Object.seal(carro) -> .isExtensible //false

carro.portas = 4;
carro.marca = 'Honda' //'Ford'

//--------------------------------------------- .constructor
// Retorna a função construtora
const frutas = ['Banana', 'Maçã', 'Laranja']
frutas.constructor; //Array

const frase = 'Isso é uma String'
frase.constructor; //String

//--------------------------------------------- .hasOwnProperty('propriedade')/.propertyIsEnumerable('propriedade')
// .hasOwnProperty('prop') - mostra qual a propriedade do objeto é de fato dele
frutas.hasOwnProperty('map') //false -> .map é de Array.prototype
frutas.propertyIsEnumerable('lenght') //false -> lenght não é enumerada

//--------------------------------------------- .isPrototypeOf(valor)
// Verifica se o objeto faz parte do protótipo
Array.prototype.isPrototypeOf(frutas) //true
String.prototype.isPrototypeOf('frutas') //true

//--------------------------------------------- .toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).
frutas = ['Banana', 'Uva'];
frutas.toString(); // 'Banana,Uva'
typeof frutas; // object
Object.prototype.toString.call(frutas); //[object Array]

frase = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase; // string
Object.prototype.toString.call(frase); //[object String]

carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
