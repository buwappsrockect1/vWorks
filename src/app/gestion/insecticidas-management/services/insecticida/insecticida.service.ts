import { Injectable } from '@angular/core';
import { Insecticida } from '../../model/insecticida/insecticida';
import { Observable, of } from 'rxjs';
import { INSECTICIDAS } from '../../insecticida.mock-data';

@Injectable({
  providedIn: 'root'
})
export class InsecticidaService {


    // mock data url ( json file with insecticida )
    dataURL: string = 'assets/data/insecticida.mock-data.json';

    insecticidaList: Insecticida[] = [];
    count: number;



    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;



    constructor() {

        // loads the data with this observable
        this.loadData()
          .subscribe( (insecticidas: Insecticida[]) => {

            this.insecticidaList = insecticidas;
            this.count = this.insecticidaList.length;

          });
    }


    loadData(): Observable<Insecticida[]> {

      const cosa: Observable<Insecticida[]> = of(INSECTICIDAS);
      return cosa;

      //return this.httpClient.get<Insecticida[]>( this.dataURL );

    }


    getInsecticidas(): Observable<Insecticida[]> {
      // return of(this.insecticidaList);

      return new Observable<Insecticida[]>( (observer) => {
        observer.next( this.insecticidaList );
      });

    }


    getInsecticida(id: number): Observable<Insecticida> {


      const insecticidaIndex = this.insecticidaList.findIndex( (insecticida) => insecticida.id === id );

      if ( insecticidaIndex >= 0 ) {

        return of( this.insecticidaList[insecticidaIndex] );

      } else {
          return null;
      }


    }


    insertInsecticida(insecticida: Insecticida ): Observable<Insecticida[]> {

      // sets a new insecticidaId
      insecticida.id = this.getNextId();

      this.insecticidaList.push( insecticida );

      //return of(this.insecticidaList);

      return new Observable<Insecticida[]>( (observer) => {
        observer.next( this.insecticidaList );
      });


    }



    deleteInsecticida(id: number): Observable<Insecticida[]> {

      const insecticidaIndex = this.insecticidaList.findIndex( (insecticida) => insecticida.id === id );

      if ( insecticidaIndex >= 0 ) {
        this.insecticidaList.splice(insecticidaIndex, 1);

        return of( this.insecticidaList );

      }

    }


    // updates a insecticida
    updateInsecticida(id: number, insecticida: Insecticida): Observable<Insecticida[]> {

      const insecticidaIndex = this.insecticidaList.findIndex( (insec) => insec.id === id );

      if ( insecticidaIndex >= 0 ) {
        this.insecticidaList.splice(insecticidaIndex, 1, insecticida);

      }

      return of( this.insecticidaList );

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
