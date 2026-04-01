// Valor por referência
/*
const nomes = ['Eduardo','Maria', 'João'];
nomes[2] = 'Joana';
delete nomes[2];
console.log(nomes);
*/

// String, Objetos, Funções, Numeros

/*
const nomes = ['Eduardo','Maria', 'João'];
const novo = [...nomes];

console.log(nomes);
console.log(novo);
*/

/*
const nomes = ['Eduardo','Maria', 'João'];
console.log(nomes.length);
*/

/*
const nomes = ['Eduardo','Maria', 'João'];
const removido = nomes.pop();
console.log(nomes, removido)
*/

/*
const nomes = ['Eduardo','Maria', 'João'];
const removido = nomes.shift();
console.log(nomes, removido);
*/
/*
const nomes = ['Eduardo','Maria', 'João'];
nomes.push('João');
nomes.push('Wallace');
console.log(nomes);
*/

/*
const nomes = ['Eduardo','Maria', 'João'];
nomes.unshift('João');
nomes.unshift('Wallace');
console.log(nomes);
*/

/*
const nomes = ['Eduardo','Maria', 'João', 'Wallace', 'Rosana'];
const novo = nomes.slice(1,3);
console.log(novo);
*/

/*
const nomes = ['Eduardo','Maria', 'João', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, -2);
console.log(novo);
*/

/*
const nome = 'Luiz Otavio Miranda';
const nomes = nome.split(' ');
console.log(nomes);
*/

const nomes = ['Eduardo','Maria', 'João', 'Wallace', 'Rosana'];
const nome = nomes.join(' ');
console.log(nome)