import { TestBed } from '@angular/core/testing';

import { AutoridadesService } from './autoridades.service';

describe('AutoridadesService', () => {
  let service: AutoridadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoridadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
