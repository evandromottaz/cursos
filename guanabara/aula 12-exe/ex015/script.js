function verificar(){
    const nasc = document.querySelector('#idade')
    const res = document.querySelector('.res')
    const anoAtual = new Date().getFullYear()

    if(nasc.value.length == 0 || nasc > anoAtual) {
        alert('[ERRO] Ano de nascimento inválido')
    } else{
        const sexo = document.getElementsByName('gender')
        const idade = anoAtual - Number(nasc.value)
        const img = document.createElement('img')
        const frase = document.querySelector('p')
        let genero
        if(sexo[0].checked){
            genero = 'masculino'
            if(idade < 15){
                img.setAttribute('src','./img/kid-male.jpg')
            } else if(idade < 30){
                img.setAttribute('src','./img/teen-male.jpeg')
            } else if(idade < 60){
                img.setAttribute('src','./img/male.jpeg')
            } else if(idade > 60){
                img.setAttribute('src','./img/older.male.jpeg')
            }
        } else if(sexo[1].checked){
            genero = 'feminino'
            if(idade < 15){
                img.setAttribute('src','./img/kid-female.jpeg')
            } else if(idade < 30){
                img.setAttribute('src','./img/teen-female.jpeg')
            } else if(idade < 60){
                img.setAttribute('src','./img/female.jpeg')
            } else if(idade > 60){
                img.setAttribute('src','./img/older.female.jpeg')
            }
        }
        
        frase.style.textAlign = 'center'
        frase.innerText = `Você é do gênero ${genero} e tem ${idade} anos.`
        res.appendChild(img)
    }
}