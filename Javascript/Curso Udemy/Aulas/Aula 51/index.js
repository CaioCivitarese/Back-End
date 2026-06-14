// return: retorna o valor e termina a função
/*
function soma(x, y){
    return x + y;
}

function soma2(a, b){
    console.log(a + b);
}

soma2(5, 2);
*/

/*
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('Luiz', 'Otavio');
*/

/*
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Ola');
console.log(olaMundo('Mundo!'));
*/
/*
function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadriplica(n){
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
*/

function criaMulitiplicador(mulitiplicador){
    //Multiplicador
    return function criaMulitiplicador (n){
        return n * mulitiplicador;
    }

}

const duplica = criaMulitiplicador(2);
const triplica = criaMulitiplicador(3);
const quadriplica = criaMulitiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));
