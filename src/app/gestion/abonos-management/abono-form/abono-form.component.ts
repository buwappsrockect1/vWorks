import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Abono } from '../model/abono/abono';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbonoService } from '../service/abono/abono.service';

@Component({
  selector: 'app-abono-form',
  templateUrl: './abono-form.component.html',
  styleUrls: ['./abono-form.component.css']
})
export class AbonoFormComponent implements OnInit {

  abonoForm: FormGroup;
  abono: Abono;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private abonoService: AbonoService,
              private fb: FormBuilder) { }

  ngOnInit() {

      // reactive form
      this.abonoForm = this.fb.group({
        id:                       [''],
        nombre:                   ['' , Validators.required ],
        simbolo:                  ['' , Validators.required ],
        composicion:              [''],
        otros:                    [''],
        deleted:                  [0 , Validators.required]

      });

      // get the route params to edit a abono or create a new one
      this.route.params
        .subscribe( (params: Params) => {

          const id_abono = parseInt( params['id_abono'], 10 );
          if ( id_abono ) {

              // Editing this abono

              this.abonoService.getAbono( id_abono )
                .subscribe( (abon: Abono) => {

                  this.abono = abon;

                  // console.log( this.abono );


                  // if it is a valid abono
                  if (this.abono) {

                      // load the form with data
                      const tmpAbono = this.abono ;
                      this.abonoForm.patchValue( tmpAbono );

                  } else {

                      this.router.navigate(['/not-found']);

                  }

                });



          } else {

            // we are creating a new abono
            this.abono = new Abono();

          }

        });

  }


  onSubmit() {

    // if there is an abono to edit
    if (this.abono.id) {


      this.abonoService.updateAbono( this.abono.id, this.abonoForm.value)
        .subscribe( (abonos: Abono[]) => {

            // goes back to the list
            this.goBackToList();

        });

    } else {



      // abono to insert
      this.abonoService.insertAbono( this.abonoForm.value )
        .subscribe( (abonos: Abono[]) => {

            // goes back to the list
            this.goBackToList();

        });

    }

  }

  onCancel() {
    this.goBackToList();
  }

  // redirects to the abono list
  goBackToList() {

    this.abonoForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.abonoService.setShowToolBarInsertButtons(true);

    // navigates to the abono list with list view
    this.router.navigate(['/gestion/abono/list']);

  }


}
