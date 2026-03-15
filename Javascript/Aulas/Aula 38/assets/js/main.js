const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgrandColorBody = estilosBody.backgroundColor;

for (let p of ps ){
    p.style.backgroundColor = backgrandColorBody;
    p.style.color = 'white'
}

