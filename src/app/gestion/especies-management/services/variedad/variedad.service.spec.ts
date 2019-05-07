import { TestBed, inject } from '@angular/core/testing';

import { VariedadService } from './variedad.service';

describe('VariedadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VariedadService]
    });
  });

  it('should be created', inject([VariedadService], (service: VariedadService) => {
    expect(service).toBeTruthy();
  }));
});
