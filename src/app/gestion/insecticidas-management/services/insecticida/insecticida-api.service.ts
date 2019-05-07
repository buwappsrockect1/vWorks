import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Insecticida } from '../../model/insecticida/insecticida';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class InsecticidaApiService {

  // mock data url ( json file with insecticida )
  // dataURL: string = 'assets/data/insecticida.mock-data.json';
  // dataURL = 'http://localhost:3051/insecticidas';

  dataURL = this.globalService.getServerAndPort() + '/insecticidas';


  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;


  constructor(private httpClient: HttpClient,
              private globalService: GlobalService) {

  }


  getInsecticidas(): Observable<Insecticida[]> {

      return this.httpClient.get<Insecticida[]>(this.dataURL );
  }


  getInsecticida(id: number): Observable<Insecticida> {

    if ( id ) {
      return this.httpClient.get<Insecticida>(this.dataURL + `/${id}` );
    }

  }


  insertInsecticida(insecticida: Insecticida ): Observable<Insecticida[]> {

    if (insecticida) {
       return this.httpClient.post<Insecticida[]>(this.dataURL , insecticida);
    }

  }



  deleteInsecticida(id: number): Observable<Insecticida[]> {

    if (id) {
      return this.httpClient.delete<Insecticida[]>( this.dataURL + `/${id}` );
    }

  }


  // updates an insecticida
  updateInsecticida(id: number, insecticida: Insecticida): Observable<Insecticida[]> {

    if (id && insecticida) {
      return this.httpClient.put<Insecticida[]>( this.dataURL + `/${id}`, insecticida );
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
