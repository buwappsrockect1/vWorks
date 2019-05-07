import { TestBed, inject } from '@angular/core/testing';

import { FungicidaService } from './fungicida.service';

describe('FungicidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FungicidaService]
    });
  });

  it('should be created', inject([FungicidaService], (service: FungicidaService) => {
    expect(service).toBeTruthy();
  }));
});
