import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fungicida } from '../model/fungicida/fungicida';
import { GlobalService } from '../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class FungicidaApiService {

      // mock data url ( json file with fungicida )
      // dataURL: string = 'assets/data/fungicida.mock-data.json';
      // dataURL = 'http://localhost:3051/fungicidas';

      dataURL = this.globalService.getServerAndPort() + '/fungicidas';

      // Shows or hide the Insert Button or list view buttons on the upper toolbar
      bInsertMode: boolean = false;


      constructor(private httpClient: HttpClient,
                  private globalService: GlobalService) {

      }

      getFungicidas(): Observable<Fungicida[]> {

        return this.httpClient.get<Fungicida[]>(this.dataURL );
      }


      getFungicida(id: number): Observable<Fungicida> {
        if ( id ) {
          return this.httpClient.get<Fungicida>(this.dataURL + `/${id}` );
        }
      }

      insertFungicida(fungicida: Fungicida ): Observable<Fungicida[]> {

        if (fungicida) {
            return this.httpClient.post<Fungicida[]>(this.dataURL , fungicida);
        }

      }


      deleteFungicida(id: number): Observable<Fungicida[]> {

        if (id) {
          return this.httpClient.delete<Fungicida[]>( this.dataURL + `/${id}` );
        }

      }

      // updates a fungicida
      updateFungicida(id: number, fungicida: Fungicida): Observable<Fungicida[]> {

        if (id && fungicida) {
          return this.httpClient.put<Fungicida[]>( this.dataURL + `/${id}`, fungicida );
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
