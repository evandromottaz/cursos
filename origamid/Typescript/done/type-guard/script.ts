// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

interface TypeCurso {
  nome: string;
  horas: number;
  tags: string[];
}

function isCurso(value: unknown): value is TypeCurso {
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true;
  } else {
    return false;
  }
}

async function fetchCurso() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const json = await response.json();

  handleCursos(json);
}

fetchCurso();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    data.filter(isCurso).forEach((curso) => {
      if (
        typeof curso.horas === "number" &&
        typeof curso.nome === "string" &&
        curso.tags instanceof Array
      ) {
        document.body.innerHTML += `
            <h1>Curso: ${curso.nome}</h1>
            <h2>Quantidade de horas: ${curso.horas}</h2>
            <ul>Tags: ${curso.tags.join(", ")}</ul>
            <br /><br />
          `;
      }
    });
  }
}
