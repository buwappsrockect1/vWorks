import { Fungicida } from './model/fungicida/fungicida';

export const FUNGICIDAS: Fungicida[] = [
    {
        id:                               1         ,
        nombre:         'Azufre'                    ,
        princActivo:    [
                            {   id:       1,
                                nombre: 'Polisulfuro de Calcio'
                            }
                        ],
        contraindicaciones: 'No descritas' ,
        plazoSeguridad: 3
    },
    {
        id:                               2         ,
        nombre:         'Cobre'       ,
        princActivo:    [
                            {   id:       2,
                                nombre: 'Cloruro de Cobre'
                            },
                            {   id:       3,
                                nombre: 'OxiCloruro de Cobre'
                            },
                            {   id:       4,
                                nombre: 'Sulfato de Cobre'
                            },
                            {   id:       5,
                                nombre: 'Óxido Cúprico'
                            }
                        ],
        contraindicaciones: 'Usar poca agua'  ,
        plazoSeguridad:  2
    },
    {
        id:                               3         ,
        nombre:         'Zinc '        ,
        princActivo:    [
                            {   id:       6,
                                nombre: 'Cloruro'
                            },
                            {   id:       7,
                                nombre: 'Cromato'
                            },
                            {   id:       8,
                                nombre: 'Oleato'
                            },
                            {   id:       9,
                                nombre: 'Naftenato de Zinc'
                            }

        ],
        contraindicaciones: 'No en época de floracion. Ventilar la zona.'  ,
        plazoSeguridad:  4
    },
    {
        id:                               4         ,
        nombre:         'Estaño '          ,
        princActivo:    [
                            {   id:       10,
                                nombre: 'Acetato de Fentina'
                            },
                            {   id:       11,
                                nombre: 'Cloruro de Fentina'
                            }
                        ],
        contraindicaciones: 'Regar abundante dias posteriores'  ,
        plazoSeguridad:  2
    }
];


