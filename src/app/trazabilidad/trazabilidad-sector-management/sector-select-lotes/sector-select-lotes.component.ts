import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { Sector } from 'src/app/gestion/sector-management/model/sector';
import { SectorService } from 'src/app/gestion/sector-management/services/sector/sector.service';


import { TrazabilidadSectorService } from '../../services/trazabilidad-sector/trazabilidad-sector.service';
import { MyRouteNavLink } from '../../models/my-route-nav-link';
import { LoteInfo } from 'src/app/gestion/lotes-management/model/loteInfo';
import { LoteApiService } from 'src/app/gestion/lotes-management/services/lote-api/lote-api.service';
import { Lote } from 'src/app/gestion/lotes-management/model/lote';


@Component({
  selector: 'app-sector-select-lotes',
  templateUrl: './sector-select-lotes.component.html',
  styleUrls: ['./sector-select-lotes.component.css']
})
export class SectorSelectLotesComponent implements OnInit {

  // lotes list
  loteList: LoteInfo[] = [];
  selectedLote: LoteInfo;
  selectedSector: Sector;

  emptyLotes: boolean;

  // opened delete lote dialog
  openedDeleteLoteDialog: boolean = false;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private sectorService: SectorService,
              private loteService: LoteApiService,
              private trazabilidadSectorService: TrazabilidadSectorService) { }

  ngOnInit() {

    this.selectedLote = null;
    this.selectedSector = null;

    // get the route params to get the sector id
    this.route.params
      .subscribe( (params: Params) => {

        const id_sector = parseInt( params['id_sector'], 10 );

        this.sectorService.getSector( id_sector )
          .subscribe( sect => {

              this.selectedSector = sect;

              this.loteService.getLotesInfoForTable(id_sector)
                .subscribe( (lotesArr: LoteInfo[]) => {
                    this.loteList = lotesArr;

                    this.emptyLotes = (lotesArr.length === 0);
                });

          });

      });


  }


  // creates the link
  getLink(lote: LoteInfo): string[] {

    const linkExpr: string[] = [];
    if ( lote ) {
      linkExpr.push( 'lote/' + lote.id );
    }

    return linkExpr;

  }


  // when the user clicks on a routerLink
  onRouterLinkClick(lote: LoteInfo) {

        // create a MyRouteNavLink ( navlink element )
        const myRouteNavLnk: MyRouteNavLink = {
          textLink:   lote.nombre ,
          routeLink:  'sector/' + this.selectedSector.id  + '/lotes/' + lote.id
        };

        // writes this navLink
        this.trazabilidadSectorService.writeNavLink( myRouteNavLnk );

  }


  onEditLote() {
    // hides the insert button in the toolbar
    this.loteService.setShowToolBarInsertButtons(false);
  }


  onDeleteLote( lote: LoteInfo ) {

    // the selected lote
    this.selectedLote = lote;

    // shows the delete modal dialog
    this.openedDeleteLoteDialog = true;

  }

  onModalDelete() {

    this.loteService.deleteLote( this.selectedLote.id )
      .subscribe( (lote: Lote) => {

        this.loteService.getLotesInfoForTable(this.selectedSector.id)
          .subscribe( (loteInfoArr: LoteInfo[]) => {
              this.loteList = loteInfoArr;

              this.emptyLotes = (loteInfoArr.length === 0);

              // closes the modal dialog
              this.openedDeleteLoteDialog = false;
              this.selectedLote = null;

          });

      });

  }


}
