<?php
    $pdo = new PDO("mysql:host=localhost;dbname=modulo_8","root","");

    $sql = $pdo -> prepare("INSERT INTO `clientes` VALUES (null,'Caio','Civitarese','2025-12-22 16:00:00')");
    $sql -> execute();
?>