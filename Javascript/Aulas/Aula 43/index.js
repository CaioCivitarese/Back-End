/*
    Escreva uma fução que recebe um numero e 
    retorna o sigunte:
        Numero é divisivel por 3 = Fizz
        Numero é divisile por 5 = Buzz
        Numero é divisivel por 3 e 5 = FizzBuzz
        Numero NÃO é divisivel por 3 ou 5 = Retorna o proprio numero
        Checar se o numerio e realmente um numero
    obs:
        Use uma função com numeros de 0 a 100
*/



const eNumero = (x) => x === Number ? x : false;

function eDivisivel(x){
    

    if (x / 3 && x / 5){
        return FizzBuzz;

    }else if (x / 3){
        return Fizz;

    }else if (x / 5){
        return Buzz;

    }else{
        return x;
    }


}

console.log(eNumero(10));
console.log(eDivisivel(10));
