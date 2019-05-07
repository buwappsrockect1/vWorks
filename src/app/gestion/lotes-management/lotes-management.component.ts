import { Component, OnInit } from '@angular/core';

import { SectorService } from '../sector-management/services/sector/sector.service';
import { Sector } from '../sector-management/model/sector';
import { LoteApiService } from './services/lote-api/lote-api.service';

@Component({
  selector: 'app-lotes-management',
  templateUrl: './lotes-management.component.html',
  styleUrls: ['./lotes-management.component.css']
})
export class LotesManagementComponent implements OnInit {



  constructor(private loteService: LoteApiService ) { }

  ngOnInit() {
      // shows the toolbar buttons initially
      this.setShowToolButtons(true);

  }



  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.loteService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.loteService.getShowToolBarInsertButtons();
  }
}
