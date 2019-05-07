import { Insecticida } from './model/insecticida/insecticida';


export const INSECTICIDAS: Insecticida[] = [
    {
        id:                               1         ,
        nombre:         'Organofostados'            ,
        princActivo:    [
                            {   id:       1,
                                nombre: 'Acefato'
                            },
                            {   id:       2,
                                nombre: 'Clorpirifos'
                            },
                            {   id:       3,
                                nombre: 'Diazinon'
                            },
                            {   id:       4,
                                nombre: 'Dimetoato'
                            }

                        ],
        contraindicaciones: 'Cuidado con los ojos.'  ,
        plazoSeguridad: 20
    },
    {
        id:                               2         ,
        nombre:         'Carbonatos'                ,
        princActivo:    [
                            {   id:       5,
                                nombre: 'Carbofuran'
                            },
                            {   id:       6,
                                nombre: 'Carbosulfan'
                            },
                            {   id:       7,
                                nombre: 'Metomil'
                            },
                            {   id:       8,
                                nombre: 'Pirimicarb'
                            },
                            {   id:       9,
                                nombre: 'Formetanato'
                            }

                        ],
        contraindicaciones: 'No descritas'  ,
        plazoSeguridad: 20
    },
    {
        id:                               3         ,
        nombre:         'Piretroides'               ,
        princActivo:    [
                            {   id:       10,
                                nombre: 'Cipermetrina'
                            },
                            {   id:       11,
                                nombre: 'Ciflutrina'
                            },
                            {   id:       12,
                                nombre: 'Deltametrina'
                            }

                        ],
        contraindicaciones: 'No aplicar en primavera'  ,
        plazoSeguridad: 20
    },
    {
        id:                               4         ,
        nombre:         'Nitrofuanidinas'                ,
        princActivo:    [
                            {   id:       13,
                                nombre: 'Acetamiprid'
                            },
                            {   id:       14,
                                nombre: 'Imidacloprid'
                            }

                        ],
        contraindicaciones: 'Recomendado para rosales.'  ,
        plazoSeguridad: 7
    },
    {
        id:                               5         ,
        nombre:         'Benzolupeas'               ,
        princActivo:    [
                            {   id:       15,
                                nombre: 'Novaluron'
                            },
                            {   id:       16,
                                nombre: 'Clorfuazuron'
                            },
                            {   id:       17,
                                nombre: 'Teflubenzuron'
                            }

                        ],
        contraindicaciones: 'Va bien para pequeños insectos. Respetar plazo seguridad.'  ,
        plazoSeguridad: 45
    }
];
