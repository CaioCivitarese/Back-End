<?php
/* Lasos de repericao*/
// laco de repeticao (For):
    for($contador=0;$contador<10;$contador++){
        echo "Ola Mundo";
        echo "<br>";
        echo $contador;
        echo "<hr>";
    }

// Laco de repeticao (While):
    $contador=0;
    while($contador < 10){
        echo "Alo Mundo";
        echo "<hr>";
        $contador+=1;
    }

// laco de repeticao (Do While):

    do{
        echo "Ola mundo";
        echo "<br>";
        $contador++;
    }while($contador < 10)

?>