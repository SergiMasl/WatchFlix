import { TestBed } from '@angular/core/testing';

import { VerificationNumService } from './verification-num.service';

describe('VerificationNumService', () => {
  let service: VerificationNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
