const num1 = Number(prompt("Digite um numero: "));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = num1;
texto.innerHTML += `<p>Seu numero + 2 e ${num1 + 2}.</p>`;
texto.innerHTML +=  `${num1} e inteiro :  ${Number.isInteger(num1)}. <br/>`;
texto.innerHTML += `e NaN : ${Number.isNaN(num1)}. <br/>`;
texto.innerHTML += `Arredondando para cima: ${Math.ceil(num1)}. <br/>`;
texto.innerHTML += `Arredonadando para baixo: ${Math.floor(num1)}. <br/>`;
texto.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}. <br/>`;