import { Variedad } from './variedad';
import { Color } from './color';

// definition class of a Especie
export class Especie {

    public id:                      number      ;
    public nombreComun:             string      ;
    public nombreCientifico:        string      ;
    public familia:                 string      ;
    public variedad:                Variedad[]  ;
    public colores:                 Color[]     ;
    public origen:                  string      ;
    public caracteristicas?:        string      ;
    public imagen?:                 string      ;
    public deleted?:                number      ;
}

