import { TestBed, async, inject } from '@angular/core/testing';

import { CrudListGuard } from './crud-list.guard';

describe('CrudListGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudListGuard]
    });
  });

  it('should ...', inject([CrudListGuard], (guard: CrudListGuard) => {
    expect(guard).toBeTruthy();
  }));
});
