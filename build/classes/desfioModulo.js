"use strict";
//Exercicio 1 - Classe (Alterar um código JS para um código TS)
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooooot!');
    }
    acelerar(valor) {
        return this.velocidade += valor;
    }
    get velocidadeAtual() {
        return this.velocidade;
    }
}
const moto1 = new Moto('Biz');
moto1.buzinar();
moto1.acelerar(30);
console.log(moto1.velocidadeAtual);
//Exercicio 2 - Herança
class FormaGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
}
class Retangulo extends FormaGeometrica {
    area() {
        return this.altura * this.base;
    }
}
const ret = new Retangulo(5, 7);
console.log(ret.area());
//Exercicio 3 - Getters & Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(value) {
        this._primeiroNome = value;
    }
}
const programador = new Estagiario();
programador.primeiroNome = 'Evelin';
console.log(programador);
