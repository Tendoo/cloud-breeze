import { TestBed } from '@angular/core/testing';

import { TendooModulesService } from './tendoo-modules.service';

describe('TendooModulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooModulesService = TestBed.get(TendooModulesService);
    expect(service).toBeTruthy();
  });
});
