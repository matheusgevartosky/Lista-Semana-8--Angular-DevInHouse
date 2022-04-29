import { TestBed } from '@angular/core/testing';

import { ConsomeApiService } from './consome-api.service';

describe('ConsomeApiService', () => {
  let service: ConsomeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsomeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
