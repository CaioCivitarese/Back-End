/*
Exercício 16: 
    Escreva um programa que determina o maior entre três
    números.
Descrição: 
    Nesse exercício, você irá criar uma função que recebe três números como
    argumentos e imprime o maior deles.
*/

function MaiorNumero(num1, num2, num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    }else if (num2 > num1 && num2 > num3){
        console.log(num2);
    }else {
        console.log(num3);
    }
}

MaiorNumero(100, 200, 30);

/*
    Resolução:
        function   maiorNumero (n1, n2, n3) { 
            if (n1 > n2 && n1 > n3) { 
                console .log(n1 + " é o maior número" ); 
        } else   if (n2 > n1 && n2 > n3) { 
                console .log(n2 + " é o maior número" ); 
        } else  { 
                console .log(n3 + " é o maior número" ); 
        } 
        } 
        maiorNumero( 1 , 2 , 3 );   // Imprime: 3 é o maior número 
        maiorNumero( 5 , 3 , 4 );   // Imprime: 5 é o maior número 
        maiorNumero( 7 , 8 , 7 );   // Imprime: 8 é o maior número
    Explicação:  
        A função maiorNumero recebe três números como argumentos. Se o
        primeiro número for maior que o segundo e o terceiro, a função imprime o primeiro
        número seguido da frase "é o maior número". Se o segundo número for maior que o
        primeiro e o terceiro, a função imprime o segundo número seguido da frase "é o maior
        número". Caso contrário, a função imprime o terceiro número seguido da frase "é o
        maior número". Quando chamamos a função com os conjuntos de números (1, 2, 3), (5,
        3, 4) e (7, 8, 7), vemos essa lógica em ação.
*/