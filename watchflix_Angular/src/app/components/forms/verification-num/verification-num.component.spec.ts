import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationNumComponent } from './verification-num.component';

describe('VerificationNumComponent', () => {
  let component: VerificationNumComponent;
  let fixture: ComponentFixture<VerificationNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
