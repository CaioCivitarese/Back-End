/*
Exercício 19: 
    Escreva um programa que verifica se um número está dentro
    de um determinado intervalo.
Descrição:  
    Neste exercício, você vai criar uma função que recebe três números como
    argumentos: um número a ser verificado, o limite inferior e o limite superior do
    intervalo. A função deve imprimir se o número está dentro do intervalo ou não.
*/

function Intervalo(num, maior, menor){
    if (num >= menor && num <= maior){
        console.log('Esse numero esta dentro do intervalo');
        
    }else {
        console.log('Esse numero não esta dentro do interalo');
    }
}

Intervalo(20, 20, 15);

/*
    Resolução:
        function   dentroDoIntervalo (numero, limiteInferior, limiteSuperior) { 
            if (numero >= limiteInferior && numero <= limiteSuperior) { 
                console .log(numero + " está dentro do intervalo" ); 
        } else  { 
                console .log(numero + " está fora do intervalo" ); 
        } 
        } 
        dentroDoIntervalo( 5 , 1 , 10 );   // Imprime: 5 está dentro do intervalo 
        dentroDoIntervalo( 15 , 1 , 10 );   // Imprime: 15 está fora do intervalo
    Explicação:  
        A função dentroDoIntervalo recebe três números como argumentos: um
        número a ser verificado e dois limites que definem o intervalo. Se o número estiver
        dentro do intervalo (ou seja, maior ou igual ao limite inferior e menor ou igual ao limite
        superior), a função imprime o número seguido da frase "está dentro do intervalo". Caso
        contrário, imprime o número seguido da frase "está fora do intervalo". Quando
        chamamos a função com os argumentos (5, 1, 10) e (15, 1, 10), vemos essa lógica em
        ação.
*/