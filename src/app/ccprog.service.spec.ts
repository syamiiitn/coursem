import { TestBed } from '@angular/core/testing';

import { CcprogService } from './ccprog.service';

describe('CcprogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CcprogService = TestBed.get(CcprogService);
    expect(service).toBeTruthy();
  });
});
