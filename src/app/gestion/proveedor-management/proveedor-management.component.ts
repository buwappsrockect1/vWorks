import { Component, OnInit } from '@angular/core';
import { ProveedorService } from './services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor-management',
  templateUrl: './proveedor-management.component.html',
  styleUrls: ['./proveedor-management.component.css']
})
export class ProveedorManagementComponent implements OnInit {

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit() {
      // shows the toolbar buttons initially
      this.setShowToolButtons(true);
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.proveedorService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.proveedorService.getShowToolBarInsertButtons();
  }
}
