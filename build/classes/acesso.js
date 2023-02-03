"use strict";
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
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
Array(35).fill(0).forEach(() => console.log(carro01.acelerar()));
Array(35).fill(0).forEach(() => console.log(carro01.frear()));
//# sourceMappingURL=acesso.js.map