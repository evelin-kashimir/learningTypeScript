class Carro {
    private velocidadeAtual: number = 0;

    constructor(public marca: string, 
        public modelo: string,
        private velocidadeMaxima: number = 200) { }

        private alterarVelocidade(delta: number): number {
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
Array(35).fill(0).forEach(() => console.log(carro01.acelerar()));
Array(35).fill(0).forEach(() => console.log(carro01.frear()));
