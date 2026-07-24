/*
Exercício 21: 
    Escreva um programa que determina a estação do ano com
    base no mês.
Descrição: 
    Neste exercício, você criará uma função que recebe um número de 1 a 12
    (representando os meses de janeiro a dezembro) e imprimirá a estação do ano
    correspondente.
*/

function estacaoDoAno(num){
    if(num === 1 && num === 2 && num === 12){
        console.log("Verão");

    }else if(num === 3 && num === 4 && num === 5){
        console.log("Outono");

    }else if(num === 6 && num === 7 && num === 8){
        console.log("Inverno");

    }else if(num === 9 && num === 10 && num === 11){
        console.log("Primavera");
    }else{
        console.log("Valor solicitado invalido");
    }
}

estacaoDoAno(11);
