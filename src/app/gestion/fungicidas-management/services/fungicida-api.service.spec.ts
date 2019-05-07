import { TestBed, inject } from '@angular/core/testing';

import { FungicidaApiService } from './fungicida-api.service';

describe('FungicidaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FungicidaApiService]
    });
  });

  it('should be created', inject([FungicidaApiService], (service: FungicidaApiService) => {
    expect(service).toBeTruthy();
  }));
});
