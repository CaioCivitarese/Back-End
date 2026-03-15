// FOR IN -> le os indices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};

for (let chaves in pessoa){
    console.log(chaves, pessoa[chaves]);
}

/*
console.log(pessoa.nome);
console.log(pessoa['nome']);
*/

/*
for (let chaves in pessoa){
    console.log(chaves);
}
*/

/*
const frutas = ['Pera', 'Maça', 'Uva'];

for (let i in frutas){
    console.log(i);
}
*/
/*
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/