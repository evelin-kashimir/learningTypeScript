//importando modulos
import { areaCircunferencia } from "./circunferencia";
import { areaRetangulo} from "./retangulo";

console.log('Módulo carregado...')
console.log(areaCircunferencia(5));
console.log(areaRetangulo(5, 5));

const { digaOi } = require('/.novo');
console.log(digaOi('Ana'));