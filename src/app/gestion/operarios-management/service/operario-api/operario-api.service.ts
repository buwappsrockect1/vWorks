import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operario } from '../../model/operario/operario';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class OperarioApiService {

  // mock data url ( json file with operarios )
  // dataURL: string = 'assets/data/operario.mock-data.json';
  // dataURL = 'http://localhost:3051/operarios';
  dataURL = this.globalService.getServerAndPort() + '/operarios';

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;


  constructor(private httpClient: HttpClient,
              private globalService: GlobalService) {
  }


  getOperarios(): Observable<Operario[]> {

      return this.httpClient.get<Operario[]>(this.dataURL );
  }


  getOperario(id: number): Observable<Operario> {

    if ( id ) {
      return this.httpClient.get<Operario>(this.dataURL + `/${id}` );
    }

  }


  insertOperario(operario: Operario ): Observable<Operario[]> {

    if (operario) {
       return this.httpClient.post<Operario[]>(this.dataURL , operario);
    }

  }



  deleteOperario(id: number): Observable<Operario[]> {

    if (id) {
      return this.httpClient.delete<Operario[]>( this.dataURL + `/${id}` );
    }

  }


  // updates an Operario
  updateOperario(id: number, operario: Operario): Observable<Operario[]> {

    if (id && operario) {
      return this.httpClient.put<Operario[]>( this.dataURL + `/${id}`, operario );
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
