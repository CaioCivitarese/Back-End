/*
    Exercício 9: 
        Escreva um programa que recebe um número e verifica se ele
        é positivo, negativo ou zero.
        
*/

function num(numero){
    if (numero > 0){
        console.log('Positivo');
    }else if (numero < 0) {
        console.log('Negativo');
    }else{
        console.log('Zero');
    }
    
}

num(10);

/*
    Resolução:
        function   verificarNumero (num) { 
            if (num > 0 ) { 
                console .log( "O número é positivo" ); 
        } else   if (num < 0 ) { 
                console .log( "O número é negativo" ); 
        } else  { 
                console .log( "O número é zero" ); 
        } 
        } 
        verificarNumero( 10 );   // Imprime: O número é positivo 
        verificarNumero( -5 );   // Imprime: O número é negativo 
        verificarNumero( 0 );   // Imprime: O número é zero
    Explicação: 
        A função verificarNumero verifica se o número passado como argumento
        é maior que 0, menor que 0 ou igual a 0, usando uma estrutura de controle if/else
        if/else. Se o número for maior que 0, ela imprime "O número é positivo". Se for menor
        que 0, imprime "O número é negativo". Se for igual a 0, imprime "O número é zero". Ao
        chamar a função com os números 10, -5 e 0, podemos ver essa lógica em ação.
*/