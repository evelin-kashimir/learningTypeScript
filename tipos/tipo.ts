//TIPOS EXPLICITOS

//string 
console.log('----------------');
console.log('String');

let nome: string = 'Evelin';
console.log(nome);

//number 
console.log('----------------');
console.log('Number');

let idade: number = 26;
console.log(idade);

//boolean
console.log('----------------');
console.log('Boolean');

let possueHobbies: boolean = true;
console.log(possueHobbies);

//array
console.log('----------------');
console.log('Array');

let hobbies: any[] = ['Cozinhar', 'Estudar', 'Praticar Esportes'];
console.log(hobbies);

hobbies = [100];
console.log(hobbies);

//Tupla - array de tipos diferentes definidos
console.log('----------------');
console.log('Tuplas');

let endereco: [string, number] = ['Avenida Principal', 99];
console.log(endereco);

endereco = ['Rua Importante', 88];
console.log(endereco);

//Enum - valores pré definidos
console.log('----------------');
console.log('Enum');

enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul   //2
}
let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);

//Any - tipo genérico
console.log('----------------');
console.log('Any');

let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 }
console.log(carro);

//Tipos em funções 
console.log('----------------');
console.log('Funções');

function retornaNome(): string {
    return nome;
}
console.log(retornaNome());
function digaOi(): void{
    console.log('Oi');
}
digaOi();
function multiplicar(numA: number, numB: number): number {
    return numA + numB;
}
console.log(multiplicar(5,6));

//Tipo função - criando uma variável que receberá uma função
console.log('----------------');
console.log('Tipo Função');

let calculo: (a: number, b: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));

//Tipo função - criando uma variável que receberá uma função
console.log('----------------');
console.log('Tipo Objeto');

let usuario: { nome: string, idade: number } = {
    nome: 'Evelin',
    idade: 26
}
console.log(usuario);

//Union Types - multiplos tipos
console.log('----------------');
console.log('Union Types');

let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);

//Never - função que nunca termina ou nunca chega no final de forma bem sucedida
console.log('----------------');
console.log('Never');
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if(this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
}
console.log(produto.validarProduto());

//Valor null opcional 
console.log('----------------');
console.log('Null opcional');

let altura = 12;
let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato01: Contato = {
    nome: 'Fulano',
    tel1: '0939849382',
    tel2: null
}

console.log(contato01.nome);
console.log(contato01.tel1);
console.log(contato01.tel2);

let podeSerNull = null;
podeSerNull = 25;
podeSerNull = true;

