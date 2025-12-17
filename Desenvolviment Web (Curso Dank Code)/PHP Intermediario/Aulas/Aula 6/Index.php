<?php

    $conteudo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan diam ut lacus finibus gravida consequat ultricies quam. Nunc tristique lorem at sem semper, sit amet consectetur lectus molestie. Nunc feugiat ipsum id odio malesuada tincidunt. Donec malesuada dolor ut ipsum volutpat, sit amet placerat purus sodales. In placerat nunc commodo, condimentum tellus id, iaculis sem. Morbi facilisis finibus tortor, ut ornare enim pharetra nec. Praesent malesuada accumsan egestas. Curabitur bibendum tellus at metus ullamcorper lobortis. Cras vitae risus a eros feugiat eleifend. Nam consequat molestie velit ac vehicula. Vivamus eu neque in purus pellentesque porta. In hac habitasse platea dictumst.";

    //Serve para recortar uma string.
    //echo substr($conteudo,0,20);

    $nome  = "Caio Faria Civitarese";

    $nomes = explode(" ", $nome);

    print_r($nomes);

    //Serve para Juntar um arry com delimitador.
    //No caso o espaco.
    $nomes = inplude(" ", $nomes);
    //echo $nomes;

    //Strip_tags serve para retirar todo codigo HTML.
    $conteudo = "<h1>Caio</h1>Outra coisa";
    //echo strip_tags($conteudo);

    //htmlentities que mostra o codigo HTML na pagina.
    echo htmlentities("<div></div>");
?>