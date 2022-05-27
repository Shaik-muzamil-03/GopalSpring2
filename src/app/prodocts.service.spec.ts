import { TestBed } from '@angular/core/testing';

import { ProdoctsService } from './prodocts.service';

describe('ProdoctsService', () => {
  let service: ProdoctsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdoctsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
