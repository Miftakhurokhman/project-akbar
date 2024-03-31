import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormActivitasComponent } from './form-activitas.component';

describe('FormActivitasComponent', () => {
  let component: FormActivitasComponent;
  let fixture: ComponentFixture<FormActivitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormActivitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormActivitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
