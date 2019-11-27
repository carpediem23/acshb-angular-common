import { TestBed } from '@angular/core/testing';

import { AcshbCommonService } from './acshb-common.service';

describe('AcshbCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcshbCommonService = TestBed.get(AcshbCommonService);
    expect(service).toBeTruthy();
  });
});
