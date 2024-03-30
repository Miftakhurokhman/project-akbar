import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGedungComponent } from './form-gedung.component';

describe('FormGedungComponent', () => {
  let component: FormGedungComponent;
  let fixture: ComponentFixture<FormGedungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormGedungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGedungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
