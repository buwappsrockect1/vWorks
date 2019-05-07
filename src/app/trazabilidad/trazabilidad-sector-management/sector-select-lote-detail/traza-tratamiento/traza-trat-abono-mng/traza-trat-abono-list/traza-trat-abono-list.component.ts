import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AbonadosApiService } from '../service/abonados-api.service';
import { AbonadosInfo } from '../model/abonados-info/abonados-info';

@Component({
  selector: 'app-traza-trat-abono-list',
  templateUrl: './traza-trat-abono-list.component.html',
  styleUrls: ['./traza-trat-abono-list.component.css']
})
export class TrazaTratAbonoListComponent implements OnInit {

    // abonados list
    abonadosInfoList: AbonadosInfo[] = [];
    selectedAbonadosInfo: AbonadosInfo;

    emptyAbonados: boolean;
    openedAbonadoInfoDialog: boolean;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private abonadosService: AbonadosApiService) { }

  ngOnInit() {

          // get the route params to get the lote
      // we access the parent.parent because we have wrapper routes up ( lote-info-mng -> lote-info )

      this.route.parent.parent.params
          .subscribe( (params: Params) => {

            const id_sector = parseInt( params['id_sector'], 10 );
            const id_lote = parseInt( params['id_lote'], 10 );


            this.abonadosService.getAbonadosInfo( id_sector )
              .subscribe( (abonadosInfoArr: AbonadosInfo[]) => {

                  this.abonadosInfoList = abonadosInfoArr;
                  this.emptyAbonados = ( abonadosInfoArr.length === 0);

              });

          });

  }

}
