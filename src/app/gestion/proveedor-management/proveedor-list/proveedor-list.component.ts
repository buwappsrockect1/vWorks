import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../model/proveedor/proveedor';
import { ProveedorService } from '../services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor-list',
  templateUrl: './proveedor-list.component.html',
  styleUrls: ['./proveedor-list.component.css']
})
export class ProveedorListComponent implements OnInit {

  // proveedor list
  proveedorList: Proveedor[] = [];
  selectedProveedor: Proveedor;

  openedProveedorDialog: boolean;
  emptyProveedores: boolean;

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {

    this.openedProveedorDialog = false;
    this.selectedProveedor = null;

    this.proveedorService.getProveedores()
      .subscribe( (proveedorArr: Proveedor[]) => {
          this.proveedorList = proveedorArr;

          this.emptyProveedores = (proveedorArr.length === 0);
      });
  }

  onEditProveedor() {

    // hides the insert button in the toolbar
    this.proveedorService.setShowToolBarInsertButtons(false);

  }

  onDeleteProveedor(proveedor: Proveedor) {


    // the selected Proveedor
    this.selectedProveedor = proveedor;

    // shows the modal dialog
    this.openedProveedorDialog = true;

  }


  onModalDelete() {

    this.proveedorService.deleteProveedor(this.selectedProveedor.id)
      .subscribe( (proveedorArr: Proveedor[] ) => {

        this.proveedorService.getProveedores()
          .subscribe( (proveedorArr2: Proveedor[]) => {

              this.proveedorList = proveedorArr2;

              this.emptyProveedores = (proveedorArr2.length === 0);

              // closes the modal dialog
              this.openedProveedorDialog = false;
              this.selectedProveedor = null;

          });
      });

  }

}
