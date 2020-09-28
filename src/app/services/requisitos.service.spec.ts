import { TestBed } from '@angular/core/testing';

import { RequisitosService } from './requisitos.service';

describe('RequisitosService', () => {
  let service: RequisitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequisitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
