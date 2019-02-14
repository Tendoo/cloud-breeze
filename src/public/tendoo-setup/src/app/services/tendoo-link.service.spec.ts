import { TestBed } from '@angular/core/testing';

import { TendooLinkService } from './tendoo-link.service';

describe('TendooLinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooLinkService = TestBed.get(TendooLinkService);
    expect(service).toBeTruthy();
  });
});
