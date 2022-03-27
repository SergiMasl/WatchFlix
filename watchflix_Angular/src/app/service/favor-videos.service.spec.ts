import { TestBed } from '@angular/core/testing';

import { FavorVideosService } from './favor-videos.service';

describe('FavorVideosService', () => {
  let service: FavorVideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavorVideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
