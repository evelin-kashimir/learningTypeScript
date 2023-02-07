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
//Membros estáticos
//Da forma tradicional
class Matematica {
    constructor() {
        this.PI = 3.1416;
    }
    areaCir(raio) {
        return this.PI * raio * raio;
    }
}
const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCir(4));
//Utilizando atributos e métodos estáticos
//Classes estáticas são úteis para métodos de conversão, utils e etc
class Mat {
    static areaCir(raio) {
        return this.PI * raio * raio;
    }
}
Mat.PI = 3.1416;
console.log(Mat.areaCir(4));
//Classes Abstratas - Classe modelo; Não pode ser instanciada, somente herdada (interface)
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total * atual);
    }
}
let res = new Soma();
res.executar(2, 3, 4, 5);
console.log(res.getResultado());
res = new Multiplicacao();
res.executar(2, 3, 4, 5);
console.log(res.getResultado());
//Sigleton - Instancia única, parecido com o static, porém pode ser instanciado ou herdado
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()
console.log(Unico.getInstance().agora());
//# sourceMappingURL=acesso.js.map