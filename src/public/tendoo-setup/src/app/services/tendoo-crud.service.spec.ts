import { TestBed } from '@angular/core/testing';

import { TendooCrudService } from './tendoo-crud.service';

describe('TendooCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooCrudService = TestBed.get(TendooCrudService);
    expect(service).toBeTruthy();
  });
});
