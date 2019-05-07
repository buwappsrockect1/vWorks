import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotasLote } from '../traza-notas/model/notas-lote/notas-lote';
import { NotasLoteApiService } from '../traza-notas/service/notas-lote-api/notas-lote-api.service';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-traza-notas-form',
  templateUrl: './traza-notas-form.component.html',
  styleUrls: ['./traza-notas-form.component.css']
})
export class TrazaNotasFormComponent implements OnInit {

  notasLoteForm: FormGroup;
  notasLote: NotasLote;
  loteId: number;       // the selected loteId

  dateNow: number ;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private notasLoteService: NotasLoteApiService) { }

  ngOnInit() {

      const dateNow = formatDate( Date.now(), 'dd/MM/yyyy', 'es');

      // reactive form
      this.notasLoteForm = this.fb.group({
          id:             [''],
          fecha:          [ dateNow , Validators.required ],
          nota:           [''       , Validators.required ],
          IdLote:         [ 0       , Validators.required ]
      });

      // get the route params to edit a note or create a new one
      this.route.params
        .subscribe( (params: Params) => {

          const id_nota = parseInt( params['id_nota'], 10 );


          if ( id_nota ) {

              // Editing this nota
/*
              this.sectorService.getSector( id_sector )
                .subscribe( (sec: Sector) => {

                  this.sector = sec;

                  // if it is a valid sector
                  if (this.sector) {

                    // load the form with data
                    const tmpSector = this.sector ;
                    this.sectorForm.patchValue( tmpSector );

                  } else {

                    this.router.navigate(['/not-found']);

                  }

                });
*/
          } else {

            // we are creating a new nota
            this.notasLote = new NotasLote();

            // I get the loteId to insert notes on this lote
            this.route.parent.parent.params
              .subscribe( (paramsParent: Params) => {

                // get the selected loteId
                this.loteId = parseInt( paramsParent['id_lote'], 10 );
                this.notasLoteForm.controls['IdLote'].setValue( this.loteId );
              });

          }


        });

  }

  onSubmit() {

        // if there is a nota to edit
        if (this.notasLote.id) {

/*
              this.sectorService.updateSector( this.sector.id, this.sectorForm.value)
                .subscribe( sectores => {

                    // goes back to the list
                    this.goBackToList();

                });
*/
        } else {


              // We are inserting a note

              // note to insert
              this.notasLoteService.insertNotasLote( this.notasLoteForm.value )
                .subscribe( aNotasLote => {

                    // goes back to the list
                    this.goBackToList();

                });

        }
  }

  onCancel() {
    this.goBackToList();
  }

  goBackToList() {

    this.notasLoteForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.notasLoteService.setShowToolBarInsertButtons(true);


    const activeRoute = this.router.url ;
    const parentRoute = activeRoute.slice( 0 , activeRoute.lastIndexOf('/') );

    // navigates to the notas list ( parent route )
    this.router.navigate([parentRoute, 'list']);

  }



}
