const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];

// nomes.splice(Indice atual, Delete, elemet1, element2, element3);
// pop
// const removidos = nomes.splice(-1, 1);

// Shift
//const removidos = nomes. splice(0, 1); 

// Push
const removidos = nomes.splice(nomes.length, 0, 'Luiz', 'Olavio');

console.log(nomes, removidos);
