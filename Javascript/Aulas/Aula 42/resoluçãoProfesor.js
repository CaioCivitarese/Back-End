/*
    escreva uma função chamada ePaisagem que
    recebe dois argumentos, largura e aultura
    de uma imagem (nubero).

    retorne True se a imagem estiver no modo 
    paisagem.
*/

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1920, 1080));

/*
function ePaisagem(largura, altura){
    return largura > altura;
}

console.log(ePaisagem(1920, 1080));
*/