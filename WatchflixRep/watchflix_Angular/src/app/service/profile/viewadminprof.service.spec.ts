import { TestBed } from '@angular/core/testing';

import { ViewadminprofService } from './viewadminprof.service';

describe('ViewadminprofService', () => {
  let service: ViewadminprofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewadminprofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
