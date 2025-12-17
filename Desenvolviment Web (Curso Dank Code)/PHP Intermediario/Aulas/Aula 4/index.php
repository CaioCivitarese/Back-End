<?php
//Função:
    
    function mostrarNome($nome, $idade){
        echo "<h2>Nome e: Caio</h2>".$nome;
        echo $idade;
    }

    function calculadora($numero1 = 10, $numero2 = 5){
        echo ($numero1 + $numero2);
    }

    function verdade(){
        return true;
    }

    function returnStrin(){
        return "Caio";
    }

    echo returnStrin();
    $variavel = verdade();
    //calculadora(20,30);
    //mostrarNome("João", 20);
?>