// (condição) ? 'Valor Verdadeiro' : 'Valor Falso'

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';

console.log(nivelUsuario);
/*
if (pontuacaoUsuario >= 1000){
    console.log('Usuario VIP')
} else {
    console.log('Usuario Normal')
}
*/

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);