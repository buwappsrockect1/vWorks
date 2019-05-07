import { TestBed, inject } from '@angular/core/testing';

import { OperarioService } from './operario.service';

describe('OperarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperarioService]
    });
  });

  it('should be created', inject([OperarioService], (service: OperarioService) => {
    expect(service).toBeTruthy();
  }));
});
