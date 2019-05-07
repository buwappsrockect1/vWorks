import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from 'src/app/services/global-service/global.service';
import { ImagenLote } from '../../model/imagen-lote';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenLoteApiService {

    // mock data url ( json file with ImagenLotes )
    // dataURL: string = 'assets/data/imagenLote.mock-data.json';


    // server used
    // prefixSERVER = 'http://localhost:3051';
    prefixSERVER = this.globalService.getServerAndPort();
    dataURL =  this.prefixSERVER + '/lotes';


    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;


    constructor(private httpClient: HttpClient,
                private globalService: GlobalService) {
    }

    // get ImagenLote of a lote ( given the lote id)
    getImagenesLote(id_lote: number): Observable<ImagenLote[]> {

        return this.httpClient.get<ImagenLote[]>(this.dataURL + `/${id_lote}/images`);
    }


    getImagenLote(id: number): Observable<ImagenLote> {

      if ( id ) {
        return this.httpClient.get<ImagenLote>(this.dataURL + `/images/${id}` );
      }

    }


    insertImagenLote(imagenLote: ImagenLote ): Observable<ImagenLote[]> {

      if (imagenLote) {
        return this.httpClient.post<ImagenLote[]>(this.dataURL + `/imagen-upload`, imagenLote);
      }

    }



    deleteImagenLote(id: number): Observable<ImagenLote[]> {

      if ( id ) {

        return this.httpClient.delete<ImagenLote[]>( this.dataURL + `/images/${id}` );

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
