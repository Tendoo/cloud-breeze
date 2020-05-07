import { TestBed } from '@angular/core/testing';

import { AllowDriverGuard } from './allow-driver.guard';

describe('AllowDriverGuard', () => {
  let guard: AllowDriverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowDriverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
