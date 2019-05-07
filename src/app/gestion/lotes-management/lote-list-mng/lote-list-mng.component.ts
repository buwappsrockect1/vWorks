import { Component, OnInit } from '@angular/core';

import { SectorService } from '../../sector-management/services/sector/sector.service';


import { LoteApiService } from '../services/lote-api/lote-api.service';
import { Sector } from '../../sector-management/model/sector';
import { LoteInfo } from '../model/loteInfo';
import { Lote } from '../model/lote';


@Component({
  selector: 'app-lote-list-mng',
  templateUrl: './lote-list-mng.component.html',
  styleUrls: ['./lote-list-mng.component.css']
})
export class LoteListMngComponent implements OnInit {

  // lotes list
  loteList: LoteInfo[] = [];
  loteSelected: LoteInfo = {
                      id:                  0,
                      nombre:              '',
                      especie:             {
                                              id:                 1,
                                              nombre:             '',
                                              nombreCientifico:   '',
                                              nombreComun:        ''
                                          },
                      variedad:           {
                                              id:                 1,
                                              nombre:            ''
                                          },
                      cantidad:            0,
                      stockMinimo:         0,
                      sector:              {
                                              id:           0  ,
                                              nombre:       '' ,
                                              numero:       0  ,
                                              numEspecies:  0  ,
                                              numLotes:     0
                                           },
                      fechaEntrada:        '',
                      operarioEncargado:   {
                                              id:                 0 ,
                                              codigo:             '',
                                              nombreOperaciones:  ''
                                           },
                      proveedorOrigen:     {
                                              id:                 0 ,
                                              nombre:            '' ,
                                              nombre2Digitos:    ''
                                           },
                      codProveedor:        '' ,
                      qrTrazabilidad:      '' ,
                      notas:               ''
  };


  emptyLotes: boolean;

  // sector list
  sectorList: Sector[] = [];
  sectorSelected: Sector;

  // opened delete lote dialog
  openedDeleteLoteDialog: boolean = false;

  // opened view lote dialog
  openedViewLoteDialog: boolean = false ;


  constructor(private sectorService: SectorService,
              private loteService: LoteApiService) { }

  ngOnInit() {

      // get the list of sectors
      this.sectorService.getSectores()
        .subscribe( (sectorArr: Sector[]) => {
            this.sectorList = sectorArr;

            if ( sectorArr.length > 0  ) {

              // gets the stored selected sector
              const tmpSectorSelectedId = this.loteService.getSectorSelected();
              if ( tmpSectorSelectedId !== -1) {

                this.sectorSelected = this.sectorList.find( (sect) => sect.id === tmpSectorSelectedId );

              } else {

                // select the first sector by default
                this.sectorSelected = this.sectorList[0];

              }

            } else {

              // there is no sector to select ( empty sectors )
              this.sectorSelected = null ;
            }

            // shows the lotes for the selected sector
            this.onDropdowItemClick( this.sectorSelected );


        });



  }

  onDropdowItemClick(sector: Sector) {

      this.sectorSelected = sector;

      // if sector is not null or undefined ( valid sector )
      if ( sector ) {

          // stores the sector selected id in the service to return to this
          this.loteService.setSectorSelected( sector.id );

          this.loteService.getLotesInfoForTable(sector.id)
            .subscribe( (loteInfoArr: LoteInfo[]) => {
                this.loteList = loteInfoArr;

                this.emptyLotes = (loteInfoArr.length === 0);

            });
      }

  }

  onViewLoteDialog( lote: LoteInfo) {

    // the selected lote
    this.loteSelected = lote;

    // opens the view lote dialog
    this.openedViewLoteDialog = true;

  }


  onEditLote() {
    // hides the insert button in the toolbar
    this.loteService.setShowToolBarInsertButtons(false);
  }


  onDeleteLote( lote: LoteInfo ) {

      // the selected lote
      this.loteSelected = lote;

      // shows the delete modal dialog
      this.openedDeleteLoteDialog = true;

  }

  onModalDelete() {

    this.loteService.deleteLote( this.loteSelected.id )
      .subscribe( (lote: Lote) => {

        this.loteService.getLotesInfoForTable(this.sectorSelected.id)
          .subscribe( (loteInfoArr: LoteInfo[]) => {
              this.loteList = loteInfoArr;

              this.emptyLotes = (loteInfoArr.length === 0);

              // closes the modal dialog
              this.openedDeleteLoteDialog = false;
              this.loteSelected = null;

          });

      });

  }

}
