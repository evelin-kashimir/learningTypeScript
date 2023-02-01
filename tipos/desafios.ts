/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe hora e retorna uma string
            -> Ponto normal (<=8)
            -> Fora do horário (> 8)
*/
const funcionario: { sup: string[], baterPonto: (hora: number) => string } = {
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
console.log(funcionario.baterPonto(9));