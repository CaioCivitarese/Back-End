// Declaração de função

falaOi();

function falaOi(){
    console.log('Oie');
}

// first-class objects (objetos de primeira classe)
// function expression

const souUmDado = function(){
    console.log('Sou um dado.');

};

souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
};

executaFuncao(souUmDado);


// Arrow Function

const ficaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

// Dentro de um objetos

const obj = {
    falar:  function() {
        console.log('Estou Falando...');
    }

};

obj.falar();