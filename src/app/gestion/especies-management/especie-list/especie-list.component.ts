import { Component, OnInit } from '@angular/core';
import { Especie } from '../model/especie';
import { EspecieService } from '../services/especie/especie.service';





@Component({
  selector: 'app-especie-list',
  templateUrl: './especie-list.component.html',
  styleUrls: ['./especie-list.component.css']
})
export class EspecieListComponent implements OnInit {

  especieList: Especie[];
  selectedEspecie: Especie;

  openedEspecDialog: boolean;
  emptyEspecies: boolean;

  // clrSignPost especie imagen
  openStateImg: boolean = false;

  constructor(private especieService: EspecieService) {

  }

  ngOnInit() {

    this.openedEspecDialog     = false;
    this.selectedEspecie       = null;

    this.especieService.getEspecies()
      .subscribe( (especieArr: Especie[]) => {
          this.especieList = especieArr;
          this.emptyEspecies = (especieArr.length === 0);
      });

  }


  onEditEspecie() {
    // hides the insert button in the toolbar
    this.especieService.setShowToolBarInsertButtons(false);
  }


  onDeleteEspecie( especie: Especie ) {

      // the selected especie
      this.selectedEspecie = especie;

      // shows the modal dialog
      this.openedEspecDialog = true;

  }

  onModalDelete() {

    this.especieService.deleteEspecie(this.selectedEspecie.id)
      .subscribe( (especieArr: Especie[]) => {

        this.especieService.getEspecies()
          .subscribe( (especieArr2: Especie[]) => {

            this.especieList = especieArr2;

            this.emptyEspecies = (especieArr2.length === 0);

            // closes the modal dialog
            this.openedEspecDialog = false;
            this.selectedEspecie = null;
          });

      });

  }

}
