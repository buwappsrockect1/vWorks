import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Fungicida } from '../model/fungicida/fungicida';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FungicidaService } from '../services/fungicida/fungicida.service';
import { PrincActivInsecticida } from '../model/princ_activ_insecticida/princ-activ-insecticida';


@Component({
  selector: 'app-fungicida-form',
  templateUrl: './fungicida-form.component.html',
  styleUrls: ['./fungicida-form.component.css']
})
export class FungicidaFormComponent implements OnInit {


  fungicidaForm: FormGroup;
  fungicida: Fungicida;

  // to show on delete the only PrincActivo ( needed at least one PrincActivo )
  bShowDeletePActivoAlert: boolean ;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private fungicidaService: FungicidaService,
              private fb: FormBuilder) { }

  ngOnInit() {

       this.bShowDeletePActivoAlert = false;

      // reactive form
      this.fungicidaForm = this.fb.group({
        id:                       [''],
        nombre:                   ['' , Validators.required ],
        princActivo:              this.fb.array([]),
        contraindicaciones:       [''],
        plazoSeguridad:           [0] ,
        deleted:                  [0 , Validators.required ]

      });

      // get the route params to edit a fungicida or create a new one
      this.route.params
      .subscribe( (params: Params) => {

        const id_fungicida = parseInt( params['id_fungicida'], 10 );
        if ( id_fungicida ) {

            // Editing this fungicida

            this.fungicidaService.getFungicida( id_fungicida )
              .subscribe( (fungic: Fungicida) => {

                this.fungicida = fungic;

                // console.log( this.fungicida );


                // if it is a valid fungicida
                if (this.fungicida) {

                    // if there are PrincipiosActivos
                    if ( this.fungicida.princActivo.length > 0 ) {

                        this.fungicida.princActivo.map( (variedadElem, index) => {

                            // calls this method to create a form field
                            this.addPrincActivo();

                        });

                    } else {

                        // Adds an empty field to insert a princActivo
                        this.addPrincActivo();

                    }


                    // load the form with data
                    const tmpFungicida = this.fungicida ;
                    this.fungicidaForm.patchValue( tmpFungicida );

                } else {

                    this.router.navigate(['/not-found']);

                }

              });



        } else {

          // Adds an empty field to insert a PrincActivo
          this.addPrincActivo();

          // we are creating a new fungicida
          this.fungicida = new Fungicida();

        }

      });

  }


  get princActivo() {
    return this.fungicidaForm.get('princActivo') as FormArray;
  }

  // adds a new princActivo group to the formArray
  addPrincActivo( id: number = 0, name: string = ''): void {

    if ( id > 0 ) {
      this.princActivo.push( this.fb.group( { id: id , nombre: name} ) );
    } else {
      this.princActivo.push( this.fb.group( { nombre: name} ) );
    }


    // if there are more than one PrincActivo ( at least one is neeeded )
    if ( this.princActivo.length > 1 ) {
      this.bShowDeletePActivoAlert = false;
    }

  }

  // deletes a PrincActivo from the formArray
  deletePrincActivo(index: number) {

    if ( this.princActivo.length > 1 ) {

      this.princActivo.removeAt(index);

    } else {
       // shows the PrincActivo alert ( at least one PrincActivo )
       this.bShowDeletePActivoAlert = true;
    }

  }

  onSubmit() {

    // if there is an fungicida to edit
    if (this.fungicida.id) {


      this.fungicidaService.updateFungicida( this.fungicida.id, this.fungicidaForm.value)
        .subscribe( (fungicidas: Fungicida[]) => {

            // goes back to the list
            this.goBackToList();

        });

    } else {



      // fungicida to insert
      this.fungicidaService.insertFungicida( this.fungicidaForm.value )
        .subscribe( (fungicidas: Fungicida[]) => {

            // goes back to the list
            this.goBackToList();

        });

    }

  }


  onCancel() {
    this.goBackToList();
  }

  // redirects to the fungicida list
  goBackToList() {

    this.fungicidaForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.fungicidaService.setShowToolBarInsertButtons(true);

    // navigates to the fungicida list with list view
    this.router.navigate(['/gestion/fungicida/list']);

  }

}
