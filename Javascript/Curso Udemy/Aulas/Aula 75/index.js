/*
// new Object -> Object.prototype
const objA = {
    chaveA: 'A',
    // __proto__ : Object.prototype
};

// new Object -> Object.prototype
const objB = {
    chaveB: 'B',
    // __proto__ : objA
};

// new Object -> Object.prototype
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveB)
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(persentual){
    this.preco = this.preco - (this.preco * (persentual / 100));
}

Produto.prototype.aumento = function(persentual){
    this.preco = this.preco - (this.preco * (persentual / 100));
}

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Bremuda',
    preco: 15
}
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
});

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10);
// p1.desconto(100);
// p1.aumento(100);
console.log(p1);
console.log(p2)
