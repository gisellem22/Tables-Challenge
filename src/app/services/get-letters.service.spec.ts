import { TestBed } from '@angular/core/testing';

import { GetLettersService } from './get-letters.service';

describe('GetLettersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLettersService = TestBed.get(GetLettersService);
    expect(service).toBeTruthy();
  });
});
