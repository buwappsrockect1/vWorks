export class Lote {
    id:                   number;
    nombre:               string;
    IdEspecie:            number;
    IdVariedad:           number;
    cantidad?:            number;
    stockMinimo?:         number;
    IdSector?:            number;
    fechaEntrada?:        string;
    IdOperarioEncargado?: number;
    IdProveedorOrigen:    number;
    codProveedor?:        string;
    qrTrazabilidad?:      string;
    notas?:               string;
    deleted?:             number;
}
