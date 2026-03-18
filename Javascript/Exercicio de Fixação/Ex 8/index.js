/*
   Crie uma função que receba um número e retorne se ele é positivo, negativo ou zero.
*/

function ePositivoNegativoOuZero(n){
    if (n === 0){
        return 'O numero e o zero';

    }else if(n > 0){
        return 'O numero e positivo';
    
    }else if(n < 0){
        return 'O numero e negativo';
    }
}

console.log(ePositivoNegativoOuZero(0));