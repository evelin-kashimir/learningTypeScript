class Data {
    public dia: number;
    public mes: number;
    public ano: number;
    
    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
const casamento = new Data(10, 10, 2025);
console.log(aniversario);
console.log(casamento);