import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proveedor } from '../model/proveedor/proveedor';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProveedorService } from '../services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedor-form',
  templateUrl: './proveedor-form.component.html',
  styleUrls: ['./proveedor-form.component.css']
})
export class ProveedorFormComponent implements OnInit {

  proveedorForm: FormGroup;
  proveedor: Proveedor;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private proveedorService: ProveedorService,
              private fb: FormBuilder) { }

  ngOnInit() {


      // reactive form
      this.proveedorForm = this.fb.group({
          id:                       [''],
          nombre:                   ['' , Validators.required ],
          nombre2Digitos:           ['' , Validators.required ],
          telefono:                 [''],
          email:                    [''],
          personaResponsable:       [''],
          personaContacto:          [''],
          direccion:                [''],
          localidad:                [''],
          deleted:                  [0, Validators.required ]
      });


      // get the route params to edit a proveedor or create a new one
      this.route.params
        .subscribe( (params: Params) => {

          const id_proveedor = parseInt( params['id_proveedor'], 10 );
          if ( id_proveedor ) {

              // Editing this proveedor

              this.proveedorService.getProveedor( id_proveedor )
                .subscribe( (provee: Proveedor) => {

                  this.proveedor = provee;

                  // console.log( this.proveedor );


                  // if it is a valid proveedor
                  if (this.proveedor) {


                      // load the form with data
                      const tmpProveedor = this.proveedor ;
                      this.proveedorForm.patchValue( tmpProveedor );

                  } else {

                      this.router.navigate(['/not-found']);

                  }

                });



          } else {


            // we are creating a new proveedor
            this.proveedor = new Proveedor();

          }

        });



  }


  onSubmit() {

    // if there is an proveedor to edit
    if (this.proveedor.id) {


      this.proveedorService.updateProveedor( this.proveedor.id, this.proveedorForm.value)
        .subscribe( (proveedores: Proveedor[]) => {

            // goes back to the list
            this.goBackToList();

        });

    } else {



      // proveedor to insert
      this.proveedorService.insertProveedor( this.proveedorForm.value )
        .subscribe( (proveedores: Proveedor[]) => {

            // goes back to the list
            this.goBackToList();

        });

    }

  }




  onCancel() {
    this.goBackToList();
  }

  // redirects to the proveedor list
  goBackToList() {

    this.proveedorForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.proveedorService.setShowToolBarInsertButtons(true);

    // navigates to the fungicida list with list view
    this.router.navigate(['/gestion/proveedor/list']);

  }


}
