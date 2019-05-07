import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/app/gestion/sector-management/model/sector';
import { SectorService } from 'src/app/gestion/sector-management/services/sector/sector.service';
import { TrazabilidadSectorService } from '../../services/trazabilidad-sector/trazabilidad-sector.service';
import { MyRouteNavLink } from '../../models/my-route-nav-link';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { OperarioApiService } from '../../../gestion/operarios-management/service/operario-api/operario-api.service';
import { Operario } from '../../../gestion/operarios-management/model/operario/operario';
import { forkJoin } from 'rxjs';
import { RiegoApiService } from '../sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/service/riego-api/riego-api.service';
import { Riego } from '../sector-select-lote-detail/traza-tratamiento/traza-trat-riego-mng/model/riego/riego';
import { AbonoAPIService } from '../../../gestion/abonos-management/service/abono/abono-api.service';
import { Abono } from '../../../gestion/abonos-management/model/abono/abono';
import { AbonadosApiService } from '../sector-select-lote-detail/traza-tratamiento/traza-trat-abono-mng/service/abonados-api.service';
import { Abonados } from '../sector-select-lote-detail/traza-tratamiento/traza-trat-abono-mng/model/abonados/abonados';
import { fbind } from 'q';




@Component({
  selector: 'app-sector-all',
  templateUrl: './sector-all.component.html',
  styleUrls: ['./sector-all.component.css']
})
export class SectorAllComponent implements OnInit {


  // sector list
  sectorList: Sector[] = [];
  selectedSector: Sector ;

  operariosList: Operario[];

  // list of abonos
  abonosList: Abono[];
  abonosSelected: Abono[] = [];

  riegoSectorForm:    FormGroup;
  abonadoSectorForm:  FormGroup;

  dateNow: number ;
  today: string ;

  // opened regar abonar dialog
  openedRegarSectorDialog:  boolean  ;
  openedAbonarSectorDialog: boolean  ;

  // Operation to do: 'regar' or 'abonar'
  operationToDo: string;

  emptySectors: boolean;

  // message to show if we try to regar or abonar one sector without lotes
  errorMessage: string;
  openedErrorMessageDialog: boolean;

  constructor(private sectorService: SectorService,
              private trazabilidadSectorService: TrazabilidadSectorService,
              private operarioService: OperarioApiService,
              private riegoService: RiegoApiService ,
              private abonoService: AbonoAPIService ,
              private abonadosService: AbonadosApiService ,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.dateNow = Date.now();

    // today's date
    this.today = formatDate( Date.now(), 'dd/MM/yyyy', 'es');

    forkJoin(

      this.sectorService.getSectores(),
      this.operarioService.getOperarios(),
      this.abonoService.getAbonos()

    ).subscribe( (dat: any[]) => {

        this.sectorList      = dat[0];
        this.operariosList   = dat[1];
        this.abonosList      = dat[2];


        // To show if there are sectors created
        this.emptySectors = ( this.sectorList.length === 0);

    });

    // reactive form
    this.riegoSectorForm = this.fb.group({
        fecha:                    [ '' , Validators.required ],
        hora:                     [ '' , Validators.required ],
        IdOperario:               [  0 , Validators.required ],
        IdSector:                 [  0 , Validators.required ],
        comentario:               ['']

    });

    // reactive form
    this.abonadoSectorForm = this.fb.group({
        fecha:                    [ '' , Validators.required ],
        IdOperario:               [  0 , Validators.required ],
        IdSector:                 [  0 , Validators.required ],
        abonos:                   this.fb.array([])
    });



  }


  onSectorTratamientoDialog( sector: Sector, operation: string ) {

    // the selected sector
    this.selectedSector = sector;

    // check if the selected sector has got lotes in it ( it could be empty initially)
    if ( this.selectedSector.numLotes === 0 ) {

        this.errorMessage = 'El Sector no tiene lotes para ' + operation + '.';
        this.openedErrorMessageDialog = true;

        return;

    }
    
    const dateNow = formatDate( Date.now(), 'dd/MM/yyyy', 'es');
    const timeNow = formatDate( Date.now(), 'HH:mm', 'es');

    // operario selected initially
    const operarioSelected: Operario = this.operariosList[0] ;

    // operation to do
    this.operationToDo = operation;

    if ( operation === 'regar' ) {

      // sets the value for operario
      this.riegoSectorForm.controls['IdOperario'].setValue( operarioSelected.id );

      // sets the value for fecha
      this.riegoSectorForm.controls['fecha'].setValue( dateNow );

      // sets the value for hora
      this.riegoSectorForm.controls['hora'].setValue( timeNow );

      // sets the value for idSector
      this.riegoSectorForm.controls['IdSector'].setValue( this.selectedSector.id );

      // opens the regar  sector dialog
      this.openedRegarSectorDialog = true;

    } else {

      // sets the value for operario
      this.abonadoSectorForm.controls['IdOperario'].setValue( operarioSelected.id );

      // sets the value for fecha
      this.abonadoSectorForm.controls['fecha'].setValue( dateNow );


      // sets the value for idSector
      this.abonadoSectorForm.controls['IdSector'].setValue( this.selectedSector.id );

      // opens the abonar sector dialog
      this.openedAbonarSectorDialog = true;

    }


  }


  onRiegoSectorSubmit() {


    // sets the value for idSector
    this.riegoSectorForm.controls['IdSector'].setValue( this.selectedSector.id );

    // saves the riego
    this.riegoService.insertRiego(  this.selectedSector.id, this.riegoSectorForm.value )
      .subscribe( (riegoArr: Riego[]) => {

        // form reset
        this.riegoSectorForm.reset();

        // closes the Regar sector dialog
        this.openedRegarSectorDialog = false;

      });

  }

  onRiegoSectorCancel() {

    // form reset
    this.riegoSectorForm.reset();

    // closes the Regar sector dialog
    this.openedRegarSectorDialog = false;
  }


  // onAbonadoSector Submit ( abonates the sector -- all its lotes )
  onAbonadoSectorSubmit() {

       // sets the value for idSector
       this.abonadoSectorForm.controls['IdSector'].setValue( this.selectedSector.id );

       // abonado element to send to the server
       const abonadoElement: Abonados = {
            id:                                                        0  ,
            fecha:        this.abonadoSectorForm.get('fecha').value       ,
            IdSector:     this.abonadoSectorForm.get('IdSector').value    ,
            IdOperario:   this.abonadoSectorForm.get('IdOperario').value  ,
            abonos:       this.abonosSelected
       };

       // saves the abonado
       this.abonadosService.insertAbonados( abonadoElement )
         .subscribe( (abonadosArr: Abonados[]) => {

           // form reset
           this.abonadoSectorForm.reset();

           // closes the Abonar sector dialog
           this.openedAbonarSectorDialog = false;
           this.abonosSelected = [];

         });

  }



  onAbonadoSectorCancel() {

    // form reset
    this.abonadoSectorForm.reset();

    // closes the Abonar sector dialog
    this.openedAbonarSectorDialog = false;
    this.abonosSelected = [];

  }


  // creates the link
  getLink(sector: Sector): string[] {

    const linkExpr: string[] = [];
    linkExpr.push( 'sector/' + sector.id );

    return linkExpr;

  }

  // when the user clicks on a routerLink
  onRouterLinkClick(sector: Sector) {

        // create a MyRouteNavLink ( navlink element )
        const myRouteNavLnk: MyRouteNavLink = {
          textLink:   sector.nombre ,
          routeLink:  'sector/' + sector.id
        };

        // writes this navLink
        this.trazabilidadSectorService.writeNavLink( myRouteNavLnk );

  }



}
