<?php
    include ("config.php");
    spl_autoload_register("myAutoload");
    new Utilidades();
    new Home\Inicial();
?>