import { Component, OnInit } from '@angular/core';
import { NotasPrivLoteApiService } from './service/notas-priv-lote-api/notas-priv-lote-api.service';

@Component({
  selector: 'app-traza-notas-priv-mng',
  templateUrl: './traza-notas-priv-mng.component.html',
  styleUrls: ['./traza-notas-priv-mng.component.css']
})
export class TrazaNotasPrivMngComponent implements OnInit {

  constructor(private notasPrivLoteService: NotasPrivLoteApiService) { }

  ngOnInit() {
    // shows the toolbar buttons initially
    this.setShowToolButtons(true);
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.notasPrivLoteService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.notasPrivLoteService.getShowToolBarInsertButtons();
  }

}
