<?php
    class Filha{

        protected function funcaoTeste(){
            echo "Chamando função teste";
        }

        private function funcaoTeste2(){
            echo "Chamando função teste 2";
        }

        public function MostrarOla(){
            echo "Olá Mundo!";
        }
    }
    
    class Pai extends Filha{

        public function MostrarOla(){
            parent::MostrarOla();
            echo "<br>";
            echo "nova fucao";
        }

        public function mostrarTchau(){
            echo "Tchau Mundo!";
            echo "<br>";
            $this -> funcaoTeste();
            echo "<br>";
            $this-> funcaoTeste2();
        }
    }

    //$pai = new Pai;
    //$pai -> mostrarTchau();

    $pai = new Pai;
    $pai -> mostrarTchau();

    //$filha = new Filha;
    //$filha -> mostrarOla();
?>