import { Component, OnInit } from '@angular/core';
import { NotasLoteApiService } from './traza-notas/service/notas-lote-api/notas-lote-api.service';

@Component({
  selector: 'app-traza-notas-mng',
  templateUrl: './traza-notas-mng.component.html',
  styleUrls: ['./traza-notas-mng.component.css']
})
export class TrazaNotasMngComponent implements OnInit {

  constructor(private notasLoteService: NotasLoteApiService) { }

  ngOnInit() {
    // shows the toolbar buttons initially
    this.setShowToolButtons(true);
  }

  // Insert mode on ( hide toolbar buttons)
  setShowToolButtons(show: boolean) {

    // if we hide the toolbar the insert mode is set to true
    this.notasLoteService.setShowToolBarInsertButtons(show);
  }

  getShowToolButtons(): boolean {
    return this.notasLoteService.getShowToolBarInsertButtons();
  }

}
