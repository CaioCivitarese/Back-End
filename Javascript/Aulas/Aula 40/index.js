const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numeros.length; i++){

    if (i === 2){
        console.log('Pulei o numero 2');
        continue;
    }

    if (i === 7){
        console.log('7 encontado, saindo...');
        break;
    }

    console.log(i);
}

/*
for (let i in numeros){

    if (i === 2){
        console.log('Pulei o numero 2');
        continue;
    }

    if (i === 7){
        console.log('7 encontado, saindo...');
        break;
    }

    console.log(i);
}
*/

/*
for (let numero of numeros){

    if (numero === 2){
        console.log('Pulei o numero 2');
        continue;
    }

    if (numero === 7){
        console.log('7 encontado, saindo...');
        break;
    }

    console.log(numero);
}
*/