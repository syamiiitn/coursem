import { TestBed } from '@angular/core/testing';

import { JcourseService } from './jcourse.service';

describe('JcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JcourseService = TestBed.get(JcourseService);
    expect(service).toBeTruthy();
  });
});
