const piadaResult = document.querySelector('.piadaResult')
const botao = document.querySelector('button')
function fetchPiada(event) {
  event.preventDefault()
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(piada => piadaResult.innerText = piada.value)
}

botao.addEventListener('click', fetchPiada)
