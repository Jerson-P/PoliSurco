import { TestBed } from '@angular/core/testing';

import { AcademicaService } from './academica.service';

describe('AcademicaService', () => {
  let service: AcademicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
