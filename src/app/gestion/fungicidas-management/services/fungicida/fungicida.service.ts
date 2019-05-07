import { Injectable } from '@angular/core';
import { Fungicida } from '../../model/fungicida/fungicida';
import { Observable, of } from 'rxjs';
import { FUNGICIDAS } from '../../fungicida.mock-data';

@Injectable({
  providedIn: 'root'
})
export class FungicidaService {

    // mock data url ( json file with fungicida )
    dataURL: string = 'assets/data/fungicida.mock-data.json';

    fungicidaList: Fungicida[] = [];
    count: number;



    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;



    constructor() {

        // loads the data with this observable
        this.loadData()
          .subscribe( fungicidas => {

            this.fungicidaList = fungicidas;
            this.count = this.fungicidaList.length;

          });
    }


    loadData(): Observable<Fungicida[]> {

      const cosa: Observable<Fungicida[]> = of(FUNGICIDAS);
      return cosa;

      //return this.httpClient.get<Fungicida[]>( this.dataURL );

    }


    getFungicidas(): Observable<Fungicida[]> {
      // return of(this.fungicidaList);

      return new Observable<Fungicida[]>( (observer) => {
        observer.next( this.fungicidaList );
      });

    }


    getFungicida(id: number): Observable<Fungicida> {


      const fungicidaIndex = this.fungicidaList.findIndex( (fungicida) => fungicida.id === id );

      if ( fungicidaIndex >= 0 ) {

        return of( this.fungicidaList[fungicidaIndex] );

      } else {
          return of(null);
      }


    }


    insertFungicida(fungicida: Fungicida ): Observable<Fungicida[]> {

      // sets a new fungicidaId
      fungicida.id = this.getNextId();

      this.fungicidaList.push( fungicida );

      //return of(this.fungicidaList);

      return new Observable<Fungicida[]>( (observer) => {
        observer.next( this.fungicidaList );
      });


    }



    deleteFungicida(id: number): Observable<Fungicida[]> {

      const fungicidaIndex = this.fungicidaList.findIndex( (fungicida) => fungicida.id === id );

      if ( fungicidaIndex >= 0 ) {
        this.fungicidaList.splice(fungicidaIndex, 1);

        return of( this.fungicidaList );

      }

    }


    // updates a fungicida
    updateFungicida(id: number, fungicida: Fungicida): Observable<Fungicida[]> {

      const fungicidaIndex = this.fungicidaList.findIndex( (abon) => abon.id === id );

      if ( fungicidaIndex >= 0 ) {
        this.fungicidaList.splice(fungicidaIndex, 1, fungicida);

      }

      return of( this.fungicidaList );

    }



    getNextId(): number {
      return ++this.count;
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
