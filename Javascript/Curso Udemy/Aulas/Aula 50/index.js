// arguments que sustenta todos os argumnetos enviados

const conta = (...args) => {
    console.log(args);
}

conta('+', 1, 20, 30, 40, 50);

/*
const conta = (operador, acumulador, ...numeros) => {
    console.log(arguments);
}

conta('+', 1, 20, 30, 40, 50);
*/

/*
function conta(operador, acumulador, ...numeros){
    console.log(arguments);
}

conta('+', 1, 20, 30, 40, 50);
*/

/*
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

conta('+', 1, 20, 30, 40, 50);
*/

/*
function funcao(nome, sobrenome, idade){
    console.log(nome, sobrenome, idade);
}

funcao('Luiz', 'Otavio', 20);
*/

/*
function funcao(a, b = 2, c = 4){
    //b = b || 0;
    console.log(a + b + c);
}

funcao(2, undefined, 20);
*/

/*
function funcao(a, b, c, d, e ,f){
    console.log(a, b, c, d, e ,f);
}

funcao(1, 2, 3);
*/

/*
function funcao(){
    let total = 0
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);
*/
