import { TestBed } from '@angular/core/testing';

import { LogInServService } from './log-in-serv.service';

describe('LogInServService', () => {
  let service: LogInServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogInServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
