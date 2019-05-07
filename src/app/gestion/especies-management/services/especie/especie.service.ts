import { Injectable } from '@angular/core';
import { LIST_VIEW_TYPE } from '../../../../models/list-view-type.enum';
import { Especie } from '../../model/especie';
import { Observable, of } from 'rxjs';
import { ESPECIES } from '../../especie.mock-data';
import { Variedad } from '../../model/variedad';




@Injectable({
  providedIn: 'root'
})
export class EspecieService {

  // mock data url ( json file with especies )
  dataURL: string = './assets/data/especie.mock-data.json';

  especiesList: Especie[] = [];
  count: number;


  // Selected list view type ( CARD or LIST )
  selectedListViewType: LIST_VIEW_TYPE;

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;

  // image path to add 
  imagePath = './assets/img/especie/';
  emptyImageName = this.imagePath + 'empty-image.jpg';


  constructor() {

    // loads the data with this observable
    this.loadData()
      .subscribe( espec => {

        this.especiesList = espec;
        this.count = this.especiesList.length;

      });

  }


  loadData(): Observable<Especie[]> {

    // adds the imagePath to the especie
    ESPECIES.map ( (especie) => {
      especie.imagen = this.imagePath + especie.imagen;
    });


    return of(ESPECIES);

    //return this.httpClient.get<Especie[]>( this.dataURL );

  }


  getEspecies(): Observable<Especie[]> {

    return of(this.especiesList);

  }


  getEspecie(id_especie: number): Observable<Especie> {


    const especieIndex = this.especiesList.findIndex( (especie) => especie.id === id_especie );

    if ( especieIndex >= 0 ) {

      return of( this.especiesList[especieIndex] );

    } else {

      return of(null);
    }


  }



  getVariedad(id_especie: number ): Observable<Variedad[]> {


    const especieIndex = this.especiesList.findIndex( (especie) => especie.id == id_especie);

   if ( especieIndex >= 0 ) {

      return of( this.especiesList[especieIndex].variedad );

    } else {

       const variedArr: Variedad[] = [];
       return of(variedArr);
    }


  }

  insertEspecie(especie: Especie ): Observable<Especie[]> {

    // sets a new especieId
    especie.id = this.getNextId();

    this.especiesList.push( especie );

    return of(this.especiesList);

  }


  deleteEspecie(id: number): Observable<Especie[]> {

    const especieIndex = this.especiesList.findIndex( (especie) => especie.id === id );

    if ( especieIndex >= 0 ) {
      this.especiesList.splice(especieIndex, 1);

      return of( this.especiesList );

    }

  }


  // updates a especie
  updateEspecie(id: number, especie: Especie): Observable<Especie[]> {

    const especieIndex = this.especiesList.findIndex( (espec) => espec.id === id );

    if ( especieIndex >= 0 ) {
      this.especiesList.splice(especieIndex, 1, especie);

    }

    return of( this.especiesList );

  }








  getNextId(): number {
    return ++this.count;
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
