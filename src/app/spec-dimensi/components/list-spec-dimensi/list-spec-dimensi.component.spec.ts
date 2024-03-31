import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpecDimensiComponent } from './list-spec-dimensi.component';

describe('ListSpecDimensiComponent', () => {
  let component: ListSpecDimensiComponent;
  let fixture: ComponentFixture<ListSpecDimensiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSpecDimensiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSpecDimensiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
