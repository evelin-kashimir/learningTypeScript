let canal: string = 'Gaveta';
let inscritos: number = 610234;

//canal = inscritos;
console.log(canal);
//nome = 'Pedro';

//console.log(nome);

function somando(a: any, b: any) {
    return a + b;
}

function saudar(isManha: boolean): string {
    if(isManha) {
        return 'Bom dia';
    }
    return 'Boa vida';
}
console.log(saudar(false))