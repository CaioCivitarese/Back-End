const elementos = [
    {tag: 'p', texto: 'Frase'},
    {tag: 'div', texto: 'Frase 1'},
    {tag: 'footer', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
];

const constainer = document.querySelector('.container');
const div = document.createElement('div');
/*
for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
*/

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

constainer.appendChild(div);