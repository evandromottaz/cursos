let idade = 15

if(idade < 16) {
    console.log('Não vota')
} else if(idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else if(idade > 18) {
    console.log('Voto obrigatorio')
}

