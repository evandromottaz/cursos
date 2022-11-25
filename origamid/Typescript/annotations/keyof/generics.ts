async function fetchData<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json";
  const response = await fetch(base + url);
  return await response.json();
}

interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

async function handleData() {
  const jogo = await fetchData("/jogo.json");
  if (checkInterface<Jogo>(jogo, "desenvolvedora")) {
    console.log(jogo.desenvolvedora);
  }

  const livro = await fetchData("/livro.json");
  if (checkInterface<Livro>(livro, "autor")) {
    console.log(livro.autor);
  }
}

handleData();

function checkInterface<Interface>(
  obj: unknown,
  ...keys: Array<keyof Interface>
): obj is Interface {
  if (
    obj &&
    typeof obj === "object" &&
    keys.filter((key) => key in obj).length === keys.length
  ) {
    return true;
  } else {
    return false;
  }
}

function checkInterfaceSimples<Interface>(
  obj: unknown,
  key: keyof Interface
): obj is Interface {
  if (obj && typeof obj === "object" && key in obj) {
    return true;
  } else {
    return false;
  }
}
