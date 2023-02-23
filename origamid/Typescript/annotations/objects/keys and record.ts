interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown;
}

const artigo: Post = {
  titulo: "Como aprender HTML",
  visualizacoes: 3000,
  tags: ["Front End", "HTML"],
  autor: "André",
};

artigo.autor;
artigo.descricao;

function handlePost(post: Post) {
  document.body.innerHTML += `${post.autor}`;
}

handlePost(artigo);

// O Record define a interface de um Objeto que possui <chave, tipo>. Pode ser usado para definir a interface de um Objeto Literal genérico.

type ObjetoLiteral1 = {
  [key: string]: unknown;
};

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ("titulo" in obj) {
    console.log(obj.titulo);
  }
}

mostrarTitulo({
  titulo: "André",
});
