import { TestBed } from '@angular/core/testing';

import { ViewprofService } from './viewprof.service';

describe('ViewprofService', () => {
  let service: ViewprofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewprofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
