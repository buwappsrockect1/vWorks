import { OperarioInfo } from '../../../../../../../gestion/lotes-management/model/operarioInfo';
import { Sector } from '../../../../../../../gestion/sector-management/model/sector';

// definition of RiegoInfo
export class RiegoInfo {
    fecha:          string          ;
    hora:           string          ;
    operario:       OperarioInfo    ;
    sector:         Sector          ;
    comentario?:    string  ;

}
