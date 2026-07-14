/*
Exercício 20: 
    Escreva um programa que imprime uma classificação
    baseada na nota de um aluno.
Descrição:  
    Neste exercício, você vai criar uma função que recebe uma nota de um
    aluno como argumento e imprime uma classificação com base nessa nota.
*/

function ClassificaçãoPorNota(nota, aluno){
    
}

/*
    Resolução:
        function   classificarAluno (nota) { 
            if (nota >= 90 ) { 
                console .log( "A" ); 
        } else   if (nota >= 80 ) { 
                console .log( "B" ); 
        } else   if (nota >= 70 ) { 
                console .log( "C" ); 
        } else   if (nota >= 60 ) { 
                console .log( "D" ); 
        } else  { 
                console .log( "F" ); 
        } 
        } 
        classificarAluno( 95 );   // Imprime: A 
        classificarAluno( 82 );   // Imprime: B 
        classificarAluno( 74 );   // Imprime: C 
        classificarAluno( 62 );   // Imprime: D 
        classificarAluno( 55 );   // Imprime: F
    Explicação: 
        A função classificarAluno recebe uma nota de aluno como argumento e
        imprime uma classificação baseada nessa nota. Se a nota for 90 ou superior, a função
        imprime "A". Se a nota for 80 ou superior (mas menor que 90), a função imprime "B".
        Se a nota for 70 ou superior (mas menor que 80), a função imprime "C". Se a nota for 60
        ou superior (mas menor que 70), a função imprime "D". Se a nota for menor que 60, a
        função imprime "F". Quando chamamos a função com as notas 95, 82, 74, 62 e 55,
        vemos essa lógica em ação.
*/