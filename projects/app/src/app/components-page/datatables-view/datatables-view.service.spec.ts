import { TestBed } from '@angular/core/testing';

import { DatatablesViewService } from './datatables-view.service';

describe('DatatablesViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatatablesViewService = TestBed.get(DatatablesViewService);
    expect(service).toBeTruthy();
  });
});
