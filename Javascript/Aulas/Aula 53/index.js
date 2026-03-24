function retornaFuncao(nome) {
return function (){
        return nome;
    };
}

const fucao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

console.dir(fucao());
console.dir(funcao2());

console.log(fucao(), funcao2());