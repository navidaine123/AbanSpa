import { TestBed } from '@angular/core/testing';

import { SharedLibrariesService } from './shared-libraries.service';

describe('SharedLibrariesService', () => {
  let service: SharedLibrariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedLibrariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
