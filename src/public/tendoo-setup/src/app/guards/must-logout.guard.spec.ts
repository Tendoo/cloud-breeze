import { TestBed, async, inject } from '@angular/core/testing';

import { MustLogoutGuard } from './must-logout.guard';

describe('MustLogoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MustLogoutGuard]
    });
  });

  it('should ...', inject([MustLogoutGuard], (guard: MustLogoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
