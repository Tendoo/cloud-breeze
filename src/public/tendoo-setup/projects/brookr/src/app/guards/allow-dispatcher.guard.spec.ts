import { TestBed } from '@angular/core/testing';

import { AllowDispatcherGuard } from './allow-dispatcher.guard';

describe('AllowDispatcherGuard', () => {
  let guard: AllowDispatcherGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowDispatcherGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
