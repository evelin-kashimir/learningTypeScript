class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, 
        public modelo: string,
        private velocidadeMaxima: number = 200) { }

        //protected disponibiliza para a herança
        protected alterarVelocidade(delta: number): number {
            const novaVelocidade = this.velocidadeAtual + delta;
            
            if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
                this.velocidadeAtual = novaVelocidade;
            } else {
                this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
            }
            return this.velocidadeAtual;
        }

        public acelerar(): string {
            return `Vrum!!!! KM: ${this.alterarVelocidade(5)}`;
        }

        public frear(): string {
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
    constructor(modelo: string, velocidadeMaxima: number) {
        super("Ferrari", modelo, velocidadeMaxima); //construtor da classe mãe
    }

    public acelerar(): string {
        return `Vrum!!!! KM: ${this.alterarVelocidade(20)}`;
    }

    public frear(): string {
        return `Irrrrr!!!! KM: ${this.alterarVelocidade(-15)}`;
    } 
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} - ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

//Getters & Setters
class Pessoa {
    private _idade: number = 0;

    get idade(): number {
        return this._idade;
    }

    set idade(idade: number) {
        if(idade >= 0 && idade <= 120) {
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
    PI: number = 3.1416;

    areaCir(raio: number): number {
        return this.PI * raio * raio;
    }
}
const m1 = new Matematica();
m1.PI = 4.2;
console.log(m1.areaCir(4));

//Utilizando atributos e métodos estáticos
//Classes estáticas são úteis para métodos de conversão, utils e etc
class Mat {
    static PI: number = 3.1416;

    static areaCir(raio: number): number {
        return this.PI * raio * raio;
    }
}
console.log(Mat.areaCir(4));

//Classes Abstratas - Classe modelo; Não pode ser instanciada, somente herdada (interface)
abstract class Calculo {
    protected resultado: number = 0;
    abstract executar(...numeros: number[]): void; //método que será herdado e modificado

    getResultado(): number {
        return this.resultado;
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
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
    private static instance: Unico = new Unico
    private constructor() { }

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date;
    }
}
//const errado = new Unico()
console.log(Unico.getInstance().agora());