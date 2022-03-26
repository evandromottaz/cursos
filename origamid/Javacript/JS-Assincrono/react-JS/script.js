// muda a URL dá pagina index.html
window.history.pushState(null, null, 'sobre.html')

window.addEventListener('popstate', () => {
  console.log('teste')
})