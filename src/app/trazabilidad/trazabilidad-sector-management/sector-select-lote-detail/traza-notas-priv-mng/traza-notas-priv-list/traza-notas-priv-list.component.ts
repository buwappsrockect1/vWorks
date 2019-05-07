import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotasPrivLoteApiService } from '../service/notas-priv-lote-api/notas-priv-lote-api.service';
import { NotasLote } from '../../traza-notas-mng/traza-notas/model/notas-lote/notas-lote';

@Component({
  selector: 'app-traza-notas-priv-list',
  templateUrl: './traza-notas-priv-list.component.html',
  styleUrls: ['./traza-notas-priv-list.component.css']
})
export class TrazaNotasPrivListComponent implements OnInit {

  // notas Priv lote list
  notasLoteList: NotasLote[] = [];
  selectedNota: NotasLote;


  emptyNotasPriv: boolean;
  openedNotasPrivLoteDialog: boolean;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private notasPrivLoteService: NotasPrivLoteApiService) { }

  ngOnInit() {

          // get the route params to get the lote
      // we access the parent.parent because we have wrapper routes up ( lote-info-mng -> lote-info )

      this.route.parent.parent.params
          .subscribe( (params: Params) => {

            const id_sector = parseInt( params['id_sector'], 10 );
            const id_lote = parseInt( params['id_lote'], 10 );

            this.notasPrivLoteService.getNotasLote( id_lote )
              .subscribe( (notasLoteArr: NotasLote[]) => {

                  this.notasLoteList = notasLoteArr;
                  this.emptyNotasPriv = ( notasLoteArr.length === 0);

              });

          });

  }

  onViewNota( nota: NotasLote ) {

      // the selected nota
      this.selectedNota = nota;

      // opens the dialog
      this.openedNotasPrivLoteDialog = true ;
  }


}
