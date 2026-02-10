/*
Primeira Infância: 0 a 3 anos (período crítico de desenvolvimento cerebral).
Segunda Infância (Pré-escola): 3 a 6 anos.
Terceira Infância (Escolar): 6 a 12 anos.
Adolescência: 10 a 19 anos (OMS) ou 12 a 18 anos (ECA).
Adulto Jovem: 20 a 39 anos.
Adulto de Meia-idade: 40 a 59 anos.
Idoso: 60 anos ou mais. 
*/

const form = document.querySelector('.form');

form.addEventListener('submit', function (evento){
    evento.preventDefault();
    const inputIdade = Number(inputIdade.value);
    return inputIdade;
});

function metrica(){
    if (inputIdade <= 3){
        const infacia1 = document.innerHTML('Você esta na Primeira infância');
        return infacia1;
    }
}

function criarP(){
    const evento = document.createElement('p');
    return evento;

}

function resposta(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML();

    const p = criarP();

    if (!altura){
        p.classList('certo')
    }else {
        p.classList('invalido')
        document.innerHTML('Isso n e um numero!')
    }
}