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

function fizzBuzz(n){
    if (typeof n !== 'number'){
        return n;
    }
    if (n % 3 === 0 && n % 5 === 0){
        return 'FizzBuzz'
    }else if(n % 3 === 0){
        return 'Fizz';
    }else if(n % 5 === 0){
        return 'Buzz'
    }else {
        return n
    }
} 

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}