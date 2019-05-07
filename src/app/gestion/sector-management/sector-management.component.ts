import { Component, OnInit } from '@angular/core';
import { LIST_VIEW_TYPE } from '../../models/list-view-type.enum';
import { SectorService } from './services/sector/sector.service';

@Component({
  selector: 'app-sector-management',
  templateUrl: './sector-management.component.html',
  styleUrls: ['./sector-management.component.css']
})
export class SectorManagementComponent implements OnInit {

  LIST: LIST_VIEW_TYPE ;     // list view type set to LIST_VIEW_TYPE ( lists )
  CARD: LIST_VIEW_TYPE ;     // list view type set to CARD_VIEW_TYPE ( cards )


  constructor(private sectorService: SectorService) {

    this.LIST = LIST_VIEW_TYPE.LIST ;
    this.CARD = LIST_VIEW_TYPE.CARD ;

    this.setListViewT(LIST_VIEW_TYPE.CARD);

  }


  ngOnInit() {

    // shows the toolbar buttons initially 
    this.setShowToolButtons(true);

  }

  // list view type functions

  setListViewT( type: LIST_VIEW_TYPE ) {
    this.sectorService.setListViewType(type);
  }


  getListViewT(): LIST_VIEW_TYPE {
    return this.sectorService.getListViewType();
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.sectorService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.sectorService.getShowToolBarInsertButtons();
  }

}
