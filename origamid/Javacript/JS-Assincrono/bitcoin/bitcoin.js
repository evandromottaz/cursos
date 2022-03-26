const resultBitcoin = document.querySelector('.bitcoin')

function fechBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    resultBitcoin.innerText = ('O valor de compra de bitcoin é de R$ ' + btcJson.BRL.buy).replace('.',',')
  })
}

// setInterval(fechBtc(), 30000 )