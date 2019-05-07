import { TestBed, inject } from '@angular/core/testing';

import { ProveedorApiService } from './proveedor-api.service';

describe('ProveedorApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProveedorApiService]
    });
  });

  it('should be created', inject([ProveedorApiService], (service: ProveedorApiService) => {
    expect(service).toBeTruthy();
  }));
});
