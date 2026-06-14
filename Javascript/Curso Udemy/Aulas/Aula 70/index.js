/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
*/


/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 30

pessoa1.falaNome = function(){
    return(`${this.nome} esta falando eu nome.`); 
};
pessoa1.getDataNaicimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;

};

console,log(pessoa1.getDataNaicimento());

for (let chave in pessoa1){
    console.log(pessoa1[chave]);
};
*/

// Factoy functions / Constructor functions / Classes

/*
    // Factoy functions

    function criarPessoa(nome, sobrenome){
        return{
            nome,
            sobrenome,
            get nomeCompleto(){
                return`${this.nome} ${this.sobrenome}`;

            }
        };
    }

    const p1 = criarPessoa('Luiz', 'Otavio');
    console.log(p1.nomeCompleto());
*/

// Constructor functions

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

// p1 = (WNDERESO DE MEMORIA) -> 'Valor'

const p1 = new Pessoa('Luiz', 'Miranda');
// p1 = 'Outra coisa' <- Não pode;
p1.nome = 'Outra coisa';
const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);
