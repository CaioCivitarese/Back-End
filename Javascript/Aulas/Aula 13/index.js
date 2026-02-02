// IEEE 754-2008 padrão de representação de números em ponto flutuante

let num1 = 0.7;  //number
let num2 = 0.1; //number

//num1 = (num1 * 100) + (num2 * 100) / 100; //0.8
//num1 = (num1 * 100) + (num2 * 100) / 100; //0.9
//num1 = (num1 * 100) + (num2 * 100) / 100; //1.0


//num1 = parseFloat(num1.toFixed(2));
console.log(num1);
console.log(Number.isInteger(num1)); // Verificando se o valor é um número inteiro

//console.log(num1 + num2); // Adição
//console.log(num1.toString() + num2);
//console.log(typeof num1); // Verificando o tipo da variável
//num1 = num1.toString(); // Convertendo número para string
///console.log(typeof num1); // Verificando o tipo da variável novamente
//console.log(num1.toFixed(2));
//console.log(Number.isInteger(num1));
//let temp = num1 + "5";
//console.log(Number.isNaN(temp)); // Verificando se o valor é NaN
//console.log(temp);