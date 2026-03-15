/*
    escreva uma função chamada ePaisagem que
    recebe dois argumentos, largura e aultura
    de uma imagem (nubero).

    retorne True se a imagem estiver no modo 
    paisagem.
*/

function ePaisagem(largura, altura){
    if (largura > altura){
        return true;
    }
    return false;
}

console.log(ePaisagem(1920, 1080));