/*
Exercício 13: 
    Escreva um programa que calcula o IMC (Índice de Massa
    Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa
    está abaixo do peso, com peso normal, com sobrepeso ou obesa.
Descrição:  
    Nesse exercício, você vai criar uma função que recebe o peso (em kg) e a
    altura (em m) de uma pessoa, calcula o IMC e verifica em qual faixa o valor se encaixa.
    As faixas são: abaixo do peso (IMC < 18.5), normal (18.5 ≤ IMC < 25), sobrepeso (25 ≤
    IMC < 30) e obesidade (IMC ≥ 30).
*/

function IMC(peso, altura){
    imc = peso / (altura * altura);
    
    if (imc < 18.5){
        console.log('Você esta abaixo do peso');

    }else if (imc >= 18.5 && imc < 25){
        console.log('Seu peso esta normal');

    }else if(imc >= 25 && imc < 30){
        console.log('Você esta com sobrepeso');

    }else{
        console.log('Você esta obesa');

    }
}


IMC(65, 1.70)

/*
    Resolução:
        function   calcularIMC (peso, altura) { 
            var  imc = peso / (altura * altura); 
            if (imc < 18.5 ) { 
                console .log( "Abaixo do peso" ); 
        } else   if (imc >= 18.5  && imc < 25 ) { 
                console .log( "Peso normal" ); 
        } else   if (imc >= 25  && imc < 30 ) { 
                console .log( "Sobrepeso" ); 
        } else  { 
                console .log( "Obesidade" ); 
        } 
        } 
        calcularIMC( 60 , 1.7 );   // Imprime: Peso normal 
        calcularIMC( 80 , 1.7 );   // Imprime: Sobrepeso 
        calcularIMC( 90 , 1.7 );   // Imprime: Obesidade
    Explicação:  
        A função calcularIMC recebe peso e altura como argumentos, calcula o
        IMC e, então, usa uma estrutura de controle if/else if/else para determinar a faixa de
        peso na qual a pessoa se encaixa. Se o IMC for menor que 18.5, a função imprime
        "Abaixo do peso". Se o IMC for maior ou igual a 18.5 e menor que 25, a função imprime
        "Peso normal". Se o IMC for maior ou igual a 25 e menor que 30, a função imprime
        "Sobrepeso". Se o IMC for maior ou igual a 30, a função imprime "Obesidade". Quando
        chamamos a função com os pares de peso e altura (60, 1.7), (80, 1.7) e (90, 1.7), vemos
        essa lógica em ação.
*/