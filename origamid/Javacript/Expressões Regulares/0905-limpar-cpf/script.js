const cpfsList = document.querySelectorAll('.cpf li') //nodelist

const elementsInnertext = ([...elements]) => { //transformando nodelist em array
  return elements.map(element => element.innerText) //pegando o texto do array
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g,'') //retirando tudo que não for número e substituindo por nada.
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4') //colocar refência de captura nesta ordem
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF) //map => cpf retorna limparCPF(cpf) e construirCPF(cpf) <- shorthand map()
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnertext(cpfsElements)
  const cpfsFormatados = formatarCPFS(cpfs)

  cpfsElements.forEach((element, index)  => {
    element.innerText = cpfsFormatados[index]
  })
  console.log(cpfsFormatados)
}

//const resultado = elementsInnertext(cpfsList) //const do texto do array criado

substituirCPFS(cpfsList)