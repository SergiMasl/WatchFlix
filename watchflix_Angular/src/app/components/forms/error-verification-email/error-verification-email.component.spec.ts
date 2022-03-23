import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorVerificationEmailComponent } from './error-verification-email.component';

describe('ErrorVerificationEmailComponent', () => {
  let component: ErrorVerificationEmailComponent;
  let fixture: ComponentFixture<ErrorVerificationEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorVerificationEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorVerificationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
