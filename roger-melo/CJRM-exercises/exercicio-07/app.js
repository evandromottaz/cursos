/*
  01

  - Inverta o valor dos booleans do console.log() abaixo;
  - O resultado exibido no console deve ser: false true.
*/

console.log(!true, !false)

/*
  02

  - Abaixo do array "animals", verifique se o animal "leão" **não** existe no  
    array. Se não existir, exiba no console a mensagem "Leão não existe no array  
    animals.";
  - Se existir, exiba no console a mensagem "Existe um leão no array animals.".
*/

const animals = ['macaco', 'tucano', 'elefante', 'pavão', 'hipopótamo']
const isNotLeonOnArray = !animals.includes('leão')
if (isNotLeonOnArray) {
  console.log('Leão não existe no array animals.')
} else {
  console.log('Existe um leão no array animals.')
}

/*
  03

  - Some os números do array abaixo;
  - Se durante a soma, o resultado ultrapassar 400, pare a operação e exiba  
    a frase abaixo no console, substituindo "RESULTADO_DA_SOMA" pelo valor  
    correto.
  
  "A soma ultrapassou 400. Até aqui, o valor atual é RESULTADO_DA_SOMA."
*/

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43]
let sumNumbers = 0

for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i];
  const isNumberGreaterThan400 = sumNumbers > 400
  sumNumbers += number

  if (isNumberGreaterThan400) {
    console.log(`A soma ultrapassou 400. Até aqui, o valor atual é ${sumNumbers}.`)
    break
  }
}

/*
  04

  - Concatene as strings do array abaixo, formando uma frase;
  - Se durante a concatenação a palavra "certeza" existir, ela não deve ser  
    concatenada;
  - Exiba a frase no console.
*/

const sentence = ['A', 'certeza', 'dúvida', 'é', 'o', 'princípio', 'da', 'sabedoria.']
let phraseSentence = ''

for (let i = 0; i < sentence.length; i++) {
  const word = sentence[i]
  const isNotCertezaOnArray = word !== 'certeza'

  if (isNotCertezaOnArray) {
    phraseSentence += `${word} `
  }
}

console.log(phraseSentence)

/*
  05

  - Itere sobre o array "randomValues" apenas até a 4ª string dele;
  - Exiba a string abaixo no console, mantendo a formatação de lista e inserindo  
    as informações corretas:

  "
    3 informações sobre o array randomValues:
      - As primeiras 4 strings são XX, XX, XX e XX;
      - Até que as primeiras 4 strings fossem iteradas, XX booleans foram iterados;
      - O array foi iterado por XX vezes.
  "
*/

const randomValues = [57, false, 'JS', [], true, 'HTML', 31, null, false, 'CSS', 97, true, 'Git', 11, 'sticker', false, 'GitHub', true, null]
const stringArray = []
let countBooleans = 0
let countLoop = 0


for (let i = 0; i < randomValues.length; i++) {
  const randomItem = randomValues[i]
  const isString = typeof randomItem === 'string'
  const countStringGreaterThan4 = stringArray.length >= 4
  countLoop++

  if (isString) {
    if (countStringGreaterThan4) {
      break;
    } else {
      stringArray.push(randomItem)
    }
  } else if (typeof randomItem === 'boolean') {
    countBooleans++
  } else {
    return;
  }
}

const raindomString = stringArray.join(', ').replace(', G', ' e G')
const templateHTML = `
  3 informações sobre o array randomValues:
    - As primeiras 4 strings são ${raindomString};
    - Até que as primeiras 4 strings fossem iteradas, ${countBooleans} booleans foram iterados;
    - O array foi iterado por ${countLoop} vezes.
`

console.log(templateHTML)

/*
  06

  - Descomente a constante abaixo atribua a ela algum tipo de bebida. Exemplo:  
    água, refrigerante ou suco;
  - Utilize um switch statement com cases para essas 3 possibilidades de bebida;
  - Se o tipo da bebida é água, atribua à uma variável a mensagem "Substância 
    química cujas moléculas são formadas por dois átomos de hidrogênio e um de 
    oxigênio.";
  - Se o tipo da bebida é refrigerante, a mensagem "Bebida não alcoólica e não 
    fermentada, fabricada industrialmente, à base de água mineral e açúcar." 
    deve ser armazenada;
  - Se é suco, atribua a mensagem "Bebida produzida do líquido extraído de 
    frutos.";
  - Se nenhum desses 3 tipos de bebida der match, a variável deve armazenar 
    "Bebida desconhecida.";
  - Exiba a mensagem no console. Teste também as outras possibilidades de tipo  
    da bebida além da que você escolheu.
*/

const drinkType = 'refrigerante';
const drinksRandom = ['água', 'refrigerante', 'suco']
let drinkPhrase = ''

switch (drinkType) {
  case 'água':
    drinkPhrase = 'Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.';
    break;
  case 'refrigerante':
    drinkPhrase = 'Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar';
    break;
  case 'suco':
    drinkPhrase = 'Bebida produzida do líquido extraído de frutos.'
    break;
  default:
    drinkPhrase = 'Bebida desconhecida.'
}

console.log(drinkPhrase)

/*
  07

  - Reescreva o código comentado abaixo, utilizando um switch statement;
  - Depois de escrever o switch, modifique o valor da declaração da const "a"  
    para testar o switch que você escreveu.
*/

const a = 0
const phrase = `O valor de "a" é ${a}`

switch (a) {
  case 0:
    console.log(phrase)
    break;
  case 1:
    console.log(phrase)
    break;
  default:
    console.log('O valor de "a" é qualquer número, exceto 0 e 1')
}
