"use strict";
//Desafios - Alterar lógica existente em ESC05 para novas funcionalidades do ECS06
//Exercicio 01
/* ECS05
var dobro = function(valor) {
    return valor * 2
}*/
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//Exercicio 02
/* ECS05
var dizerOla = function(nome) {
    if(nome === undefined) { nome = 'Pessoa' }
}
*/
const dizerOla = (nome = 'Pessoa') => {
    return `Olá ${nome}`;
};
console.log(dizerOla());
console.log(dizerOla('Evelin'));
//Exercicio 03
//Imprimir o menor valor
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//Exercicio 04
//Adicionar todos os elementos de "nums" em array
const array = [55, 20, ...nums];
console.log(array);
//Exercicio 05
/* ECS05
const notas = [8.5, 6.3, 9.4];
var notas1 = notas[0]
var notas2 = notas[1]
var notas3 = notas[2]
*/
const notas = [8.5, 6.3, 9.4];
const [ana, pedro, julia] = notas;
console.log(`${ana} - ${pedro} - ${julia}`);
//Exercicio 06
/* ECS05
var cientista = { primeiroNome: 'Will', experiencia: 12 }
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
*/
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(`Funcionario: ${primeiroNome}, Anos de experiência: ${experiencia} anos.`);
//# sourceMappingURL=desafioEcma.js.map