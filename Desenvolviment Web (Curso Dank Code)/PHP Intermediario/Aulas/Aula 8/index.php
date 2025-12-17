<?php
    //Serve para unir 1 ou mais arrays;
/*
    $array1 = array("color" => "red", 2, 4);
    $array2 = array("a", "b", "color" => "green", "shape" => "trapezoid", 4);
    $result = array_merge($array1, $array2);
    print_r($result);
*/

/*
    $array1 = array("chave1" => "valor1", "chave2" => "valor2");
    $array2 = array("chave3" => "valor3", "chave4" => "valor4");
    $array3 = array("chave5" => "valor5");
    $result = array_merge($array1, $array2);
    print_r($result);
*/

/*
    $array1 = array("chave1" => "valor1", "chave2" => "valor2");
    $array2 = array("chave1" => "valor1", "chave2" => "valor2", "chave3" => "valor3", "chave4" => "valor4");

    print_r(array_intersect_key($array1, $array2));
*/

    $arr = ["<p>Caio</p>", "Joao", "<h1>fabricio</h1>"];

    print_r(array_map("strip_tags", $arr));
?>