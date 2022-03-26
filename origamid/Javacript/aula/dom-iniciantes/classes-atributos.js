// Adicione a classe ativo a todos os itens do menu
const elMenu = document.querySelectorAll('.menu a')
elMenu.forEach(item => {
  item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
elMenu.forEach(item => {
  item.classList.remove('ativo');

  const animais = document.querySelector('.menu a');
  animais.classList.add('ativo')

  //R. professor:
  elMenu[0].classList.add('ativo')

})

// Verifique se as imagens possuem o atributo alt
const imgsPossue = document.querySelectorAll('img')
imgsPossue.forEach(img => {
  if(img.hasAttribute('alt')){
    console.log(img)
  };

  //R. professor:
  console.log(img, img.hasAttribute('alt'))
})


// Modifique o href do link externo no menu
const href = document.querySelector('[href^="https://www.origamid"]')
href.setAttribute('href','https://www.cantacom.com')

//R. professor:
document.querySelector('a[href^="http"]');