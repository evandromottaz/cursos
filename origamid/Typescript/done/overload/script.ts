// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function round(value: string): string;
function round(value: number): number;
function round(value: number | string) {
  if (typeof value === "string") {
    return Math.ceil(Number(value)).toString();
  }
  return Math.ceil(Number(value));
}

console.log(round(2.543));
console.log(round("4.786"));
