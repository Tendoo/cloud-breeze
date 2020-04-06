import { TestBed } from '@angular/core/testing';

import { TrucksService } from './trucks.service';

describe('TrucksService', () => {
  let service: TrucksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrucksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
