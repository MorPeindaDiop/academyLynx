import { TestBed } from '@angular/core/testing';

import { RisultatoService } from './risultato.service';

describe('RisultatoService', () => {
  let service: RisultatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisultatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
