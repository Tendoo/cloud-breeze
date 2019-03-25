import { TestBed } from '@angular/core/testing';

import { CloudToolsService } from './cloud-tools.service';

describe('CloudToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudToolsService = TestBed.get(CloudToolsService);
    expect(service).toBeTruthy();
  });
});
