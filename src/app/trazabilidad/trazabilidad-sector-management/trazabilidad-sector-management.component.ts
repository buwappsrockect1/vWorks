import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TrazabilidadSectorService } from '../services/trazabilidad-sector/trazabilidad-sector.service';
import { MyRouteNavLink } from '../models/my-route-nav-link';

@Component({
  selector: 'app-trazabilidad-sector-management',
  templateUrl: './trazabilidad-sector-management.component.html',
  styleUrls: ['./trazabilidad-sector-management.component.css']
})
export class TrazabilidadSectorManagementComponent implements OnInit {

  selectedSector: number = 0;

  // route navlinks ( routes in the breadcrumb toolbar )
  myRouteNavLinks: MyRouteNavLink[] = [];


  constructor(private router: Router,
              private route: ActivatedRoute,
              private trazabilidadSectorService: TrazabilidadSectorService) { }

  ngOnInit() {

    // get the route params to to activate the current class on navigation toolbar
    this.route.params
      .subscribe( (params: Params) => {

        const idSectorParam = params['id_sector'];

        if ( idSectorParam ) {

          const id_sector = parseInt( idSectorParam, 10 );
          this.selectedSector = id_sector;


        }




      });

      // get the RouteNavLinks for the breadcrumb toolbar
      this.trazabilidadSectorService.getNavLinks()
        .subscribe( ( navlinks: MyRouteNavLink[]) => {

            this.myRouteNavLinks = navlinks;

        });


  }


  onNavLinkClicked(nLink: MyRouteNavLink) {

      // adds this link or removes the links on the right
      this.trazabilidadSectorService.writeNavLink(nLink);

  }


}
