<?php
//Treino de Operadores Logicos:
    $var1 = 10;
    $var2 = 20;
    $var3 = 30;
    $var4 = 40;
//Operador E (&&)
    if(($var1 == $var2) && ($var3 == $var4)){
        echo "Temos variaves Similares";
    }else{
        echo "Temos variaves Diferentes";
    }

    echo "<br>";

//Operador OU (||)

    if(($var2 == $var4) || ($var1 == $var3)){
        echo "Temos variaveis similares";
    }else{
        echo "Temos variaveis diferentes";
    }
?> 