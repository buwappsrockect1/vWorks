import { Component, OnInit } from '@angular/core';
import { Sector } from '../model/sector';
import { SectorService } from '../services/sector/sector.service';






@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  // sector list
  sectorList: Sector[] = [];
  selectedSector: Sector;

  openedDialog: boolean;
  emptySectors: boolean;
  deleteError: boolean ;

  constructor(private sectorService: SectorService) { }


  ngOnInit() {

    this.openedDialog = false;
    this.selectedSector = null;

    this.sectorService.getSectores()
      .subscribe( (sectorArr: Sector[]) => {

          this.sectorList = sectorArr;

          this.emptySectors = (sectorArr.length === 0);
      });


  }

  onEditSector() {

    // hides the insert button in the toolbar
    this.sectorService.setShowToolBarInsertButtons(false);

  }

  onDeleteSector(sector: Sector) {

    // the selected sector
    this.selectedSector = sector;
    this.deleteError    = false ;

    // shows the modal dialog
    this.openedDialog = true;

  }

  onModalDelete() {

    this.sectorService.deleteSector(this.selectedSector.id)
      .subscribe( (sectorArr: any) => {

        // if there is an error
        if ( sectorArr.error ){

            // trying to delete a sector with lotes
            this.deleteError = true ;

        } else {

            this.sectorService.getSectores()
              .subscribe( (sectorArr2: Sector[]) => {

                  this.sectorList = sectorArr2;

                  this.emptySectors = (sectorArr2.length === 0);

                  // closes the modal dialog
                  this.openedDialog = false;
                  this.selectedSector = null;
                  this.deleteError = false ;

              });
        }


      });


  }

}
