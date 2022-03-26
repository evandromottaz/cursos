// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img')
const imgTop = primeiraImg.offsetTop;
// console.log(imgTop)

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img')
let soma = 0;
function somaImagens(){
  imgs.forEach(img => {
    soma += img.offsetWidth;
  })
  console.log(soma)
}

//ativar função após todo carregamento da página
window.onload = function () {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(link => {
  const linksGoogleWidth = link.offsetWidth;
  const linksGoogleHeight = link.offsetHeight;

  if(linksGoogleWidth >= 48 && linksGoogleHeight >= 48) {
  console.log('Possui boa acessibilidade');
  } else {
    console.log("Não possui acessibilidade")
  }
})


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const mobileMenu = window.matchMedia('max-width:720px').matches; // matches retorna true ou false
if(mobileMenu < 720) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}