import { TestBed, async, inject } from '@angular/core/testing';

import { AppStateGuard } from './app-state.guard';

describe('AppStateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateGuard]
    });
  });

  it('should ...', inject([AppStateGuard], (guard: AppStateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
