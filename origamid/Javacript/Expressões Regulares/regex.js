const regex = /Eu/ //procura um "Eu"
const iRegex = /eu/i //procura um "eu", "EU", "eU", "Eu"
const gRegex = /e/g //pega todos os "e"
const giRegex = /como/gi //pega todos os "como" maiúscula e minúsculo
const ouRegex = /[cm]/gi //pega todos o "c", "m" e "cm"
const charEspecialRegex = /\./g //seleciona todos os pontos = \., \; , \[ ...
const frase = 'Eu como melão'.replace(ouRegex,'corto')

// Ex:
const junhoJulho = /ju[nl]ho/gi //junho julho

const pontoUnidade = /d{3}/
const frase2 = 'Estou em junho mas queria estar em julho'

const numero = 123123
const numeroLimpo = 

console.log(frase)