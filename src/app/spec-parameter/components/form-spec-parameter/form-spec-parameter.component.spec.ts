import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpecParameterComponent } from './form-spec-parameter.component';

describe('FormSpecParameterComponent', () => {
  let component: FormSpecParameterComponent;
  let fixture: ComponentFixture<FormSpecParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSpecParameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSpecParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
