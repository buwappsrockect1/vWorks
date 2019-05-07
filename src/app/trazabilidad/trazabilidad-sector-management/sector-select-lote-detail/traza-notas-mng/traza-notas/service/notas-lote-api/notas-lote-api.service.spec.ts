import { TestBed, inject } from '@angular/core/testing';

import { NotasLoteApiService } from './notas-lote-api.service';

describe('NotasLoteApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotasLoteApiService]
    });
  });

  it('should be created', inject([NotasLoteApiService], (service: NotasLoteApiService) => {
    expect(service).toBeTruthy();
  }));
});
