// Declaração de Função (Function hoisting)

falaOi();

function falaOi(){
    console.log('Oie');
}

//falaOi();

// First-class objects (Objetos de primeira Classe);
// Functino expressino

const souUmDado = function (){
    console.log('Sou um dado.');
};

souUmDado();

function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo");
    funcao();
}

executaFuncao(souUmDado);

// Arrow Function

const funcaoArroe = () => {
    console.log('Sou uma arrow finction');
}

funcaoArroe();

// Dentro de um objeto

const obj = {
    falar: function (){
        console.log('Esou falando...');
    }
}
obj.falar();
