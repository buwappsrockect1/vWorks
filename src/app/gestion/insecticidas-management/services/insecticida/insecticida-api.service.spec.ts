import { TestBed, inject } from '@angular/core/testing';

import { InsecticidaApiService } from './insecticida-api.service';

describe('InsecticidaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsecticidaApiService]
    });
  });

  it('should be created', inject([InsecticidaApiService], (service: InsecticidaApiService) => {
    expect(service).toBeTruthy();
  }));
});
