import { Especie } from './model/especie';

// Initial mock data
export const ESPECIES: Especie[] = [
    {
      id: 1,
      nombre:     'Rosal'                           ,
      nombreCientifico:        'Althaea Rosea'      ,
      familia:                 'Rosal'              ,
      variedad:                [
                                  {'id': 1 ,
                                   'nombre': 'Blanca'
                                  }
                               ]                    ,
      nombreComun:             'Malva Real'         ,
      origen:                  'Thailandia'         ,
      caracteristicas:        'Planta de temporada (anula o bianual)'      ,
      imagen:                 'especie01.jpg'

    },
    {
      id: 2,
      nombre:     'Agapanthus'                             ,
      nombreCientifico:        'Agapanthus Africanus'      ,
      familia:                 'Petulinas'                 ,
      variedad:                [
                                  { 'id': 2 ,
                                   'nombre': 'Albus'
                                  },
                                  { 'id': 3,
                                    'nombre': 'Blau'
                                  }
                               ],
      nombreComun:             'Flor de Amor Blanco'         ,
      origen:                  'Africa'                      ,
      caracteristicas:        'Planta perenne no bulbosa pero con raices tuberosas'      ,
      imagen:                 'especie02.jpg'

    },
    {
      id: 3,
      nombre:     'Agapanthus Africanus "Albus'            ,
      nombreCientifico:        'Agapanthus Africanus'      ,
      familia:                 'Petulinas'                 ,
      variedad:                [
                                  {'id': 4,
                                   'nombre': 'Albus'
                                  },
                                  { 'id': 5,
                                    'nombre': 'Blau'
                                  },
                                  { 'id': 6,
                                    'nombre': 'Orientalis'
                                  }
                               ],
      nombreComun:             'Gapanto Blanco'         ,
      origen:                  'Africa'                   ,
      caracteristicas:        'Tuberosa de flor blanca. Muy decorativa'      ,
      imagen:                 'especie03.jpg'

    },
    {
      id: 4,
      nombre:     'Agapanthus Africanus "Blau"'            ,
      nombreCientifico:        'Agapanthus Africanus'      ,
      familia:                 'Petulinas'                 ,
      variedad:                [
                                  { 'id': 7,
                                    'nombre': 'Albus'
                                  },
                                  { 'id': 8,
                                    'nombre': 'Pinero'
                                  }
                               ],
      nombreComun:             'Lirio Africano'         ,
      origen:                  'Africa'                 ,
      caracteristicas:        'Planta perenne no bulbosa pero con raices tuberosas'      ,
      imagen:                 'especie04.jpg'

    },
    {
      id: 5,
      nombre:     'Agapanthus Umbellatus '                  ,
      nombreCientifico:        'Agapanthus Umbellatus'      ,
      familia:                 'Petulinas'                  ,
      variedad:                [
                                  { 'id': 9,
                                    'nombre': 'Roja'
                                  },
                                  { 'id': 10,
                                    'nombre': 'Amarilla'
                                  },
      ],
      nombreComun:             'Agapanto'         ,
      origen:                  'Africa'           ,
      caracteristicas:        'Planta rizomatoza de grandes flores'      ,
      imagen:                 'especie05.jpg'

    }

  ];
