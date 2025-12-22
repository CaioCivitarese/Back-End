<?php

    function myAutoload($class){
        $class = str_replace("\\", "/", $class);
        if(file_exists("Class/".$class."php")){
            include("Class/".$class."php");

        }
    }

?>