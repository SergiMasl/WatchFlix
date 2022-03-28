import { TestBed } from '@angular/core/testing';

import { ViewprofadminService } from './viewprofadmin.service';

describe('ViewprofadminService', () => {
  let service: ViewprofadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewprofadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
