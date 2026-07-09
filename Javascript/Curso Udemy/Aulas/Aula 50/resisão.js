/*
    function funcao(a, b, c){
        let total = 0;
        for (let argumento of arguments){
            total += argumento;
        }

        console.log(total, a, b, c)
    }

    funcao(1, 2, 3, 4, 5);
*/

/*
// argumentos que sustenta todos os argumentos enviados

function funcao(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f)
}

funcao(1, 2, 3);
*/

/*
function funcao(a, b = 2, c = 4){
    console.log(a + b + c)
}

funcao(2, undefined, 20);
*/

/*
function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
let obj = {nome: 'Caio', sobrenome: 'Civitarese', idade: 19}

funcao(obj);
*/

/*
function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3)
}
let obj = {valor1: 'Caio', valor2: 'Civitarese', valor3: 19}

funcao(obj);
*/

const conta = function(operador, acumulado, numeros){
    for (let numero of numeros){
        if (operador === '+'){
            acumulado += numero;
        }
        if (operador === '-'){
            acumulado -= numero;
        }
        if (operador === '/'){
            acumulado /= numero;
        }
        if (operador === '*'){
            acumulado *= numero;
        }
    }
    console.log(acumulado);
}
conta('+', 1, [20, 30, 40, 50])
