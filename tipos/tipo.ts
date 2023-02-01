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
let minhaCor : Cor = Cor.Verde;
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
    console.log('Oi')
}
digaOi();
function multiplicar(numA: number, numB: number): number {
    return numA + numB;
}
console.log(multiplicar(5,6));

//Tipo função - criando uma variável que receberá uma função
console.log('----------------');
console.log('Tipo Função');
let calculo: (a: number, b: number) => number
calculo = multiplicar
console.log(calculo(5, 6))

//Tipo função - criando uma variável que receberá uma função
console.log('----------------');
console.log('Tipo Objeto');
let usuario: { nome: string, idade: number } = {
    nome: 'Evelin',
    idade: 26
}

console.log(usuario)