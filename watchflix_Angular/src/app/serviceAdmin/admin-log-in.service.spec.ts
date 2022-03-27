import { TestBed } from '@angular/core/testing';

import { AdminLogInService } from './admin-log-in.service';

describe('AdminLogInService', () => {
  let service: AdminLogInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLogInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
