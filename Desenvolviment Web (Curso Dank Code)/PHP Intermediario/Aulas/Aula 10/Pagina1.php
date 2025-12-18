<?php

    session_start();
    /*
    //$_SESSION["nome"] = "Caio";
    //$_SESSION["idade"] = 19;
    echo $_SESSION["nome"];
    */
    setcookie("nome", "Caio", time() + (60*60*24),'/');
    //setcookie("nome", "Caio", time() - (60*60*24),'/');
    
    echo $_COOKIE["nome"]
?>