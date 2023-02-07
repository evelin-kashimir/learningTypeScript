//VARIÁVEIS

//VAR
//console.log(seraQuePode);
var seraQuePode = '?'; //hoisting - issamento 
// * É como se a variável tivesse sido jogada pra cima

//var tem escopo global mesmo sendo declarada em bloco, se declarada e uma função, não tem hoisting
let estaFrio = true;
if(estaFrio) {
    var acao = 'Colocar o casaco!';
}
//console.log(acao)
//Utilizando o mesmo nome com o var, porém com escopo de função
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar()
console.log(segredo);

//LET
//Não tem hoisting - issamento
//Se declarada em bloco ou função, só pode ser utilizada dentro daquele bloco ou função
let teste = true;
if(teste) {
    let acaoLet = 'Colocar o casaco!';
    console.log(acaoLet);
}

//CONST - constantes, não podem ter seus valores alterados
//const tem escopo de bloco, de função e global 
const cpf: string = '123.456.000-99';
//cpf = '789.654.123-00';
console.log(cpf);

for(var i = 1; i< 10; i++){
    console.log(i);
}
console.log(`fora -> ${i}`);

for(let j = 1; j< 10; j++){
    console.log(j);
}
//console.log(`fora -> ${j}`);

//ARROW FUNCTION
//function anonima comum
const somar = function(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(somar(2,2));

//arrow sem return
const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(9, 3));

const saudacao = () => console.log("Olá");
saudacao();

const falarCom = (pessoa: string) => console.log(`Olá ${pessoa}`)
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

console.log("-------------------")
//Parametros padrão
function contagemRegressiva(fim: number = 0, inicio: number = 3): void {
    console.log(inicio)
    while(inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!');
}
contagemRegressiva();
contagemRegressiva(1, 5);

//Rest e Spread
const numbers = [1, 10, 99, -5]
//Spread - Espalhar, adiciona elementos de um array ou obj através de ... antes da referencia
console.log(Math.max(...numbers));

const turmaA: string[] = ['João', 'Maria', 'Fernanda'];
const turmaB: string[] = ['Fernando', 'Matheus', 'Luis', ...turmaA];

console.log(turmaB)

//Rest - Agrupar, define um número indefinido de parametros através de ... antes da referencia
function retornaArray(...args: number[]): number[] {
    return args;
}

const numeros = retornaArray(...numbers);
console.log(numeros)

//Rest e Spread em Tuplas
const tupla: [number, string, boolean] = [1, 'abc', false];
function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla)

function tuplaParam2(...param: [number, string, boolean]): void {
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
    ids: [ ...numbers ]
}
const { nome: nomeItem, preco, ids } = item;
console.log(`Nome do item: ${nomeItem} Preco: ${preco} Ids: ${ ids }`);

//CallBack - jeito antigo
console.log('-----------------------');
console.log('CalBack');

function esperar3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois...');
    }, 3000)
}
esperar3s(function(resultado: string) {
    console.log(resultado)
});

//Promise - jeito novo - Algo que se espera receber de algum lugar, 
//tratando como res o dado positivo e reject caso haja algum erro
function esperarPromise() {
    return new Promise((res: any) => {
        setTimeout(() => {
            res('3s depois, utilizando Promise...');
        }, 3000)
    });
}
//depois da promise, faça algo com aquele dado que foi recebido, seja ele erro ou success
esperarPromise().then(dado => console.log(dado));

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json()) //transformando em json a resposta da chamada da API
    .then((personagem => console.log(personagem.films))) 
    .then(films => films)
    .catch(res => console.log('Caiu no Catch')) //quando não tem uma chamada bem sucedida a API


const clientes = [
    { id: 1, nome: 'Evelin'},
    { id: 2, nome: 'Julia'},
    { id: 3, nome: 'Gaia'}
];

async function printCustomer(customerId: number){
    console.log(`[ID] -> ${customerId}`)
}
    
async function getAndPrintAllCustomers() {
    const customers = [...clientes]
    for (const customer of customers) {
        await printCustomer(customer.id)
    }
}

setTimeout(() => {
    getAndPrintAllCustomers()
}, 2000)