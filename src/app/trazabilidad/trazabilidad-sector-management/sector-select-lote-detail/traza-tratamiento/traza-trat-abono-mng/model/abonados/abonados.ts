import { Abono } from '../../../../../../../gestion/abonos-management/model/abono/abono';

// class definition for Abonados
export class Abonados {

    id:         number ;
    fecha:      string ;
    IdSector:   number ;
    IdOperario: number ;
    abonos:     Abono[];

}
