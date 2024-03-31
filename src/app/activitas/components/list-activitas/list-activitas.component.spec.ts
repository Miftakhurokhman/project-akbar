import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActivitasComponent } from './list-activitas.component';

describe('ListActivitasComponent', () => {
  let component: ListActivitasComponent;
  let fixture: ComponentFixture<ListActivitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListActivitasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListActivitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
