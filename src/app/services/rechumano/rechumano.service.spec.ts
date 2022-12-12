import { TestBed } from '@angular/core/testing';

import { RechumanoService } from './rechumano.service';

describe('RechumanoService', () => {
  let service: RechumanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechumanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
