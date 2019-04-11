import { TestBed } from '@angular/core/testing';

import { TendooSpinnerService } from './tendoo-spinner.service';

describe('TendooSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooSpinnerService = TestBed.get(TendooSpinnerService);
    expect(service).toBeTruthy();
  });
});
