import { Injectable } from '@angular/core';
import { LIST_VIEW_TYPE } from 'src/app/models/list-view-type.enum';
import { HttpClient } from '@angular/common/http';
import { Especie } from 'src/app/gestion/especies-management/model/especie';
import { Observable, of } from 'rxjs';
import { Variedad } from '../../model/variedad';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class EspecieApiService {

  // server used
  // prefixSERVER = 'http://localhost:3051';
  prefixSERVER = this.globalService.getServerAndPort();

  // mock data url ( json file with sectors )
  // dataURL: string = './assets/data/especie.mock-data.json';
  // dataURL =  this.prefixSERVER + '/especies';

  dataURL = this.globalService.getServerAndPort() + '/especies';


  // Selected list view type ( CARD or LIST )
  selectedListViewType: LIST_VIEW_TYPE;

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;

  // image path to add
  imagePath = './assets/img/especie/';
  emptyImageName = this.imagePath + 'empty-image.jpg';


  constructor(private httpClient: HttpClient,
              private globalService: GlobalService) {

  }



  getEspecies(): Observable<Especie[]> {

    return this.httpClient.get<Especie[]>(this.dataURL );

  }


  getEspecie(id: number): Observable<Especie> {

    if ( id ) {
      return this.httpClient.get<Especie>(this.dataURL + `/${id}` );
    }

  }



  getVariedad(id_especie: number ): Observable<Variedad[]> {

      if ( id_especie ) {
          return this.httpClient.get<Variedad[]>(this.prefixSERVER + `/variedades/${id_especie}`);
      }

  }




  insertEspecie(especie: Especie ): Observable<Especie[]> {

    if (especie) {
        return this.httpClient.post<Especie[]>(this.dataURL , especie);
    }

  }


  deleteEspecie(id: number): Observable<Especie[]> {

    if (id) {
      return this.httpClient.delete<Especie[]>( this.dataURL + `/${id}` );
    }

  }


  // updates a especie
  updateEspecie(id: number, especie: Especie): Observable<Especie[]> {

    if (id && especie) {
      return this.httpClient.put<Especie[]>( this.dataURL + `/${id}`, especie );
    }

  }



  getEmptyImageName(): string {
    return this.emptyImageName;
  }


  // list view type functions

  setListViewType( type: LIST_VIEW_TYPE ) {
    this.selectedListViewType = type;
  }


  getListViewType(): LIST_VIEW_TYPE {
    return this.selectedListViewType;
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
