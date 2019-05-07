
// getLoteAny(id: number): Observable<any> {
/*
    // ejemplo 1 - simple 
    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return of( this.loteList[loteIndex] );

    } else {
        return null;
    }
  }

*/

/*
    // ejemplo 2 - forkJoin 
    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return forkJoin([
              of( this.loteList[loteIndex] ),
              this.sectorService.getSector(1)
          ])
          .pipe(
              map( (data: any[] ) => {
                const lote: any = data[0];
                const sector: any = data[1];

                (lote as Lote).notas = (sector as Sector).nombre;
                return lote;
              })

          );


    } else {
        return of(null);
    }
*/

/*
    // ejemplo 3 - Observables in serie ( flatMap - returns an observable ) 
    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return of( this.loteList[loteIndex] )
              .pipe(
                  flatMap( (lote: any) => {
                    return this.sectorService.getSector( lote.sector );
                  })
              );



    } else {
        return of(null);
    }
*/

/*
    // ejemplo 3.1 - Observables in serie ( flatMap - returns an observable )
    // we return the lote information and for each lote we return the lote with a new property of its sector data ( sectorData ) 
    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return of( this.loteList[loteIndex] )
              .pipe(
                  flatMap( (lote: any) => {
                    return this.sectorService.getSector( lote.sector )
                              .pipe(
                                  map( (sec: any ) => {

                                     // we put sector data into this new property
                                     lote.sectorData = sec;
                                     return lote;
                                  })
                              );
                  })
              );



    } else {
        return of(null);
    }

*/

/*
    // ejemplo 3.2 - Observables in serie ( flatMap - returns an observable )
    // we return the lote information and for each lote we return the lote with a new property of its sector data ( sectorData ) 
    const loteIndex = this.loteList.findIndex( (lote) => lote.id === id );

    if ( loteIndex >= 0 ) {

      return of( this.loteList[loteIndex] )
              .pipe(
                  flatMap( (lote: Lote) => {
                    return this.sectorService.getSector( lote.sector )
                              .pipe(
                                  map( (sec: Sector ) => {


                                     return       {
                                        id:           lote.id           ,
                                        nombre:       lote.nombre       ,
                                        especie:      lote.especie      ,
                                        variedad:     lote.variedad     ,
                                        cantidad:     lote.cantidad     ,
                                        stockMinimo:  lote.stockMinimo  ,
                                        sector:       {
                                                          id:                 sec.id      ,
                                                          nombre:             sec.nombre
                                                      },
                                        fechaEntrada: lote.fechaEntrada           ,
                                        operarioEncargado: lote.operarioEncargado ,
                                        codProveedor: lote.codProveedor           ,
                                        qrTrazabilidad: lote.qrTrazabilidad       ,
                                        notas:        lote.notas
                                    };


                                  })
                              );
                  })
              );



    } else {
        return of(null);
    }
*/


//getLotesInfoForTableOk(id_sector: number): Observable<any[]> {


/*    
    return this.getLotesAny( id_sector )
      .pipe(

        flatMap( (lotes: any[]) => {

          if (lotes.length > 0 ) {

            return forkJoin(

              lotes.map( (lote: any ) => {

                return this.sectorService.getSector( lote.sector )
                  .pipe(
                    map( (sector: Sector ) => {

                      lote.sector =      {
                          id:                 sector.id      ,
                          nombre:             sector.nombre
                      };

                      return lote;

                    })

                  );


              })

            );

          }
          return of([]);

        })


      );
*/

/*
  return this.getLotesAny( id_sector )
    .pipe(

      flatMap( (lotes: any[]) => {

        if (lotes.length > 0 ) {

          return forkJoin(

            lotes.map( (lote: any ) => {

              return this.sectorService.getSector( lote.sector )
                .pipe(
                  map( (sector: Sector ) => {

                    lote.sector =      {
                        id:                 sector.id      ,
                        nombre:             sector.nombre
                    };

                    return lote;

                  })

                );


            })

          );

        }
        return of([]);

    })
*/


/*
    Ejemplo forkJoin en paralelo

propOne: string ;
propTwo: string ;
propThree: string;

// en servicio
makeRequest(value: string, delayDuration: number) {
  // simulate http request
  return of(`Completed: ${value}`)
    .pipe( delay( delayDuration) );

}

// en componente
forkJoin(
  this.sectorService.makeRequest('Request One', 2000),
  this.sectorService.makeRequest('Request Two', 1000),
  this.sectorService.makeRequest('Request Three', 3000)
).subscribe( ([res1, res2 , res3 ]) => {
    this.propOne = res1;
    this.propTwo = res2 ;
    this.propThree = res3 ;
});

*/

