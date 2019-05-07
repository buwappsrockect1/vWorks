import { TestBed, inject } from '@angular/core/testing';

import { AbonoAPIService } from './abono-api.service';

describe('AbonoAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbonoAPIService]
    });
  });

  it('should be created', inject([AbonoAPIService], (service: AbonoAPIService) => {
    expect(service).toBeTruthy();
  }));
});
