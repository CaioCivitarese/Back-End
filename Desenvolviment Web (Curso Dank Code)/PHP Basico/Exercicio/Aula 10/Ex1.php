<?php
//Exercitando sinais!
    $var = 12;
    $var2= 18;
//Apenas confere se o valor e igual:

    if($var == $var2){
        echo "verdadeiro";
    }else{
        echo "Falso";
    }

    echo "<br>";

//Conferimos para ver se e diferente
    if($var != $var2){
        echo "Verdadeiro";
    }else{
        echo "Falso";
    }

    echo "<br>";

// Confere se sao identicos
    if($var === $var2){
        echo "verdadeiro";
    }else{
        echo "Falso";
    }

    echo "<br>";

// Confere se sao diferentes(tipo e valor)
    if($var !== $var2){
        echo "verdadeiro";
    }else{
        echo "Falso";
    }
?>