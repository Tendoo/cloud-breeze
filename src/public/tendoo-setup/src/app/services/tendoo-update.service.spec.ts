import { TestBed } from '@angular/core/testing';

import { TendooUpdateService } from './tendoo-update.service';

describe('TendooUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooUpdateService = TestBed.get(TendooUpdateService);
    expect(service).toBeTruthy();
  });
});
