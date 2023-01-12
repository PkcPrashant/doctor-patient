import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsAvailableTimeslotsComponent } from './doctors-available-timeslots.component';

describe('DoctorsAvailableTimeslotsComponent', () => {
  let component: DoctorsAvailableTimeslotsComponent;
  let fixture: ComponentFixture<DoctorsAvailableTimeslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsAvailableTimeslotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsAvailableTimeslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
