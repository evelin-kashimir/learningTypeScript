/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe hora e retorna uma string
            -> Ponto normal (<=8)
            -> Fora do horário (> 8)
*/
const funcionario: Funcionario = {
    sup: [
        'João',
        'Fernanda',
        'Julia'
    ],
    baterPonto: (hora: number): string => {
        if (hora <= 8 && hora != 0) {
            return 'Horário normal';
        }
        return 'Fora do horário';
    }
}

console.log(funcionario)
console.log(funcionario.sup)
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

//Alias - tipo personalizado para unificar repetições
type Funcionario = {
    sup: string[],
    baterPonto: (horas: number) => string
}

//Desafio - Tipagem de objeto
type Conta = {
    saldo: number,
    depositar: (valor: number) => number
}

type Cliente = {
    nome: string,
    contaBancaria: Conta,
    contatos: string[]
}

const contaBancaria: Conta = { 
    saldo: 3456,
    depositar(valor: number) {
        return this.saldo += valor;
    }
}

const correntista: Cliente = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['1236589636', 'e-mail@email.com']
}