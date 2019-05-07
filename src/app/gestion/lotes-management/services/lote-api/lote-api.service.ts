import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lote } from '../../model/lote';
import { Observable } from 'rxjs';
import { LoteInfo } from '../../model/loteInfo';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class LoteApiService {


    // server used
    // prefixSERVER = 'http://localhost:3051';
    prefixSERVER = this.globalService.getServerAndPort();
    dataURL =  this.prefixSERVER + '/lotes';


    // lotesInfo endPoints ( to show information about the lote )
    dataInfoURL = this.prefixSERVER + '/lotesInfo';


    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode = false;

    // sector id of the selected sector
    // ( we store in which sector we are working on to show the lotes of that sector )
    sectorSelected = -1;

    constructor(private httpClient: HttpClient,
                private globalService: GlobalService) {

    }


    // get the lotes of a sector
    getLotes(id_sector: number): Observable<Lote[]> {

      if ( id_sector ) {
          return this.httpClient.get<Lote[]>( this.dataURL + `/sector/${id_sector}`);
      }

    }

/*
    // get the number of lotes of a sector
    getNumLotes( idSector: number ): Observable<number> {

    }

    // get the number of especies of a sector
    getNumEspecies( idSector: number ): Observable<number> {


    }

*/


    // get the lotesInfoForTable of a sector
    // returns loteInfo objects to show in a table
    // ( to show information of a lote in human understandable format )
    getLotesInfoForTable(id_sector: number): Observable<LoteInfo[]> {

      if ( id_sector ) {
          return this.httpClient.get<LoteInfo[]>( this.dataInfoURL + `/sector/${id_sector}`);
      }
    }

    getLoteInfo(id: number): Observable<LoteInfo> {
      if ( id ) {
          return this.httpClient.get<LoteInfo>( this.dataInfoURL + `/${id}`);
      }
    }


    // get a lote by its id
    getLote(id: number): Observable<Lote> {

      if ( id ) {
          return this.httpClient.get<Lote>( this.dataURL + `/${id}`);
      }
    }


    insertLote(lote: Lote ): Observable<Lote> {
        if ( lote ) {
            return this.httpClient.post<Lote>(this.dataURL, lote);
        }
    }

    deleteLote(id: number): Observable<Lote> {
      if (id) {
        return this.httpClient.delete<Lote>( this.dataURL + `/${id}` );
      }

    }


    // updates a lote
    updateLote(id: number, lote: Lote): Observable<Lote> {
      if (id && lote) {
        return this.httpClient.put<Lote>( this.dataURL + `/${id}`, lote );
      }

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
