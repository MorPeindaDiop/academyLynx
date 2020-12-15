import { TestBed } from '@angular/core/testing';

import { InformazioniGuard } from './informazioni.guard';

describe('InformazioniGuard', () => {
  let guard: InformazioniGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InformazioniGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
