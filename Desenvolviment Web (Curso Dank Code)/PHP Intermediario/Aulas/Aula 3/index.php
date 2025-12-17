<?php
//(sleep) Durma o codigo por x segundos.
/*
    sleep(3);

    echo "um";
    echo "<br>";

    sleep(3);
    echo "dois";
    echo "<br>";

    sleep(3);
    echo "tres"
*/
// (Die) Faz o codigo "morrer", parar aprarir daquele momento.
    $nome = "Caio";

    if($nome == "Pedro"){
        // Continuamos o Codigo.
        echo "Tudo certo";
    }else{
        die("O Script parou de ser executado...");
    }

    sleep(3);

    echo "um";
    echo "<br>";

    sleep(3);
    echo "dois";
    echo "<br>";

    sleep(3);
    echo "tres"
?>