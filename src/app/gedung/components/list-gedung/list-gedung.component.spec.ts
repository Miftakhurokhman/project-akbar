import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGedungComponent } from './list-gedung.component';

describe('ListGedungComponent', () => {
  let component: ListGedungComponent;
  let fixture: ComponentFixture<ListGedungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListGedungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGedungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
