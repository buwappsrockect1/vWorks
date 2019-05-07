import { Component, OnInit } from '@angular/core';
import { ImagenLote } from '../model/imagen-lote';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImagenLoteApiService } from '../service/imagen-lote-api/imagen-lote-api.service';
import { GlobalService } from '../../../../../services/global-service/global.service';

@Component({
  selector: 'app-traza-imagen-list',
  templateUrl: './traza-imagen-list.component.html',
  styleUrls: ['./traza-imagen-list.component.css']
})
export class TrazaImagenListComponent implements OnInit {

  // ImagenLotes list
  imagenLoteList: ImagenLote[] = [];
  selectedImagenLote: ImagenLote;


  emptyImagenesLote: boolean;
  openedImagenLoteDeleteDialog: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private globalService: GlobalService,
              private imagenLoteApiService: ImagenLoteApiService) { }

  ngOnInit() {


      // get the route params to get the lote
      // we access the parent.parent because we have wrapper routes up ( lote-info-mng -> lote-info )

      this.route.parent.parent.params
          .subscribe( (params: Params) => {

            const id_sector = parseInt( params['id_sector'], 10 );
            const id_lote = parseInt( params['id_lote'], 10 );

            this.imagenLoteApiService.getImagenesLote( id_lote )
              .subscribe( (imagenLoteArr: ImagenLote[]) => {

                  this.imagenLoteList = imagenLoteArr;
                  this.emptyImagenesLote = ( imagenLoteArr.length === 0);

              });

          });


  }

  onDeleteImagenLote( imagenLote: ImagenLote ) {

      // the selected ImagenLote
      this.selectedImagenLote = imagenLote;

      // opens the dialog
      this.openedImagenLoteDeleteDialog = true ;

  }


  onModalDelete() {

    this.imagenLoteApiService.deleteImagenLote(this.selectedImagenLote.id)
      .subscribe( (imagenLoteArr: ImagenLote[]) => {

        this.imagenLoteApiService.getImagenesLote( this.selectedImagenLote.IdLote)
          .subscribe( (imagenLoteArr2: ImagenLote[]) => {

              console.log( imagenLoteArr );
              this.imagenLoteList = imagenLoteArr2;
              this.emptyImagenesLote = ( imagenLoteArr2.length === 0);

              // closes the modal dialog
              this.openedImagenLoteDeleteDialog = false;
              this.selectedImagenLote = null;

          });

      });

  }


}
