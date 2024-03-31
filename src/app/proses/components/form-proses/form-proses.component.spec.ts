import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProsesComponent } from './form-proses.component';

describe('FormProsesComponent', () => {
  let component: FormProsesComponent;
  let fixture: ComponentFixture<FormProsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormProsesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormProsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
