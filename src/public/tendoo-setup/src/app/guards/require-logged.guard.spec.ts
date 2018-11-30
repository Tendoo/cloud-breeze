import { TestBed, async, inject } from '@angular/core/testing';

import { RequireLoggedGuard } from './require-logged.guard';

describe('RequireLoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireLoggedGuard]
    });
  });

  it('should ...', inject([RequireLoggedGuard], (guard: RequireLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
