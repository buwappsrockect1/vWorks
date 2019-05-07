import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params, ActivatedRouteSnapshot } from '@angular/router';

import { map } from 'rxjs/operators';

import { LoteApiService } from '../../../../../gestion/lotes-management/services/lote-api/lote-api.service';
import { LoteInfo } from '../../../../../gestion/lotes-management/model/loteInfo';

@Component({
  selector: 'app-lote-info',
  templateUrl: './lote-info.component.html',
  styleUrls: ['./lote-info.component.css']
})
export class LoteInfoComponent implements OnInit {

  // lote selected to show the lote info
/*
  loteSelected: LoteInfo = {
      id:                  0,
      nombre:              '',
      especie:             {
                              id:                 1,
                              nombre:             '',
                              nombreCientifico:   '',
                              nombreComun:        ''
                          },
      variedad:            '',
      cantidad:            0,
      stockMinimo:         0,
      sector:              {
                              id:           0  ,
                              nombre:       '' ,
                              numero:       0  ,
                              numEspecies:  0  ,
                              numLotes:     0
                          },
      fechaEntrada:        '',
      operarioEncargado:   {
                              id:                 0 ,
                              nombreOperaciones:  ''
                          },
      codProveedor:        '' ,
      qrTrazabilidad:      '' ,
      notas:               ''
  };

*/

  loteSelected: LoteInfo;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loteService: LoteApiService) { }

  ngOnInit() {

     // get the route params to get the lote

     // get the route params to get the lote
     // we access the parent.parent because we have wrapper routes up ( lote-info-mng -> lote-info )
     this.route.parent.parent.params
        .subscribe( (params: Params) => {

          const id_sector = parseInt( params['id_sector'], 10 );
          const id_lote = parseInt( params['id_lote'], 10 );

          this.loteService.getLoteInfo( id_lote )
            .subscribe( (loteInfo: LoteInfo ) => {

              this.loteSelected = loteInfo;

            });

        });

  }


  getLoteInfoData(): any {
     return this.loteSelected;
  }



}
