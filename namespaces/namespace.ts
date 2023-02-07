//Namespaces são espaços reservados para garantir que nomes iguais de váriaveis globais
//funções e etc, sejam específicas para aquela classe, e não para os demais arquivos
namespace Areas {
    const PI = 3.14;

    export function circunferencia(raio: number): number {
        return PI * Math.pow(raio, 2);
    }

    export function retangulo(base: number, altura: number): number {
        return base * altura;
    }
}
const PI = 25;
console.log(Areas.circunferencia(10));
console.log(Areas.retangulo(10, 20));
console.log(PI);