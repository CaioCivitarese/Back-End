// chat corrigiu sem mudar a estrutura

const date = new Date();

function day () {
    const date = new Date();

    function diaTrasformarEmSemana(data){
        const dia = data.getDay(); // corrigido (usar data)

        if (dia === 0){
            return 'Domingo';
        }else if (dia === 1){
            return 'Segunda';
        }else if (dia === 2){
            return 'Terça';
        }else if (dia === 3){
            return 'Quarta';
        }else if (dia === 4){
            return 'Quinta';
        }else if (dia === 5){
            return 'Sexta';
        }else if (dia === 6){
            return 'Sábado'; // corrigido acento
        }
    }

    const dataAtual = new Date();
    const dia = diaTrasformarEmSemana(dataAtual);
    return dia;
}

function mes (){
    const date = new Date();

    function numaroDoMes(date){
        const mesAtual = date.getMonth();

        if (mesAtual === 0){
            return 'Janeiro';
        }else if (mesAtual === 1){
            return 'Fevereiro';
        }else if (mesAtual === 2){
            return 'Março';
        }else if (mesAtual === 3){
            return 'Abril';
        }else if (mesAtual === 4){
            return 'Maio';
        }else if (mesAtual === 5){
            return 'Junho';
        }else if (mesAtual === 6){
            return 'Julho';
        }else if (mesAtual === 7){
            return 'Agosto';
        }else if (mesAtual === 8){
            return 'Setembro'; // corrigido
        }else if (mesAtual === 9){
            return 'Outubro';
        }else if (mesAtual === 10){
            return 'Novembro';
        }else if (mesAtual === 11){
            return 'Dezembro'; // corrigido
        }else {
            return '';
        }
    }

    const mes = numaroDoMes(date);
    return mes;
}

const dia = day();
const mesAtual = mes();

console.log(date.toString());
console.log(dia);
console.log(mesAtual);

const diaNumero = date.getDate();
const ano = date.getFullYear();
const Hora = date.getHours();
const min = date.getMinutes();

const selhecionarH1 = document.querySelector('.container h2'); // corrigido nome provável

const msg = `${dia}, ${diaNumero} de ${mesAtual} de ${ano} <br> ${Hora}:${min}`;
selhecionarH1.innerHTML = msg;

console.log(diaNumero);
console.log(ano);


/*

//eu fiz mais ter erros

const date = new Date();

function day () {
    const date = new Date();
    function diaTrasformarEmSemana(data){
        const dia = date.getDay();

        if (dia === 0){
            textDia = 'Domingo';
            return textDia;
        }else if (dia === 1){
            textDia = 'Segunda';
            return textDia;
        }else if (dia === 2){
            textDia = 'Terça';
            return textDia;
        }else if (dia === 3){
            textDia = 'Quarta';
            return textDia;
        }else if (dia === 4){
            textDia = 'Quinta';
            return textDia;
        }else if (dia === 5){
            textDia = 'Sexta';
            return textDia;
        }else if (dia === 6){
            textDia = 'Sabado';
            return textDia;
        }
        
    }

    const dataAtual = new Date();
    const dia = diaTrasformarEmSemana(dataAtual);
    return dia;
    
}

function mes (){
    const date = new Date();

    function numaroDoMes(date){
        const mesAtual = date.getMonth();

        if (mesAtual === 0){
            textmes = 'Janeiro';
            return textmes;
        }else if (mesAtual === 1){
            textmes = 'Fevereiro';
            return textmes
        }else if (mesAtual === 2){
            textmes = 'Março';
            return textmes;
        }else if (mesAtual === 3){
            textmes = 'Abril';
            return textmes;
        }else if (mesAtual === 4){
            textmes = 'Maio';
            return textmes;
        }else if (mesAtual === 5){
            textmes = 'Junho';
            return textmes;
        }else if (mesAtual === 6){
            textmes = 'Julho';
            return textmes;
        }else if (mesAtual === 7){
            textmes = 'Agosto';
            return textmes;
        }else if (mesAtual === 8){
            textmes = 'Setembro';
            return textmes;
        }else if (mesAtual === 9){
            textmes = 'Outubro';
            return textmes;
        }else if (mesAtual === 10){
            textmes = 'Novembro';
            return textmes;
        }else if (mesAtual === 11){
            textmes = 'Dezembro';
            return textmes;
        }else {
            return '';
        }

    }

    const mes = numaroDoMes(date);
    return mes;
}
const dia = day();
const mesAtual = mes();

console.log(date.toString());
console.log(dia);
console.log(mesAtual);

const diaNumero = date.getDate();
const ano = date.getFullYear();
const Hora = date.getHours();
const min = date.getMinutes();

const selecionarH1 = document.querySelector('.container h2');

const msg = `${dia}, ${diaNumero} de ${mesAtual} de ${ano} <br> ${hora}:${min}`;
selecionarH1.innerHTML = msg;


console.log(diaNumero);
console.log(ano);
console.log(msg);
*/

/*

// como o chat recomendou

const date = new Date();

function getDiaSemana(data) {
    const dias = [
        'Domingo', 'Segunda', 'Terça', 'Quarta',
        'Quinta', 'Sexta', 'Sábado'
    ];
    return dias[data.getDay()];
}

function getMes(data) {
    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril',
        'Maio', 'Junho', 'Julho', 'Agosto',
        'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return meses[data.getMonth()];
}

const dia = getDiaSemana(date);
const mesAtual = getMes(date);

const diaNumero = date.getDate();
const ano = date.getFullYear();
const hora = String(date.getHours()).padStart(2, '0');
const min = String(date.getMinutes()).padStart(2, '0');

const selecionarH1 = document.querySelector('.container h2');

const msg = `${dia}, ${diaNumero} de ${mesAtual} de ${ano} <br> ${hora}:${min}`;
selecionarH1.innerHTML = msg;
*/