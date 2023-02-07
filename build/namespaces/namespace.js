"use strict";
//Namespaces são espaços reservados para garantir que nomes iguais de váriaveis globais
//funções e etc, sejam específicas para aquela classe, e não para os demais arquivos
var Areas;
(function (Areas) {
    const PI = 3.14;
    function circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.circunferencia = circunferencia;
    function retangulo(base, altura) {
        return base * altura;
    }
    Areas.retangulo = retangulo;
})(Areas || (Areas = {}));
const PI = 25;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);
