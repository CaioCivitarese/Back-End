/*
Exercício 22: 
    Escreva um programa que determina o número de dias em um
    mês.
Descrição:  
    Neste exercício, você criará uma função que recebe o número de um mês e
    imprime o número de dias desse mês.
*/

function diasDeUmMes(num){
    if(num === 1 || num === 3 || num === 5 || num === 7 || num === 8 || num === 10 || num === 12){
        console.log("Esse mês tem 31 dias!!!");

    }else if(num === 4 || num === 6 || num === 9 || num === 11){
        console.log("Esse mês tem 30 dias!!!");
    
    }else{
        console.log("Esse mês pode ter 28 ou 29 dias!!!");
    }
}

diasDeUmMes(2);

/*
    Resolução:
        function   determinarDiasNoMes (mes) { 
            switch (mes) { 
                case   2 : 
                    console .log( "28 ou 29 dias" ); 
                    break ; 
                case   4 : 
                case   6 : 
                case   9 : 
                case   11 : 
                    console .log( "30 dias" ); 
                    break ; 
                default : 
                    console .log( "31 dias" ); 
        } 
        } 
        determinarDiasNoMes( 2 );   // Imprime: 28 ou 29 dias 
        determinarDiasNoMes( 4 );   // Imprime: 30 dias 
        determinarDiasNoMes( 1 );   // Imprime: 31 dias
    Explicação:
        A função determinarDiasNoMes usa uma estrutura de controle switch
        para verificar o número de dias em um mês. O mês de fevereiro (2) pode ter 28 ou 29
        dias, os meses de abril (4), junho (6), setembro (9) e novembro (11) têm 30 dias e todos
        os outros meses têm 31 dias.
*/
