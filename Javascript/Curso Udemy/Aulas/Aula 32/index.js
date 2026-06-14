/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a]

[a, b, c] = letras;
// [a, b, c] = [1, 2, 3];

console.log(a, b, c);
*/

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeioNumero = numeros[0];
console.log(primeioNumero);
*/
/*
// ...rest, ...spread
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeioNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeioNumero, segundoNumero, terceiroNumero);
console.log(resto);
*/

/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const ordem = [um, , trez, , cinco, , sete];
console.log(um, trez, cinco, sete);
*/
/*
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]);
*/

/*
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [,[,,seis]] = numeros;
console.log(seis);
*/

const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista2);