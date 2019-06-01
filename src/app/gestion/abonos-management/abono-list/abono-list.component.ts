import { Component, OnInit } from '@angular/core';
import { Abono } from '../model/abono/abono';
import { AbonoService } from '../service/abono/abono.service';
import { BrowserGetTestability } from '@angular/platform-browser/src/browser/testability';


export enum AbonoFilter {
     ALL ,
     INSTOCK
}


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
  selectedLetter: string ;

  // filter abonos
  filterAbonos: 'ALL' | 'INSTOCK';

  // letters to filter by
  letters: string[] = [  'A', 'B', 'C', 'D', 'E', 'F',
                         'G', 'H', 'I', 'J', 'K', 'L',
                         'M', 'N', 'O', 'P', 'Q', 'R',
                         'S', 'T', 'U', 'V', 'W', 'X',
                         'Y', 'Z'
                        ];

  loading: boolean;


  constructor(private abonoService: AbonoService) { }

  ngOnInit() {

    this.openedAbonoDialog = false;
    this.selectedAbono = null;

    this.filterAbonos = 'INSTOCK';

    this.selectedLetter = 'A';
    const queryString = '?stock=1';


    // to save the filter state ( to return to this filter after editing or inserting )
    const savedFilter: any = this.abonoService.getFilterAbonos();
    if ( savedFilter ) {
        this.filterAbonos = savedFilter ;
    }

    // to save the selectedLetter state ( to return to this filter after editing or inserting )
    const savedSelectedLetter: string = this.abonoService.getSelectedLetter();
    if ( savedSelectedLetter ) {
        this.selectedLetter = savedSelectedLetter ;
    } else {
        // saves the default selectedLetter
        this.abonoService.setSelectedLetter( this.selectedLetter );
    }

    this.onFilterChange(this.filterAbonos);


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

        let queryString = '';

        // depending on the applied filter
        switch (this.filterAbonos) {
          case 'ALL':
              queryString = '?letter=' + this.selectedLetter ;
            break;

          case 'INSTOCK':
              queryString = '?stock=1';
            break;

          default:
            break;
        }

        this.loading = true ;

        this.abonoService.getAbonos( queryString )
          .subscribe( (abonoArr2: Abono[]) => {
              this.abonoList = abonoArr2;

              this.emptyAbonos = (abonoArr2.length === 0);

              // closes the modal dialog
              this.openedAbonoDialog = false;
              this.selectedAbono = null;
              this.loading = false ;

          });

      });


  }

  // click on a button to filter the Abono by letter
  onButtonClick( letter: string ) {

    if ( letter ) {

      this.loading = true;

      this.selectedLetter = letter ;
      const queryString = '?letter=' + this.selectedLetter ;

      // saves the selected letter to return to this state on edit or insert
      this.abonoService.setSelectedLetter( letter );

      this.abonoService.getAbonos(queryString)
        .subscribe( (abonoArr: Abono[]) => {
            this.abonoList = abonoArr;
            this.loading = false;
        });

    }

  }

  // change event handler on radio buttons ( filter change ALL or INSTOCK filter )
  onFilterChange(filter: string) {


    let queryString = '';

    this.loading = true ;

    switch (filter) {
      case 'ALL':
          queryString = '?letter=' + this.selectedLetter ;
          this.filterAbonos = 'ALL';
        break;

      case 'INSTOCK':
          queryString = '?stock=1';
          this.filterAbonos = 'INSTOCK';
        break;

      default:
        break;
    }

    // saves the filter to return to this state on edit or insert
    this.abonoService.setFilterAbonos( this.filterAbonos );

    this.abonoService.getAbonos(queryString)
      .subscribe( (abonoArr: Abono[]) => {
          this.abonoList = abonoArr;
          this.loading = false;
      });
  }


}
