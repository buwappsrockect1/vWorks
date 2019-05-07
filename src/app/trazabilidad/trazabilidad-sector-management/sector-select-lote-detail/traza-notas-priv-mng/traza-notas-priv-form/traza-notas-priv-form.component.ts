import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotasLote } from '../../traza-notas-mng/traza-notas/model/notas-lote/notas-lote';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotasPrivLoteApiService } from '../service/notas-priv-lote-api/notas-priv-lote-api.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-traza-notas-priv-form',
  templateUrl: './traza-notas-priv-form.component.html',
  styleUrls: ['./traza-notas-priv-form.component.css']
})
export class TrazaNotasPrivFormComponent implements OnInit {

  notasPrivLoteForm: FormGroup;
  notasPrivLote: NotasLote;
  loteId: number;       // the selected loteId

  dateNow: number ;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private notasPrivLoteService: NotasPrivLoteApiService) { }

  ngOnInit() {

      const dateNow = formatDate( Date.now(), 'dd/MM/yyyy', 'es');

      // reactive form
      this.notasPrivLoteForm = this.fb.group({
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
            this.notasPrivLote = new NotasLote();

            // I get the loteId to insert notes on this lote
            this.route.parent.parent.params
              .subscribe( (paramsParent: Params) => {

                // get the selected loteId
                this.loteId = parseInt( paramsParent['id_lote'], 10 );
                this.notasPrivLoteForm.controls['IdLote'].setValue( this.loteId );
              });

          }


        });

  }

  onSubmit() {

        // if there is a nota to edit
        if (this.notasPrivLote.id) {

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
              this.notasPrivLoteService.insertNotasLote( this.notasPrivLoteForm.value )
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

    this.notasPrivLoteForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.notasPrivLoteService.setShowToolBarInsertButtons(true);


    const activeRoute = this.router.url ;
    const parentRoute = activeRoute.slice( 0 , activeRoute.lastIndexOf('/') );

    // navigates to the notas list ( parent route )
    this.router.navigate([parentRoute, 'list']);

  }
}
