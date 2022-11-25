// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.

const links = document.querySelectorAll(".link");

function setColorAndBorder(link: HTMLElement, color: string, border: string) {
  link.style.color = color;
  link.style.border = "2px solid " + border;
}

links.forEach((link) => {
  if (link instanceof HTMLElement) {
    setColorAndBorder(link, "green", "purple");
  }
});
