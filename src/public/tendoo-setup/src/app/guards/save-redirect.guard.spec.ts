import { TestBed, async, inject } from '@angular/core/testing';

import { SaveRedirectGuard } from './save-redirect.guard';

describe('SaveRedirectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveRedirectGuard]
    });
  });

  it('should ...', inject([SaveRedirectGuard], (guard: SaveRedirectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
