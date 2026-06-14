// IIFE -> immediately invoked function expression

(function() {
    const nome = 'Luiz';
    const sobrenome = 'Otavio';
    function criaNome (){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome());

    }
    
    
    falaNome();

})();

const nome = 'Qualquer coisa';

/*
function qualquerCoisa() {
    console.log(19891461)
}

qualquerCoisa();
*/