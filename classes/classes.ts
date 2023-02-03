class Data {
    public dia: number;
    public mes: number;
    public ano: number;
    
    //Parametros default
    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);

class DataSimplificada {
    constructor( public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const casamento = new Data(10, 10, 2025);
console.log(casamento);