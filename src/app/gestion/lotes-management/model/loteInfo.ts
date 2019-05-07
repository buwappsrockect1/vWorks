import { EspecieInfo } from './especieInfo';
import { OperarioInfo } from './operarioInfo';
import { ProveedorOrigenInfo } from './proveedorOrigenInfo';
import { VariedadInfo } from './variedadInfo';
import { Sector } from '../../sector-management/model/sector';



// loteInfo objects to show in a table 
// ( to show information of a lote in human understandable format )
export class LoteInfo {

    id:                  number;
    nombre:              string;
    especie:             EspecieInfo;
    variedad:            VariedadInfo;
    cantidad?:           number;
    stockMinimo?:        number;
    sector?:             Sector;
    fechaEntrada?:       string;
    operarioEncargado?:  OperarioInfo;
    proveedorOrigen?:    ProveedorOrigenInfo;
    codProveedor?:       string;
    qrTrazabilidad?:     string;
    notas:               string;

}
