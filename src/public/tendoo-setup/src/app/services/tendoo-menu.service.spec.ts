import { TestBed } from '@angular/core/testing';

import { TendooMenusService } from './tendoo-menu.service';

describe('TendooMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooMenusService = TestBed.get(TendooMenusService);
    expect(service).toBeTruthy();
  });
});
