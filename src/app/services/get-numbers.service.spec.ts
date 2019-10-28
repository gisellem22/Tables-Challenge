import { TestBed } from '@angular/core/testing';

import { GetNumbersService } from './get-numbers.service';

describe('GetNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetNumbersService = TestBed.get(GetNumbersService);
    expect(service).toBeTruthy();
  });
});
