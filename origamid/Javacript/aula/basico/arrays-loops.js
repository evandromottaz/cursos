var videoGames = ['Switch', 'PS4', 'XBOX', '3DS'];

function Four() {
    for(var item = 0; item < videoGames.length; item++) {
        console.log(videoGames[item]);
        if(videoGames[item] === 'XBOX') {
            break;
        }
    }
}

function Frutas() {
    var frutas = ['banana', 'uva', 'laranja', 'maracujá', 'pera'];
    frutas.forEach(function(fruta) {
        frutas.pop();
        console.log(fruta)
    })
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let Brasil = [1959, 1962, 1970, 1994, 2002];
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
Brasil.forEach(ano => {console.log(`O Brasil ganhou a copa de ${ano}`)})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if(frutas[i] === "Pera") {
        break;
    }
}
    

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1] // 5 frutas - 1 (posição do array) = posição 4
console.log(ultimaFruta)