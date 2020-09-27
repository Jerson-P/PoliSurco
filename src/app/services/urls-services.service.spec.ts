import { TestBed } from '@angular/core/testing';

import { UrlsServicesService } from './urls-services.service';

describe('UrlsServicesService', () => {
  let service: UrlsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
