import { Injectable } from '@angular/core';
import { Variedad } from '../../model/variedad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VariedadApiService {

    // server used
    prefixSERVER = 'http://localhost:3051';
    dataURL =  this.prefixSERVER + '/variedades';

    constructor(private httpClient: HttpClient) { }

    // get variedad of this especie
    getVariedad(id_especie: number ): Observable<Variedad[]> {

        if ( id_especie ) {
            return this.httpClient.get<Variedad[]>( this.dataURL + `/${id_especie}`);
        }

    }

    // inserts a variedad into this especie
    insertVariedad(id_especie: number, variedad: Variedad ): Observable<Variedad> {

      if ( id_especie && variedad ) {
          return this.httpClient.post<Variedad>(this.dataURL + `/${id_especie}`, variedad);
      }

    }

    // updates a variedad
    updateVariedad(id: number, variedad: Variedad): Observable<Variedad> {

      if (id && variedad) {
        return this.httpClient.put<Variedad>( this.dataURL + `/${id}`, variedad );
      }

    }

    deleteVariedad(id: number): Observable<Variedad> {

      if (id) {
        return this.httpClient.delete<Variedad>( this.dataURL + `/${id}` );
      }

    }

}
