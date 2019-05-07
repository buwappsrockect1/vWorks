import { TestBed, inject } from '@angular/core/testing';

import { ImagenLoteApiService } from './imagen-lote-api.service';

describe('ImagenLoteApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImagenLoteApiService]
    });
  });

  it('should be created', inject([ImagenLoteApiService], (service: ImagenLoteApiService) => {
    expect(service).toBeTruthy();
  }));
});
