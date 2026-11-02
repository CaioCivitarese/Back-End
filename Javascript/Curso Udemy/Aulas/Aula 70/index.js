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

const pessoa2 = {
    nome: 'Caio',
    sobrenome: 'Civitarese'
};

console.log(pessoa1, pessoa2);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';

delete pessoa1.nome;
console.log(pessoa1);
*/

/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otavio';
pessoa1.idade = 20;
pessoa1.falarnome = function(){
    return (`${this.nome} esta falando seu nome.`);
};
pessoa1.getDataNascimentos = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimentos());


for(let chave in pessoa1){
    console.log(pessoa1[chave])
}
*/

// Factory functions / Constructor functions / Classes

/*
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto());
*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

}

const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa('Caio', 'Civitarese')
console.log(p1)
console.log(p2)
