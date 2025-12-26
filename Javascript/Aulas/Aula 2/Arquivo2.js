// Variaveis

const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdin,
});

let name;

prompt.question("Qual o seu nome?", answer =>{
    name = answer;
    prompt.close();
});

pronpt.on("close", () => {
    console.log("Seja bem-vindo", name)
});
