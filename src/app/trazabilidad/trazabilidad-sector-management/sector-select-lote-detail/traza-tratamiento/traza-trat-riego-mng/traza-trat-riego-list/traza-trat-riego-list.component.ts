import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoteApiService } from '../../../../../../gestion/lotes-management/services/lote-api/lote-api.service';
import { LoteInfo } from '../../../../../../gestion/lotes-management/model/loteInfo';
import { RiegoApiService } from '../service/riego-api/riego-api.service';
import { RiegoInfo } from '../model/riegoInfo/riegoInfo';

@Component({
  selector: 'app-traza-trat-riego-list',
  templateUrl: './traza-trat-riego-list.component.html',
  styleUrls: ['./traza-trat-riego-list.component.css']
})
export class TrazaTratRiegoListComponent implements OnInit {

  // riegos list
  riegoInfoList: RiegoInfo[] = [];
  selectedRiegoInfo: RiegoInfo;


  emptyRiegos: boolean;
  openedRiegoInfoDialog: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private riegoService: RiegoApiService) { }

  ngOnInit() {


      // get the route params to get the lote
      // we access the parent.parent because we have wrapper routes up ( lote-info-mng -> lote-info )

      this.route.parent.parent.params
          .subscribe( (params: Params) => {

            const id_sector = parseInt( params['id_sector'], 10 );
            const id_lote = parseInt( params['id_lote'], 10 );


            this.riegoService.getRiegosInfo( id_sector )
              .subscribe( (riegoInfoArr: RiegoInfo[]) => {

                  this.riegoInfoList = riegoInfoArr;
                  this.emptyRiegos = ( riegoInfoArr.length === 0);

              });

          });


  }

  onViewRiegoInfo( riegoInfo: RiegoInfo ) {

      // the selected RiegoInfo
      this.selectedRiegoInfo = riegoInfo;

      // opens the dialog
      this.openedRiegoInfoDialog = true ;

  }

}
