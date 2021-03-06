import { Injectable } from '@angular/core';
import { Abono } from '../../model/abono/abono';
import { Observable, of } from 'rxjs';
import { ABONOS } from '../../abono.mock-data';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class AbonoAPIService {

  // mock data url ( json file with abonos )
  // dataURL: string = 'assets/data/abono.mock-data.json';
  // dataURL = 'http://localhost:3051/abonos';

  // dataURL = 'http://51.77.140.197:3051/abonos';

  dataURL = this.globalService.getServerAndPort() + '/abonos';

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;

  // to save the state to return to the abonos filter applied
  filterAbonos: 'ALL' | 'INSTOCK';
  selectedLetter: string ;


  constructor(private httpClient: HttpClient,
              private globalService: GlobalService) {
  }


  // queryString ( ?letter=X ) Asks for starting letter 
  // queryString ( ?stock=1 ) Asks for  stock  1 -> enStock 
  getAbonos(queryString?: String): Observable<Abono[]> {

      return this.httpClient.get<Abono[]>(this.dataURL + queryString);
  }


  getAbono(id: number): Observable<Abono> {

    if ( id ) {
      return this.httpClient.get<Abono>(this.dataURL + `/${id}` );
    }

  }


  insertAbono(abono: Abono ): Observable<Abono[]> {

    if (abono) {
       return this.httpClient.post<Abono[]>(this.dataURL , abono);
    }

  }



  deleteAbono(id: number): Observable<Abono[]> {

    if (id) {
      return this.httpClient.delete<Abono[]>( this.dataURL + `/${id}` );
    }

  }


  // updates a abono
  updateAbono(id: number, abono: Abono): Observable<Abono[]> {

    if (id && abono) {
      return this.httpClient.put<Abono[]>( this.dataURL + `/${id}`, abono );
    }

  }






  // saves the filterAbonos state
  setFilterAbonos( filter: 'ALL' | 'INSTOCK' ) {
    this.filterAbonos = filter;
  }

  getFilterAbonos(): any {
    return this.filterAbonos;
  }



  // saves the selected letter state ( to search abonos by that letter -  )
  // saves the state of that letter to return to abonos starting with that letter
  // after inserting or editing an Abono
  setSelectedLetter( letter: string ) {
      this.selectedLetter = letter;
  }

  getSelectedLetter(): string {
      return this.selectedLetter;
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
