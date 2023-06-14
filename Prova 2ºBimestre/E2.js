//Exercicio 2

function VS(senha){
    if(senha.length < 8){
        return "A senha deve ter pelo menos 8 digitos"
    }

    if(! /[A-Z]/.test(senha)){
        return "A senha deve conter pelo menos uma letra maiuscula"
    }

    if(! /[a-z]/.test(senha)){
        return "A senha deve conter pelo menos uma letra minuscula"
    }
    if(! /[0-9]/.test(senha)){
        return "A senha deve conter pelo menos um numero"
    }

    return "A senha é valida"
}