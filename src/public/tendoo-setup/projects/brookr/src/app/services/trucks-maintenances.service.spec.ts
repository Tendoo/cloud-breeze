import { TestBed } from '@angular/core/testing';

import { TrucksMaintenancesService } from './trucks-maintenances.service';

describe('TrucksMaintenancesService', () => {
  let service: TrucksMaintenancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrucksMaintenancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
