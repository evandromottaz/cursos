// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(number: number | string) {
  if (typeof number !== "number" && typeof number !== "string") {
    throw "value deve ser um número ou uma string";
  }

  if (typeof number === "string") {
    return Number(number);
  }

  return number;
}

console.log(toNumber(1));
