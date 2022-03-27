import { TestBed } from '@angular/core/testing';

import { GetAdminprofService } from './get-adminprof.service';

describe('GetAdminprofService', () => {
  let service: GetAdminprofService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAdminprofService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
