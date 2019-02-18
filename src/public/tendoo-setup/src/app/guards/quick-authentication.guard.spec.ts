import { TestBed, async, inject } from '@angular/core/testing';

import { QuickAuthenticationGuard } from './quick-authentication.guard';

describe('QuickAuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickAuthenticationGuard]
    });
  });

  it('should ...', inject([QuickAuthenticationGuard], (guard: QuickAuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
