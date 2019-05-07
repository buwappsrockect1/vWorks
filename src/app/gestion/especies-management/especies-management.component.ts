import { Component, OnInit } from '@angular/core';
import { EspecieService } from './services/especie/especie.service';

@Component({
  selector: 'app-especies-management',
  templateUrl: './especies-management.component.html',
  styleUrls: ['./especies-management.component.css']
})
export class EspeciesManagementComponent implements OnInit {

  constructor(private especieService: EspecieService) { }

  ngOnInit() {

    // shows the toolbar buttons initially
    this.setShowToolButtons(true);
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.especieService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.especieService.getShowToolBarInsertButtons();
  }
}
