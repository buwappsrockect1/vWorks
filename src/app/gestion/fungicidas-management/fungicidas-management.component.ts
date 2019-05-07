import { Component, OnInit } from '@angular/core';
import { FungicidaService } from './services/fungicida/fungicida.service';

@Component({
  selector: 'app-fungicidas-management',
  templateUrl: './fungicidas-management.component.html',
  styleUrls: ['./fungicidas-management.component.css']
})
export class FungicidasManagementComponent implements OnInit {

  constructor(private fungicidaService: FungicidaService) { }

  ngOnInit() {
    // shows the toolbar buttons initially
    this.setShowToolButtons(true);
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.fungicidaService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.fungicidaService.getShowToolBarInsertButtons();
  }
}
