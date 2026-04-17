// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15,22, 27];
const numeroEmDobro = numeros.map(valor => valor * 2);
console.log(numeroEmDobro);

/*
    Para cada elemento:
Retorne apenas uma string com o nome dda pessoa
Remova apenas a chave "nome" do objeto
Adiciona uma chave id em cada objetivo
*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomeDaPessoas = pessoas.map(obj => obj.nome);
console.log(nomeDaPessoas);

const removendoNome = pessoas.map(obj => ({ idade: obj.idade }));
console.log(removendoNome);

const addChaveId = pessoas.map(function(obj,indice) {
    const newObj = { ...obj };
    newObj.id = indice
    return newObj
});

console.log(addChaveId);
console.log(pessoas);