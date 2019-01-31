import { TestBed } from '@angular/core/testing';

import { CpService } from './cp.service';

describe('CpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpService = TestBed.get(CpService);
    expect(service).toBeTruthy();
  });
});
