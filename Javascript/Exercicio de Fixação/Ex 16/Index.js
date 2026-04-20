/*
    Conte quantos caracteres tem uma string.
    Dica: length
*/

function LetrasEmTexto(texto){
    if(typeof texto === 'string'){
        const numeroDeLetras = texto.length;
        console.log(numeroDeLetras);
    }else{
        console.log('Isso não e um texto')
    }
}

LetrasEmTexto('Pedro');
