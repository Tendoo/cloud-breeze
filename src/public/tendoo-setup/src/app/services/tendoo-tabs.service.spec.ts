import { TestBed } from '@angular/core/testing';

import { TendooTabsService } from './tendoo-tabs.service';

describe('TendooTabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooTabsService = TestBed.get(TendooTabsService);
    expect(service).toBeTruthy();
  });
});
