"use strict";
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    //protected disponibiliza para a herança
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return `Vrum!!!! KM: ${this.alterarVelocidade(5)}`;
    }
    frear() {
        return `Irrrrr!!!! KM: ${this.alterarVelocidade(-5)}`;
    }
}
const carro01 = new Carro('Fiat', 'Uno', 185);
//Criando um array de 50 posições e atribuindo a todas elas o valor zero,
//tecnica muito útil quando precisamos repetir algo por um determinado numero de vezes
//Array(35).fill(0).forEach(() => console.log(carro01.acelerar()));
//Array(35).fill(0).forEach(() => console.log(carro01.frear()));
class Ferrari extends Carro {
    //Muito útil quando se quer alterar algum atributo para default
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima); //construtor da classe mãe
    }
    acelerar() {
        return `Vrum!!!! KM: ${this.alterarVelocidade(20)}`;
    }
    frear() {
        return `Irrrrr!!!! KM: ${this.alterarVelocidade(-15)}`;
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} - ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
//Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        if (idade >= 0 && idade <= 120) {
            this._idade = idade;
        }
    }
}
const maria = new Pessoa;
maria.idade = 10;
console.log(maria);
//# sourceMappingURL=acesso.js.map