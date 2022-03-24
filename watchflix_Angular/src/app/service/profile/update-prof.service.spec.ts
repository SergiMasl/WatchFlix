import { TestBed } from '@angular/core/testing';

import { UpdateProfService } from './update-prof.service';

describe('UpdateProfService', () => {
  let service: UpdateProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
