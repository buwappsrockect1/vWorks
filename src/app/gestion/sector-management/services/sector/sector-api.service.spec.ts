import { TestBed, inject } from '@angular/core/testing';

import { SectorApiService } from './sector-api.service';

describe('SectorApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectorApiService]
    });
  });

  it('should be created', inject([SectorApiService], (service: SectorApiService) => {
    expect(service).toBeTruthy();
  }));
});
