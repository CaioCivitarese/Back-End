<?php
    abstract class teste{
        public $var;

        public function func1(){
            echo "Chamando funcao 1";
        }

        abstract function func2();
    }

    class Principal2{
        public static function outroMetudoEstatico{
            echo "Meu outro metudo";
        }
    }

    class Principal extends teste{
        public fuction func2(){
            echo "Estou declarando oficialmente um metodo abstrato";
        }

        public static function metodoestatico(){
            echo "metudo estatico";
        }

        public function  funcao(){
            //Principal::metudoestatico();
            //self::metudoestatico();
            $principal2 = new Principal2
            Principal2::outroMetudoEstatico();
        }
    }

    $principal = new Principal();
    $principal -> fucao();
    //Principal::metudoestatico();

    //$principal -> func1();
    //$principal->func2();


?>