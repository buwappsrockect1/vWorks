import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/gestion/sector-management/services/sector/sector.service';
import { EspecieService } from 'src/app/gestion/especies-management/services/especie/especie.service';
import { AbonoService } from 'src/app/gestion/abonos-management/service/abono/abono.service';
import { FungicidaService } from 'src/app/gestion/fungicidas-management/services/fungicida/fungicida.service';
import { InsecticidaService } from 'src/app/gestion/insecticidas-management/services/insecticida/insecticida.service';
import { TrazabilidadSectorService } from 'src/app/trazabilidad/services/trazabilidad-sector/trazabilidad-sector.service';
import { ProveedorService } from 'src/app/gestion/proveedor-management/services/proveedor/proveedor.service';

// main menu options
enum MAIN_MENU_OPTIONS {
  TRAZABILIDAD ,
  ALBARANES ,
  GESTION
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // selected main menu option
  selectedMainMenu: MAIN_MENU_OPTIONS;
  MAIN_MENU_OPTIONS: typeof MAIN_MENU_OPTIONS = MAIN_MENU_OPTIONS;

  constructor(private sectorService: SectorService,
              private especieService: EspecieService,
              private abonoService: AbonoService,
              private insecticidaService: InsecticidaService,
              private fungicidaService: FungicidaService,
              private proveedorService: ProveedorService,
              private trazabilidadSectorService: TrazabilidadSectorService) { }

  ngOnInit() {

    // initial selected Main Menu
    this.selectedMainMenu = MAIN_MENU_OPTIONS.GESTION;

  }

  // set the main menu option
  setMainMenu(menu: MAIN_MENU_OPTIONS) {
    this.selectedMainMenu = menu;

    // if we click on the main menu TRAZABILIDAD Option 
    // will initialize the sectores navLinks in the toolbar
    if ( menu === MAIN_MENU_OPTIONS.TRAZABILIDAD ) {
      this.trazabilidadSectorService.initSectoresLink();

    }

  }

  onGestionSector() {
    // shows the insert button in the toolbar
    this.sectorService.setShowToolBarInsertButtons(true);
  }

  onGestionLote() {
    // shows the insert button in the toolbar
    this.sectorService.setShowToolBarInsertButtons(true);
  }

  onGestionEspecie() {
    // shows the insert button in the toolbar
    this.especieService.setShowToolBarInsertButtons(true);
  }

  onGestionAbono() {
    // shows the insert button in the toolbar
    this.abonoService.setShowToolBarInsertButtons(true);
  }

  onGestionInsecticida() {
    // shows the insert button in the toolbar
    this.insecticidaService.setShowToolBarInsertButtons(true);
  }


  onGestionFungicida() {
    // shows the insert button in the toolbar
    this.fungicidaService.setShowToolBarInsertButtons(true);
  }

  onGestionProveedor() {
    // shows the insert button in the toolbar
    this.proveedorService.setShowToolBarInsertButtons(true);
  }

}
