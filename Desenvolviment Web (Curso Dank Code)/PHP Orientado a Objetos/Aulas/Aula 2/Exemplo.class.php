<?php
/*
    Esta classe e de exemplo!
*/
    //Public Funciona em qualquer lugar!
    //private socaoseguimos acessar dentro da classe!

    class Exemplo{
        private $var1;
        public $var2;
        public static $var3 = "starck";
        /*
        public function metodo(){

        }

        private function metodo2(){

        }

        public static function metudoEstatico(){
            echo "Metudo estatico";
        }
        */

        public function setVar1($var1){
            $this -> var1 = $var1;
        }

        public function pegarVar1(){
            return $this -> var1;
        }
    }
?>