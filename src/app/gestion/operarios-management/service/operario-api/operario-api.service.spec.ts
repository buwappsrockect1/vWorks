import { TestBed, inject } from '@angular/core/testing';

import { OperarioApiService } from './operario-api.service';

describe('OperarioApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperarioApiService]
    });
  });

  it('should be created', inject([OperarioApiService], (service: OperarioApiService) => {
    expect(service).toBeTruthy();
  }));
});
