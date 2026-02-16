/*
• Faça uma calculadora simples no navegador.
*/

const x = 10;
const y = 5;

function soma(){
    const soma = x + y;
    return soma;
}

function sub(){
    const sub = x - y;
    return sub;
}

function div(){
    const div = x / y;
    return div;
}

function mult(){
    const mult = x * y;
    return mult; 
}

const resultadoSoma = soma();
const resultadoSub = sub();
const resultadoDiv = div();
const resultadoMult = mult();


const resultado = x * y;

if(resultado === x + y){
    console.log(resultadoSoma);
}else if(resultado === x - y){
    console.log(resultadoSub)
}else if(resultado === x / y){
    console.log(resultadoDiv)
}else if(resultado === x * y){
    console.log(resultadoMult)
}