import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Sector } from '../model/sector';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SectorService } from '../services/sector/sector.service';
import { LIST_VIEW_TYPE } from '../../../models/list-view-type.enum';

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {

  sectorForm: FormGroup;
  sector: Sector;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sectorService: SectorService,
              private fb: FormBuilder) {}

  ngOnInit() {

    // reactive form
    this.sectorForm = this.fb.group({
      id:             [''],
      nombre:         ['' , Validators.required ],
      numero:         ['1' , Validators.required ]
    });

    // get the route params to edit a seccion or create a new one
    this.route.params
      .subscribe( (params: Params) => {

        const id_sector = parseInt( params['id_sector'], 10 );
        if ( id_sector ) {

            // Editing this sector

            this.sectorService.getSector( id_sector )
              .subscribe( (sec: Sector) => {

                this.sector = sec;

                // if it is a valid sector
                if (this.sector) {

                  // load the form with data
                  const tmpSector = this.sector ;
                  this.sectorForm.patchValue( tmpSector );

                } else {

                  this.router.navigate(['/not-found']);

                }

              });

        } else {

          // we are creating a new sector
          this.sector = new Sector();

        }


      });

  }


  onSubmit() {

    // if there is a sector to edit
    if (this.sector.id) {

      this.sectorService.updateSector( this.sector.id, this.sectorForm.value)
        .subscribe( sectores => {

            // goes back to the list
            this.goBackToList();

        });

    } else {

      // get sector data from the form
      this.sector = this.sectorForm.value ;

      // initializes numLotes and numEspecies of the sector
      this.sector.numLotes    = 0;
      this.sector.numEspecies = 0;

      // sector to insert
      this.sectorService.insertSector( this.sector )
        .subscribe( sectores => {

            // goes back to the list
            this.goBackToList();

        });

    }


  }

  onCancel() {

    this.goBackToList();
  }

  // redirects to the sector list
  goBackToList() {

       this.sectorForm.reset();

       // not in insert mode ( we show the toolbar in our parent component )
       this.sectorService.setShowToolBarInsertButtons(true);


       // Depending on the selected seccion ListViewType ( CARD_VIEW , LIST_VIEW )
       switch (this.sectorService.getListViewType() ) {

         case LIST_VIEW_TYPE.CARD:
           // navigates to the sector list with CARD view
           this.router.navigate(['/gestion/sector/card']);
           break;

         case LIST_VIEW_TYPE.LIST:
           // navigates to the sector list with list view
           this.router.navigate(['/gestion/sector/list']);
           break;

         default:
           // navigates to the sector list with list-card view
           this.router.navigate(['/gestion/sector/list']);
           break;
      }


  }


}
