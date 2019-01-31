import { TestBed } from '@angular/core/testing';

import { AuthorizService } from './authoriz.service';

describe('AuthorizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizService = TestBed.get(AuthorizService);
    expect(service).toBeTruthy();
  });
});
