<?php
            /* OPERADORES MATEMATICOS*/
    $numero1 = 10;
    $numero2 = 11;

//Sinal de Menor
    if($numero1 < $numero2){
        echo "Esecute menor";
    }else{
        echo "Nao esecute menor";
    }

    echo "<br>";

//Sinal se Menor ou Igual
    if($numero1 <= $numero2){
        echo "Esecute menor ou igual";
    }else{
        echo 'Nao esecute menor ou igual';
    }
    
    echo "<br>";

//Sinal maior
    if($numero1 > $numero2){
        echo "Esecute maior";
    }else{
        echo "Nao esecute maior";
    }

    echo "<br>";

//Sinal Maior ou Igual
    if($numero1 >= $numero2){
        echo "Esecute maior ou igual";
    }else{
        echo "Nao esecute maior ou igual";
    }

    echo "<br>";

            /*OPERADORES LOGICOS*/
    $variavel1 = "var1";
    $variavel2 = "var2";
    $variavel3 = "var3";

// O sinal (&&) e usado como se fose (e):
    if(($variavel1 == $variavel2) && ($variavel2 == $variavel3)){
        echo "Todas sao iguais";
    }else{
        echo "Nem todas as variaves sao iguais";
    }

    echo "<br>";

//O sinal (||) e usdo como se fose (ou):
    if(($variavel1 == $variavel2) || ($variavel1 == $variavel3)){
        echo "as varisveis sao iguais";
    }else{
        echo "Nem uma das variaveis sao iguais";
    }

    echo "<br>";

    if(($variavel1 == $variavel2) || ($variavel1 == $variavel3) && $variavel1 == $variavel2){
        echo "Verdadeiro";
    }
?>