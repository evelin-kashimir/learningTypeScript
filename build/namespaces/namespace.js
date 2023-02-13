"use strict";
//Namespaces são espaços reservados para garantir que nomes iguais de váriaveis globais
//funções e etc, sejam específicas para aquela classe, e não para os demais arquivos
// namespace Areas {
//     const PI = 3.14;
//     export function circunferencia(raio: number): number {
//         return PI * Math.pow(raio, 2);
//     }
//     export function retangulo(base: number, altura: number): number {
//         return base * altura;
//     }
// }
//importando namespaces
///<reference path="geometria.ts"/>
///<reference path="retangulo.ts"/>
//const PI = 25;
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
//console.log(PI);
//Namespaces aninhados
// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14;
//         export function circunferencia(raio: number): number {
//             return PI * Math.pow(raio, 2);
//         }
//         export function retangulo(base: number, altura: number): number {
//             return base * altura;
//         }
//     }
// }
