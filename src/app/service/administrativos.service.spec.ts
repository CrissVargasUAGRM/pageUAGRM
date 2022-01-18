import { TestBed } from '@angular/core/testing';

import { AdministrativosService } from './administrativos.service';

describe('AdministrativosService', () => {
  let service: AdministrativosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
