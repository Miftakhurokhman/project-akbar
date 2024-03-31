import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpecDimensiComponent } from './form-spec-dimensi.component';

describe('FormSpecDimensiComponent', () => {
  let component: FormSpecDimensiComponent;
  let fixture: ComponentFixture<FormSpecDimensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSpecDimensiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSpecDimensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
