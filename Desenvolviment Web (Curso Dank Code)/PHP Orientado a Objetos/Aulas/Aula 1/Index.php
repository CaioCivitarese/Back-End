<?php
    class Pessoa{
        //Objeto Pessoa

        private $nome = "Caio";
        private $idade = "19";
        private $peso = "65kg";

        public function crescer(){
            $this -> comer();
            echo "<br>";
            echo "estou Crescendo";

        }
        private function comer(){
            echo "estou comenso";

        }
    }

    //Instanciar
    $pessoa = new Pessoa;
    $pessoa2 = new Pessoa;

    $pessoa -> crescer();

?>