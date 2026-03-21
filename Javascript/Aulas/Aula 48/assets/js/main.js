const inputTarefa = document.querySelector('.input-tarefa');
const btmTarefa = document.querySelector('.btn-tarefas');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e){
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);

    }
});

function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa (textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limparInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btmTarefa.addEventListener('click', function (){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexo = tarefa.innerText;
        tarefaTexo = tarefaTexo.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexo);
    }

    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
