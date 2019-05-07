import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abonados } from '../model/abonados/abonados';
import { AbonadosInfo } from '../model/abonados-info/abonados-info';
import { GlobalService } from '../../../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class AbonadosApiService {

    // mock data url ( json file with abonados )
    // dataURL: string = 'assets/data/abonado.mock-data.json';


    // server used
    // prefixSERVER = 'http://localhost:3051';
    prefixSERVER = this.globalService.getServerAndPort();
    dataURL =  this.prefixSERVER + '/abonados';

    // abonadosInfo endPoints ( to show information about the abonado )
    dataInfoURL = this.prefixSERVER + '/abonadosInfo';

    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;


    constructor(private httpClient: HttpClient,
                private globalService: GlobalService) {
    }

    // get Abonados of a sector ( given the sector id)
    getAbonados(id_sector: number): Observable<Abonados[]> {

        return this.httpClient.get<Abonados[]>(this.dataURL + `/sector/${id_sector}`);
    }

    // get the abonadosInfo of a sector
    // returns AbonadoInfo objects to show in a table
    // ( to show information of an abonado in human understandable format )
    getAbonadosInfo(id_sector: number): Observable<AbonadosInfo[]> {

      if ( id_sector ) {
          return this.httpClient.get<AbonadosInfo[]>( this.dataInfoURL + `/sector/${id_sector}`);
      }
    }

/*
    getRiego(fecha: string, hora: string, operarioId: number, sectorId: number): Observable<Riego> {

      if ( fecha && hora && operarioId && sectorId ) {
        // send query params in the request ( /?f=16/04/2019&h=20:30&o=1&s=3 )
        // f -> fecha
        // h -> hora
        // o -> operarioId
        // s -> sectorId
        return this.httpClient.get<Riego>(this.dataURL + `/?f=${fecha}&h=${hora}&o=${operarioId}&s=${sectorId}` );
      }

    }

    // get the riegosInfo of a sector
    // returns RiegoInfo objects to show in a table
    // ( to show information of a riego in human understandable format )
    getRiegosInfo(id_sector: number): Observable<RiegoInfo[]> {

      if ( id_sector ) {
          return this.httpClient.get<RiegoInfo[]>( this.dataInfoURL + `/${id_sector}`);
      }
    }


    getRiegoInfo(fecha: string, hora: string, operarioId: number, sectorId: number): Observable<RiegoInfo> {

      if ( fecha && hora && operarioId && sectorId ) {
        // send query params in the request ( /?f=16/04/2019&h=20:30&o=1&s=3 )
        // f -> fecha
        // h -> hora
        // o -> operarioId
        // s -> sectorId
        return this.httpClient.get<RiegoInfo>(this.dataInfoURL + `/?f=${fecha}&h=${hora}&o=${operarioId}&s=${sectorId}` );
      }

    }

*/

    insertAbonados(abonados: Abonados ): Observable<Abonados[]> {

      if (abonados) {
        return this.httpClient.post<Abonados[]>(this.dataURL , abonados);
      }

    }



    deleteAbonados(id: number): Observable<Abonados[]> {

      if (id) {
        return this.httpClient.delete<Abonados[]>( this.dataURL + `/${id}` );
      }

    }



    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    setShowToolBarInsertButtons( insertButtonClicked: boolean ) {
      this.bInsertMode = insertButtonClicked;
    }

    // gets true or false to Show or hide the Insert Button or list view buttons on the upper toolbar
    getShowToolBarInsertButtons(): boolean {
      return this.bInsertMode;
    }


}
