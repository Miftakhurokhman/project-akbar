import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProsesComponent } from './list-proses.component';

describe('ListProsesComponent', () => {
  let component: ListProsesComponent;
  let fixture: ComponentFixture<ListProsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProsesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListProsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
