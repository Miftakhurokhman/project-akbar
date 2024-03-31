import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpecParameterComponent } from './list-spec-parameter.component';

describe('ListSpecParameterComponent', () => {
  let component: ListSpecParameterComponent;
  let fixture: ComponentFixture<ListSpecParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSpecParameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSpecParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
