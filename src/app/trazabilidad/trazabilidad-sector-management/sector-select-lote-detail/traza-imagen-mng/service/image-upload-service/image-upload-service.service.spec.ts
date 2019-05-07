import { TestBed, inject } from '@angular/core/testing';

import { ImageUploadServiceService } from './image-upload-service.service';

describe('ImageUploadServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageUploadServiceService]
    });
  });

  it('should be created', inject([ImageUploadServiceService], (service: ImageUploadServiceService) => {
    expect(service).toBeTruthy();
  }));
});
