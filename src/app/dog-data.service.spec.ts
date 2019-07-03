import { TestBed } from '@angular/core/testing';

import { DogDataService } from './dog-data.service';

describe('DogDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogDataService = TestBed.get(DogDataService);
    expect(service).toBeTruthy();
  });
});
