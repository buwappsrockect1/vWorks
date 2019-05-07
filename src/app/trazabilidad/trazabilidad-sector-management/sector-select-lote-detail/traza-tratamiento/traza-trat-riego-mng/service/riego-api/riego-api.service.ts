import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Riego } from '../../model/riego/riego';
import { Observable } from 'rxjs';
import { RiegoInfo } from '../../model/riegoInfo/riegoInfo';
import { GlobalService } from '../../../../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class RiegoApiService {

    // mock data url ( json file with riegos )
    // dataURL: string = 'assets/data/riego.mock-data.json';


    // server used
    // prefixSERVER = 'http://localhost:3051';
    prefixSERVER = this.globalService.getServerAndPort();
    dataURL =  this.prefixSERVER + '/riegos';

    // riegosInfo endPoints ( to show information about the riego )
    dataInfoURL = this.prefixSERVER + '/riegosInfo';

    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;


    constructor(private httpClient: HttpClient,
                private globalService: GlobalService) {
    }

    // get riegos of a sector ( given the sector id)
    getRiegos(id_sector: number): Observable<Riego[]> {

        return this.httpClient.get<Riego[]>(this.dataURL + `/${id_sector}`);
    }


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



    insertRiego(sectorId: number, riego: Riego ): Observable<Riego[]> {

      if (riego) {
        return this.httpClient.post<Riego[]>(this.dataURL + `/${sectorId}`, riego);
      }

    }



    deleteRiego(fecha: string, hora: string, operarioId: number, sectorId: number): Observable<Riego[]> {

      if ( fecha && hora && operarioId && sectorId ) {
        // send query params in the request ( /?f=16/04/2019&h=20:30&o=1&s=3 )
        // f -> fecha
        // h -> hora
        // o -> operarioId
        // s -> sectorId

        return this.httpClient.delete<Riego[]>( this.dataURL + `/?f=${fecha}&h=${hora}&o=${operarioId}&s=${sectorId}` );

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
