<?php
    $pdo = new  PDO('mysql:host=localhost;dbname=modulo_8', 'root', '');

    $sql = $pdo->prepare("INSERT INTO `clientes` VALUES (null, 'Caio', 'Civitarese', 2026-01-21 08:00:00)");
 
    $sql->execute();
?>