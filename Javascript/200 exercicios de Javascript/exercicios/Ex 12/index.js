/*
Exercício 12:
    Escreva um programa que verifica a situação de um estudante
    de acordo com sua média final.
Descrição: 
    Neste  exercício, você vai criar uma função que recebe a média final de um
    estudante e verifica sua situação, se aprovado (média igual ou superior a 7), se em
    recuperação (média entre 5 e 6.9) ou se reprovado (média abaixo de 5)
*/

function aprovadoOuReprovado(Nota){
    if (Nota >= 7){
        console.log('Você fou Aprovado');

    }else if (Nota >= 5 && Nota < 6.9){
        console.log('Você esta de Recuperação');

    }else {
        console.log('Você foi Reprovado');

    }

}


aprovadoOuReprovado(4.9);

/*
    Resolução:
        function   situacaoEstudante (mediaFinal) { 
            if (mediaFinal >= 7 ) { 
                console .log( "Aprovado." ); 
        } else   if (mediaFinal >= 5  && mediaFinal < 7 ) { 
                console .log( "Em recuperação." ); 
        } else  { 
                console .log( "Reprovado." ); 
        } 
        } 
        situacaoEstudante( 7 );   // Imprime: Aprovado. 
        situacaoEstudante( 6 );   // Imprime: Em recuperação. 
        situacaoEstudante( 4 );   // Imprime: Reprovado.
    Explicação:  
        A função situacaoEstudante recebe uma média final como argumento e,
        então, usa uma estrutura de controle if/else if/else para determinar a situação do
        estudante com base nessa média. Se a média for maior ou igual a 7, a função imprime
        "Aprovado.". Se a média for maior ou igual a 5 e menor que 7, a função imprime "Em
        recuperação.". Caso contrário, a função imprime "Reprovado.". Quando chamamos a
        função com as médias 7, 6 e 4, podemos ver essa lógica em ação.
*/
