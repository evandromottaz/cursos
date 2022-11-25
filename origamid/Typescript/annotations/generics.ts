// Define que o retorno será um HTMLAnchorElement
const link = document.querySelector<HTMLAnchorElement>(".link");
link?.href;

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string;
}

async function handleData() {
  const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json");
  console.log(notebook.nome);
}
