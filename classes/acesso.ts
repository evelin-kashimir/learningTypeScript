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