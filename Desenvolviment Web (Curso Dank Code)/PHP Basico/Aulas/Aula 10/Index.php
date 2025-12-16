<?php

    $nome = "Caio";
    $nome2 = "Joao";
    $valor = 10;
    $valor2 = "10";

//Um sinal de igual quer diser que atribuimos um valor
//Sempre retorna verdadeiro.
    /*
        if($nome = $nome2){
            echo "Nome";
        }
    */
//Apenas confere se o valor e igual.
    if($nome == $nome2){
        echo "Nomes iguais";
    }

//Conferimos para ver se e diferente
    if($nome != $nome2){
        echo "E diferente";
    }


// Confere se sao iguais
    if($valor == $valor2){
        echo "Verdade";
    }

// Confere se sao identicos
    if($valor === $valor2){
        echo "verdade";
    }else{
        echo "falso";
    }

// Confere se sao diferentes(tipo e valor)
    if($valor !== $valor2){
        echo "Verdade";
    }else{
        echo "Falso";
    }
?>