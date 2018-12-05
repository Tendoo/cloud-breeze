import { TestBed } from '@angular/core/testing';

import { TendooTableService } from './tendoo-table.service';

describe('TendooTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooTableService = TestBed.get(TendooTableService);
    expect(service).toBeTruthy();
  });
});
