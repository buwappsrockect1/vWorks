import { Injectable } from '@angular/core';
import { MyRouteNavLink } from '../../models/my-route-nav-link';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrazabilidadSectorService  {


  // navLinks
  navLinks: MyRouteNavLink[] = [];


  constructor() {
    this.initSectoresLink();
  }



  // Insert the initiall Sectores NavLink ( Root NavLink )
  initSectoresLink() {

      // create a MyRouteNavLink ( navlink element )
      const myRouteNavLnk: MyRouteNavLink = {
        textLink:   'Sectores' ,
        routeLink:  '/trazabilidad'
      };

      // clears the navLinks
      this.navLinks = [];

      // writes this navLink
      this.navLinks.push( myRouteNavLnk );

  }


  // send a message to the subscribers
  // writes a navlink
  writeNavLink( navLink: MyRouteNavLink ) {

    // find the index if it exits
    const navLinkIndex = this.navLinks.findIndex( (nLink) => nLink.textLink === navLink.textLink );

    // if the element already exists in the array
    if ( navLinkIndex >= 0 ) {

        // removes all the elements from this index
        this.navLinks.splice( navLinkIndex + 1, this.navLinks.length - (navLinkIndex + 1) );

    } else {

        // inserts the navLink
        this.navLinks.push( navLink );

    }


  }

  // gets the observable
  getNavLinks(): Observable<MyRouteNavLink[]> {

    // sends the navLinks array
    return new Observable<MyRouteNavLink[]>( (observer) => {
      observer.next( this.navLinks );
    });

  }


}
