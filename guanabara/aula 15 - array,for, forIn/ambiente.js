let num = [5, 8, 4, 2]
// num.push(3) //coloca o valor em último
// num.sort() //ordem crescente
// num.indexOf() //mostra a posição do valor, se não tiver retorna -1
for(let index = 0; index < num.length; index++) {
    // console.log(num[index])
}

for(let pos in num) {
    // console.log(num[pos])
}

let posicao = num.indexOf(3)
if(posicao == -1) {
    console.log(`Valor do array não encontrado`)
} else {
    console.log(`o valor está na posição ${posicao}`)

}