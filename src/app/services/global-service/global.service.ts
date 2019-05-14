import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

    // Production mode set to true , otherwise we are in development mode
    PRODUCTION_MODE = true ;


    // Production host and port
    PROD_SERVER = '51.77.140.197';
    PROD_PORT   = 3051;

    // Development host and port
    DEV_SERVER  = 'localhost' ;
    DEV_PORT    = 3051;


    LOTE_IMAGES_DIR = './assets/uploads/lotes-images/';

  constructor() { }

  getProductionMode() {
    return this.PRODUCTION_MODE;
  }

  // get the server and port  ( Public Method to use by the services )
  getServerAndPort(): string {

      // checking production mode
      if ( this.getProductionMode() ) {

        // we are in production mode
        return 'http://' + this.PROD_SERVER + ':' + this.PROD_PORT ;

      } else {

        // we are in production mode
        return 'http://' + this.DEV_SERVER + ':' + this.DEV_PORT ;

      }

  }


  // get development port
  getDevPort() {
    return this.DEV_PORT;
  }

  // get production port
  getProdPort() {
    return this.PROD_PORT;
  }

  // get development server/host
  getDevServer() {
    return this.DEV_SERVER;
  }

  // get production server/host
  getProdServer() {
    return this.PROD_SERVER;
  }

  // dir of daily uploaded lote images
  getLoteImagesDir() {
    return this.LOTE_IMAGES_DIR ;
  }

}
