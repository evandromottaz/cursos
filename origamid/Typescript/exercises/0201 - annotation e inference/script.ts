// Conserte as funções com TypeScript
// 1
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// 2
const input = document.querySelector("input");

const total = localStorage.getItem("total");
if (input && total) {
  input.value = total;
  calcularGanho(input.value);
}

function calcularGanho(value: string) {
  const p = document.querySelector("p");
  if (p && value) {
    p.innerText = `ganho total: ${+value + 100 - +value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(input.value);
  }
}

input && input.addEventListener("keyup", totalMudou);
