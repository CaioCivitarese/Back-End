/*
Exercício 14:
    Escreva um programa que verifica se um ano é bissexto.
Descrição: 
    Nesse exercício, você vai criar uma função que recebe um ano e verifica se
    ele é bissexto. Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por
    100 mas não por 400.
*/

function anoBissexto(ano){
    if (ano % 4 == 0){
        console.log('Esse ano e Bissexto');
    }else{
        console.log('Esse ano não é Bissexto');
    }
}

anoBissexto(2004);

/*
    Resolução:
        function   verificarBissexto (ano) { 
            if ((ano % 4  == 0  && ano % 100  != 0 ) || (ano % 400  == 0 )) { 
                console .log(ano + " é um ano bissexto" ); 
        } else  { 
                console .log(ano + " não é um ano bissexto" ); 
        } 
        } 
        verificarBissexto( 2000 );   // Imprime: 2000 é um ano bissexto 
        verificarBissexto( 2001 );   // Imprime: 2001 não é um ano bissexto 
        verificarBissexto( 2100 );   // Imprime: 2100 não é um ano bissexto
    Explicação: 
        A função verificarBissexto recebe um ano como argumento e, então, usa
        uma estrutura de controle if/else para verificar se o ano é bissexto. Se o ano for divisível
        por 4 e não for divisível por 100, ou se o ano for divisível por 400, então é um ano
        bissexto e a função imprime o ano seguido da frase "é um ano bissexto". Caso contrário,
        a função imprime o ano seguido da frase "não é um ano bissexto". Quando chamamos a
        função com os anos 2000, 2001 e 2100, vemos essa lógica em ação.
*/