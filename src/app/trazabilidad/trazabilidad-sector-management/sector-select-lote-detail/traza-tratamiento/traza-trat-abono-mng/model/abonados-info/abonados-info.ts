import { Sector } from '../../../../../../../gestion/sector-management/model/sector';
import { OperarioInfo } from '../../../../../../../gestion/lotes-management/model/operarioInfo';
import { Abono } from '../../../../../../../gestion/abonos-management/model/abono/abono';


// class definition for AbonadosInfo
export class AbonadosInfo {

    id:         number          ;
    fecha:      string          ;
    sector:     Sector          ;
    operario:   OperarioInfo    ;
    abonos:     Abono[]         ;
}
