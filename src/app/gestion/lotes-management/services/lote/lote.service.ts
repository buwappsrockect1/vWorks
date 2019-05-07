import { Injectable } from '@angular/core';
import { Observable, of, from, forkJoin } from 'rxjs';
import { map, filter, flatMap, tap } from 'rxjs/operators';
import { Lote } from '../../model/lote';
import { LOTES } from '../../model/lote.mock-data';

import { EspecieService } from 'src/app/gestion/especies-management/services/especie/especie.service';
import { Especie } from 'src/app/gestion/especies-management/model/especie';
import { Sector } from 'src/app/gestion/sector-management/model/sector';
import { SectorService } from 'src/app/gestion/sector-management/services/sector/sector.service';

import { EspecieInfo } from '../../model/especieInfo';
import { ProveedorService } from 'src/app/gestion/proveedor-management/services/proveedor/proveedor.service';
import { Proveedor } from 'src/app/gestion/proveedor-management/model/proveedor/proveedor';
import { ProveedorOrigenInfo } from '../../model/proveedorOrigenInfo';

import { LoteInfo } from '../../model/loteInfo';
import { Operario } from '../../../operarios-management/model/operario/operario';
import { OPERARIOS } from '../../../operarios-management/operario.mock-data';




@Injectable({
  providedIn: 'root'
})
export class LoteService {

  // mock data url ( json file with lotes )
  dataURL = './assets/data/lote.mock-data.json';

  loteList: Lote[] = [];
  count: number;

  // filtered lotes of a sector
  lotesInSector: Lote[] = [];

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode = false;

  // sector id of the selected sector
  // ( we store in which sector we are working on to show the lotes of that sector )
  sectorSelected = -1;

  // OPERARIO ARRAY
  arrOperarios: Operario[] = OPERARIOS;


  constructor(private especieService: EspecieService,
              private sectorService: SectorService,
              private proveedorService: ProveedorService) {

      // loads the data with this observable
      this.loadData()
        .subscribe( (lotes: Lote[]) => {

          this.loteList = lotes;
          this.count = this.loteList.length;

        });
  }



  loadData(): Observable<Lote[]> {

    const cosa: Observable<Lote[]> = of(LOTES);
    return cosa;

    // return this.httpClient.get<lote[]>( this.dataURL );

  }


  // get the lotes of a sector
  getLotes(idSector: number): Observable<Lote[]> {

    this.lotesInSector = this.loteList.filter( (lote) => lote.IdSector === idSector );

    return new Observable<Lote[]>( (observer) => {
      observer.next( this.lotesInSector );
    });

  }

  // get the lotes of a sector
  getLotesAny(idSector: number): Observable<any[]> {

    const myLotesInSector = this.loteList.filter( (lote) => lote.IdSector === idSector );

    return new Observable<any[]>( (observer) => {
      observer.next( myLotesInSector );
    });

  }

  // get the number of lotes of a sector
  getNumLotes( idSector: number ): Observable<number> {

    this.lotesInSector = this.loteList.filter( (lote) => lote.IdSector === idSector );

    // return of(this.lotesInSector.length );

    return new Observable<number>( (observer) => {
      observer.next( this.lotesInSector.length );
    });

  }



  // get the number of especies of a sector
  getNumEspecies( idSector: number ): Observable<number> {

    let lotesInSector = this.loteList.filter( (lote) => lote.IdSector === idSector );

    const hash = {};
    lotesInSector = lotesInSector.filter( (lote: Lote) => {
        const currentLoteEspec = lote.IdEspecie;

        const exists: boolean = !hash[currentLoteEspec] || false;

        hash[currentLoteEspec] = true;

        return exists;
    });

    return new Observable<number>( (observer) => {
      observer.next( lotesInSector.length );
    });

  }




  // get a lote by its id
  getLote(id: number): Observable<Lote> {

    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return of( this.loteList[loteIndex] );

    } else {
        return of(null);
    }


  }

  getLoteAny(id: number): Observable<any> {


    // ejemplo 3.3 - Observables in serie ( flatMap - returns an observable )
    // we return the lote information and for each lote we return the lote with a new property of its sector data ( sectorData )
    // we return sector information
    // we return variedad information
    // we return
    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return of( this.loteList[loteIndex] )
              .pipe(

                  flatMap( (lote: any) => {
                    return this.sectorService.getSector( lote.sector )
                              .pipe(
                                  map( (sec: Sector ) => {

                                    lote.sector =      {
                                        id:                 sec.id      ,
                                        nombre:             sec.nombre
                                    };

                                    return lote;

                                  })
                              );
                  }),


                  flatMap( (lote: any) => {
                    return this.especieService.getEspecie( lote.especie )
                              .pipe(
                                  map( (espec: Especie ) => {
                                    lote.especie =      {
                                        id:                   espec.id                 ,
                                        nombre:               espec.nombre             ,
                                        nombreCientifico:     espec.nombreCientifico   ,
                                        nombreComun:          espec.nombreComun
                                    };
                                    return lote;

                                  })
                              );
                  })


              );


    } else {
        return of(null);
    }



  }


  // get the lotesInfoForTable of a sector
  // returns loteInfoForTable objects to show in a table
  // ( to show information of a lote in human understandable format )
  getLotesInfoForTable(id_sector: number): Observable<LoteInfo[]> {

     return of([]);
/*
      // javi -- este codigo funciona . Descomentar
      return this.getLotesAny( id_sector )
            .pipe(

              flatMap( (lotes: Lote[]) => {

                if (lotes.length > 0 ) {

                    const myArr: any[] = [];

                    lotes.map( (lote: Lote ) => {

                      // sector data
                      const sectorData: Observable<any> = this.sectorService.getSector( lote.sector )
                        .pipe(
                          map( (sector: Sector ) => {

                            return  {
                                id:                 sector.id      ,
                                nombre:             sector.nombre
                            };

                          })

                        );

                      // especie data
                      const especieData: Observable<any> = this.especieService.getEspecie( lote.especie )
                        .pipe(
                            map( ( espec: Especie) => {
                              const especieInf: EspecieInfo = {
                                  id:                   espec.id                 ,
                                  nombre:               espec.nombre             ,
                                  nombreCientifico:     espec.nombreCientifico   ,
                                  nombreComun:          espec.nombreComun
                              };

                              return especieInf;

                            })
                        );

                      // proveedor data
                      const proveedorData: Observable<any> = this.proveedorService.getProveedor( lote.proveedorOrigen )
                      .pipe(
                          map( ( provee: Proveedor) => {
                            const proveedorOrigenInf: ProveedorOrigenInfo = {
                                id:                   provee.id                 ,
                                nombre:               provee.nombre             ,
                                nombre2Digitos:       provee.nombre2Digitos
                            };

                            return proveedorOrigenInf;

                          })
                      );

                        myArr.push(
                          forkJoin([ sectorData, especieData, proveedorData ])
                            .pipe(
                               map( ( data: any[] ) => {

                                 const sectorD      = data[0] as Sector               ;
                                 const especieD     = data[1] as EspecieInfo          ;
                                 const proveedorD   = data[2] as ProveedorOrigenInfo  ;

                                 const lotInf4Table: LoteInfoForTable = {
                                          id:           lote.id           ,
                                          nombre:       lote.nombre       ,
                                          especie:      especieD          ,
                                          variedad:     lote.variedad     ,
                                          cantidad:     lote.cantidad     ,
                                          stockMinimo:  lote.stockMinimo  ,
                                          sector:       sectorD          ,
                                          fechaEntrada: lote.fechaEntrada ,
                                          operarioEncargado: {
                                                            id:        1 ,
                                                            nombreOperaciones:  ''
                                                        },
                                          proveedorOrigen:  proveedorD ,
                                          codProveedor: lote.codProveedor           ,
                                          qrTrazabilidad: lote.qrTrazabilidad       ,
                                          notas:        lote.notas
                                  };

                                  return lotInf4Table;

                               })
                            )

                        );

                    });
                    return forkJoin( myArr );


                }
                return of([]);

            })

      );
*/


  }




  insertLote(lote: Lote ): Observable<Lote[]> {

    // sets a new loteId
    lote.id = this.getNextId();

    lote.nombre = 'Lote 123';

    // generates the lote name
    // lote.nombre = this.generateLoteName( lote );

    this.loteList.push( lote );

    // return of(this.loteList);

    return new Observable<Lote[]>( (observer) => {
      observer.next( this.loteList );
    });


  }

  deleteLote(id: number): Observable<Lote[]> {

    const loteIndex = this.loteList.findIndex( (lot) => lot.id === id );

    if ( loteIndex >= 0 ) {
      this.loteList.splice(loteIndex, 1);

      return of( this.loteList );

    }

  }

  deleteLoteInfoForTable(id: number, id_sector: number ): Observable<LoteInfo[]> {

      const loteIndex = this.loteList.findIndex( (lot) => lot.id === id );

      if ( loteIndex >= 0 ) {
        this.loteList.splice(loteIndex, 1);

        return this.getLotesInfoForTable(id_sector);

      }
  }


  // updates a lote
  updateLote(id: number, lote: Lote): Observable<Lote[]> {

    const loteIndex = this.loteList.findIndex( (lot) => lot.id === id );

    if ( loteIndex >= 0 ) {
      this.loteList.splice(loteIndex, 1, lote);

    }

    return of( this.loteList );

  }





  getNextId(): number {
    return ++this.count;
  }

  // generates the lote name ( format XX-ZZZZZ-DDMMYY-TTT )
  generateLoteName(aLote: Lote ): any {

    return 'hola';
/*
     // proveedor data --> get proveedor nombre 2 digitos ( XX )
     const proveedorD = this.proveedorService.getProveedor(aLote.proveedorOrigen);

     // operario data -> get operario data 3 digitos ( TTT )
     const operarioD = of(this.arrOperarios[aLote.operarioEncargado]);

     forkJoin( proveedorD , operarioD )
        .subscribe( (data: any[]) => {

            // 2 digits proveedor
            const XX = (data[0] as Proveedor).nombre2Digitos ;

            const ZZZZZ = aLote.id;

            const DDMMYY = aLote.fechaEntrada;

            // 3 digits operario encargado name ( TTT )
            const TTT = ( data[1] as Operario).codigo ;

            // join the parts
            const loteName: string =  [ XX, ZZZZZ, DDMMYY, TTT ].join('-');

            //
            console.log( loteName );

            return loteName;

        },
        (error: any) => {
          return '';
        });
*/

  }


  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  setShowToolBarInsertButtons( insertButtonClicked: boolean ) {
    this.bInsertMode = insertButtonClicked;
  }

  // gets true or false to Show or hide the Insert Button or list view buttons on the upper toolbar
  getShowToolBarInsertButtons(): boolean {
    return this.bInsertMode;
  }

  // sets the sector selected
  setSectorSelected(id_sector: number) {
    this.sectorSelected = id_sector;
  }

  // gets the sector selected
  getSectorSelected(): number {
    return this.sectorSelected;
  }


}
