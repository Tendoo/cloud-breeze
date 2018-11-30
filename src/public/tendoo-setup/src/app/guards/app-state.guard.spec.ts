import { TestBed, async, inject } from '@angular/core/testing';

import { PreventAppInstalledGuard } from './app-state.guard';

describe('AppStateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventAppInstalledGuard]
    });
  });

  it('should ...', inject([PreventAppInstalledGuard], (guard: PreventAppInstalledGuard) => {
    expect(guard).toBeTruthy();
  }));
});
