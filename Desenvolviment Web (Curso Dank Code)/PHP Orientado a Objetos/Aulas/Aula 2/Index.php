<?php
    include("Exemplo.class.php");
    //Intancia de Objeto!
    $exemplo = new Exemplo();
    $exemplo -> setVar1("Caio");
    echo $exemplo -> pegarVar1();


    //$exemplo -> var1 = "ola";
    //$exemplo -> var2 = "Caio";

    //echo $exemplo -> var2;

    $exemplo2 = new Exemplo;
    $exemplo2 -> setVar1("Joao");
    echo $exemplo2 -> pegarVar1();
    //$exemplo2 -> var2 = "joao";

/*
    echo $exemplo -> var2;
    echo "<br>";
    echo $exemplo2 -> var2;
*/
    //Exemplo::$var3 = "Outra Variavel";
    //echo Exemplo::$var3;

    Exemplo::metudoEstatico();

?>