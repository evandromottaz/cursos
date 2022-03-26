const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')

const handleStyle = {
    element:btn,
    texto(value) {
        this.element.innerText = value

    },
    color(value) {
        this.element.style.color = value
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    height(value){
        this.element.style.height = value + 'px'
    },

    width(value){
        this.element.style.width = value + 'px'
    },

    border(value){
        this.element.style.border = value
    },
    
    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },

    fontFamily(value){
        this.element.style.fontFamily = value
    },

    fontSize(value){
        this.element.style.fontSize = value + 'rem'
    },
}

controles.addEventListener('change', handleChange)

function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    //objeto handleStyle.name(name) = não é possível acessar assim
    handleStyle[name](value)
    saveValues(name, value)
    showCss()
}

function saveValues(name, value) {
    localStorage[name] = value
}

function setValues() {
    const properties = Object.keys(localStorage)
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie])
        //dar um loop por cada propriedade e aplicar o valor do localstorage que está dentro do formulário
        controles.elements[propertie].value = localStorage[propertie]
    })
    showCss()

}
setValues()

function showCss() {
    cssText.innerHTML ='<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}



