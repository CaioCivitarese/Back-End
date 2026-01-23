// String, Nuber, Undefined, Null, Boolean

const nome = 'Luiz'; //String
const nome2 = "Caio"; //String
const nome3 = `Lucca`; //string
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //Undefined = não aponta para logar nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const boolean = true; //Boolean
const boolean2 = false; //Boolean

console.log(typeof nome);
console.log(typeof num1);
console.log(typeof sobrenomeAluno);
console.log(typeof boolean);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(b);

let c = 2;
const d = c;
console.log(c, d); // 2, 2

c = 3;
console.log(c, d); // 3, 2
