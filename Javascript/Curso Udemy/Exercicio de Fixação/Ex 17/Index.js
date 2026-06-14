/*
    Some todos os números de um array.
    Dica: reduce, for, +=
*/
const arry = [1 ,2 , 4, 10, 20, 100];
const someArray = arry.reduce((valor, acumulador) => {
   acumulador += valor;
   return acumulador; 
})
 console.log(someArray);