import { TestBed, inject } from '@angular/core/testing';

import { EspecieService } from './especie.service';

describe('EspecieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecieService]
    });
  });

  it('should be created', inject([EspecieService], (service: EspecieService) => {
    expect(service).toBeTruthy();
  }));
});
