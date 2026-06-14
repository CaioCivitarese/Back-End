/*
try{
    // É executado quando não há erros
    console.log('Abri um arquivo');
    console.log('manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo ');
}catch (err){
    // É executado quando há erros
    console.log('Tratando o erro');
}finally{
    // Sempre é executado
    console.log('Eu sempre sou executado');
}
*/


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando insância de Date');
    }

    if (!data){
        data = new Date();
    }

    return data.toLoacaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data);
    console.log(hora)
}catch{
    //Tratar erro
}