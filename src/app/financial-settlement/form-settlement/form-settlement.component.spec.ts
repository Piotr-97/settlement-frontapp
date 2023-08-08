import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSettlementComponent } from './form-settlement.component';

describe('FormSettlementComponent', () => {
  let component: FormSettlementComponent;
  let fixture: ComponentFixture<FormSettlementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSettlementComponent]
    });
    fixture = TestBed.createComponent(FormSettlementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
