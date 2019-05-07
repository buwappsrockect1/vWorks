import { PrincipioActivo } from 'src/app/gestion/insecticidas-management/model/insecticida/principioActivo';

// definition class of Fungicida
export class Fungicida {

    id:                     number;
    nombre:                 string;
    princActivo:            PrincipioActivo[];
    contraindicaciones?:    string;
    plazoSeguridad?:        number;
}
