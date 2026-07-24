/*
Exercício 23: 
    Escreva um programa que verifica as cores de um semafáro.
Descrição:  
    Neste exercício, você deve criar uma função que recebe uma cor, e imprime
    no console o que essa cor representa, o console deve imprimir uma mensagem específica
    para cores que não existem em um semáforo.
*/

function corDoSemaforo(cor){
    if(cor === "Verde"){
        console.log("Siga em frente, o sinal esta aberto!!!");

    }else if(cor === "Amarelo"){
        console.log("Fique atento, o sinal ja vai fechar!!!");

    }else if(cor === "Vermelho"){
        console.log("Pare o sinal seta fechado");

    }else{
        console.log("Cor de sinal invalido!!!");

    }
}

corDoSemaforo("Verde");

/*
    Resolução:
        function   verificaSemafaro(cor)  { 
            if  (cor === "verde") { 
                console .log( "Siga em frente." ); 
        } else   if  (cor === "amarelo") { 
                console .log( "Atenção, diminua a velocidade." ); 
        } else   if  (cor === "vermelho") { 
                console .log( "Pare seu veículo." ); 
        } else  { 
                console .log( "Envie uma cor válida." ); 
        } 
        } 
        verificaSemafaro( "verde" );   // Imprime: Siga em frente
        verificaSemafaro( "amarelo" );   // Imprime: Atenção, diminua a velocidade
        verificaSemafaro( "vermelho" );   // Imprime: Pare seu veículo
        verificaSemafaro( "azul" );   // Impime: Envie uma cor válida
    Explicação:  
        A função varificaSemafaro recebe uma cor como argumento. Se a cor for
        igual a verde, a função imprime 'Siga em frente.'. Se a cor for igual a amarelo, a função
        imprime 'Atenção, diminua a velocidade.'. Se a cor for igual a vermelho, a função
        imprime 'Pare seu veículo.'. Por fim, se for uma outra cor, a função imprime 'Envie uma
        cor válida.'
*/

