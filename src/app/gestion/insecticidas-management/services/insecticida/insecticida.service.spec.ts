import { TestBed, inject } from '@angular/core/testing';

import { InsecticidaService } from './insecticida.service';

describe('InsecticidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsecticidaService]
    });
  });

  it('should be created', inject([InsecticidaService], (service: InsecticidaService) => {
    expect(service).toBeTruthy();
  }));
});
