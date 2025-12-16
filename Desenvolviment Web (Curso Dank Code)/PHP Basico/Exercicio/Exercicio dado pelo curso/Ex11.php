<?php
/*
    Operadores matemáticos e lógica 
● Crie duas variáveis booleanas $usuarioLogado e $temPermissao. Atribua 
valores true ou false a elas. 
● Use operadores lógicos (&&, ||, !) para exibir mensagens diferentes na tela 
dependendo das combinações dos valores dessas variáveis. 
*/

$usuarioLogado = true;
$temPermissao = true;

//Operador ligico (&&):
    if(($usuarioLogado && $temPermissao) == true){
        echo "Vc tem permicao";
    }else{
        echo "Vc n tem permicao";
    }

    echo "<br>";

// Operedor ligico (||):
    if($usuarioLogado || $temPermissao){
        echo "Vc n tem permicao para entar";
    }else{
        echo "Vc tem permicao para entar";
    }
?>