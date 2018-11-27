import { TestBed, inject } from '@angular/core/testing';

import { APIservicesService } from './apiservices.service';

describe('APIservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIservicesService]
    });
  });

  it('should be created', inject([APIservicesService], (service: APIservicesService) => {
    expect(service).toBeTruthy();
  }));
});
