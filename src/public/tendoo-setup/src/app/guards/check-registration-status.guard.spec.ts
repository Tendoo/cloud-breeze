import { TestBed, async, inject } from '@angular/core/testing';

import { CheckRegistrationStatusGuard } from './check-registration-status.guard';

describe('CheckRegistrationStatusGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckRegistrationStatusGuard]
    });
  });

  it('should ...', inject([CheckRegistrationStatusGuard], (guard: CheckRegistrationStatusGuard) => {
    expect(guard).toBeTruthy();
  }));
});
