// Estrutura de repetição -----

// for
//break para parar
// continue para pular a execução

for(let i = 1; i < 10; i++) {
    if(i === 5) {
        break;
    }

    console.log(i)
}

for(let i = 1; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}

//while - quando não sabemos o momento da parada
let i = 0
while(i < 10) {
    console.log(i)

    i++;
}

//for ... of - cria um loop em uma variável tipo string

let name = 'Evandro'
let names = ['João', 'Pedro', 'Paulo']


//pegue um caracter de 'Evandro' - 
for(let name of names) {
    console.log(name)
}

// for... in
let person = {
    name: 'Jhon',
    age: 30,
    weight:88.6
}

// property é um objeto
for(let property in person) {
    console.log(property)
}
