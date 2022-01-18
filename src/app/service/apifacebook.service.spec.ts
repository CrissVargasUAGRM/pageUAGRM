import { TestBed } from '@angular/core/testing';

import { ApifacebookService } from './apifacebook.service';

describe('ApifacebookService', () => {
  let service: ApifacebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifacebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
