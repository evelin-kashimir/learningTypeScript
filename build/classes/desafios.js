"use strict";
/* Desafio - Produto
    - Atributos: nome, preco e desconto
    - Criar o contrutor
    - OBS: Desconto é opcional (valor padrão 0)
    - OBS: Criar dois parametros, um com três e um com dois parâmetros
*/
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.nome = nome,
            this.preco = preco,
            this.desconto = desconto;
    }
    aplicarDesconto() {
        return this.preco -= (this.desconto * this.preco);
    }
}
const celular = new Produto('Iphone 15', 5000);
const noteBook = new Produto('Acer Aspire 10', 10000, 0.1);
noteBook.aplicarDesconto();
console.log(noteBook);
console.log(celular);
//# sourceMappingURL=desafios.js.map