"use strict";
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe hora e retorna uma string
            -> Ponto normal (<=8)
            -> Fora do horário (> 8)
*/
const funcionario = {
    sup: [
        'João',
        'Fernanda',
        'Julia'
    ],
    baterPonto: (hora) => {
        if (hora <= 8 && hora != 0) {
            return 'Horário normal';
        }
        return 'Fora do horário';
    }
};
console.log(funcionario);
console.log(funcionario.sup);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
//Desafio - Tipagem de objeto
const contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        return this.saldo += valor;
    }
};
const correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['1236589636', 'e-mail@email.com']
};
