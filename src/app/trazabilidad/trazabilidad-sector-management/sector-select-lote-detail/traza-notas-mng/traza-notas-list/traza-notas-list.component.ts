import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotasLote } from '../traza-notas/model/notas-lote/notas-lote';
import { NotasLoteApiService } from '../traza-notas/service/notas-lote-api/notas-lote-api.service';

@Component({
  selector: 'app-traza-notas-list',
  templateUrl: './traza-notas-list.component.html',
  styleUrls: ['./traza-notas-list.component.css']
})
export class TrazaNotasListComponent implements OnInit {

  // notas lote list
  notasLoteList: NotasLote[] = [];
  selectedNota: NotasLote;


  emptyNotas: boolean;
  openedNotasLoteDialog: boolean;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private notasLoteService: NotasLoteApiService) { }

  ngOnInit() {

          // get the route params to get the lote
      // we access the parent.parent because we have wrapper routes up ( lote-info-mng -> lote-info )

      this.route.parent.parent.params
          .subscribe( (params: Params) => {

            const id_sector = parseInt( params['id_sector'], 10 );
            const id_lote = parseInt( params['id_lote'], 10 );

            this.notasLoteService.getNotasLote( id_lote )
              .subscribe( (notasLoteArr: NotasLote[]) => {

                  this.notasLoteList = notasLoteArr;
                  this.emptyNotas = ( notasLoteArr.length === 0);

              });

          });

  }

  onViewNota( nota: NotasLote ) {

      // the selected nota
      this.selectedNota = nota;

      // opens the dialog
      this.openedNotasLoteDialog = true ;
  }

}
