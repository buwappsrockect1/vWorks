import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {formatDate} from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lote } from '../model/lote';


import { Especie } from '../../especies-management/model/especie';
import { Variedad } from '../../especies-management/model/variedad';
import { Operario } from '../../operarios-management/model/operario/operario';

import { forkJoin} from 'rxjs';

import { Sector } from '../../sector-management/model/sector';
import { Proveedor } from '../../proveedor-management/model/proveedor/proveedor';
import { EspecieService } from '../../especies-management/services/especie/especie.service';
import { SectorService } from '../../sector-management/services/sector/sector.service';

import { ProveedorService } from '../../proveedor-management/services/proveedor/proveedor.service';
import { VariedadApiService } from '../../especies-management/services/variedad/variedad-api.service';
import { LoteApiService } from '../services/lote-api/lote-api.service';
import { OperarioApiService } from '../../operarios-management/service/operario-api/operario-api.service';



@Component({
  selector: 'app-lote-form-mng',
  templateUrl: './lote-form-mng.component.html',
  styleUrls: ['./lote-form-mng.component.css']
})
export class LoteFormMngComponent implements OnInit {

  loteForm: FormGroup;
  lote: Lote;

  variedadForm: FormGroup;
  nombreEspecieSelected: string;

  especieList: Especie[] = [];
  especieIdSelected: number;
  variedadEspecieList: Variedad[] = [];
  sectorList: Sector[] = [];
  operariosList: Operario[] = [];
  proveedoresList: Proveedor[] = [];
  today: string;

  // if nuevaVariedadDialog is opened
  openedNuevaVariedadDialog = false;


  constructor(private router: Router ,
              private route: ActivatedRoute,
              private especieService: EspecieService,
              private variedadService: VariedadApiService,
              private sectorService: SectorService,
              private proveedorService: ProveedorService,
              private operarioService: OperarioApiService,
              private loteService: LoteApiService,
              private fb: FormBuilder) { }

  ngOnInit() {

      // today's date
      this.today = formatDate( Date.now(), 'dd/MM/yyyy', 'es');

      // reactive form
      this.loteForm = this.fb.group({
          id:                         [''],
          nombre:                     [''],
          IdEspecie:                  [ 0  , Validators.required ],
          IdVariedad:                 [ 0  , Validators.required ],
          cantidad:                   [ 0  , Validators.required ],
          stockMinimo:                [ 0  , Validators.required ],
          IdSector:                   [ '' , Validators.required ],
          fechaEntrada:               [ this.today , Validators.required ],
          IdOperarioEncargado:        [ 1 , Validators.required ],
          IdProveedorOrigen:          [ 0 , Validators.required ],
          codProveedor:               ['' , Validators.required ],
          qrTrazabilidad:             [''],
          notas:                      [''],
          deleted:                    [0 , Validators.required]

      });


      // variedad Form ( to insert a new variedad )
      this.variedadForm =  this.fb.group({
          nombre: ['', Validators.required]
      });


      forkJoin(

            this.especieService.getEspecies()             ,
            this.sectorService.getSectores()              ,
            this.proveedorService.getProveedores()        ,
            this.operarioService.getOperarios()

      ).subscribe( (dat: any[]) => {

            this.especieList      = dat[0];
            this.sectorList       = dat[1];
            this.proveedoresList  = dat[2];
            this.operariosList    = dat[3];

            // get the route params to edit a lote or create a new one
            this.route.params
              .subscribe( (params: Params) => {

                  const id_lote = parseInt( params['id_lote'], 10 );
                  if ( id_lote ) {

                      // Editing this lote ( EDIT LOTE )

                      this.loteService.getLote( id_lote )
                        .subscribe( (lote: Lote) => {

                              // if it is a valid lote
                              if (lote) {

                                // load variedad of this especie
                                this.especieService.getVariedad( lote.IdEspecie )
                                  .subscribe( ( variedadArr: Variedad[] ) => {

                                      // variedadEspecie list
                                      this.variedadEspecieList = variedadArr;

                                      // we do not receive the id from the api
                                      lote.id = id_lote;

                                      // this is the lote we are working on
                                      this.lote = lote ;

                                      // sets the lote values to the form
                                      this.loteForm.patchValue( lote );

                                  });



                              } else {

                                    this.router.navigate(['/not-found']);

                              }

                        });


                  } else {

                          // We are creating a new lote  ( INSERT LOTE )

                          // load variedad of this especie
                          this.especieService.getVariedad( this.especieDefaultValue() )
                            .subscribe( ( variedadArr: Variedad[] ) => {

                                // variedadEspecie list
                                this.variedadEspecieList = variedadArr;

                                // we are creating a new lote
                                this.lote = new Lote();

                                // sets default value for IdEspecie
                                this.loteForm.controls['IdEspecie'].setValue( this.especieDefaultValue() );

                                // sets default value for IdVariedad
                                this.loteForm.controls['IdVariedad'].setValue( this.variedadDefaultValue() );

                                // sets default value for IdSector
                                this.loteForm.controls['IdSector'].setValue( this.sectorDefaultValue() );

                                // sets default value for IdOperarioEncargado
                                this.loteForm.controls['IdOperarioEncargado'].setValue( this.operarioEncargadoDefaultValue() );

                                // sets default value for IdProveedorOrigen
                                this.loteForm.controls['IdProveedorOrigen'].setValue( this.proveedorOrigenDefaultValue() );

                                // sets the nombreEspecieSelected
                                this.nombreEspecieSelected = this.getNombreEspecieSelected();

                            });


                  }

              });


        });


  }



  // returns the especie default value for the select
  especieDefaultValue(): number {

    // if there is a lote to edit
    if ( this.lote && this.lote.id) {

      return this.lote.IdEspecie;

    } else {
        // if we are inserting a new lote

        // if there are especies
        if ( this.especieList.length > 0 ) {

          // returns the if of the first element in the array
          this.especieIdSelected = this.especieList[0].id;
          return this.especieIdSelected;

        } else {

          // error there are no especies ( especies needed )
          return -1;
        }
    }

  }


  variedadDefaultValue(): number {

        // if there is a lote to edit
        if ( this.lote && this.lote.id) {

          return this.lote.IdVariedad;

        } else {

          // if we are inserting a new lote

            // if there are variedades in the especie
            if ( this.variedadEspecieList.length > 0 ) {

                // returns the if of the first element in the array
                return this.variedadEspecieList[0].id ;

            } else {

                // error there are no variedades ( especies needed )
                return -1;
            }
        }
  }

  sectorDefaultValue(): number {

      // if there is a lote to edit
      if ( this.lote && this.lote.id) {

          return this.lote.IdSector;

      } else {

          if ( this.sectorList.length > 0 ) {

              // sets the first element in the array
              return this.sectorList[0].id;
          } else {

              return -1;
          }

      }

  }


  operarioEncargadoDefaultValue(): number {

      // if there is a lote to edit
      if ( this.lote && this.lote.id) {

          return this.lote.IdOperarioEncargado ;

      } else {

          if ( this.proveedoresList.length > 0 ) {

              // sets the first element in the array
              return this.operariosList[0].id;

          } else {

              return -1;
          }

      }


  }

  proveedorOrigenDefaultValue(): number {

      // if there is a lote to edit
      if ( this.lote && this.lote.id) {

          return this.lote.IdProveedorOrigen ;

      } else {

          if ( this.proveedoresList.length > 0 ) {

              // sets the first element in the array
              return this.proveedoresList[0].id ;

          } else {

              return -1;
          }

      }


  }


  onSubmit() {


    // if there is a lote to edit
    if (this.lote.id) {


      this.loteService.updateLote( this.lote.id, this.loteForm.value)
        .subscribe( (loteArr: Lote) => {

            // goes back to the list
            this.goBackToList();

        });

    } else {



      // lote to insert
      this.loteService.insertLote( this.loteForm.value )
        .subscribe( (lotArr: Lote) => {

            // goes back to the list
            this.goBackToList();

        });

    }


  }


  onCancel() {
    this.goBackToList();
  }

  getVariedad(id_especie: number): void {

      this.especieService.getVariedad( id_especie )
        .subscribe( ( variedadArr: Variedad[] ) => {

            this.variedadEspecieList = variedadArr;

            // sets the variedad
            this.loteForm.controls['IdVariedad'].setValue( this.variedadEspecieList[0].id );

        });

  }


  onNuevaVariedad() {

    // shows the dialog to insert a new variedad
    this.openedNuevaVariedadDialog = true;

  }

  onChangeEspecie(especieSelect: any) {

    // user selected especie converted to Number
    this.especieIdSelected = Number(especieSelect.target.value);

    this.getVariedad( this.especieIdSelected );

    // sets the nombreEspecieSelected
    this.nombreEspecieSelected = this.getNombreEspecieSelected();

  }

  onInsertNuevaVariedad() {

    if (this.variedadForm.invalid) {

      // mark name control as touched
      // this.variedadForm.controls['nombre'].markAsTouched();

    } else {


        // Do create variedad logic
        this.variedadService.insertVariedad(this.especieIdSelected , this.variedadForm.value )
          .subscribe( (variedad: Variedad) => {

            // get the variedades of this selected especie ( updated with the new created variedad )
            this.getVariedad( this.especieIdSelected );

            // close dialog and reset form
            this.openedNuevaVariedadDialog = false;
            this.variedadForm.reset();

          });


    }


  }


  getNombreEspecieSelected(): string {

        // get nombreEspecieSelected
        const selEspecie: Especie[] = this.especieList
                                          .filter( (especie: Especie) => especie.id === this.especieIdSelected );
        if ( selEspecie.length > 0) {
            return selEspecie[0].nombre;
        } else {
            return '';
        }

  }

  onCancelNuevaVariedad() {
      this.openedNuevaVariedadDialog = false;
      this.variedadForm.reset();
  }

  // redirects to the especie list
  goBackToList() {

    this.loteForm.reset();

    // not in insert mode ( we show the toolbar in our parent component )
    this.loteService.setShowToolBarInsertButtons(true);

    // navigates to the lote list with list view
    this.router.navigate(['/gestion/lote/list']);

  }

}
