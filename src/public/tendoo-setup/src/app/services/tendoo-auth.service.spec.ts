import { TestBed } from '@angular/core/testing';

import { TendooAuthService } from './tendoo-auth.service';

describe('TendooAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooAuthService = TestBed.get(TendooAuthService);
    expect(service).toBeTruthy();
  });
});
