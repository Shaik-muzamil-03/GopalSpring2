import { TestBed } from '@angular/core/testing';

import { MyAppServiceService } from './my-app-service.service';

describe('MyAppServiceService', () => {
  let service: MyAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
