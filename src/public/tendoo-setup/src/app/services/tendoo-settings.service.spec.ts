import { TestBed } from '@angular/core/testing';

import { TendooSettingsService } from './tendoo-settings.service';

describe('TendooSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooSettingsService = TestBed.get(TendooSettingsService);
    expect(service).toBeTruthy();
  });
});
