import { Component, OnInit } from '@angular/core';
import { Insecticida } from '../model/insecticida/insecticida';
import { InsecticidaService } from '../services/insecticida/insecticida.service';
import { PrincipioActivo } from '../model/insecticida/principioActivo';
import { isConstructorDeclaration } from 'typescript';


@Component({
  selector: 'app-insecticida-list',
  templateUrl: './insecticida-list.component.html',
  styleUrls: ['./insecticida-list.component.css']
})
export class InsecticidaListComponent implements OnInit {

  // insecticida list
  insecticidaList: Insecticida[] = [];
  selectedInsecticida: Insecticida;



  openedInsecticidaDialog: boolean;
  emptyInsecticidas: boolean;

  constructor(private insecticidaService: InsecticidaService) { }

  ngOnInit() {

    this.openedInsecticidaDialog = false;
    this.selectedInsecticida = null;

    this.insecticidaService.getInsecticidas()
      .subscribe( (insecticidaArr: Insecticida[]) => {

          this.insecticidaList = insecticidaArr;

          this.emptyInsecticidas = (insecticidaArr.length === 0);
      });
  }

  onEditInsecticida() {

    // hides the insert button in the toolbar
    this.insecticidaService.setShowToolBarInsertButtons(false);

  }

  onDeleteInsecticida(insecticida: Insecticida) {

    // the selected insecticida
    this.selectedInsecticida = insecticida;

    // shows the modal dialog
    this.openedInsecticidaDialog = true;

  }


  onModalDelete() {

    this.insecticidaService.deleteInsecticida(this.selectedInsecticida.id)
      .subscribe( (insecticidaArr: Insecticida[]) => {

        this.insecticidaService.getInsecticidas()
          .subscribe( (insecticidaArr2: Insecticida[]) => {

            this.insecticidaList = insecticidaArr2;

            this.emptyInsecticidas = (insecticidaArr2.length === 0);

            // closes the modal dialog
            this.openedInsecticidaDialog = false;
            this.selectedInsecticida = null;

          });

      });


  }



}

