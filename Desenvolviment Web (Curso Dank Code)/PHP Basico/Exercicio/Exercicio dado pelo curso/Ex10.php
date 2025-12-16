<?php
/*
        Operadores 
● Declare duas variáveis $a = 10 e $b = 5. Depois, use operadores de comparação 
para verificar e exibir os resultados das seguintes expressões: 
    ○ $a > $b 
    ○ $a < $b 
    ○ $a == $b 
    ○ $a != $b 
*/

$a = 10;
$b = 5;
 
    if($a > $b){
        echo "a é maior que b";
    }else{
        echo "Falso";
    }

    echo "<br>";

    if($a < $b){
        echo "a é menor que b";
    }else{
        echo "Falso";
    }

    echo "<br>";

    if($a == $b){
        echo "a é igual a b";
    }else{
        echo "Falso";
    }

    echo "<br>";

    if($a != $b){
        echo "a é diferente de b";
    }else{
        echo "Falso";
    }
?>