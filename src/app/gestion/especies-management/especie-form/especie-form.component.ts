import { Component, OnInit } from '@angular/core';
import { Especie } from '../model/especie';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EspecieService } from '../services/especie/especie.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-especie-form',
  templateUrl: './especie-form.component.html',
  styleUrls: ['./especie-form.component.css']
})
export class EspecieFormComponent implements OnInit {

  especieForm: FormGroup;
  especie: Especie;

  // to show on delete the only variedad ( needed at least one variedad )
  bShowDeleteVariedadAlert: boolean ;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private especieService: EspecieService,
              private fb: FormBuilder) { }

  ngOnInit() {

       // reactive form
       this.especieForm = this.fb.group({
          id:                       [''],
          nombreComun:              ['' , Validators.required ],
          nombreCientifico:         ['' , Validators.required ],
          familia:                  ['' , Validators.required ],
          variedad:                 this.fb.array([]),
          origen:                   ['' , Validators.required ],
          caracteristicas:          ['' , Validators.required ],
          imagen:                   [''],
          deleted:                  [0 , Validators.required ]

       });

       // get the route params to edit a seccion or create a new one
       this.route.params
        .subscribe( (params: Params) => {

          const id_especie = parseInt( params['id_especie'], 10 );
          if ( id_especie ) {

              // Editing this especie

              this.especieService.getEspecie( id_especie )
                .subscribe( (esp: Especie) => {

                  this.especie = esp;

                  // console.log( this.especie );


                  // if it is a valid especie
                  if (this.especie) {

                      // if there are variedad
                      if ( this.especie.variedad.length > 0 ) {

                          this.especie.variedad.map( (variedadElem, index) => {

                              // calls this method to create a form field
                              this.addVariedad(variedadElem.id, variedadElem.nombre);

                          });

                      } else {

                          // Adds an empty field to insert a variedad
                          this.addVariedad();

                      }




                      // load the form with data
                      const tmpEspecie = this.especie ;
                      this.especieForm.patchValue( tmpEspecie );

                  } else {

                      this.router.navigate(['/not-found']);

                  }

                });



          } else {

            // Adds an empty field to insert a variedad
            this.addVariedad();

            // we are creating a new especie
            this.especie = new Especie();

          }

        });

  }

  get variedad() {
    return this.especieForm.get('variedad') as FormArray;
  }

  // adds a new variedad group to the formArray
  addVariedad( id: number = 0, name: string = ''): void {


    if ( id > 0 ) {
      this.variedad.push( this.fb.group( { id: id , nombre: name} ) );
    } else {
      this.variedad.push( this.fb.group( { nombre: name} ) );
    }

    // if there are more than one Variedad ( at least one is neeeded )
    if ( this.variedad.length > 1 ) {
      this.bShowDeleteVariedadAlert = false;
    }
  }

  // deletes a variedad from the formArray
  deleteVariedad(index: number) {

    if ( this.variedad.length > 1 ) {

      this.variedad.removeAt(index);

    } else {
       // shows the Variedad alert ( at least one Variedad )
       this.bShowDeleteVariedadAlert = true;
    }

  }



  onSubmit() {


    // iterate through the variedades
    for (let index = 0; index < this.variedad.length; index++) {
      const element = this.variedad.at(index);

      // get the field value and trim
      let str = element.get('nombre').value as String;
      str = str.trim();
      element.get('nombre').setValue( str );

      if ( str.length === 0 ) {
        // shows the Variedad alert ( at least one Variedad )
        this.bShowDeleteVariedadAlert = true;
        return;
      }

    }

    // if there is a especie to edit
    if (this.especie.id) {


      this.especieService.updateEspecie( this.especie.id, this.especieForm.value)
        .subscribe( (espec: Especie[]) => {

            // goes back to the list
            this.goBackToList();

        });

    } else {

      // get the image field value
      const especieImagen = this.especieForm.controls['imagen'].value.trim();

      // if no image name then sets the empty image for the especie
      if ( !especieImagen ) {
        this.especieForm.controls['imagen'].setValue( this.especieService.getEmptyImageName());
      }

      // especie to insert
      this.especieService.insertEspecie( this.especieForm.value )
        .subscribe( (espec: Especie[]) => {

            // goes back to the list
            this.goBackToList();

        });

    }


  }

  onCancel() {
    this.goBackToList();
  }


  // redirects to the especie list
  goBackToList() {

    this.especieForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.especieService.setShowToolBarInsertButtons(true);

    // navigates to the especie list with list view
    this.router.navigate(['/gestion/especie/list']);

  }

}
