function comparar(tipo: "maior" | "menor", ...numeros: number[]) {
  if (tipo === "maior") {
    return Math.max(...numeros);
  }
  if (tipo === "menor") {
    return Math.min(...numeros);
  }
}

console.log(comparar("maior", 3, 2, 4, 30, 5, 6, 20));
console.log(comparar("menor", 3, 2, 4, 1, 5, 6, 20));
