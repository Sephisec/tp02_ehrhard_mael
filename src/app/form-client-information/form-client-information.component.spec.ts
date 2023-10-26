import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClientInformationComponent } from './form-client-information.component';

describe('FormClientInformationComponent', () => {
  let component: FormClientInformationComponent;
  let fixture: ComponentFixture<FormClientInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormClientInformationComponent]
    });
    fixture = TestBed.createComponent(FormClientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
