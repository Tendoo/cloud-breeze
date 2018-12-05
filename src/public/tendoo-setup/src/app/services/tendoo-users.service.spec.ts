import { TestBed } from '@angular/core/testing';

import { TendooUsersService } from './tendoo-users.service';

describe('TendooUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooUsersService = TestBed.get(TendooUsersService);
    expect(service).toBeTruthy();
  });
});
