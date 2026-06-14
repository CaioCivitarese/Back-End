/*
    Inverta uma string.
    Dica: split, reverse, join
*/

function textoInvertido (texto) {
    if(typeof texto === 'string' ){
        const inverterTexto = texto.split('').reverse().join('');
        console.log(inverterTexto);
    }else{
        console.log('Isso no e um texto');
    }
}

textoInvertido('Caio');
