import { Component, OnInit } from '@angular/core';
import { AbonoService } from './service/abono/abono.service';

@Component({
  selector: 'app-abonos-management',
  templateUrl: './abonos-management.component.html',
  styleUrls: ['./abonos-management.component.css']
})
export class AbonosManagementComponent implements OnInit {

  constructor(private abonoService: AbonoService) { }

  ngOnInit() {
      // shows the toolbar buttons initially
      this.setShowToolButtons(true);
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.abonoService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.abonoService.getShowToolBarInsertButtons();
  }
}
