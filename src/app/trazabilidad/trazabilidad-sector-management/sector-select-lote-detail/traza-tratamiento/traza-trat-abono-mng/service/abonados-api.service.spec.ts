import { TestBed, inject } from '@angular/core/testing';

import { AbonadosApiService } from './abonados-api.service';

describe('AbonadosApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbonadosApiService]
    });
  });

  it('should be created', inject([AbonadosApiService], (service: AbonadosApiService) => {
    expect(service).toBeTruthy();
  }));
});
