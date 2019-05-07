import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Sector } from 'src/app/gestion/sector-management/model/sector';
import { SectorService } from 'src/app/gestion/sector-management/services/sector/sector.service';
import { MyRouteNavLink } from '../../models/my-route-nav-link';
import { TrazabilidadSectorService } from '../../services/trazabilidad-sector/trazabilidad-sector.service';

@Component({
  selector: 'app-sector-selected',
  templateUrl: './sector-selected.component.html',
  styleUrls: ['./sector-selected.component.css']
})
export class SectorSelectedComponent implements OnInit {

  selectedSector: Sector;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sectorService: SectorService,
              private trazabilidadSectorService: TrazabilidadSectorService) { }

  ngOnInit() {

      // get the route params to edit a seccion or create a new one
      this.route.params
        .subscribe( (params: Params) => {

          const id_sector = parseInt( params['id_sector'], 10 );

          this.sectorService.getSector( id_sector )
            .subscribe( (sect: Sector) => this.selectedSector = sect );

        });

  }

  // creates a navlink to lotes
  onLotesClick() {

    this.insertNavLink('lotes');

  }

  // creates a navlink to especies
  onEspeciesClick() {

    this.insertNavLink('especies');

  }

  insertNavLink(txtLink: string) {

        // create a MyRouteNavLink ( navlink element )
        const myRouteNavLnk: MyRouteNavLink = {
          textLink:   (txtLink === 'lotes') ? 'Lotes' : 'Especies' ,
          routeLink:  'sector/' + this.selectedSector.id + '/' + txtLink
        };

        this.trazabilidadSectorService.writeNavLink( myRouteNavLnk );

  }

}
