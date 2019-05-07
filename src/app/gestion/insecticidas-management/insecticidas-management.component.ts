import { Component, OnInit } from '@angular/core';
import { InsecticidaService } from './services/insecticida/insecticida.service';

@Component({
  selector: 'app-insecticidas-management',
  templateUrl: './insecticidas-management.component.html',
  styleUrls: ['./insecticidas-management.component.css']
})
export class InsecticidasManagementComponent implements OnInit {

  constructor(private insecticidaService: InsecticidaService) { }

  ngOnInit() {
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.insecticidaService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.insecticidaService.getShowToolBarInsertButtons();
  }
}
