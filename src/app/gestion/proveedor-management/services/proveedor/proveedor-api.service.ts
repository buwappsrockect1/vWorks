import { Injectable } from '@angular/core';
import { Proveedor } from '../../model/proveedor/proveedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalService } from '../../../../services/global-service/global.service';

@Injectable({
  providedIn: 'root'
})
export class ProveedorApiService {


    // mock data url ( json file with proveedor )
    //dataURL: string = 'assets/data/proveedor.mock-data.json';
    // dataURL = 'http://localhost:3051/proveedores';
    dataURL = this.globalService.getServerAndPort() + '/proveedores';

    proveedorList: Proveedor[] = [];

    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;


    constructor(private httpClient: HttpClient,
                private globalService: GlobalService) {

    }


    getProveedores(): Observable<Proveedor[]> {
      return this.httpClient.get<Proveedor[]>( this.dataURL );
    }


    getProveedor(id: number): Observable<Proveedor> {

      if ( id ) {
        return this.httpClient.get<Proveedor>(this.dataURL + `/${id}` );
      }

    }


    insertProveedor(proveedor: Proveedor ): Observable<Proveedor[]> {

      if (proveedor) {
          return this.httpClient.post<Proveedor[]>(this.dataURL , proveedor);
      }

    }



    deleteProveedor(id: number): Observable<Proveedor[]> {

      if (id) {
        return this.httpClient.delete<Proveedor[]>( this.dataURL + `/${id}` );
      }

    }


    // updates a proveedor
    updateProveedor(id: number, proveedor: Proveedor): Observable<Proveedor[]> {

      if (id && proveedor) {
        return this.httpClient.put<Proveedor[]>( this.dataURL + `/${id}`, proveedor );
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
