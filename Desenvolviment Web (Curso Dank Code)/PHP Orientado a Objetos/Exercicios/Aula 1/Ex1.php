<?php
//Orientação a Objeto:
    class Pessoa{

        private $nome ="andre";
        private $idade = "54";

        public function academia() {
            echo "eu faço academia";
        }

        public function comer(){
            echo "eu como bem";
        }
    }

    $pessoa = new Pessoa;

    $pessoa -> academia();
?>