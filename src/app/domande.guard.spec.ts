import { TestBed } from '@angular/core/testing';

import { DomandeGuard } from './domande.guard';

describe('DomandeGuard', () => {
  let guard: DomandeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DomandeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
