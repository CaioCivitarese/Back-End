<?php
    class Pai{
        public function funcaoTeste(){
            echo "Função teste da classe pai";
        }
    }

    class Filha extends Pai{
        public function funcaoTeste2(){
            echo "Função teste da classe filha";
        }
    }

    $filha = new Filha;
    $filha -> funcaoTeste();
?>