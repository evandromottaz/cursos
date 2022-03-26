// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

let transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  let taxaTotal = 0;
  let recebimentoTotal = 0;

  transacoes.forEach(item => {
    //"+" transforma a string em número
    const numeroLimpo = +item.valor.replace('R$','');
    if(item.descricao.slice(0, 4) === 'Taxa') {
      taxaTotal += numeroLimpo
    } else {
      recebimentoTotal += numeroLimpo
    }
  })
    console.log(taxaTotal)
    console.log(recebimentoTotal)


  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  console.log(transportes.split(';'))
  
  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;
  
  // const htmlA = html.replace(/['span']+/g,'a')

  //Corta onde está o 'span' criando uma array e adicionando o 'a'
  html = html.split('span').join('a')
  console.log(html)

  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  
  const ultimoChar = frase[frase.length -1];
  console.log(ultimoChar)

  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  let taxasTotal = 0;

  transacoes2.forEach((item) => {
    //remove espaços(trim) e pega os 4 primeiros caracteres (slice (0,4))
    item = item.toLowerCase().trim().slice(0, 4);
    if(item === 'taxa') {
      taxasTotal++
    }
  })

  console.log(taxasTotal)
  