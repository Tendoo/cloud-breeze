import { TestBed } from '@angular/core/testing';

import { TendooFormsService } from './tendoo-forms.service';

describe('TendooFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooFormsService = TestBed.get(TendooFormsService);
    expect(service).toBeTruthy();
  });
});
