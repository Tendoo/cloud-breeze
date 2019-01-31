import { TestBed } from '@angular/core/testing';

import { TendooOptionsService } from './tendoo-options.service';

describe('TendooOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooOptionsService = TestBed.get(TendooOptionsService);
    expect(service).toBeTruthy();
  });
});
