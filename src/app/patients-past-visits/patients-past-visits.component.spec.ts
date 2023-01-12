import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPastVisitsComponent } from './patients-past-visits.component';

describe('PatientsPastVisitsComponent', () => {
  let component: PatientsPastVisitsComponent;
  let fixture: ComponentFixture<PatientsPastVisitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsPastVisitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPastVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
