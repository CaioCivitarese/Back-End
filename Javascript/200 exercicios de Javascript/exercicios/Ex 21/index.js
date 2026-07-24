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
    if(num === 1 || num === 2 || num === 12){
        console.log("Verão");

    }else if(num === 3 || num === 4 || num === 5){
        console.log("Outono");

    }else if(num === 6 || num === 7 || num === 8){
        console.log("Inverno");

    }else if(num === 9 || num === 10 || num === 11){
        console.log("Primavera");
    }
}

estacaoDoAno(5);

/*
    Resolução:
        function   determinarEstacao (mes) { 
            if  (mes < 3  || mes === 12 ) { 
                console .log( "Verão" ); 
        } else   if  (mes < 6 ) { 
                console .log( "Outono" ); 
        } else   if  (mes < 9 ) { 
                console .log( "Inverno" ); 
        } else  { 
                console .log( "Primavera" ); 
        } 
        } 
        determinarEstacao( 12 );   // Imprime: Verão 
        determinarEstacao( 4 );   // Imprime: Outono 
        determinarEstacao( 7 );   // Imprime: Inverno 
        determinarEstacao( 10 );   // Imprime: Primavera
    Explicação: 
        A função determinarEstacao recebe um número representando um mês
        como argumento. Se o número for menor que 3 ou igual a 12 (janeiro, fevereiro ou
        dezembro), a função imprime "Verão". Se o número for menor que 6 (março, abril ou
        maio), a função imprime "Outono". Se o número for menor que 9 (junho, julho ou
        agosto), a função imprime "Inverno". Caso contrário (setembro, outubro ou novembro),
        a função imprime "Primavera".
*/
