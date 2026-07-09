const produto = {
    nome:'Caneca base',
    preco: 1.8,

};

// const caneca = Object.assign({}, produto, {material: 'Porcelana'});

const outraCoisa = {
    ...produto,
    material: 'Porcelana',

};

console.log(produto);
//console.log(Object.keys(produto));
//Object.freeze(produto);
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome  = 'Outra coisa';
delete produto.preco;
console.log(Object.values(produto));
for(let valor of Object.entries(produto)){{
    console.log(valor[0], valor[1]);
}}
console.log(produto);
