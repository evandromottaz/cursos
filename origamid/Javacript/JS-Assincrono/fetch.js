// const cep = fetch('https://viacep.com.br/ws/01001000/json/');

// cep
//   .then((r) => r.json())
//   .then((body) => {
//     console.log(body);
//     const conteudo = document.querySelector('.conteudo');
//     conteudo.innerText = body;
//   });

const sobre = fetch('./sobre.html');
const div = document.createElement('div');
sobre
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    const texto = div.querySelector('p');
    document.querySelector('h1').innerText = titulo.innerText;
    document.querySelector('p').innerText = texto.innerText;
  });
