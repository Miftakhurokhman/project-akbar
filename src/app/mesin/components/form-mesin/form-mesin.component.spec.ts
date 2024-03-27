import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMesinComponent } from './form-mesin.component';

describe('FormMesinComponent', () => {
  let component: FormMesinComponent;
  let fixture: ComponentFixture<FormMesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMesinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
