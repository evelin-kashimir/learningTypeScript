/* Desafio - Produto
    - Atributos: nome, preco e desconto
    - Criar o contrutor
    - OBS: Desconto é opcional (valor padrão 0)
    - OBS: Criar dois parametros, um com três e um com dois parâmetros
*/

class Produto {
    constructor(
        public nome: string, 
        public preco: number, 
        public desconto: number = 0){ }

    /* Aplica diretamente o desconto
    public aplicarDesconto(): number{
        return this.preco -= (this.desconto * this.preco);
    } */

    //Aplica o desconto e retorna um novo preco no resumo, não diminuindo direto da propriedade
    public precoComDesconto(preco: number, desconto: number): string {
        if(desconto != 0) {
            return `Preço com desconto R$ ${preco - (desconto * preco)}`
        }
        return '';
    }

    public resumo(): string {
        return `Produto: ${this.nome}\nPreço R$ ${this.preco}\nDesconto: %${this.desconto * 100}\n`+
        this.precoComDesconto(this.preco, this.desconto);
    }
}

const celular = new Produto('Iphone 15', 5000);
const noteBook = new Produto('Acer Aspire 10', 10000, 0.1);

//noteBook.aplicarDesconto();
console.log(noteBook.resumo());
console.log(celular.resumo());
