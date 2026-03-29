// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa(new)
function Pessoa(nome, sobrenome){

    const ID = 123456;
    const metodoInterno = function (){
        
    }

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.nome + ' ' + this.sobrenome +': sou um metodo ')
    }
}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Olverira');

p1.metodo();