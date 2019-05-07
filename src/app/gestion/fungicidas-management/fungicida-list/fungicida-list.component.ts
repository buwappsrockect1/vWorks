import { Component, OnInit } from '@angular/core';
import { Fungicida } from '../model/fungicida/fungicida';
import { FungicidaService } from '../services/fungicida/fungicida.service';

@Component({
  selector: 'app-fungicida-list',
  templateUrl: './fungicida-list.component.html',
  styleUrls: ['./fungicida-list.component.css']
})
export class FungicidaListComponent implements OnInit {

  // fungicida list
  fungicidaList: Fungicida[] = [];
  selectedFungicida: Fungicida;

  openedFungicidaDialog: boolean;
  emptyFungicidas: boolean;

  constructor(private fungicidaService: FungicidaService) { }

  ngOnInit() {

    this.openedFungicidaDialog = false;
    this.selectedFungicida = null;

    this.fungicidaService.getFungicidas()
      .subscribe( (fungicidaArr: Fungicida[]) => {
          this.fungicidaList = fungicidaArr;

          this.emptyFungicidas = (fungicidaArr.length === 0);
      });
  }

  onEditFungicida() {

    // hides the insert button in the toolbar
    this.fungicidaService.setShowToolBarInsertButtons(false);

  }

  onDeleteFungicida(fungicida: Fungicida) {

    // the selected fungicida
    this.selectedFungicida = fungicida;

    // shows the modal dialog
    this.openedFungicidaDialog = true;

  }


  onModalDelete() {

    this.fungicidaService.deleteFungicida(this.selectedFungicida.id)
      .subscribe( (fungicidaArr: Fungicida[]) => {

        this.fungicidaService.getFungicidas()
          .subscribe( (fungicidaArr2: Fungicida[]) => {

            this.fungicidaList = fungicidaArr2;

            this.emptyFungicidas = (fungicidaArr2.length === 0);

            // closes the modal dialog
            this.openedFungicidaDialog = false;
            this.selectedFungicida = null;

          });


      });


  }

}
