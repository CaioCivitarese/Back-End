/*
Exercício 11: 
    Escreva um programa que verifica se uma pessoa pode votar
    com base na idade.
Descrição: 
    Nesse exercício, você vai criar uma função que recebe a idade de uma
    pessoa e verifica se ela pode votar. No Brasil, o voto é obrigatório para pessoas entre 18 e
    70 anos, facultativo para pessoas com 16 ou 17 anos ou acima de 70. Menores de 16 anos
    não votam.
*/

function voto(Idade){
    if ((Idade >= 16 && Idade < 18) || Idade > 70){
        console.log('Seu voto e opicional');

    }else if (Idade >= 18 && Idade <= 70){
        console.log('Seu voto em obrigatorio');

    }else{
        console.log('Você não pode votar');

    }

}

voto(70);

/*
    Resolução:
        function   podeVotar (idade) { 
            if (idade >= 18  && idade < 70 ) { 
                console .log( "Voto obrigatório." ); 
        } else   if ((idade >= 16  && idade < 18 ) || idade >= 70 ) { 
                console .log( "Voto facultativo." ); 
        } else  { 
                console .log( "Não vota." ); 
        } 
        } 
        podeVotar( 15 );   // Imprime: Não vota. 
        podeVotar( 16 );   // Imprime: Voto facultativo. 
        podeVotar( 18 );   // Imprime: Voto obrigatório. 
        podeVotar( 70 );   // Imprime: Voto facultativo.
    Explicação:
        A função podeVotar recebe uma idade como argumento e, então, usa uma
        estrutura de controle if/else if/else para determinar a obrigatoriedade do voto para essa
        idade. Se a idade for maior ou igual a 18 e menor que 70, a função imprime "Voto
        obrigatório.". Se a idade for maior ou igual a 16 e menor que 18, ou maior ou igual a 70,
        a função imprime "Voto facultativo.". Caso contrário, a função imprime "Não vota.".
        Quando chamamos a função com as idades 15, 16, 18 e 70, podemos ver essa lógica em
        ação.
*/
