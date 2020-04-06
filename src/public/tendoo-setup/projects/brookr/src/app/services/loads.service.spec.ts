import { TestBed } from '@angular/core/testing';

import { LoadsService } from './loads.service';

describe('LoadsService', () => {
  let service: LoadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
