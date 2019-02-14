import { TestBed } from '@angular/core/testing';

import { TendooOauthService } from './tendoo-oauth.service';

describe('TendooOauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooOauthService = TestBed.get(TendooOauthService);
    expect(service).toBeTruthy();
  });
});
