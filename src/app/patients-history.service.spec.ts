import { TestBed } from '@angular/core/testing';

import { PatientsHistoryService } from './patients-history.service';

describe('PatientsHistoryService', () => {
  let service: PatientsHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientsHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
