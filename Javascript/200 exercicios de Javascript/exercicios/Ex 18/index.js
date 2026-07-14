/*
Exercício 18: 
    Escreva um programa que verifica se uma pessoa pode dirigir
    com base na idade.
Descrição:  
    Nesse exercício, você vai criar uma função que recebe a idade de uma
    pessoa e verifica se ela pode dirigir. No Brasil, apenas pessoas com mais de 18 anos
    podem tirar carteira de habilitação.
*/

function PodeDiriger(idade){
    if (idade >= 18){
        console.log('Você pode Dirigir');

    }else {
        console.log('Você não pode Dirigir');
    }
}

PodeDiriger(12);

/*
    Reolução:
        function   podeDirigir (idade) { 
            if (idade >= 18) { 
                console .log( "Pode dirigir." ); 
        } else  { 
                console .log( "Não pode dirigir" ); 
        } 
        } 
        podeDirigir( 15 );   // Imprime: Não pode dirigir 
        podeDirigir( 18 );   // Imprime: Pode dirigir
        podeDirigir( 36 );   // Imprime: Pode dirigir
    Explicação: 
        A função podeDirigir recebe uma idade como argumento e, então, usa
        uma estrutura de controle if/else para determinar se a pessoa está apta a dirigir. Se a
        idade for maior ou igual a 18, a função imprime "Pode dirigir.". Caso contrário, a função
        imprime "Não pode dirigir.". Quando chamamos a função com as idades 15, 18 e 36,
        podemos ver essa lógica em ação.
*/