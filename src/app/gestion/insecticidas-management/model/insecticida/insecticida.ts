import { PrincipioActivo } from './principioActivo';

// definition class of Insecticida
export class Insecticida {

    id:                     number;
    nombre:                 string;
    princActivo:            PrincipioActivo[];
    contraindicaciones?:    string;
    plazoSeguridad?:        number;
}
