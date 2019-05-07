import { Component, OnInit } from '@angular/core';
import { Abono } from '../model/abono/abono';
import { AbonoService } from '../service/abono/abono.service';




@Component({
  selector: 'app-abono-list',
  templateUrl: './abono-list.component.html',
  styleUrls: ['./abono-list.component.css']
})
export class AbonoListComponent implements OnInit {

  // abono list
  abonoList: Abono[] = [];
  selectedAbono: Abono;

  openedAbonoDialog: boolean;
  emptyAbonos: boolean;

  constructor(private abonoService: AbonoService) { }

  ngOnInit() {

    this.openedAbonoDialog = false;
    this.selectedAbono = null;

    this.abonoService.getAbonos()
      .subscribe( (abonoArr: Abono[]) => {
          this.abonoList = abonoArr;

          this.emptyAbonos = (abonoArr.length === 0);
      });
  }

  onEditAbono() {

    // hides the insert button in the toolbar
    this.abonoService.setShowToolBarInsertButtons(false);

  }

  onDeleteAbono(abono: Abono) {

    // the selected abono
    this.selectedAbono = abono;

    // shows the modal dialog
    this.openedAbonoDialog = true;

  }


  onModalDelete() {

    this.abonoService.deleteAbono(this.selectedAbono.id)
      .subscribe( (abonoArr: Abono[]) => {

        this.abonoService.getAbonos()
          .subscribe( (abonoArr2: Abono[]) => {
              this.abonoList = abonoArr2;

              this.emptyAbonos = (abonoArr2.length === 0);

              // closes the modal dialog
              this.openedAbonoDialog = false;
              this.selectedAbono = null;

          });

      });


  }


}
