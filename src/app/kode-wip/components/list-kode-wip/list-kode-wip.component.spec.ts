import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKodeWipComponent } from './list-kode-wip.component';

describe('ListKodeWipComponent', () => {
  let component: ListKodeWipComponent;
  let fixture: ComponentFixture<ListKodeWipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListKodeWipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListKodeWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
