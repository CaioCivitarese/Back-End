/*
    4️⃣ Nome grande ou pequeno

    Peça um nome e diga:

    Nome curto (≤ 4 letras)

    Nome normal

    Nome grande (≥ 10)
*/

let nome = "Caio".length;


console.log(nome)

function numeroDELetras (){
    let n = nome;
    if (n <= 4){
        return 'Nome pequeno';
    }else if (n >= 5 && n <= 9){
        return "Nome normal";
    }else if (n >= 10){
        return 'Nome grande';
    }else {
        return 'Nome invalido';
    }
}

console.log(numeroDELetras());