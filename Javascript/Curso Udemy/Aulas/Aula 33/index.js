const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua:'Av Brasil',
        numero: 320
    }
}

// Atribuição via desestrituração
/*
const {nome: n = '', sobrenome} = pessoa;
console.log(n, sobrenome);
*/

/*
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);
*/

/*
const { endereco: {rua, numero}, endereco } = pessoa;
console.log(rua, numero, endereco);
*/

const {nome, ...resto} = pessoa;
console.log(nome, resto);