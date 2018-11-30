import { TestBed, async, inject } from '@angular/core/testing';

import { PreventAppNotInstalledGuard } from './check-app-installed.guard';

describe('CheckAppInstalledGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventAppNotInstalledGuard]
    });
  });

  it('should ...', inject([PreventAppNotInstalledGuard], (guard: PreventAppNotInstalledGuard) => {
    expect(guard).toBeTruthy();
  }));
});
