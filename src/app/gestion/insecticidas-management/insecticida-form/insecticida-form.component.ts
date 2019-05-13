import { Component, OnInit } from '@angular/core';
import { Insecticida } from '../model/insecticida/insecticida';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InsecticidaService } from '../services/insecticida/insecticida.service';

@Component({
  selector: 'app-insecticida-form',
  templateUrl: './insecticida-form.component.html',
  styleUrls: ['./insecticida-form.component.css']
})
export class InsecticidaFormComponent implements OnInit {

  insecticidaForm: FormGroup;
  insecticida: Insecticida;

  // to show on delete the only PrincActivo ( needed at least one PrincActivo )
  bShowDeletePActivoAlert: boolean ;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private insecticidaService: InsecticidaService,
              private fb: FormBuilder) { }

  ngOnInit() {

       this.bShowDeletePActivoAlert = false;

      // reactive form
      this.insecticidaForm = this.fb.group({
        id:                       [''],
        nombre:                   ['' , Validators.required ],
        princActivo:              this.fb.array([]),
        contraindicaciones:       [''],
        plazoSeguridad:           [0],
        deleted:                  [0 , Validators.required ]
      });

      // get the route params to edit an insecticida or create a new one
      this.route.params
        .subscribe( (params: Params) => {

          const id_insecticida = parseInt( params['id_insecticida'], 10 );
          if ( id_insecticida ) {

              // Editing this insecticida

              this.insecticidaService.getInsecticida( id_insecticida )
                .subscribe( (insectic: Insecticida) => {

                  this.insecticida = insectic;

                  // console.log( this.insecticida );


                  // if it is a valid insecticida
                  if (this.insecticida) {

                      // if there are PrincipiosActivos
                      if ( this.insecticida.princActivo && (this.insecticida.princActivo.length > 0) ) {

                          this.insecticida.princActivo.map( (princActivElem, index) => {

                            // calls this method to create a form field
                            this.addPrincActivo(princActivElem.id, princActivElem.nombre);

                          });

                      } else {

                          // Adds an empty field to insert a princActivo
                          this.addPrincActivo();

                      }


                      // load the form with data
                      const tmpInsecticida = this.insecticida ;
                      this.insecticidaForm.patchValue( tmpInsecticida );

                  } else {

                      this.router.navigate(['/not-found']);

                  }

                });



          } else {

            // Adds an empty field to insert a PrincActivo
            this.addPrincActivo();

            // we are creating a new insecticida
            this.insecticida = new Insecticida();

          }

        });

  }


  get princActivo() {
    return this.insecticidaForm.get('princActivo') as FormArray;
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


    // iterate through the princ activos
    for (let index = 0; index < this.princActivo.length; index++) {
      const element = this.princActivo.at(index);

      // get the field value and trim
      let str = element.get('nombre').value as String;
      str = str.trim();
      element.get('nombre').setValue( str );

      if ( str.length === 0 ) {
        // shows the PrincActivo alert ( at least one PrincActivo )
        this.bShowDeletePActivoAlert = true;
        return;
      }

    }

    // if there is an insecticida to edit
    if (this.insecticida.id) {

      this.insecticidaService.updateInsecticida( this.insecticida.id, this.insecticidaForm.value)
        .subscribe( (insecticidas: Insecticida[]) => {

            // goes back to the list
            this.goBackToList();

        });

    } else {



      // insecticida to insert
      this.insecticidaService.insertInsecticida( this.insecticidaForm.value )
        .subscribe( (insecticidas: Insecticida[]) => {

            // goes back to the list
            this.goBackToList();

        });

    }

  }




  onCloseAlert(elem: boolean) {
    //this.bShowDeletePActivoAlert = !(this.princActivo.length > 1) && elem;

  }

  onCancel() {
    this.goBackToList();
  }

  // redirects to the fungicida list
  goBackToList() {

    this.insecticidaForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.insecticidaService.setShowToolBarInsertButtons(true);

    // navigates to the insecticida list with list view
    this.router.navigate(['/gestion/insecticida/list']);

  }

}
