import { TestBed } from '@angular/core/testing';

import { AlertmodelserviceService } from './alertmodelservice.service';

describe('AlertmodelserviceService', () => {
  let service: AlertmodelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertmodelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
