//Exercicio 1 - Classe (Alterar um código JS para um código TS)
class Moto {
    private velocidade: number = 0
    constructor(private nome: string){  }

    buzinar(): void {
        console.log('Toooooot!');
    }

    acelerar(valor: number): number {
        return this.velocidade += valor;
    }

    get velocidadeAtual(): number {
        return this.velocidade
    }
}

const moto1 = new Moto('Biz');
moto1.buzinar();
moto1.acelerar(30);
console.log(moto1.velocidadeAtual);

//Exercicio 2 - Herança
abstract class FormaGeometrica {
    protected base: number = 0
    protected altura: number = 0   
}

class Retangulo extends FormaGeometrica {
    constructor(base: number, altura: number){
        super();
        this.base = base,
        this.altura = altura
    }
    area(): number {
        return this.altura * this.base
    }
}
const ret = new Retangulo(5, 7);
console.log(ret.area());

//Exercicio 3 - Getters & Setters
class Estagiario {
    private primeiroNome: string = '';

    get nome(): string {
        return this.primeiroNome;
    }

    set setarNome(value: string) {
        this.primeiroNome = value;
    }
}
const programador = new Estagiario();
programador.setarNome = 'Evelin';
console.log(programador);