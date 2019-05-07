import { Injectable } from '@angular/core';
import { LIST_VIEW_TYPE } from 'src/app/models/list-view-type.enum';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sector } from '../../model/sector';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class SectorApiService {

  // mock data url ( json file with sectors )
  // dataURL: string = 'assets/data/sector.mock-data.json';
  // dataURL = 'http://localhost:3051/sectores';

  // dataURL = 'http://51.77.140.197:3051/sectores';
  dataURL = this.globalService.getServerAndPort() + '/sectores';


  // Selected list view type ( CARD or LIST )
  selectedListViewType: LIST_VIEW_TYPE;

  // Shows or hide the Insert Button or list view buttons on the upper toolbar
  bInsertMode: boolean = false;



  constructor(private httpClient: HttpClient,
              private globalService: GlobalService) {

  }



  getSectores(): Observable<Sector[]> {

    return this.httpClient.get<Sector[]>(this.dataURL );
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



  getSector(id: number): Observable<Sector> {

    if ( id ) {
      return this.httpClient.get<Sector>(this.dataURL + `/${id}` );
    }

  }


  insertSector(sector: Sector ): Observable<Sector[]> {

    if (sector) {
        return this.httpClient.post<Sector[]>(this.dataURL , sector);
    }
  }


  deleteSector(id: number): Observable<Sector[]> {

    if (id) {
      return this.httpClient.delete<Sector[]>( this.dataURL + `/${id}` );
    }

  }


  // updates a sector
  updateSector(id: number, sector: Sector): Observable<Sector[]> {

    if (id && sector) {
      return this.httpClient.put<Sector[]>( this.dataURL + `/${id}`, sector );
    }

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
