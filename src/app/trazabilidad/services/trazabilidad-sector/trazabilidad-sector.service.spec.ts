import { TestBed, inject } from '@angular/core/testing';

import { TrazabilidadSectorService } from '../trazabilidad-sector.service';

describe('TrazabilidadSectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrazabilidadSectorService]
    });
  });

  it('should be created', inject([TrazabilidadSectorService], (service: TrazabilidadSectorService) => {
    expect(service).toBeTruthy();
  }));
});
