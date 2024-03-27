import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMesinComponent } from './list-mesin.component';

describe('ListMesinComponent', () => {
  let component: ListMesinComponent;
  let fixture: ComponentFixture<ListMesinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMesinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListMesinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
