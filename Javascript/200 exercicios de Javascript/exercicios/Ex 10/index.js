/*
    Exercício 10:
        Escreva um programa que recebe duas notas de um aluno,
        calcula a média e imprime se o aluno foi aprovado ou reprovado
        (considerando que a média para aprovação é 7).
        
*/

const media = 7

function notas(nota1, nota2){
    const formula = (nota1 + nota2) / 2

    if (formula >= media){
        console.log('Aprovado');

    }else{
        console.log('Reprovado');

    }
}

notas(7, 7);

/*
    Resolução:
        function   calcularMedia (nota1, nota2) { 
            var  media = (nota1 + nota2) / 2 ; 
            if (media >= 7 ) { 
                console .log( "Aluno aprovado com a média: "  + media); 
        } else  { 
                console .log( "Aluno reprovado com a média: "  + media); 
        } 
        } 
        calcularMedia( 8 , 6 );   // Imprime: Aluno aprovado com a média: 7 
        calcularMedia( 5 , 6 );   // Imprime: Aluno reprovado com a média: 5.5
    Explicação:  
        A função podeVotar recebe uma idade como argumento e, então, usa uma
        estrutura de controle if/else if/else para determinar a obrigatoriedade do voto para essa
        idade. Se a idade for maior ou igual a 18 e menor que 70, a função imprime "Voto
        obrigatório.". Se a idade for maior ou igual a 16 e menor que 18, ou maior ou igual a 70,
        a função imprime "Voto facultativo.". Caso contrário, a função imprime "Não vota.".
        Quando chamamos a função com as idades 15, 16, 18 e 70, podemos ver essa lógica em
        ação.
*/ 
