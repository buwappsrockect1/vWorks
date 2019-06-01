import { Injectable } from '@angular/core';
import { Abono } from '../../model/abono/abono';
import { Observable, of } from 'rxjs';
import { ABONOS } from '../../abono.mock-data';

@Injectable({
  providedIn: 'root'
})
export class AbonoService {

  // mock data url ( json file with abonos )
  dataURL: string = 'assets/data/abono.mock-data.json';

  abonoList: Abono[] = [];
  count: number;



  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;


  // to save the state to return to the abonos filter applied
  filterAbonos: 'ALL' | 'INSTOCK';
  selectedLetter: string ;



  constructor() {

      // loads the data with this observable
      this.loadData()
        .subscribe( abonos => {

          this.abonoList = abonos;
          this.count = this.abonoList.length;

        });
  }


  loadData(): Observable<Abono[]> {

    const cosa: Observable<Abono[]> = of(ABONOS);
    return cosa;

    //return this.httpClient.get<Abono[]>( this.dataURL );

  }


  getAbonos(queryString?: String): Observable<Abono[]> {
    // return of(this.abonoList);

    return new Observable<Abono[]>( (observer) => {
      observer.next( this.abonoList );
    });

  }


  getAbono(id: number): Observable<Abono> {


    const abonoIndex = this.abonoList.findIndex( (abono) => abono.id === id );

    if ( abonoIndex >= 0 ) {

      return of( this.abonoList[abonoIndex] );

    } else {
        return null;
    }


  }


  insertAbono(abono: Abono ): Observable<Abono[]> {

    // sets a new abonoId
    abono.id = this.getNextId();

    this.abonoList.push( abono );

    //return of(this.abonoList);

    return new Observable<Abono[]>( (observer) => {
      observer.next( this.abonoList );
    });


  }



  deleteAbono(id: number): Observable<Abono[]> {

    const abonoIndex = this.abonoList.findIndex( (abono) => abono.id === id );

    if ( abonoIndex >= 0 ) {
      this.abonoList.splice(abonoIndex, 1);

      return of( this.abonoList );

    }

  }


  // updates a abono
  updateAbono(id: number, abono: Abono): Observable<Abono[]> {

    const abonoIndex = this.abonoList.findIndex( (abon) => abon.id === id );

    if ( abonoIndex >= 0 ) {
      this.abonoList.splice(abonoIndex, 1, abono);

    }

    return of( this.abonoList );

  }



  getNextId(): number {
    return ++this.count;
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
