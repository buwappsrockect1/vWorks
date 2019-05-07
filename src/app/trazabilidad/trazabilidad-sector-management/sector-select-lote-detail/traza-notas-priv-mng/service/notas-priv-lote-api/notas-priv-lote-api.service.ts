import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotasLote } from '../../../traza-notas-mng/traza-notas/model/notas-lote/notas-lote';
import { GlobalService } from '../../../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class NotasPrivLoteApiService {

    // server used
    // prefixSERVER = 'http://localhost:3051';
    prefixSERVER = this.globalService.getServerAndPort();
    dataURL =  this.prefixSERVER + '/notasPrivLote';

    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;


    constructor(private httpClient: HttpClient,
                private globalService: GlobalService) {
    }

    // get notas of a lote ( given the lote id)
    getNotasLote(id_lote: number): Observable<NotasLote[]> {

        return this.httpClient.get<NotasLote[]>(this.dataURL + `/lote/${id_lote}`);
    }

    // get a nota ( given the nota id)
    getNota(id: number): Observable<NotasLote> {

      return this.httpClient.get<NotasLote>(this.dataURL + `/${id}`);
    }

    insertNotasLote( notasLote: NotasLote ): Observable<NotasLote[]> {

      if (notasLote) {
        return this.httpClient.post<NotasLote[]>(this.dataURL , notasLote);
      }

    }


    deleteNotasLote(id: number): Observable<NotasLote[]> {

      if ( id ) {
        return this.httpClient.delete<NotasLote[]>( this.dataURL + `/${id}` );
      }

    }

    // updates one nota
    updateNotasLote(id: number, notasLote: NotasLote): Observable<NotasLote[]> {

      if (id && notasLote) {
        return this.httpClient.put<NotasLote[]>( this.dataURL + `/${id}`, notasLote );
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
