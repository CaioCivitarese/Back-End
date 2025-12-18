<?php
    session_start();
    /*
    if(isset($_SESSION["nome"])){
        echo $_SESSION["nome"];
    }
    */

    //unset($_SESSION["nome"]);

    $_SESSION["nome"] = "Caio";
    $_SESSION[0]["nome"] = "Caio";
    session_destroy();
?>