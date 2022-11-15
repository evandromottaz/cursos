async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json");
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: "iniciante" | "avancado";
  nome: string;
  tags: string[];
}

function mostrarCursos(cursos: Curso[]) {
  document.body.innerHTML += cursos
    .map(
      ({ nivel, nome }) => `
    <div>
      <h1>Nível: ${nivel}</h1>
      <h2 style="color:${nivel === "iniciante" ? "blue" : "red"}">
        ${nome}
      </h2>  
    </div>`
    )
    .join("");
}
