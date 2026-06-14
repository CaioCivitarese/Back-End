
// Primitivos (valores imutaveis) = string, number, boolean, undefined, null (Valores copiados)


/*
let nome = 'Luiz';
nome = "Otavio";


console.log(nome);

let a = "A";
let b = a;
console.log(a, b);

a = "Outra coisa";
console.log(a, b);
*/

// Referencia (Mutavel) = array, object, funcition (Passados por referencia)
/*
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Luiz");
console.log(a, c);
*/

const a = {
    nome: "Luiz",
    sobrenome: "Otavio"
};

const b = a;
a.nome = "Joao";
console.log(a);
console.log(b)