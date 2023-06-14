//Exercicio 3

function factorial(n) {
if (n ===0 || n ===1){
    return 1;
}else{
    let fatorial = 1;
    for (let i = 2; i<= n; i++){
        fatorial *= i;
    }
    return fatorial;
    }
}

for(let i = 1; i <= 10; i++){
    console.log("fatorial de ${i}: ${factorial(i)}");
}