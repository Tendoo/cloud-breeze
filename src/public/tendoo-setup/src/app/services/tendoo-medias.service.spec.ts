import { TestBed } from '@angular/core/testing';

import { TendooMediasService } from './tendoo-medias.service';

describe('TendooMediasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TendooMediasService = TestBed.get(TendooMediasService);
    expect(service).toBeTruthy();
  });
});
