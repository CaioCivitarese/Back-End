/*
const array = [1, 2, 3];
array.push(4);
array[0] = "Luiz";
console.log(array); // [ 'Luiz', 2, 3, 4 ]

const pessoa1 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/

function criaPessoa(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoa("Luiz", "Otavio", 25);
console.log(pessoa1.nome);

const pessoa2 = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} esta falando oi...`);
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrementeIdade(){
        this.idade++;
    }
};

pessoa2.fala();
pessoa2.incrementeIdade();
pessoa2.fala();