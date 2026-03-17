function mostraHora(){
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: false
    });
}
/*
function fucaoDoInterval(){
    console.log(mostraHora());
}
*/

/*
setInterval(function (){
    console.log(mostraHora());
}, 1000);
*/

const timer = setInterval(function (){
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function (){
    console.log('Olá Mundo');
}, 5000);