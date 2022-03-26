class Button {
  constructor(text, background,color) {
    this.text = text;
    this.background = background;
    this.color = color
  }

  element() {
    const botaoCriado = document.createElement('button')
    botaoCriado.innerText = this.text;
    botaoCriado.style.background = this.background
    botaoCriado.style.color = this.color

    return botaoCriado
  }

  static criarBotao(text) {
    const botao = new Button(text,'red','white')
    return botao
  }
}

const botaozao = Button.criarBotao('é isso')
