import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoteService } from 'src/app/gestion/lotes-management/services/lote/lote.service';
import { Lote } from 'src/app/gestion/lotes-management/model/lote';

import { collapse } from '@clr/angular';

@Component({
  selector: 'app-sector-select-lote-detail',
  templateUrl: './sector-select-lote-detail.component.html',
  styleUrls: ['./sector-select-lote-detail.component.css']
})
export class SectorSelectLoteDetailComponent implements OnInit {

  // vertical nav-bar collapsed
  collapsed: boolean;

  constructor() { }

  ngOnInit() {
    this.collapsed = true;
  }

}
