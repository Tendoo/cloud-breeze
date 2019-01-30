import { TestBed, async, inject } from '@angular/core/testing';

import { CrudCreateGuard } from './crud-create.guard';

describe('CrudCreateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudCreateGuard]
    });
  });

  it('should ...', inject([CrudCreateGuard], (guard: CrudCreateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
