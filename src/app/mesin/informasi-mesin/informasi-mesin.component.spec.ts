import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiMesinComponent } from './informasi-mesin.component';

describe('InformasiMesinComponent', () => {
  let component: InformasiMesinComponent;
  let fixture: ComponentFixture<InformasiMesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformasiMesinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformasiMesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
