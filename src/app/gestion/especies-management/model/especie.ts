import { Variedad } from './variedad';

// definition class of a Especie
export class Especie {

    public id:                      number      ;
    public nombre:                  string      ;
    public nombreCientifico:        string      ;
    public familia:                 string      ;
    public variedad:                Variedad[]  ;
    public nombreComun:             string      ;
    public origen:                  string      ;
    public caracteristicas?:        string      ;
    public imagen?:                 string      ;
    public deleted?:                number      ;
}

