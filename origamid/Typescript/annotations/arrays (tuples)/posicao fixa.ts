const produto1: (string | number)[] = ["Notebook", 2500];
const produto2: [string, number] = ["Notebook", 2500];

const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string

const [nome, preco] = produto2;
