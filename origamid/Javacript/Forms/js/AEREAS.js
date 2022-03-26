const urls = document.querySelectorAll("[data-fieldname='link_do_botao'] input")

urls.forEach(url => {
    url.value = 'link aqui'
})