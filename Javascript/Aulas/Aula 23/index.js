/*
&& -> false && true -> false
FALSY
*false
0
"" '' ``
null
undefined
NaN
*/

/*
function falaOi(){
    return 'Oi';
}

let vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi());
*/

/*
|| -> true && false -> vai retornar "o valor verdadeira"
*/

//console.log(0 || false ||null || 'Luiz Otavio' || true);

/*
const corUsuario = 'Vermelho';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);