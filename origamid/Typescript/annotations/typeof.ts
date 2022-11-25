function coordenadas(x: number, y: number) {
  return { x, y };
}

let coord: typeof coordenadas;
coord = (x: number, y: number) => {
  return { x, y };
};
