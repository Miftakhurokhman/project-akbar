import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKodeWipComponent } from './form-kode-wip.component';

describe('FormKodeWipComponent', () => {
  let component: FormKodeWipComponent;
  let fixture: ComponentFixture<FormKodeWipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormKodeWipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormKodeWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
