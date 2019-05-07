import { TestBed, inject } from '@angular/core/testing';

import { EspecieApiService } from './especie-api.service';

describe('EspecieApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EspecieApiService]
    });
  });

  it('should be created', inject([EspecieApiService], (service: EspecieApiService) => {
    expect(service).toBeTruthy();
  }));
});
