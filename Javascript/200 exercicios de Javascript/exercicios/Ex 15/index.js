/*
Exercício 15: 
    Escreva um programa que verifica se uma palavra é um
    palíndromo.
Descrição: 
    Um palíndromo é uma palavra que tem a propriedade de poder ser lida
    tanto da direita para a esquerda como da esquerda para a direita. Nesse exercício, você
    irá criar uma função que recebe uma palavra como argumento e verifica se ela é um
    palíndromo.
*/

function palindromo(palavra){
    let inverter = palavra.split("").reverse().join("");
    
    if (palavra === inverter){
        console.log('Essa palavra é um palindromo');
    }else {
        console.log('Essa palavra não é um palindromo');
    }
}

palindromo('Caio');

/*
    Resolução:
        function   verificarPalindromo (palavra) { 
            var  palavraInvertida = palavra.split( '' ).reverse().join( '' ); 
            if (palavra == palavraInvertida) { 
                console .log(palavra + " é um palíndromo" ); 
        } else  { 
                console .log(palavra + " não é um palíndromo" ); 
        } 
        } 
        verificarPalindromo( "arara" );   // Imprime: arara é um palíndromo 
        verificarPalindromo( "gato" );   // Imprime: gato não é um palíndromo
    Explicação:  
        A função verificarPalindromo recebe uma palavra como argumento e,
        então, cria uma nova string que é a palavra invertida, usando os métodos de string split,
        reverse e join. Se a palavra original for igual à palavra invertida, então a função imprime
        a palavra seguida da frase "é um palíndromo". Caso contrário, a função imprime a
        palavra seguida da frase "não é um palíndromo". Quando chamamos a função com as
        palavras "arara" e "gato", vemos essa lógica em ação.
*/