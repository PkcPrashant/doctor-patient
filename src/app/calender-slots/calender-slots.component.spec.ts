import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderSlotsComponent } from './calender-slots.component';

describe('CalenderSlotsComponent', () => {
  let component: CalenderSlotsComponent;
  let fixture: ComponentFixture<CalenderSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderSlotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalenderSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
