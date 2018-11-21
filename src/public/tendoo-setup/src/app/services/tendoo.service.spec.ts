import { TestBed } from '@angular/core/testing';

import { TendooService } from './tendoo.service';

describe('TendooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooService = TestBed.get(TendooService);
    expect(service).toBeTruthy();
  });
});
