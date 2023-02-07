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
    constructor(protected base: number, protected altura: number) { }
    abstract area(): number; 
}

class Retangulo extends FormaGeometrica {
    area(): number {
        return this.altura * this.base
    }
}

const ret = new Retangulo(5, 7);
console.log(ret.area());

//Exercicio 3 - Getters & Setters
class Estagiario {
    private _primeiroNome: string = '';

    get primeiroNome(): string {
        return this._primeiroNome;
    }

    set primeiroNome(value: string) {
        this._primeiroNome = value;
    }
}
const programador = new Estagiario();
programador.primeiroNome = 'Evelin';
console.log(programador);