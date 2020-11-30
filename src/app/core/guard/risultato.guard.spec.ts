import { TestBed } from '@angular/core/testing';

import { RisultatoGuard } from './risultato.guard';

describe('RisultatoGuard', () => {
  let guard: RisultatoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RisultatoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
