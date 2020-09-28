import { TestBed } from '@angular/core/testing';

import { ElpoliService } from './elpoli.service';

describe('ElpoliService', () => {
  let service: ElpoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElpoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
