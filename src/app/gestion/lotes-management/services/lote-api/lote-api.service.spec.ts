import { TestBed, inject } from '@angular/core/testing';

import { LoteApiService } from './lote-api.service';

describe('LoteApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoteApiService]
    });
  });

  it('should be created', inject([LoteApiService], (service: LoteApiService) => {
    expect(service).toBeTruthy();
  }));
});
