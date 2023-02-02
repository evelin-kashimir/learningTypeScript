"use strict";
//VARIÁVEIS
//VAR
//console.log(seraQuePode);
var seraQuePode = '?'; //hoisting - issamento 
// * É como se a variável tivesse sido jogada pra cima
//var tem escopo global mesmo sendo declarada em bloco, se declarada e uma função, não tem hoisting
let estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
}
//console.log(acao)
//Utilizando o mesmo nome com o var, porém com escopo de função
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
//LET
//Não tem hoisting - issamento
//Se declarada em bloco ou função, só pode ser utilizada dentro daquele bloco ou função
let teste = true;
if (teste) {
    let acaoLet = 'Colocar o casaco!';
    console.log(acaoLet);
}
//CONST - constantes, não podem ter seus valores alterados
//const tem escopo de bloco, de função e global 
const cpf = '123.456.000-99';
//cpf = '789.654.123-00';
console.log(cpf);
for (var i = 1; i < 10; i++) {
    console.log(i);
}
console.log(`fora -> ${i}`);
for (let j = 1; j < 10; j++) {
    console.log(j);
}
//console.log(`fora -> ${j}`);
//ARROW FUNCTION
//function anonima comum
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
//arrow sem return
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(9, 3));
const saudacao = () => console.log("Olá");
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
falarCom('João');
//arrow com this - nunca varia
// function normalComThis() {
//     console.log(this);
// }
//bind - adiciona ao this da função o valor que foi especificado
// adicionando esse resultado na variável que está sendo atribuída
// const normalComThisEspecial = normalComThis.bind(2);
// normalComThisEspecial();
//this usado dentro da função arrow, é o pai do qual ela foi escrita,
//nessa caso, é o window
// const arrowComThis = () => console.log(this);
// arrowComThis();
console.log("-------------------");
//Parametros padrão
function contagemRegressiva(fim = 0, inicio = 3) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(1, 5);
//Rest e Spread
const numbers = [1, 10, 99, -5];
//Spread - Espalhar, adiciona elementos de um array ou obj através de ... antes da referencia
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Matheus', 'Luis', ...turmaA];
console.log(turmaB);
//Rest - Agrupar, define um número indefinido de parametros através de ... antes da referencia
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(...numbers);
console.log(numeros);
//Rest e Spread em Tuplas
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...param) {
    console.log(`2 ) ${param[0]} ${param[1]} ${param[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (array) - desestruturando, extraindo dados de um array
//extraindo dados de um jeito comum
const caracteristicas = ['Motor Zetec 1.8', 2020];
//const motor = caracteristicas[0];
//const ano = caracteristicas[1];
//com destructuring
const [motor, ano] = caracteristicas;
console.log(`Motor: ${motor}, Ano: ${ano}`);
//Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    ids: [...numbers]
};
const { nome: nomeItem, preco, ids } = item;
console.log(`Nome do item: ${nomeItem} Preco: ${preco} Ids: ${ids}`);
//# sourceMappingURL=ecmascript.js.map