/*
Exercício 25: 
    Usando um laço while, imprima os números de 10 a 1 (em
    ordem decrescente).
Descrição:
    Neste exercício, você deve criar um loop usando a estrutura de repetição
    while que percorra de 10 a 1 (em ordem decrescente) e imprima cada número no
    console.
*/

let i = 10;

while(i <= 1){
    console.log(i);
    i--;
}

/*
    Resolução:
        let  i = 10 ; 
        while (i >= 1 ){ 
            console .log(i); 
        i--; 
        }
    Explicação: 
        Este código inicia uma variável i em 10 e, enquanto i for maior ou igual a
        1, imprime i no console e depois decrementa i em 1. O laço while é útil quando não
        sabemos exatamente quantas vezes o código precisa ser executado, mas temos uma
        condição de parada definida.
*/