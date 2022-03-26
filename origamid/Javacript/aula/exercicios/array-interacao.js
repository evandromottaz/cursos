// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const cursosFrom = Array.from(cursos);

const cursosArray = cursosFrom.map((item,index,array) => {
    const desc = item.querySelector('p')
    const aulas = item.querySelector('.aulas')
    const horas = item.querySelector('.horas')

    array[index] = [
        {
            descricao:desc,
            aula:aulas,
            hora:horas,
        }
    ]

    return array[index]
})

// Método professor
const objetosCurso = cursosFrom.map((curso) => {
    const desc = curso.querySelector('p').innerText
    const aulas = curso.querySelector('.aulas').innerText
    const horas = curso.querySelector('.horas').innerText

    return {
            titulo,
            descricao:desc,
            aulas,
            horas,
        }
})

console.log(cursosArray)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maior100 = numeros.filter(n => n > 100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some(item => item === 'Baixo')

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acc,valor) => {
    valor = +valor.preco.replace('R$ ','').replace(',','.');
    return acc + valor
},0)