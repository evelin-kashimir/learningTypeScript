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
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends FormaGeometrica {
    constructor(base, altura) {
        super();
        this.base = base,
            this.altura = altura;
    }
    area() {
        return this.altura * this.base;
    }
}
const ret = new Retangulo(5, 7);
console.log(ret.area());
//Exercicio 3 - Getters & Setters
class Estagiario {
    constructor() {
        this.primeiroNome = '';
    }
    get nome() {
        return this.primeiroNome;
    }
    set setarNome(value) {
        this.primeiroNome = value;
    }
}
const programador = new Estagiario();
programador.setarNome = 'Evelin';
console.log(programador);
//# sourceMappingURL=desfioModulo.js.map