import { TestBed } from '@angular/core/testing';

import { RickApiService } from './rick-api.service';

describe('RickApiService', () => {
  let service: RickApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
