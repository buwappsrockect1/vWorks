import { TestBed, inject } from '@angular/core/testing';

import { NotasPrivLoteApiService } from './notas-priv-lote-api.service';

describe('NotasPrivLoteApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotasPrivLoteApiService]
    });
  });

  it('should be created', inject([NotasPrivLoteApiService], (service: NotasPrivLoteApiService) => {
    expect(service).toBeTruthy();
  }));
});
