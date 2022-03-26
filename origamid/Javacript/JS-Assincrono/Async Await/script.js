async function puxarDados() {
  
  const responseDados = await fetch('./dados.json')
  const responseClientes = await fetch('./clientes.json')
  
  // a promise está ocorrendo ao mesmo tempo
  const jsonDados = await (await responseDados).json()
  const jsonClientes = await (await responseClientes).json()
}

puxarDados()