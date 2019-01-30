import { TestBed, async, inject } from '@angular/core/testing';

import { CrudEditGuard } from './crud-edit.guard';

describe('CrudEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudEditGuard]
    });
  });

  it('should ...', inject([CrudEditGuard], (guard: CrudEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
