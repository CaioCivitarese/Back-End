/*
Exercício 17: 
    Escreva um programa que determina se um número é par ou
    ímpar.
Descrição:  
    Nesse exercício, você vai criar uma função que recebe um número como
    argumento e imprime se ele é par ou ímpar.
*/

function ParOuImpar(num){
    if (num % 2 === 0){
        console.log('Par');
    }else {
        console.log('Impar');
    }
}

ParOuImpar(7)


/*
    Resolução:
        function   parOuImpar (numero) { 
            if (numero % 2  == 0 ) { 
                console .log(numero + " é par" ); 
        } else  { 
                console .log(numero + " é ímpar" ); 
        } 
        } 
        parOuImpar( 2 );   // Imprime: 2 é par 
        parOuImpar( 3 );   // Imprime: 3 é ímpar
    Explicação:  
        A função parOuImpar recebe um número como argumento. Se o resto da
        divisão desse número por 2 for igual a zero (o que significa que ele é divisível por 2),
        então a função imprime o número seguido da frase "é par". Caso contrário, a função
        imprime o número seguido da frase "é ímpar". Quando chamamos a função com os
        números 2 e 3, vemos essa lógica em ação.
*/