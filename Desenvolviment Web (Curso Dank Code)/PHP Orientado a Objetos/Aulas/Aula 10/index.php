<?php
/*
    class cachorro{
        public function __construct() {
            echo "Classe Cachoro";
        }
    }

    class Gato{
        public function __construct() {
            echo "Classe Gato";
        }
    }

    class Animal{

        public static function build($nomeClasse){
            if(class_exists($nomeClasse)){
                return new $nomeClasse;
            }else{
                echo "Ops!, a classe não exeste.";
            }
            
        }

    }

    Animal::build("Gato");
*/

    //adicionar/Fechar Carrinho - Carrinho
    //Calcular Frete -Frete
    //Fechar Pedido - Pedido

    class Carrinho{
        public function fecharCarrinho(){

        }
    }

    class Frete{
        public function calcularfrete(){

        }
    }

    class pedido{
        public function fecharpedido(){

        }
    }

    class Loja{

        public function finalizarCompra(){
            /*
            $carrinho = new Carrinho();
            $carrinho -> fecharCarrinho();

            $frete = new Frete();
            $frete -> calcularfrete();
            */

            $this -> fecharCarrinho();
            $this -> calcularfrete();
            $this -> fecharpedido();

        }

        public function fecharCarrinho(){
            $carrinho = new Carrinho();
            $carrinho -> fecharCarrinho();
        }

        public function calcularfrete(){
            $frete = new Frete();
            $frete -> calcularfrete();
        }

        public function fecharpedido(){
            $pedido = new Pedido();
            $pedido -> fecharpedido();
        }

    }

    $loja = new Loja();
    $loja -> finalizarCompra();
?>