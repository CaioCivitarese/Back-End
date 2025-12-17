<?php
//Funções PHP
    $nome = "Caio";
//(sleep) Durma o codigo por x segundos.
    if($nome == "Pedro"){
        echo "Tudo certo";
    }else{
        sleep(3);
        echo "Esta errado";
    }

    echo "<br>";
// (Die) Faz o codigo "morrer", parar aprarir daquele momento.
    if($nome == "Caio"){
        die("O nome e esta certo, mais deu algo de errado");
    }else{
        echo "O nome esta errado, tente novamente.";
    }
?>