import { TestBed } from '@angular/core/testing';

import { PhotosGridLoaderService } from './photos-grid-loader.service';

describe('PhotosGridLoaderService', () => {
  let service: PhotosGridLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosGridLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
