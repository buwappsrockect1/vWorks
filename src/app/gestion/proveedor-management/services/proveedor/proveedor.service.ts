import { Injectable } from '@angular/core';
import { Proveedor } from '../../model/proveedor/proveedor';
import { Observable, of } from 'rxjs';
import { PROVEEDORES } from '../../proveedor.mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

    // mock data url ( json file with proveedor )
    dataURL: string = 'assets/data/proveedor.mock-data.json';

    proveedorList: Proveedor[] = [];
    count: number;



    // Shows or hide the Insert Button or list view buttons on the upper toolbar
    bInsertMode: boolean = false;



    constructor() {

        // loads the data with this observable
        this.loadData()
          .subscribe( proveedores => {

            this.proveedorList = proveedores;
            this.count = this.proveedorList.length;

          });
    }


    loadData(): Observable<Proveedor[]> {

      return of(PROVEEDORES);

      //return this.httpClient.get<Proveedor[]>( this.dataURL );

    }


    getProveedores(): Observable<Proveedor[]> {
      return of(this.proveedorList);
    }


    getProveedor(id: number): Observable<Proveedor> {


      const proveedorIndex = this.proveedorList.findIndex( (proveedor) => proveedor.id === id );

      if ( proveedorIndex >= 0 ) {

        return of( this.proveedorList[proveedorIndex] );

      } else {
          return of(null);
      }


    }


    insertProveedor(proveedor: Proveedor ): Observable<Proveedor[]> {

      // sets a new proveedorId
      proveedor.id = this.getNextId();

      this.proveedorList.push( proveedor );

      return of(this.proveedorList);

    }



    deleteProveedor(id: number): Observable<Proveedor[]> {

      const proveedorIndex = this.proveedorList.findIndex( (proveedor) => proveedor.id === id );

      if ( proveedorIndex >= 0 ) {
        this.proveedorList.splice(proveedorIndex, 1);

        return of( this.proveedorList );

      }

    }


    // updates a proveedor
    updateProveedor(id: number, proveedor: Proveedor): Observable<Proveedor[]> {

      const proveedorIndex = this.proveedorList.findIndex( (prov) => prov.id === id );

      if ( proveedorIndex >= 0 ) {
        this.proveedorList.splice(proveedorIndex, 1, proveedor);
      }

      return of( this.proveedorList );

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
