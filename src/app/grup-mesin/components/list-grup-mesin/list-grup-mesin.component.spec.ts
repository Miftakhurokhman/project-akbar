import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrupMesinComponent } from './list-grup-mesin.component';

describe('ListGrupMesinComponent', () => {
  let component: ListGrupMesinComponent;
  let fixture: ComponentFixture<ListGrupMesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGrupMesinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGrupMesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
