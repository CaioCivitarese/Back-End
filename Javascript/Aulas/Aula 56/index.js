// Factory function (Função Fabrica)ç

function criaPessoa(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto (valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function (assunto = 'Falando sobre nada'){
            return `${this.nome} esta ${assunto}.`;
        },
        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura * 2);
            return indice.toFixed(2);
        }

    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);


/*
p1.nomeCompleto = "Caio Faria Civitarese";
console.log(p1.nomeCompleto());
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala);
*/

/*
const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
console.log(p2.imc());

console.log(p1.fala("falando sobre JS"));
console.log(p1.nome);
console.log(p2.fala('falando sobre JS'));
*/
