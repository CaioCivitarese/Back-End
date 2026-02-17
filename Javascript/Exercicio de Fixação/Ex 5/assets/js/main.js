/*
    2️⃣ Maior de idade

    Peça a idade e mostre:

    Pode dirigir

    Não pode dirigir
*/
/*
        //Codigo que eu fiz

const form = document.querySelector('#formulario');

function criaP(){
    const p = document.createElement('p')
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado');
    }else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

form.addEventListener('submit', function definirIdade(e){
    e.preventDefault();
    const inputIdade = e.target.querySelector('#idade');
    const idade = Number(inputIdade.value);

    

    if(idade < 18){
        const msg = 'Não pode dirigir';
        setResultado(msg, isValid);
    }else {
        const msg = 'Pode dirigir';
        setResultado(msg, isValid);
    }
});
*/


/*
    2️⃣ Maior de idade
*/

/*
            Codigo corigido
*/

const form = document.querySelector('#formulario');

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

form.addEventListener('submit', function definirIdade(e){
    e.preventDefault();

    const inputIdade = e.target.querySelector('#idade');
    const idade = Number(inputIdade.value);

    let msg;
    let isValid;

    if (idade < 18){
        msg = 'Não pode dirigir';
        isValid = false;
    } else {
        msg = 'Pode dirigir';
        isValid = true;
    }

    setResultado(msg, isValid);
});
