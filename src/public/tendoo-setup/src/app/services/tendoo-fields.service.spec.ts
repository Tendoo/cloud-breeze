import { TestBed } from '@angular/core/testing';

import { TendooFieldsService } from './tendoo-fields.service';

describe('TendooFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooFieldsService = TestBed.get(TendooFieldsService);
    expect(service).toBeTruthy();
  });
});
