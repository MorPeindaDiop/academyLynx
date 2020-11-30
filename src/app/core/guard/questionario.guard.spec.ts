import { TestBed } from '@angular/core/testing';

import { QuestionarioGuard } from './questionario.guard';

describe('QuestionarioGuard', () => {
  let guard: QuestionarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuestionarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
