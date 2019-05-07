import { Injectable } from '@angular/core';
import { Sector } from '../../model/sector';
import { SECTORES } from '../sector.mock-data';
import {Observable, of, forkJoin} from 'rxjs';


import { HttpClient } from '@angular/common/http';
import { LIST_VIEW_TYPE } from '../../../../models/list-view-type.enum';


import { flatMap, map, delay } from 'rxjs/operators';
import { AnimationPlayer } from '@angular/animations';
import { MergeMapSubscriber, mergeMap } from 'rxjs/internal/operators/mergeMap';



@Injectable({
  providedIn: 'root',
})
export class SectorService {

  // mock data url ( json file with sectors )
  dataURL: string = 'assets/data/sector.mock-data.json';

  sectoresList: Sector[] = [];
  count: number;


  // Selected list view type ( CARD or LIST )
  selectedListViewType: LIST_VIEW_TYPE;

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;



  constructor(private httpClient: HttpClient) {


      // loads the data with this observable
      this.loadData()
        .subscribe( sect => {

          this.sectoresList = sect;
          this.count = this.sectoresList.length;

        });
  }


  loadData(): Observable<Sector[]> {

    return of(SECTORES);

    //return this.httpClient.get<Sector[]>( this.dataURL );

  }


  getSectores(): Observable<Sector[]> {

    return of(this.sectoresList);
/*
    return new Observable<Sector[]>( (observer) => {
      observer.next( this.sectoresList );
    });
*/
  }



  invento(): Observable<any[]> {

    return of([]);
  
/*    
    const loteService: LoteService = new LoteService(null, null);
    loteService.loadData();


    loteService.getNumLotes( 1 ).subscribe( res => console.log('nLotes: ' + res) );

    forkJoin([
      of(55) ,
      of(60)
    ]).pipe(
       map( ([numLotes, numEspecies] ) => {
          console.log( 'lotes: ' + numLotes );
          console.log( 'especies: ' + numEspecies );
          return [numLotes, numEspecies];

       })
    ).subscribe( (dat: any) => {
        console.log('here');
        console.log( dat[0] );
    });

    return of( this.sectoresList )
      .pipe( mergeMap( sector => forkJoin( ...sector.map(
                                              (sec: Sector, index) => {

                                                console.log( index + ' : ' + sec.nombre );
                                                // return of(sec.id);

                                                return of(1).toPromise();

                                              }) ) ) );

*/



  }

  pruebaForkJoin(): Observable<any[]> {

    const myforkJoinLotesEspecies = (sec: Sector) => 

      new Promise( (resolve, reject) => {
/*
        return loteService.getNumLotes( sec.id )
          .subscribe( (numLotes: number) => {
              sec.numLotes = numLotes;

          });
*/
      });


    return of( this.sectoresList )
      .pipe( mergeMap( sector => forkJoin( ...sector.map( myforkJoinLotesEspecies ) ) ) );

  }


  getSectoresInfo(): Observable<Sector[]> {

    return of(this.sectoresList);

  }


  getSector(id: number): Observable<Sector> {


    const sectorIndex = this.sectoresList.findIndex( (sector) => sector.id === id );

    if ( sectorIndex >= 0 ) {

      return of( this.sectoresList[sectorIndex] );

    } else {
        return of(null);
    }


  }


  insertSector(sector: Sector ): Observable<Sector[]> {

    // sets a new sectionId
    sector.id = this.getNextId();

    this.sectoresList.push( sector );

    return of(this.sectoresList);

  }


  deleteSector(id: number): Observable<Sector[]> {

    const sectorIndex = this.sectoresList.findIndex( (sector) => sector.id === id );

    if ( sectorIndex >= 0 ) {
      this.sectoresList.splice(sectorIndex, 1);

    }

    return of( this.sectoresList);

  }


  // updates a sector
  updateSector(id: number, sector: Sector): Observable<Sector[]> {

    const sectorIndex = this.sectoresList.findIndex( (sect) => sect.id === id );

    if ( sectorIndex >= 0 ) {
      this.sectoresList.splice(sectorIndex, 1, sector);

      return of( this.sectoresList );

    }

  }


  getNextId(): number {
    return ++this.count;
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
