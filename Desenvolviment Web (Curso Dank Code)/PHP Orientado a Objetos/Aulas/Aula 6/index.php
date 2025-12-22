<?php
    include("Class1.php");
    $teste = new Teste("Caio", 19);

    echo $teste -> getNome();
    echo $teste -> getIdade();
?>