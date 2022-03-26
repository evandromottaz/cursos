const promesa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Evandro', idade: 30 });
    }, 1000);
  } else {
    reject(Error('Um erro aconteceu na promesa'));
  }
});

// const retorno = promesa
//   .then((resolucao) => {
//     console.log(resolucao);
//     resolucao.profissao = 'Desenvolvedor';
//     return resolucao;
//   })
//   .then(
//     (resolucao) => {
//       console.log(resolucao);
//     },
//     (rejeitada) => {
//       // pode ser o catch ou o segundo argumento do then para pegar errros
//       console.log(rejeitada);
//     },
//   )
//   .finally(() => {
//     // finally acontece independente se a promessa foi aceita ou rejeitada
//     console.log('Acabou');
//   });
// .catch((rejeitada) => {
//   console.log(rejeitada);
// })

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

// Promise.all faz um array de promessas
// Promise.race faz um array de promessas E executa apenas a primeira promessa true
const carregouTudo = Promise.race([login, dados]);
carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
