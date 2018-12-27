import { TestBed } from '@angular/core/testing';

import { HttpResponseParserService } from './http-response-parser.service';

describe('HttpResponseParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpResponseParserService = TestBed.get(HttpResponseParserService);
    expect(service).toBeTruthy();
  });
});
