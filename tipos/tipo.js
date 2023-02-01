"use strict";
//TIPOS EXPLICITOS
//string 
console.log('----------------');
console.log('String');
let nome = 'Evelin';
console.log(nome);
//number 
console.log('----------------');
console.log('Number');
let idade = 26;
console.log(idade);
//boolean
console.log('----------------');
console.log('Boolean');
let possueHobbies = true;
console.log(possueHobbies);
//array
console.log('----------------');
console.log('Array');
let hobbies = ['Cozinhar', 'Estudar', 'Praticar Esportes'];
console.log(hobbies);
hobbies = [100];
console.log(hobbies);
//Tupla - array de tipos diferentes definidos
console.log('----------------');
console.log('Tuplas');
let endereco = ['Avenida Principal', 99];
console.log(endereco);
endereco = ['Rua Importante', 88];
console.log(endereco);
//Enum - valores pré definidos
console.log('----------------');
console.log('Enum');
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul"; //2
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
//Any - tipo genérico
console.log('----------------');
console.log('Any');
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//Tipos em funções 
console.log('----------------');
console.log('Funções');
function retornaNome() {
    return nome;
}
console.log(retornaNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA + numB;
}
console.log(multiplicar(5, 6));
//Tipo função - criando uma variável que receberá uma função
console.log('----------------');
console.log('Tipo Função');
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
//Tipo função - criando uma variável que receberá uma função
console.log('----------------');
console.log('Tipo Objeto');
let usuario = {
    nome: 'Evelin',
    idade: 26
};
console.log(usuario);
//Union Types - multiplos tipos
console.log('----------------');
console.log('Union Types');
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
//Never - função que nunca termina ou nunca chega no final de forma bem sucedida
console.log('----------------');
console.log('Never');
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};
console.log(produto.validarProduto());
//Valor null opcional 
console.log('----------------');
console.log('Null opcional');
let altura = 12;
let alturaOpcional = 12;
alturaOpcional = null;
const contato01 = {
    nome: 'Fulano',
    tel1: '0939849382',
    tel2: null
};
console.log(contato01.nome);
console.log(contato01.tel1);
console.log(contato01.tel2);
let podeSerNull = null;
podeSerNull = 25;
podeSerNull = true;
