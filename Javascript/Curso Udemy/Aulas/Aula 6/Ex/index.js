const nome = "Caio"; 
const soblenome = "Civitarese"
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura); //peso / (altura * altura)
let anoNascimento = 2025 - idade;

//tamplates Stringes
console.log(`${nome} ${soblenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc} ${nome} naicu  em ${anoNascimento}.`);