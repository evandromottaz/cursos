// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');
const arrayFrom = Array.from(paragrafos)

const somaChar = arrayFrom.reduce((acumulador, p) => {
    p = p.innerText.length;
    return acumulador + p;
}, 0)

//Metodo professor
const arrayReduce = Array.prototype.reduce.call(paragrafos, (acc,p) => {
    p = p.innerText.length;
    return acc + p;
},0)
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function html(tag, classe, conteudo) {
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    conteudo ? element.innerHTML = conteudo : null;
    return element;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1ClassTitulo = html.bind(null, 'h1','titulo')
console.log(h1ClassTitulo('e ta funcionando acredita?'));
h1ClassTitulo('funcionaaaa');