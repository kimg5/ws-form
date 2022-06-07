import { TestBed } from '@angular/core/testing';

import { WzFormService } from './wz-form.service';

describe('WzFormService', () => {
  let service: WzFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WzFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
