import { TestBed } from '@angular/core/testing';

import { ConfermaDatiService } from './conferma-dati.service';

describe('ConfermaDatiService', () => {
  let service: ConfermaDatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfermaDatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
