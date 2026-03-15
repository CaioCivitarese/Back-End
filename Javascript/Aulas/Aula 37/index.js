const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

for (let chave in pessoa){
    console.log(chave)
}

/*
const nome = ['Luiz', 'Otavio', 'Henrique'];

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

console.log('########');

//      For Of
for (let valor of nome){
    console.log(valor);
}

console.log('########');

//      For In
for (let i in nome){
    console.log(nome)
}

console.log('########');

//      For Clasico
for (let i = 0; i < nome.length; i++){
    console.log(nome[i]);
}

console.log('########');
*/