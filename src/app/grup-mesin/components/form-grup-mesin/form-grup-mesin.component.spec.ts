import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrupMesinComponent } from './form-grup-mesin.component';

describe('FormGrupMesinComponent', () => {
  let component: FormGrupMesinComponent;
  let fixture: ComponentFixture<FormGrupMesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGrupMesinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGrupMesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
