const buscar = document.querySelector('button');

function buscarCEP(event) {
  event.preventDefault();
  const textCep = document.querySelector('#cep-text').value;
  const resultado = document.querySelector('.resultado');

  fetch(`https://viacep.com.br/ws/${textCep}/json/`)
    .then(response => response.json())
    .then(cep => resultado.innerHTML = `${cep.localidade} <br> ${cep.bairro} <br> ${cep.logradouro}`)
}

buscar.addEventListener('click', buscarCEP);