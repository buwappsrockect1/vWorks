import { TestBed, inject } from '@angular/core/testing';

import { RiegoApiService } from './riego-api.service';

describe('RiegoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RiegoApiService]
    });
  });

  it('should be created', inject([RiegoApiService], (service: RiegoApiService) => {
    expect(service).toBeTruthy();
  }));
});
