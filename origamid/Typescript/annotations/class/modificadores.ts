class Produto {
  // public: é o padrão de qualquer uma
  // private: só pode ser acessada dentro da classe
  private tipo = "produto";
  // protected: só pode ser acessada dentro da classe e subclasses
  protected preco: number;
  // readonly: só permite leitura
  readonly nome: string;
  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.tipo;
    this.preco = preco;
  }
  getTipo() {
    return this.tipo;
  }
  getPreco() {
    return Produto.transformarPreco(this.preco);
  }
  // [javascript] static: não fará parte do Objeto criado
  // e sim da função construtora (classe)
  static transformarPreco(preco: number) {
    return `R$ ${preco}`;
  }
}

const livro = new Produto("O Senhor dos Aneis", 200);
